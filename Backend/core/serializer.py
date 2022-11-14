from rest_framework import serializers
from .models import *


class ReactSerializer(serializers.ModelSerializer):
	class Meta:
		model = React
		fields = ['name', 'detail']


class PlayerInfoSerializer(serializers.ModelSerializer):
	class Meta:
		model = PlayerInfo
		fields =\
			['pid', 'Name', 'Position', 'Tm', 'Age', 'Height_cm', 'Weight'
				, 'PTS', 'Salary', 'AST', 'three_P_perc', 'TS_perc', 'TOV', 'TRB']


class UserSerializer(serializers.ModelSerializer):
	class Meta:
		model = User
		fields = ['user_id', 'username', 'password']


class FavouritePlayerSerializer(serializers.ModelSerializer):
	class Meta:
		model = FavouritePlayer
		fields = ['user_id', 'pid']



