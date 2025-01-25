# Generated by Django 5.1.4 on 2024-12-29 16:08

import django.utils.timezone
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('App', '0042_remove_stripepayment_payment_order_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='affiliateprogram',
            name='instructor',
        ),
        migrations.AddField(
            model_name='user',
            name='referalcode',
            field=models.CharField(blank=True, max_length=10, null=True),
        ),
        migrations.CreateModel(
            name='Affiliation',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(default=django.utils.timezone.now)),
                ('boughted', models.BooleanField(default=False)),
                ('earning', models.FloatField(default=0)),
                ('Course', models.ManyToManyField(related_name='Course', to='App.course')),
                ('refereduser', models.ManyToManyField(related_name='refereduser', to=settings.AUTH_USER_MODEL)),
                ('user', models.ManyToManyField(related_name='user', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.DeleteModel(
            name='AffiliateEarning',
        ),
        migrations.DeleteModel(
            name='AffiliateProgram',
        ),
    ]
