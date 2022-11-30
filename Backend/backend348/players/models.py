from django.db import models


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

    def __int__(self):
        return self.pid
