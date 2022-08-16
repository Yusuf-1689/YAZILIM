import os

os.system("cls" if os.name == "nt" else "clear")

print("-----------------------------------")
# def print_types(data):
#     for i in data:
#         print(i, type(i))


# test = [122, 'victor', [1,2,3], (1,2,3), {1,2,3}, True, lambda x:x]

# print_types(test)

# class Person:
#     name = "victor"
#     age = 32


# person1 = Person()
# person2 = Person()

# print(person1.name)
# Person.job = "developer"
# print(person2.job)

#! class attributes vs instance attributes


class Person:
    company = "clarusway"

    def test(self):
        print("test")

    def set_details(self, name, age):
        self.name = name
        self.age = age

    def get_details(self):
        print(self.name, self.age)

    @staticmethod
    def salute():
        print("Hi there!")


person1 = Person()
person2 = Person()


# person1.location = "Turkey"
# # print(person2.location)
# person2.age = 25
# print(person1.age)
# print(person2.age)

# person1.test()
# Person.test(person1)
person1.set_details("barry", 20)
# person1.get_details()
# print(person1.name)

person1.salute()
person2.salute()


print("-----------------------------------")
