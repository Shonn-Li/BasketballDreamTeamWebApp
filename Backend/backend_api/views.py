from rest_framework import generics
from rest_framework.views import APIView
from .models import PlayerInfo
from rest_framework import viewsets, filters
from rest_framework.response import Response
from .serializer import PlayerInfoSerializer
from django.db.models import Q


class PlayerList(generics.ListCreateAPIView):
    queryset = PlayerInfo.objects.all()
    serializer_class = PlayerInfoSerializer

class PlayerDetails(generics.RetrieveDestroyAPIView):
    queryset = PlayerInfo.objects.all()
    serializer_class = PlayerInfoSerializer

class PlayerSearch(generics.ListAPIView):
    queryset = PlayerInfo.objects.all()
    serializer_class = PlayerInfoSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['^Name']


class PlayerSearchHeight(generics.ListAPIView):
    queryset = PlayerInfo.objects.all().order_by('Height_cm')
    serializer_class = PlayerInfoSerializer


