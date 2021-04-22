# Generated by Django 3.1.5 on 2021-02-07 11:47

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('profile', '0003_remove_profile_comment_created_by'),
        ('postcomments', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='postcomments',
            name='created_by',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='created_by', to='profile.profile'),
            preserve_default=False,
        ),
    ]