from django.shortcuts import render

from django.http import HttpResponse, JsonResponse, HttpResponseRedirect
from django.shortcuts import render, redirect
from django.template import loader
from django import template

# Create your views here.


def homepage(request):
    template = loader.get_template('home.html')
    return HttpResponse(template.render({}, request))

def settings(request):
    template = loader.get_template('settings.html')
    return HttpResponse(template.render({}, request))

def twitch(request):
    template = loader.get_template('twitch.html')
    return HttpResponse(template.render({}, request))

def verify(request):
    template = loader.get_template('verify.html')
    return HttpResponse(template.render({}, request))
    
