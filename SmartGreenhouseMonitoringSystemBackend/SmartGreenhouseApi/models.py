from django.db import models

# Create your models here.
class User(models.Model):
    uid = models.AutoField(primary_key=True)
    email = models.CharField(unique=True, max_length=200)
    password = models.TextField(blank=True, null=True)
    name = models.TextField()
    type = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'user'