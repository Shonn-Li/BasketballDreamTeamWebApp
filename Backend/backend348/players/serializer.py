from rest_framework import serializers
from .models import PlayerInfo


class PlayerInfoSerializer(serializers.ModelSerializer):
	class Meta:
		model = PlayerInfo
		fields = \
			['pid', 'Name', 'Position', 'Tm', 'Age', 'Height_cm', 'Weight', 'PTS',
				'Salary', 'AST', 'three_P_perc', 'TS_perc', 'TOV', 'TRB']
