from drf_spectacular.utils import extend_schema, extend_schema_view
from django.utils.crypto import get_random_string
from django.contrib.auth.mixins import LoginRequiredMixin
from django.shortcuts import get_object_or_404
from django.http import JsonResponse
from django.views import View
from App.models import Course, Enrollment, Payment_Order
from .models import AffiliateProgram, AffiliateEarning
from django.contrib.auth import get_user_model
from drf_spectacular.openapi import AutoSchema

User = get_user_model()

@extend_schema_view(
    get=extend_schema(
        summary="Generate Referral Code",
        description="Generates a referral code for the logged-in user if they don't already have one.",
        responses={200: 'application/json'},
    )
)
class GenerateReferralCodeView(LoginRequiredMixin, View):
    schema = AutoSchema()  # Add this line
    def get(self, request):
        user = request.user
        if not AffiliateProgram.objects.filter(user=user).exists():
            referral_code = get_random_string(8)
            AffiliateProgram.objects.create(user=user, referral_code=referral_code)
        return JsonResponse({'referral_code': user.affiliate_program.referral_code})

@extend_schema_view(
    get=extend_schema(
        summary="Handle Affiliate Earning",
        description="Handles the affiliate earning for a given course and referral code.",
        parameters=[
            {
                'name': 'referral_code',
                'in': 'query',
                'required': True,
                'schema': {'type': 'string'},
                'description': 'Referral code used for the affiliate program'
            }
        ],
        responses={200: 'application/json'},
    )
)
class HandleAffiliateEarningView(LoginRequiredMixin, View):
    schema = AutoSchema()  # Add this line
    def get(self, request, course_id):
        referral_code = request.GET.get('referral_code')
        course = get_object_or_404(Course, id=course_id)
        affiliate_program = get_object_or_404(AffiliateProgram, referral_code=referral_code)
        student = get_object_or_404(User, id=request.user.id)
        payment_order = Payment_Order.objects.create(student=student, course=course)
        Enrollment.objects.create(student=student, course=course, payment=payment_order)
        earning_amount = course.price * (affiliate_program.commission_rate / 100)
        AffiliateEarning.objects.create(affiliate_program=affiliate_program, referred_user=student, amount=earning_amount)
        return JsonResponse({'message': 'Affiliate earning recorded successfully'})