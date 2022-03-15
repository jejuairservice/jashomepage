
from django.contrib import admin
from django.urls import path, include
from . import views  #뷰를 가져와라

urlpatterns = [
    path('index/', views.index),
                   # views에서 index 함수를 가져와라(index 함수 설정)
    path('<str:doc>/', views.doc_detail),

]
