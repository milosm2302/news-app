from django.urls import path
from .views import me, register_user
urlpatterns = [
    path('me/', me, name='me'),
    path('users/', register_user, name='register_user')
]