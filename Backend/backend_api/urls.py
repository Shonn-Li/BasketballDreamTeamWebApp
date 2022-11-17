from django.urls import path
from .views import PlayerList, PlayerDetails

appname = 'backend_api'

urlpatterns = [
    path('', PlayerList.as_view(), name='listcreate'),
    path('<int:pk>/', PlayerDetails.as_view(), name='detailscreate')
]