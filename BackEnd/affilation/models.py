from django.db import models
from django.contrib.auth import get_user_model
from django.core.validators import MinValueValidator, MaxValueValidator
from django.utils import timezone

User = get_user_model()

class AffiliateProgram(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='affiliate_program')
    referral_code = models.CharField(max_length=50, unique=True)
    commission_rate = models.DecimalField(max_digits=5, decimal_places=2, validators=[MinValueValidator(0), MaxValueValidator(100)], default=30.00)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Affiliate Program - {self.user.username}"

class AffiliateEarning(models.Model):
    affiliate_program = models.ForeignKey(AffiliateProgram, on_delete=models.CASCADE, related_name='earnings')
    referred_user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, related_name='affiliate_earnings')
    amount = models.DecimalField(max_digits=10, decimal_places=2, validators=[MinValueValidator(0)])
    earned_date = models.DateTimeField(auto_now_add=True)
    is_paid = models.BooleanField(default=False)

    def __str__(self):
        return f"Affiliate Earning - {self.amount}"
