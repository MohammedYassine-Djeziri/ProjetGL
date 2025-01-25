from django.db import models

class Instructor(models.Model):
    name = models.CharField(max_length=100)

class Course(models.Model):
    title = models.CharField(max_length=100)
    instructor = models.ForeignKey(Instructor, on_delete=models.CASCADE)

class Content(models.Model):
    name = models.CharField(max_length=100)
    course = models.ForeignKey(Course, on_delete=models.CASCADE)

class Quiz(models.Model):
    title = models.CharField(max_length=100)
    content = models.ForeignKey(Content, on_delete=models.CASCADE)
