import os

os.system("cls" if os.name == "nt" else "clear")

print("-------------------------------------------------")


class Person:
    name = "Yusuf"
    age = 30


# ? Person class'ından obje (instance) üretiyoruz 👇
person1 = Person()
person2 = Person()

print(person1.name)  # Victor

# ? Class'ımıza yeni bir attribute ekledik. Bu class'tan üretilmiş instance'larda bu özellik geçerli oluyor.
Person.job = "Developer"

print(person2.job)
