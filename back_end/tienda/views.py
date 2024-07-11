from django.shortcuts import render
from .models import Producto

def index(request):
    return render(request, 'index.html')

def novedades(request):
    productos = Producto.objects.all()
    return render(request, 'novedades.html', {'productos': productos})

def productos(request):
    productos = Producto.objects.all()
    return render(request, 'productos.html', {'productos': productos})

def galeria(request):
    return render(request, 'galeria.html')

def contacto(request):
    return render(request, 'contacto.html')

def carrito(request):
    return render(request, 'carrito.html')
