from django.db import models
from phone_field import PhoneField
from django.contrib import admin

# Create your models here.
class Contact(models.Model):
    name = models.CharField(max_length=50, blank=False, null=False)
    phone = PhoneField(blank=False, null=False)
    createdAt = models.DateTimeField(auto_now_add=True)
    email = models.EmailField(max_length=254)

class Address(models.Model):
    address = models.CharField(max_length=254)
    cep = models.IntegerField(max_length=8)
    contact = models.ForeignKey(Contact, on_delete=models.CASCADE)

admin.site.register(Contact)
admin.site.register(Address)