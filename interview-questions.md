# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

  Your answer: You can utilize DB migrate to add the foreign key.

  Researched answer: You can utilize DB migrate to add the foreign key. The foreign key would be named has_many and would be on the Cohort model.



2. Which RESTful routes must always be passed params? Why?

  Your answer: Index, Create, Show, Update, Destroy. I'm not sure but I will research and elaborate below.

  Researched answer: Index, Create, Show, Update, Destroy. These must always be passed to params because they are needed to have a functioning website.



3. Name three rails generator commands. What is created by each?

  Your answer:
  db:migrate- updates the database
  rails generate model- generates a new model for the database
  rails generate controller- generates a new controller

  Researched answer:
  Rails db:migrate- updates the database and schema file)
  Rails generate model- generates a new model for the database
  Rails generate controller- generates a new controller



4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET"    location: /students  
- Displays a list of all students
action: "POST"   location: /students       
- create a new student
action: "GET"    location: /students/new
- return an HTML form for creating a new student
action: "GET"    location: /students/2  
- displays the 2nd student
action: "GET"    location: /students/2/edit    
- return an Html form for editing the 2nd student
action: "PATCH"  location: /students/2      
- update the 2nd student
action: "DELETE" location: /students/2      
- delete the 2nd student


5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).
1. As a user, I want to brush my teeth so that I practice good oral hygiene.
2. As a user, I want to make my bed so that I can get a good start on the day.
3. As a user, I want to study for at least half an hour a day so I can stay on top of things in class.
4. As a user, I want to cook or order food so I have something to eat.
5. As a user, I want to watch tv so I can relax and not be worried so much about homework and class.
6. As a user, I want to go to the gym so I can build muscle.
7. As a user, I want to clean the house so it can be clean.
8. As a user, I want to clean my car so it can be clean.
9. As a user, I want to call my girlfriend so she won't be mad at me.
10. As a user, I want to complete the assessment and turn it in so it will get reviewed and returned back to me.
