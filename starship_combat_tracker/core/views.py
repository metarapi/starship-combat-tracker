from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def index(request):

    # Examples for the stuff that request passes
    print(request.user)
    print(request.method)

    # return HttpResponse("Welcome to the Starship Combat Tracker!")
    return render(request, "index.html")

def modal(request):
    """
    Example view to demonstrate HTMX modal functionality.
    """
    return render(request, "modal.html")
