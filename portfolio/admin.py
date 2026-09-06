from django.contrib import admin
from .models import Skill, Project, Experience, Achievement, ContactMessage


admin.site.register(Skill)
admin.site.register(Project)
admin.site.register(Experience)
admin.site.register(Achievement)
admin.site.register(ContactMessage)
