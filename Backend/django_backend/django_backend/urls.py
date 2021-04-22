from django.views.generic import TemplateView
from django.views.decorators.csrf import csrf_exempt
from graphene_django.views import GraphQLView
from django.urls import path
from django.contrib import admin


urlpatterns = [

    path('admin/', admin.site.urls),
    # apiclient on client-side will request this adress later
    path("graphql", csrf_exempt(GraphQLView.as_view(graphiql=True))),

    path("", TemplateView.as_view(template_name="index.html")),

]
