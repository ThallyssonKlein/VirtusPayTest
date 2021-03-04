FROM python:3.7
WORKDIR /usr/src/app
COPY ./backendProject .
EXPOSE 8000
ARG DJANGO_SUPERUSER_PASSWORD=password
ARG DJANGO_SUPERUSER_EMAIL=example@example.com
ARG DJANGO_SUPERUSER_USERNAME=example
RUN pip install pipenv
RUN pipenv install --skip-lock
RUN pipenv run python manage.py makemigrations
RUN pipenv run python manage.py makemigrations core
RUN pipenv run python manage.py migrate
RUN pipenv run python manage.py migrate core
RUN pipenv run python manage.py createsuperuser --noinput
CMD pipenv run python manage.py runserver 0.0.0.0:8000