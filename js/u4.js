/* Copilot was used
   To generate 15 multiple choice questions for each Unit based of code.org Units that we studied 
   To transform all the multipe-choice questions into objects
   Having 135 questions and filling each object by hand requires a lot of time
   Prompt was: Generate 15 multiple choice questions with answers for this Unit + (unit name) + (unit desctiption from code.org)
   Prompt was: Transform my google doc questions into this form: ..., here are questions with the answers: ""...""
   quiz.U(number) = [
   {
      text: "..." ,
      choices:["...", "....", ".....", "...."],
      answer:... , 
   },
   {....
   }
   ];
*/ 
info.U4 = {
    name: "Unit 4: Variables and Conditionals",
    description: 
    "This unit explores how variables, conditionals, and functions allow for the design of increasingly complex apps. Learn how to program with these three new concepts through a sequence of collaborative activities. Then build your own decision maker app to share with friends and help them make a decision."
}
quiz.U4 = [
  {
    text: "What is a variable used for in programming?",
    choices: [
      "Creating buttons",
      "Fixing bugs automatically",
      "Storing information that can change",
      "Designing the app layout"
    ],
    answer: 2
  },
  {
    text: "Which of the following is an example of assigning a value to a variable in App Lab?",
    choices: [
      "var score = 0;",
      "onEvent(\"button1\", \"click\", function() {})",
      "setScreen(\"home\");",
      "if (x > 5)"
    ],
    answer: 0
  },
  {
    text: "What is the purpose of a conditional statement?",
    choices: [
      "To design the interface",
      "To store data",
      "To repeat code forever",
      "To make decisions in a program"
    ],
    answer: 3
  },
  {
    text: "Which keyword is used to start a conditional statement in JavaScript/App Lab?",
    choices: [
      "function",
      "if",
      "var",
      "when"
    ],
    answer: 1
  },
  {
    text: "What will this code do if x = 10?\nif (x > 5) { setText(\"label1\", \"Yes\"); }",
    choices: [
      "It sets the label text to “Yes”",
      "Nothing happens",
      "It sets the label text to “No”",
      "It causes an error"
    ],
    answer: 0
  },
  {
    text: "What is an else statement used for?",
    choices: [
      "To run code when the if condition is false",
      "To repeat code",
      "To create a variable",
      "To end a program"
    ],
    answer: 2
  },
  {
    text: "What is the purpose of a function?",
    choices: [
      "To group reusable code together",
      "To design screens",
      "To store images",
      "To create hardware"
    ],
    answer: 1
  },
  {
    text: "Which of the following correctly defines a function in App Lab?",
    choices: [
      "onEvent function() { }",
      "function myFunction() { }",
      "var myFunction = ();",
      "if myFunction() { }"
    ],
    answer: 3
  },
  {
    text: "Why are functions useful in larger programs?",
    choices: [
      "They reduce repetition and organize code",
      "They slow down code",
      "They replace variables",
      "They prevent user input"
    ],
    answer: 0
  },
  {
    text: "What is a parameter in a function?",
    choices: [
      "A value passed into a function",
      "A button ID",
      "A screen name",
      "A type of loop"
    ],
    answer: 1
  },
  {
    text: "What will this function do?\nfunction greet(name) { setText(\"label1\", \"Hello \" + name); }",
    choices: [
      "Creates a new screen",
      "Stores a number",
      "Displays a personalized greeting",
      "Always displays “Hello”"
    ],
    answer: 3
  },
  {
    text: "In a decision maker app, conditionals are mainly used to:",
    choices: [
      "Create images",
      "Compress data",
      "Store screen names",
      "Decide outcomes based on user input"
    ],
    answer: 2
  },
  {
    text: "What type of error occurs when the program runs but produces the wrong result?",
    choices: [
      "Hardware error",
      "Syntax error",
      "Logic error",
      "Design error"
    ],
    answer: 1
  },
  {
    text: "Which operator checks if two values are equal?",
    choices: [
      "+",
      "==",
      "=",
      "&&"
    ],
    answer: 2
  },
  {
    text: "Combining variables, conditionals, and functions allows programmers to:",
    choices: [
      "Make apps more interactive and complex",
      "Avoid writing code",
      "Eliminate debugging",
      "Remove all user input"
    ],
    answer: 0
  }
];
