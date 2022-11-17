from django.urls import include, path
from rest_framework import routers

from . import views

router = routers.DefaultRouter()
router.register(r'player_info', views.PlayerInfoViewSet)
router.register(r'users', views.UserViewSet)
router.register(r'favourite_players', views.FavouritePlayerViewSet)
# router.register(r'player_search', views.PlayerSearch)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]

