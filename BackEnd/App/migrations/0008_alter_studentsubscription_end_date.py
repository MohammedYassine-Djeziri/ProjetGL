# Generated by Django 5.1.4 on 2024-12-06 17:37

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('App', '0007_rename_last_wached_content_studentprogress_last_watched_content_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='studentsubscription',
            name='end_date',
            field=models.DateTimeField(default=datetime.datetime(2025, 6, 4, 17, 37, 34, 442303, tzinfo=datetime.timezone.utc)),
        ),
    ]
