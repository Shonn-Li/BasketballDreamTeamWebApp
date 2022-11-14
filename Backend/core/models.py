from django.db import models


# Create your models here.

from django.db import models


class React(models.Model):
    name = models.CharField(max_length=30)
    detail = models.CharField(max_length=30)


class PlayerInfo(models.Model):
    pid = models.IntegerField(primary_key=True)
    Name = models.CharField(max_length=150)
    Position = models.CharField(max_length=150)
    Tm = models.CharField(max_length=150)
    Age = models.IntegerField()
    Height_cm = models.IntegerField()
    Weight = models.IntegerField()
    PTS = models.DecimalField(max_digits=10, decimal_places=3)
    Salary = models.IntegerField()
    AST = models.DecimalField(max_digits=10, decimal_places=3)
    three_P_perc = models.DecimalField(max_digits=10, decimal_places=3)
    TS_perc = models.DecimalField(max_digits=10, decimal_places=3)
    TOV = models.DecimalField(max_digits=10, decimal_places=3)
    TRB = models.DecimalField(max_digits=10, decimal_places=3)

    def __str__(self):
        return self.pid


class User(models.Model):
    user_id = models.CharField(max_length=150, primary_key=True)
    username = models.CharField(max_length=150)
    password = models.CharField(max_length=150)

    def __str__(self):
        return self.user_id


class FavouritePlayer(models.Model):
    class Meta:
        unique_together = (('user_id', 'pid'),)
    user_id = models.ForeignKey('User', on_delete=models.CASCADE, primary_key=True)
    pid = models.ForeignKey('PlayerInfo', on_delete=models.CASCADE)

    def __str__(self):
        return self.user_id
