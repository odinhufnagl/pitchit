# Generated by Django 3.1.5 on 2021-04-06 10:12

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('post', '0006_post_date_created'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='post',
            name='date_created',
        ),
    ]
