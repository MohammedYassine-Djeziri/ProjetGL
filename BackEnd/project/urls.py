from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('DzSkills/', include('courses.urls')),  # Inclure les URLs de l'application "courses"
]
