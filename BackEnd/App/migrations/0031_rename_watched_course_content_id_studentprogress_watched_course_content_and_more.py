# Generated by Django 5.1.4 on 2024-12-19 22:31

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('App', '0030_alter_studentsubscription_end_date'),
    ]

    operations = [
        migrations.RenameField(
            model_name='studentprogress',
            old_name='watched_course_content_id',
            new_name='watched_course_content',
        ),
        migrations.RemoveField(
            model_name='studentprogress',
            name='completion_percentage',
        ),
        migrations.AlterField(
            model_name='studentsubscription',
            name='end_date',
            field=models.DateTimeField(default=datetime.datetime(2025, 6, 17, 22, 31, 11, 183182, tzinfo=datetime.timezone.utc)),
        ),
    ]
