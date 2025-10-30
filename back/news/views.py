from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from django.contrib.auth import get_user_model
# Create your views here.


User = get_user_model()

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def me(request):
    return Response({
        "username": request.user.username,
        "role": getattr(request.user, "role", "unknown")
    })

@api_view(['POST'])
@permission_classes([IsAdminUser])
def register_user(request):
 username = request.data.get("username")
 password = request.data.get("password")
 role = request.data.get('role', 'journalist')

 if not username or not password:
    return Response({"error": "username and password are required"}, status=400)
 
 if User.objects.filter(username=username).exists():
    return Response({"error": "already exists"}, status = 400)
 
 user = User.objects.create_user(username=username, password=password, role=role)
 
 if role == 'admin':
  user.is_staff = True
  user.is_superuser = True
  user.save()

 return Response({"username":user.username, "role":user.role})