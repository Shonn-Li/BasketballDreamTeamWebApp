from django.contrib import admin

from .models import PlayerInfo, FavouritePlayer, User

admin.site.register(PlayerInfo)
admin.site.register(User)
admin.site.register(FavouritePlayer)

# Register your models here.
