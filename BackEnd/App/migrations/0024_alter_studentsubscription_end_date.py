# Generated by Django 5.1.4 on 2024-12-17 22:13

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('App', '0023_student_biography_alter_studentsubscription_end_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='studentsubscription',
            name='end_date',
            field=models.DateTimeField(default=datetime.datetime(2025, 6, 15, 22, 13, 14, 83828, tzinfo=datetime.timezone.utc)),
        ),
    ]
