from rest_framework import serializers
from .models import Contact, Address

class AddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Address
        fields = ['cep', 'address', 'contact']

class ContactSerializer(serializers.ModelSerializer):
    addresses = AddressSerializer(many=True)

    class Meta:
        model = Contact
        fields = ['id', 'name', 'phone', 'email', 'createdAt', 'addresses']