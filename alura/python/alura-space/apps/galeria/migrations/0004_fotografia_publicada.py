# Generated by Django 5.1.4 on 2025-01-19 15:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('galeria', '0003_rename_catedoria_fotografia_categoria'),
    ]

    operations = [
        migrations.AddField(
            model_name='fotografia',
            name='publicada',
            field=models.BooleanField(default=False),
        ),
    ]
