# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class Crops(models.Model):
    cid = models.AutoField(primary_key=True)
    cname = models.CharField(max_length=50)
    ctype = models.IntegerField()
    other_type = models.TextField(blank=True, null=True)
    humidity_high = models.FloatField()
    humidity_low = models.FloatField()
    temp_high = models.FloatField()
    temp_low = models.FloatField()
    light_intensity_high = models.IntegerField()
    light_intensity_low = models.FloatField()
    soil_ph_high = models.FloatField()
    soil_ph_low = models.FloatField()
    air_quality_high = models.FloatField()
    air_quality_low = models.FloatField()
    updated_at = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'crops'


class CropsLog(models.Model):
    cid = models.IntegerField()
    cname = models.CharField(max_length=50)
    ctype = models.IntegerField()
    other_type = models.TextField(blank=True, null=True)
    humidity_high = models.FloatField()
    humidity_low = models.FloatField()
    temp_high = models.FloatField()
    temp_low = models.FloatField()
    light_intensity_high = models.IntegerField()
    light_intensity_low = models.FloatField()
    soil_ph_high = models.FloatField()
    soil_ph_low = models.FloatField()
    air_quality_high = models.FloatField()
    air_quality_low = models.FloatField()
    updated_at = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'crops_log'
        unique_together = (('cid', 'updated_at'),)


class Irrigation(models.Model):
    ucp = models.OneToOneField('UserCropProductMapping', models.DO_NOTHING)
    date = models.DateField()
    details = models.TextField()
    updated_at = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'irrigation'


class IrrigationLog(models.Model):
    log_id = models.AutoField(primary_key=True)
    ucp = models.ForeignKey('UserCropProductMapping', models.DO_NOTHING)
    date = models.DateField()
    details = models.TextField()
    updated_at = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'irrigation_log'


class LogEveryHour(models.Model):
    ucp = models.ForeignKey('UserCropProductMapping', models.DO_NOTHING)
    date = models.DateField()
    details = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'log_every_hour'


class Products(models.Model):
    pid = models.AutoField(primary_key=True)
    rpi_number = models.CharField(max_length=100)
    sensors = models.TextField()

    class Meta:
        managed = False
        db_table = 'products'


class User(models.Model):
    uid = models.AutoField(primary_key=True)
    email = models.CharField(unique=True, max_length=200)
    password = models.TextField(blank=True, null=True)
    name = models.TextField()
    type = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'user'


class UserCropProductMapping(models.Model):
    uid = models.ForeignKey(User, models.DO_NOTHING, db_column='uid')
    cid = models.ForeignKey(Crops, models.DO_NOTHING, db_column='cid')
    pid = models.ForeignKey(Products, models.DO_NOTHING, db_column='pid')
    default_irrigation = models.TextField()

    class Meta:
        managed = False
        db_table = 'user_crop_product_mapping'
        unique_together = (('uid', 'cid', 'pid'),)
