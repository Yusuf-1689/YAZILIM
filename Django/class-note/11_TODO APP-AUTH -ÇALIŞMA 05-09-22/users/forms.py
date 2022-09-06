from django import forms
from .models import UserProfile
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm

class UserProfileForm(forms.ModelForm):
    class Meta:
        model = UserProfile
        fields = ('profile_pic','bio')
        # exclude= ('user',)
 #exclude dememizin sebebi biz oluşturduğumuz kullanıcının userProfileini oluşturmak iistiyoruz
#bunu yaptığımız içinde views kısmında register olan kullanıcıyıya userprofile ı kaydettik 
#eğer fieldsları all olark tanımlasaydık kayıtlı olan kullanıcılardan seçim yaptıracaktık

class UserForm(UserCreationForm):
    class Meta:
        model = User
        fields = ('username', 'email')