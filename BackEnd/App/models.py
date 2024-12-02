from django.db import models
from django.contrib.auth.models import AbstractUser
from django.core.validators import MinValueValidator, MaxValueValidator
from django.utils.translation import gettext_lazy as _
from django.utils import timezone
from datetime import timedelta




class User(AbstractUser):

   email = models.EmailField(unique=True)
    
   def __str__(self):
        return self.username

class Instructor(models.Model):
    """Instructor profile model"""
    user = models.OneToOneField(
        User, 
        on_delete=models.CASCADE, 
        related_name='instructor_profile'
    )
    biography = models.TextField(blank=True, null=True)
    bank_Account = models.TextField(null=True, blank=True)
    
    def __str__(self):
        return f"{self.user.first_name} {self.user.last_name}'s Instructor Profile"

class Student(models.Model):
    """Student profile model"""
    user = models.OneToOneField(
        User, 
        on_delete=models.CASCADE, 
        related_name='student_profile'
    )
    
    def __str__(self):
        return f"{self.user.first_name} {self.user.last_name}'s Student Profile"

class Course(models.Model):
      
    instructor = models.ForeignKey(
        Instructor, 
        on_delete=models.CASCADE, 
        related_name='courses'
    )


    title = models.CharField(max_length=200)
    description = models.TextField()
    price = models.DecimalField(
        max_digits=10, 
        decimal_places=2, 
        validators=[MinValueValidator(0)]
    )


    thumbnail = models.ImageField(
        upload_to='course_thumbnails/', 
        null=True, 
        blank=True
    )

    

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    duration_hours = models.IntegerField(
        validators=[MinValueValidator(0)]
    )
    language = models.CharField(max_length=50)
    
    def __str__(self):
        return self.title

class CourseContent(models.Model):
    """Individual content units within a course"""
    CONTENT_TYPES = (
        ('video', 'Video'),
        ('text', 'Text'),
        ('quiz', 'Quiz'),
        ('assignment', 'Assignment'),
    )
    
    course = models.ForeignKey(
        Course, 
        on_delete=models.CASCADE, 
        related_name='contents'
    )
    title = models.CharField(max_length=200)
    content_type = models.CharField(
        max_length=20, 
        choices=CONTENT_TYPES
    )
    content_data_file = models.FileField(upload_to='course_contents/')
    uploded_at = models.DateTimeField(auto_now=True)
    duration_minutes = models.IntegerField(
        validators=[MinValueValidator(0)]
    )
    is_free_preview = models.BooleanField(default=False)
    
    class Meta:
        ordering = ['uploded_at']
    
    def __str__(self):
        return f"{self.course.title} - {self.title}"

class Quiz(models.Model):
    """Quiz model associated with courses"""
    course = models.ForeignKey(
        Course, 
        on_delete=models.CASCADE, 
        related_name='quizzes'
    )
    title = models.CharField(max_length=200)

    def __str__(self):
        return f"Quiz: {self.title}"
    question_text = models.TextField()
    possible_answers = models.JSONField()
    correct_answer = models.CharField(max_length=500)
    
    def __str__(self):
        return self.question_text[:50]


class StudentProgress(models.Model):
    """Tracks student progress in a course"""
    student = models.ForeignKey(
        Student, 
        on_delete=models.CASCADE, 
        related_name='course_progresses'
    )
    course = models.ForeignKey(
        Course, 
        on_delete=models.CASCADE, 
        related_name='student_progresses'
    )

    last_wached_content =  models.ForeignKey(
        'CourseContent', 
        on_delete=models.CASCADE, 
        related_name='course_content_progresses'
    )

    completion_percentage = models.FloatField(
        validators=[
            MinValueValidator(0.0), 
            MaxValueValidator(100.0)
        ],
        default=0.0
    )

    

    class Meta:
        unique_together = ['student', 'course']
        verbose_name_plural = 'Student Progresses'
    
    def __str__(self):
        return f"{self.student.user.username} - {self.course.title} Progress"

class Certificate(models.Model):
    """Certificates issued to students upon course completion"""
    student = models.ForeignKey(
        Student, 
        on_delete=models.CASCADE, 
        related_name='certificates'
    )
    course = models.ForeignKey(
        Course, 
        on_delete=models.CASCADE, 
        related_name='issued_certificates'
    )
    certificate_number = models.CharField(
        max_length=50, 
        unique=True
    )
    issue_date = models.DateTimeField(auto_now_add=True)
    certifications_image = models.ImageField(
        upload_to='Certifications/', 
        null=True, 
        blank=True
    )
    Student.__str__
    def __str__(self):
        return f"Certificate for {self.student.__str__} - {self.course.title}"

class ForumTopic(models.Model):
    """Discussion topics within a course"""
    course = models.ForeignKey(
        Course, 
        on_delete=models.CASCADE, 
        related_name='forum_topics'
    )
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    # is_pinned = models.BooleanField(default=False)
    
    def __str__(self):
        return self.title

class ForumPost(models.Model):
    """Individual posts within a forum topic"""
    topic = models.ForeignKey(
        ForumTopic, 
        on_delete=models.CASCADE, 
        related_name='posts'
    )
    user = models.ForeignKey(
        User, 
        on_delete=models.CASCADE, 
        related_name='forum_posts'
    )
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    # is_solution = models.BooleanField(default=False)
    
    def __str__(self):
        return f"Post by {self.user.username} in {self.topic.title}"
    

class ForumPostComment(models.Model):
    """Individual posts within a forum topic"""
    Post = models.ForeignKey(
        ForumPost, 
        on_delete=models.CASCADE, 
        related_name='post_comment'
    )
    user = models.ForeignKey(
        User, 
        on_delete=models.CASCADE, 
        related_name='forum_post_comments'
    )
    comment = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    # is_solution = models.BooleanField(default=False)
    
    def __str__(self):
        return f"post about: {self.Post.topic} comment: {self.comment} by: {self.user.__str__} "

# class Subscription(models.Model):
#     """Subscription plans for the platform"""
#     PLAN_DURATIONS = (
#         (1, '1 Month'),
#         (3, '3 Months'),
#         (6, '6 Months'),
#         (12, '12 Months'),
#     )
    
#     plan_name = models.CharField(max_length=100)
#     price = models.DecimalField(
#         max_digits=10, 
#         decimal_places=2, 
#         validators=[MinValueValidator(0)]
#     )
#     duration_months = models.IntegerField(
#         choices=PLAN_DURATIONS
#     )
#     features = models.JSONField()
#     is_active = models.BooleanField(default=True)
    
#     def __str__(self):
#         return f"{self.plan_name} ({self.duration_months} months)"

class StudentSubscription(models.Model):
    """Subscriptions purchased by students"""
    student = models.ForeignKey(
        Student, 
        on_delete=models.CASCADE, 
        related_name='subscriptions'
    )

    start_date = models.DateTimeField(auto_now_add=True)
    end_date = models.DateTimeField(default=   ( timezone.now() + timedelta(days=180) )     )
    
    def __str__(self):
        return f"{self.student.__str__} - in sub"

class Payment(models.Model):
    """Payment transactions"""
    PAYMENT_TYPES = (
        ('course', 'Course Purchase'),
        ('Inrollement', 'Inrollement'),
    )
    
    user = models.ForeignKey(
        'User', 
        on_delete=models.CASCADE, 
        related_name='payments'
    )

    paid_amount = models.DecimalField(
        max_digits=10, 
        decimal_places=2, 
        validators=[MinValueValidator(0)]
    )

    course_price= models.DecimalField(
        max_digits=10, 
        decimal_places=2, 
        validators=[MinValueValidator(0)],
        null=True
    )


    payment_type = models.CharField(
        max_length=20, 
        choices=PAYMENT_TYPES
    )


    transaction_id = models.CharField(
        max_length=100, 
        unique=True
    )

    payment_date = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"Payment {self.transaction_id} - {self.status}"
    


class Enrollment(models.Model):
    student = models.ForeignKey(User, on_delete=models.CASCADE, related_name='course_enrollments')
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='student_enrollments')
    payment = models.OneToOneField(Payment, on_delete=models.CASCADE, related_name='enrollment_pay')
    enrolled_at = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return f"Payment {self.student.__str__} - {self.course.title}"




class AffiliateProgram(models.Model):
    """Affiliate program for instructors"""
    instructor = models.ForeignKey(
        'Instructor', 
        on_delete=models.CASCADE, 
        related_name='affiliate_programs'
    )
    referral_code = models.CharField(
        max_length=50, 
        unique=True
    )
    commission_rate = models.DecimalField(
        max_digits=5, 
        decimal_places=2, 
        validators=[
            MinValueValidator(0), 
            MaxValueValidator(100)
        ]
    )
    joined_date = models.DateTimeField(auto_now_add=True)
    is_active = models.BooleanField(default=True)
    
    def __str__(self):
        return f"Affiliate Program - {self.instructor.user.username}"

class AffiliateEarning(models.Model):
    """Earnings generated through affiliate programs"""
    affiliate_program = models.ForeignKey(
        'AffiliateProgram', 
        on_delete=models.CASCADE, 
        related_name='earnings'
    )
    referred_user = models.ForeignKey(
        'User', 
        on_delete=models.SET_NULL, 
        null=True
    )
    amount = models.DecimalField(
        max_digits=10, 
        decimal_places=2, 
        validators=[MinValueValidator(0)]
    )
    earned_date = models.DateTimeField(auto_now_add=True)
    is_paid = models.BooleanField(default=False)
    
    def __str__(self):
        return f"Affiliate Earning - {self.amount}"