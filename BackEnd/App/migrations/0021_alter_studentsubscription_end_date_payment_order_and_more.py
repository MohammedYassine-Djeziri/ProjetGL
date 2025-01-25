# Generated by Django 5.1.4 on 2024-12-14 23:07

import datetime
import django.core.validators
import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('App', '0020_alter_studentsubscription_end_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='studentsubscription',
            name='end_date',
            field=models.DateTimeField(default=datetime.datetime(2025, 6, 12, 23, 7, 9, 495142, tzinfo=datetime.timezone.utc)),
        ),
        migrations.CreateModel(
            name='Payment_Order',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('course', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='course_payment_orders', to='App.course')),
                ('student', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='payments', to='App.student')),
            ],
        ),
        migrations.AlterField(
            model_name='enrollment',
            name='payment',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='enrollment_pay', to='App.payment_order'),
        ),
        migrations.CreateModel(
            name='StripePayment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('stripe_charge_id', models.CharField(max_length=100)),
                ('paid_amount', models.DecimalField(decimal_places=2, max_digits=10, validators=[django.core.validators.MinValueValidator(0)])),
                ('course_price', models.DecimalField(decimal_places=2, max_digits=10, null=True, validators=[django.core.validators.MinValueValidator(0)])),
                ('timestamp', models.DateTimeField(auto_now_add=True)),
                ('payment_order', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='App.payment_order')),
                ('student', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='stripe_payments', to='App.student')),
            ],
        ),
        migrations.DeleteModel(
            name='Payment',
        ),
    ]
