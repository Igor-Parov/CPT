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
info.U7 = {
    name: "Unit 7: Parameters, Return Values, and Libraries",
    description: 
    "This unit introduces parameters, return, and libraries. Learn how to use these concepts to build new kinds of apps as well as libraries of code that you can share with your classmates. End the unit by designing a library of functions around any topic of your choosing."
}
quiz.U7 = [
  {
    text: "What is a parameter in a function?",
    choices: [
      "A value passed into a function to customize its behavior",
      "A variable used only in loops",
      "A command that stops a function",
      "A button in App Lab"
    ],
    answer: 2
  },
  {
    text: "What does the return statement do?",
    choices: [
      "Sends a value back from a function",
      "Stops the entire program",
      "Prints text to the screen",
      "Creates a new variable"
    ],
    answer: 0
  },
  {
    text: "What will this function return?\nfunction add(a, b){\n return a + b;\n}\n\nvar result = add(3, 4);",
    choices: [
      "undefined",
      "12",
      "3",
      "7"
    ],
    answer: 3
  },
  {
    text: "What is the purpose of a library in programming?",
    choices: [
      "To organize reusable functions",
      "To store images",
      "To create loops",
      "To design the app layout"
    ],
    answer: 1
  },
  {
    text: "What will be printed?\nfunction greet(name){\n console.log(\"Hello \" + name);\n}\n\ngreet(\"Alex\");",
    choices: [
      "Hello Alex",
      "Alex",
      "Hello",
      "greet Alex"
    ],
    answer: 0
  },
  {
    text: "Which of the following is an example of calling a function with parameters?",
    choices: [
      "score(10, 5)",
      "function score()",
      "score = 10",
      "var score"
    ],
    answer: 2
  },
  {
    text: "What will this return?\nfunction square(x){\n return x * x;\n}\n\nsquare(5);",
    choices: [
      "25",
      "10",
      "5",
      "20"
    ],
    answer: 1
  },
  {
    text: "Why are parameters useful?",
    choices: [
      "They store images",
      "They allow functions to work with different inputs",
      "They stop loops",
      "They design screens"
    ],
    answer: 3
  },
  {
    text: "What is the output?\nfunction multiply(a, b){\n return a * b;\n}\n\nconsole.log(multiply(2, 6));",
    choices: [
      "8",
      "12",
      "26",
      "undefined"
    ],
    answer: 0
  },
  {
    text: "Which statement is true about libraries?",
    choices: [
      "They store reusable functions that others can import",
      "They can only contain variables",
      "They only work inside one program",
      "They replace loops"
    ],
    answer: 1
  },
  {
    text: "What will be printed?\nfunction double(num){\n return num * 2;\n}\n\nvar x = double(4);\nconsole.log(x);",
    choices: [
      "8",
      "2",
      "4",
      "6"
    ],
    answer: 3
  },
  {
    text: "What happens if a function does not have a return statement?",
    choices: [
      "It returns undefined",
      "It automatically returns 0",
      "It causes an error every time",
      "It repeats forever"
    ],
    answer: 2
  },
  {
    text: "Which example correctly defines a function with parameters?",
    choices: [
      "function add(a,b)",
      "function add{a,b}",
      "add function(a,b)",
      "function = add(a,b)"
    ],
    answer: 1
  },
  {
    text: "What will this function return?\nfunction subtract(a, b){\n return a - b;\n}\n\nsubtract(10, 3);",
    choices: [
      "7",
      "13",
      "30",
      "-7"
    ],
    answer: 2
  },
  {
    text: "Why might a programmer create a library of functions?",
    choices: [
      "To make code reusable and organized",
      "To slow down programs",
      "To delete functions",
      "To replace variables"
    ],
    answer: 0
  }
];