# Generated by Django 5.1.4 on 2024-12-09 00:18

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('App', '0019_rename_post_forumpostcomment_post_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='studentsubscription',
            name='end_date',
            field=models.DateTimeField(default=datetime.datetime(2025, 6, 7, 0, 18, 54, 184331, tzinfo=datetime.timezone.utc)),
        ),
    ]
