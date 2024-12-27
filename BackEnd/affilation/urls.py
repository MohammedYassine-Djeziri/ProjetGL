from django.urls import path
from .views import GenerateReferralCodeView, HandleAffiliateEarningView
urlpatterns = [
    path('generate-referral-code/', GenerateReferralCodeView.as_view(), name='generate-referral-code'),
    path('handle-affiliate-earning/<int:course_id>/', HandleAffiliateEarningView.as_view(), name='handle-affiliate-earning'),
]
