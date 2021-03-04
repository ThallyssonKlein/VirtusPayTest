from django.shortcuts import render

from rest_framework import viewsets
from .serializers import ContactSerializer, AddressSerializer
from .models import Contact, Address
# Create your views here.

class ContactViewSet(viewsets.ModelViewSet):

    queryset = Contact.objects.all()
    serializer_class = ContactSerializer

class AddressViewSet(viewsets.ModelViewSet):

    queryset = Address.objects.all()
    serializer_class = AddressSerializer
