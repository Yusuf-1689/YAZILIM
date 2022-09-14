from django.contrib import admin

# Register your models here.
from .models import Product
# readonly_fields = ("create_date",)

class ProductAdmin(admin.ModelAdmin):
    list_display = ("name", "create_date", "is_in_stock", "update_date")
    list_editable = ( "is_in_stock",)


admin.site.register(Product,ProductAdmin)

admin.site.site_title = "Clarusway Title"
admin.site.site_header = "Clarusway Admin Portal"  
admin.site.index_title = "Welcome to Clarusway Admin Portal"