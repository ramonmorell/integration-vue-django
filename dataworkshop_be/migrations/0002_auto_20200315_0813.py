# Generated by Django 3.0.4 on 2020-03-15 07:13

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('dataworkshop_be', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='projects',
            old_name='autor',
            new_name='author',
        ),
    ]
