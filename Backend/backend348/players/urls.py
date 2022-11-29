from django.urls import path
from .views import PlayerList, PlayerDetails, PlayerSearch, PlayerSearchHeight

appname = 'players'

urlpatterns = [
    path('', PlayerList.as_view(), name='listcreate'),
    path('<int:pk>/', PlayerDetails.as_view(), name='detailscreate'),
    path('search/', PlayerSearch.as_view(), name='searchplayers'),
    path('height/', PlayerSearchHeight.as_view(), name="heightorder")
]