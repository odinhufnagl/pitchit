from django.db import models
from django.contrib.auth.models import User
from django.dispatch import receiver
from django.db.models.signals import post_save


class Profile(models.Model):

    user = models.OneToOneField(
        User,
        on_delete=models.CASCADE,
    )
    bio = models.TextField()
    profilepicture = models.TextField(
        default="https://profiles.utdallas.edu/img/default.png")
    location_longitude = models.FloatField(default=float(20))
    location_latitude = models.FloatField(default=float(20))

    class Meta:
        db_table = "profile"


@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)


@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()
