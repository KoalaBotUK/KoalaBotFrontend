# from django.contrib import admin
from django.urls import path
from frontend import views

urlpatterns = [
    path('', views.homepage),
    path('settings/', views.settings),
    path('verify/', views.verify),
    path('twitch/', views.twitch),
    path('socialalert/', views.socialAlert),
    path('cogs/', views.cogs)
]
