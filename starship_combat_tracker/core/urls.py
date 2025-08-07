from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),    # localhost:8000/core/
    path('modal/', views.modal, name='modal'),  # localhost:8000/core/modal/
]