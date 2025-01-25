from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Quiz
from .serializers import QuizSerializer

@api_view(['GET'])
def quiz_view(request, instructor_pk, course_pk, content_pk):
    quizzes = Quiz.objects.filter(content__id=content_pk, content__course__id=course_pk, content__course__instructor__id=instructor_pk)
    serializer = QuizSerializer(quizzes, many=True)
    return Response(serializer.data)
