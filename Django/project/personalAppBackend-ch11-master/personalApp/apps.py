from django.apps import AppConfig


class PersonalappConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "personalApp"

    def ready(self) -> None:
        import personalApp.signals