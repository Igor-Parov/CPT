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
info.U6 = {
    name: "Unit 6: Lists and Loops",
    description: 
    "This unit introduces lists, loops, and traversals, and explores the way they can be used to build apps that store and process large amounts of information. Learn to program with the data library in App Lab and complete a 5-day hackathon project at the end of the unit where you can design a program about any topic of your choosing."
}
quiz.U6 = [
  {
    text: "What is a list in App Lab?",
    choices: [
      "A screen layout",
      "A conditional statement",
      "A collection of multiple values stored in one variable",
      "A type of loop"
    ],
    answer: 2
  },
  {
    text: "Which of the following correctly creates a list?",
    choices: [
      "var numbers = [1, 2, 3, 4];",
      "var numbers = 5;",
      "numbers = function() {};",
      "if (numbers > 5)"
    ],
    answer: 0
  },
  {
    text: "What is the main advantage of using a list?",
    choices: [
      "It replaces all variables",
      "It removes the need for loops",
      "It makes code longer",
      "It allows storage of many related values efficiently"
    ],
    answer: 3
  },
  {
    text: "What is a loop used for?",
    choices: [
      "Repeating a block of code multiple times",
      "Creating buttons",
      "Storing data permanently",
      "Designing screens"
    ],
    answer: 0
  },
  {
    text: "Which type of loop is commonly used to repeat code a specific number of times?",
    choices: [
      "for loop",
      "while loop",
      "if statement",
      "onEvent"
    ],
    answer: 0
  },
  {
    text: "What does it mean to traverse a list?",
    choices: [
      "Go through each item in the list one at a time",
      "Delete the list",
      "Sort the list automatically",
      "Print the list once"
    ],
    answer: 0
  },
  {
    text: "What variable is often used to keep track of position in a loop?",
    choices: [
      "index",
      "button",
      "screen",
      "event"
    ],
    answer: 0
  },
  {
    text: "In a list called scores, what does scores[0] represent?",
    choices: [
      "The number of items",
      "An error",
      "The last item",
      "The first item"
    ],
    answer: 3
  },
  {
    text: "Why do lists start at index 0 in App Lab?",
    choices: [
      "Because indexing begins at zero in JavaScript",
      "Because programmers prefer it",
      "There is no reason",
      "Because it is faster"
    ],
    answer: 0
  },
  {
    text: "What is a common pattern when traversing a list?",
    choices: [
      "Use a loop with an index variable",
      "Use multiple screens",
      "Restart the program",
      "Use an if statement only"
    ],
    answer: 0
  },
  {
    text: "What is the purpose of the Data Library in App Lab?",
    choices: [
      "To publish apps",
      "To fix syntax errors",
      "To design graphics",
      "To access and use large datasets"
    ],
    answer: 3
  },
  {
    text: "What might you use inside a loop to count items that meet a condition?",
    choices: [
      "A counter variable",
      "A new screen",
      "A random number",
      "A button"
    ],
    answer: 0
  },
  {
    text: "What is a filtering pattern?",
    choices: [
      "Selecting items from a list that meet certain criteria",
      "Deleting all data",
      "Sorting numbers randomly",
      "Creating extra loops"
    ],
    answer: 0
  },
  {
    text: "What is one benefit of combining lists and loops?",
    choices: [
      "Apps can process large amounts of information efficiently",
      "Variables are no longer needed",
      "Events stop working",
      "Code becomes harder to manage"
    ],
    answer: 0
  },
  {
    text: "The Unit 6 hackathon project allows students to:",
    choices: [
      "Build an app using lists, loops, and data on a topic of their choice",
      "Avoid working with datasets",
      "Remove user input",
      "Only fix old apps"
    ],
    answer: 0
  }
];