from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('novedades/', views.novedades, name='novedades'),
    path('productos/', views.productos, name='productos'),
    path('galeria/', views.galeria, name='galeria'),
    path('contacto/', views.contacto, name='contacto'),
    path('carrito/', views.carrito, name='carrito'),
]
