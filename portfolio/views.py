from django.shortcuts import render, redirect
from .models import Skill, Experience, Achievement, ContactMessage


def home(request):
    skills = Skill.objects.all()
    experiences = Experience.objects.all()
    achievements = Achievement.objects.all()

    context = {
        "skills": skills,
        "experiences": experiences,
        "achievements": achievements,
    }

    return render(request, "index.html", context)


def contact(request):
    if request.method == "POST":

        name = request.POST.get("name")
        email = request.POST.get("email")
        subject = request.POST.get("subject")
        message = request.POST.get("message")

        ContactMessage.objects.create(
            name=name,
            email=email,
            subject=subject,
            message=message
        )

        return redirect("home")

    return redirect("home")

def contact(request):
    if request.method == "POST":

        name = request.POST.get("name")
        email = request.POST.get("email")
        subject = request.POST.get("subject")
        message = request.POST.get("message")

        ContactMessage.objects.create(
            name=name,
            email=email,
            subject=subject,
            message=message
        )

        return redirect("/?success=1")

    return redirect("home")