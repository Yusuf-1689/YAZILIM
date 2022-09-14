from django.contrib import admin

# Register your models here.
from .models import Product

class ProductAdmin(admin.ModelAdmin):
    # readonly_fields = ("create_date",)
    list_display = ("name", "create_date", "is_in_stock", "update_date")
    list_editable = ( "is_in_stock",)
    list_display_links = ("create_date", "name")
    ordering = ("name",)
    prepopulated_fields = {'slug' : ('name',)}
    list_per_page = 25


admin.site.register(Product,ProductAdmin)

admin.site.site_title = "Clarusway Title"
admin.site.site_header = "Clarusway Admin Portal"  
admin.site.index_title = "Welcome to Clarusway Admin Portal"