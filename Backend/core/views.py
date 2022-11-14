from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.views import APIView
from .models import *
from rest_framework.response import Response
from .serializer import *

# Create your views here.


from django.shortcuts import render
from rest_framework import generics
import io, csv, pandas as pd
from rest_framework.response import Response


# remember to import the File model
# remember to import the FileUploadSerializer and SaveFileSerializer
class UploadFileView(generics.CreateAPIView):
    serializer_class = FileUploadSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        file = serializer.validated_data['file']
        reader = pd.read_csv(file)
        for _, row in reader.iterrows():
            new_file = File(
                pid=row["id"],
                Name=row["Name"],
                Position=row["Position"],
                Tm=row["Tm"],
                Age=row["Age"],
                Height_cm=row["Height_cm"],
                Weight=row["Weight"],
                PTS=row["PTS"],
                Salary=row["Salary"],
                AST=row["AST"],
                three_P_perc=row["three_P_perc"],
                TS_perc=row["TS_perc"],
                TOV=row["TOV"],
                TRB=row["TRB"]
            )
            new_file.save()
        return Response({"status": "success"},
                        status.HTTP_201_CREATED)



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
