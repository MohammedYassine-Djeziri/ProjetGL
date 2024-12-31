from django.urls import path, include
from .views import (InstructorViewSet, StudentViewSet , HomeCourseViewSet , CourseViewSet ,
                    CourseContentViewSet , QuizViewSet , QuizQuestionViewSet , ForumPostViewSet
                    , ForumPostCommentViewSet  , CreateCheckoutSessionForPaymentView   
                    , StripeWebhookView , StudentCourseContentViewSet , StudentCourseViewSet,
                    StudentQuizViewSet , StudentQuizQuestionViewSet , HomeCourseContentViewSet
                    , CreateCheckoutSessionForSubscriptionView  , EnrollmentViewSet) 
from rest_framework_nested import routers
from pprint import pprint
from django.conf import settings
from django.conf.urls.static import static


router = routers.DefaultRouter()
router.register('instructors', InstructorViewSet)
router.register('students', StudentViewSet)
router.register('courses', HomeCourseViewSet)
router.register('enrollment', EnrollmentViewSet)


course_router_content = routers.NestedDefaultRouter(router , 'courses' , lookup = 'course')
course_router_content.register('contents' , HomeCourseContentViewSet  , basename = 'course-contents')

course_router_post = routers.NestedDefaultRouter(router , 'courses' , lookup = 'course')
course_router_post.register('posts' , ForumPostViewSet  , basename = 'course-posts')

post_router = routers.NestedDefaultRouter(course_router_post , 'posts' , lookup = 'post')
post_router.register('comments' , ForumPostCommentViewSet  , basename = 'post-comments')

instructor_router = routers.NestedDefaultRouter(router , 'instructors' , lookup = 'instructor')
instructor_router.register('courses' , CourseViewSet  , basename = 'instructor-courses')

course_router = routers.NestedDefaultRouter(instructor_router, 'courses', lookup='course')
course_router.register('contents', CourseContentViewSet, basename='course-contents')

Quiz_router = routers.NestedDefaultRouter(course_router, 'contents', lookup='course_content')
Quiz_router.register('quiz', QuizViewSet, basename='course-quizzes')

Quiz_questions_router = routers.NestedDefaultRouter(Quiz_router, 'quiz', lookup='quiz')
Quiz_questions_router.register('questions', QuizQuestionViewSet, basename='quiz-questions')

student_router = routers.NestedDefaultRouter(router , 'students' , lookup = 'student')
student_router.register('courses' , StudentCourseViewSet  , basename = 'student-courses')

student_course_router = routers.NestedDefaultRouter(student_router, 'courses', lookup='course')
student_course_router.register('contents', StudentCourseContentViewSet, basename='course-contents')

student_Quiz_router = routers.NestedDefaultRouter(student_course_router, 'contents', lookup='course_content')
student_Quiz_router.register('quiz', StudentQuizViewSet, basename='course-quizzes')

student_Quiz_questions_router = routers.NestedDefaultRouter(student_Quiz_router, 'quiz', lookup='quiz')
student_Quiz_questions_router.register('questions', StudentQuizQuestionViewSet, basename='quiz-questions')



urlpatterns = [

    path('', include(router.urls)),
    path('', include(instructor_router.urls)),
    path('', include(course_router_post.urls)),
    path('', include(course_router.urls)),
    path('', include(Quiz_router.urls)),
    path('', include(Quiz_questions_router.urls)),
    path('', include(post_router.urls)),
    path('', include(student_router.urls)),
    path('', include(student_course_router.urls)),
    path('', include(student_Quiz_router.urls)),
    path('', include(student_Quiz_questions_router.urls)),
    path('', include(course_router_content.urls)),

    path('students/courses/', 
         StudentViewSet.courses, 
         name='student_courses'),
    path('courses/<int:course_pk>/create_checkout_session/', 
         CreateCheckoutSessionForPaymentView.as_view(), 
         name='create_checkout_session'),
    
    path('students/<int:student_pk>/subscribe/create_checkout_session/', 
         CreateCheckoutSessionForSubscriptionView.as_view(), 
         name='sub_create_checkout_session'),
]
