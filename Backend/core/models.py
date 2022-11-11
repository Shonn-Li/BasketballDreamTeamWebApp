from django.db import models


# Create your models here.
class React(models.Model):
    name = models.CharField(max_length=30)
    detail = models.CharField(max_length=30)


class PlayerInfo(models.Model):
    pid = models.CharField(max_length=150, primary_key=True)
    Name = models.CharField(max_length=150)
    Position = models.CharField(max_length=150)
    Tm = models.CharField(max_length=150)
    Age = models.IntegerField()
    Height_cm = models.IntegerField()
    Weight = models.IntegerField()
    PTS = models.DecimalField(max_digits=10, decimal_places=2)
    Salary = models.IntegerField()
    ATS = models.DecimalField(max_digits=10, decimal_places=2)
    three_P_perc = models.DecimalField(max_digits=10, decimal_places=2)
    TS_perc = models.DecimalField(max_digits=10, decimal_places=2)
    TOV = models.DecimalField(max_digits=10, decimal_places=2)
    TRB = models.DecimalField(max_digits=10, decimal_places=2)


class User(models.Model):
    user_id = models.CharField(max_length=150, primary_key=True)
    username = models.CharField(max_length=150)
    password = models.CharField(max_length=150)


class FavouritePlayer(models.Model):
    class Meta:
        unique_together = (('user_id', 'pid'),)
    user_id = ForeignKey('User', on_delete=models.CASCADE, primary_key=True)
    pid = ForeignKey('PlayerInfo', on_delete=models.CASCADE)
