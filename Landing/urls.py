from django.urls import path
from Landing import views

urlpatterns = [
    path('', views.index, name='index')
]
