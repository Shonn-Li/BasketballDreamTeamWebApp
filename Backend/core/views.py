from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.views import APIView
from .models import *
from rest_framework.response import Response
from .serializer import *
from rest_framework import generics
from rest_framework import filters

# Create your views here.


from django.shortcuts import render
from rest_framework import generics
import io, csv, pandas as pd
from rest_framework.response import Response


class PlayerInfoViewSet(viewsets.ModelViewSet):
    queryset = PlayerInfo.objects.all().order_by('pid')
    serializer_class = PlayerInfoSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('user_id')
    serializer_class = UserSerializer


class FavouritePlayerViewSet(viewsets.ModelViewSet):
    queryset = FavouritePlayer.objects.all().order_by('user_id')
    serializer_class = FavouritePlayerSerializer


class ReactView(APIView):

    serializer_class = ReactSerializer

    def get(self, request):
        detail = [{"name": detail.name, "detail": detail.detail}
                  for detail in React.objects.all()]
        return Response(detail)

    def post(self, request):
        serializer = ReactSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)
