from django.urls import path
from . import views

urlpatterns = [
    path('inventory/', views.inventory, name='inventory'),
    path('sales/', views.sales, name='sales'),
    path('sales/predictor',views.predict_sales,name='predictor'),
    path('',views.Dashboard,name='dashboard')
]
