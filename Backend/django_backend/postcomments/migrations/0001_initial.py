# Generated by Django 3.1.5 on 2021-02-07 10:57

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='PostComments',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('post_id', models.IntegerField()),
                ('content', models.TextField()),
            ],
            options={
                'db_table': 'postcomment',
            },
        ),
    ]
