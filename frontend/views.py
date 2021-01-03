from django.http import HttpResponse
from django.template import loader

# Create your views here.

def homepage(request):
    loadTemplate = loader.get_template('home.html')
    return HttpResponse(loadTemplate.render({}, request))

def settings(request):
    loadTemplate = loader.get_template('settings.html')
    return HttpResponse(loadTemplate.render({}, request))

def twitch(request):
    loadTemplate = loader.get_template('twitch.html')
    return HttpResponse(loadTemplate.render({}, request))

def verify(request):
    loadTemplate = loader.get_template('verify.html')
    return HttpResponse(loadTemplate.render({}, request))
    
