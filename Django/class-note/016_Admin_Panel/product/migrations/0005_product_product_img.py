# Generated by Django 4.1.1 on 2022-09-15 17:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("product", "0004_category_alter_product_options_and_more"),
    ]

    operations = [
        migrations.AddField(
            model_name="product",
            name="product_img",
            field=models.ImageField(
                blank=True,
                default="defaults/clarusway.png",
                null=True,
                upload_to="product/",
            ),
        ),
    ]
