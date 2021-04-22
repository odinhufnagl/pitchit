from django.db import models
from profile.models import Profile
from post.models import Post


class PostComments(models.Model):

    post_id = models.ForeignKey(
        Post, related_name="comment_post_id", on_delete=models.CASCADE)
    content = models.TextField()
    created_by = models.ForeignKey(
        Profile, related_name="comment_created_by", on_delete=models.CASCADE)

    class Meta:
        db_table = "postcomment"
