# Generated by Django 5.1.3 on 2024-12-05 18:03

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('App', '0003_alter_course_duration_hours_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='studentsubscription',
            name='end_date',
            field=models.DateTimeField(default=datetime.datetime(2025, 6, 3, 18, 3, 52, 351440, tzinfo=datetime.timezone.utc)),
        ),
    ]
