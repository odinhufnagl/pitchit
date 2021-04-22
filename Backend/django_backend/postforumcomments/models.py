from django.db import models
from profile.models import Profile
from postforum.models import PostForum
from datetime import datetime


class PostForumComments(models.Model):

    post_forum_id = models.ForeignKey(
        PostForum, related_name="comment_post_forum_id", on_delete=models.CASCADE)
    content = models.TextField()
    created_by = models.ForeignKey(
        Profile, related_name="comment_post_forum_created_by", on_delete=models.CASCADE)
    date_created = models.DateTimeField(default=datetime.now())

    class Meta:
        db_table = "postforumcomment"
