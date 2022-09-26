from unicodedata import category
from django.db import models


class UpdateCreateDate(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


class Category(models.Model):  # Categorys  --> ies
    name = models.CharField(max_length=50, verbose_name='Category Name')

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = 'Categories'


class Quiz(UpdateCreateDate):
    title = models.CharField(max_length=50, verbose_name='Quiz title')
    category = models.ForeignKey(Category, on_delete=models.CASCADE)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name_plural = 'Quizzes'


class Question(UpdateCreateDate):

    SCALE = (
        ('B', 'Beginner'),
        ('I', 'Intermediate'),
        ('A', 'Advanced')
    )

    title = models.TextField()
    quiz = models.ForeignKey(Quiz, on_delete=models.CASCADE)
    difficulty = models.CharField(max_length=1, choices=SCALE)

    def __str__(self):
        return self.title


class Option(UpdateCreateDate):
    option_text = models.CharField(max_length=200)
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    is_right = models.BooleanField(default=False)

    def __str__(self):
        return self.option_text