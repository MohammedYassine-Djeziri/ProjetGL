# Generated by Django 5.1.4 on 2024-12-06 20:10

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('App', '0013_remove_quiz_correct_answer_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='studentsubscription',
            name='end_date',
            field=models.DateTimeField(default=datetime.datetime(2025, 6, 4, 20, 10, 22, 245457, tzinfo=datetime.timezone.utc)),
        ),
    ]
