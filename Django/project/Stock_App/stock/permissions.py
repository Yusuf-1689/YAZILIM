from rest_framework.permissions import DjangoModelPermissions


class CustomModelPermission(DjangoModelPermissions):
    perms_map = {
       
    }