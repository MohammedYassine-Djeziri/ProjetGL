from django.urls import path
from . import views

urlpatterns = [
    path('instructors/<int:instructor_pk>/courses/<int:course_pk>/contents/<int:content_pk>/quiz/', 
         views.quiz_view, 
         name='quiz_view'),
]
