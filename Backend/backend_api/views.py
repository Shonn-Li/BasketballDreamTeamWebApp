from rest_framework import generics
from rest_framework.views import APIView
from .models import PlayerInfo
from rest_framework import viewsets, filters
from rest_framework.response import Response
from .serializer import PlayerInfoSerializer


class PlayerList(generics.ListCreateAPIView):
    queryset = PlayerInfo.objects.all()
    serializer_class = PlayerInfoSerializer
    pass

class PlayerDetails(generics.RetrieveDestroyAPIView):
    queryset = PlayerInfo.objects.all()
    serializer_class = PlayerInfoSerializer


