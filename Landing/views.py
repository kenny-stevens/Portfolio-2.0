from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def index(request):

    # This dictionary includes all the sections of my HTML
    landing_dict = {'landing_test':"This is my inserted landing code"}
    return render(request,"Landing/index.html", context = landing_dict)
