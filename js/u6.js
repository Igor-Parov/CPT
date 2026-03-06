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
quiz.U6 = [
    {
        text: "What is a list in App Lab?",
        choices: [
            "A type of loop",
            "A collection of multiple values stored in one variable",
            "A screen layout",
            "A conditional statement"
        ],
        answer: 1
    },
    {
        text: "Which of the following correctly creates a list?",
        choices: [
            "var numbers = 5;",
            "var numbers = [1, 2, 3, 4];",
            "numbers = function() {};",
            "if (numbers > 5)"
        ],
        answer: 1
    },
    {
        text: "What is the main advantage of using a list?",
        choices: [
            "It makes code longer",
            "It allows storage of many related values efficiently",
            "It replaces all variables",
            "It removes the need for loops"
        ],
        answer: 1
    },
    {
        text: "What is a loop used for?",
        choices: [
            "Designing screens",
            "Repeating a block of code multiple times",
            "Creating buttons",
            "Storing data permanently"
        ],
        answer: 1
    },
    {
        text: "Which type of loop is commonly used to repeat code a specific number of times?",
        choices: [
            "if statement",
            "while loop",
            "for loop",
            "onEvent"
        ],
        answer: 2
    },
    {
        text: "What does it mean to traverse a list?",
        choices: [
            "Delete the list",
            "Go through each item in the list one at a time",
            "Sort the list automatically",
            "Print the list once"
        ],
        answer: 1
    },
    {
        text: "What variable is often used to keep track of position in a loop?",
        choices: [
            "button",
            "index",
            "screen",
            "event"
        ],
        answer: 1
    },
    {
        text: "In a list called scores, what does scores[0] represent?",
        choices: [
            "The last item",
            "The first item",
            "The number of items",
            "An error"
        ],
        answer: 1
    },
    {
        text: "Why do lists start at index 0 in App Lab?",
        choices: [
            "Because it is faster",
            "Because programmers prefer it",
            "Because indexing begins at zero in JavaScript",
            "There is no reason"
        ],
        answer: 2
    },
    {
        text: "What is a common pattern when traversing a list?",
        choices: [
            "Use an if statement only",
            "Use a loop with an index variable",
            "Use multiple screens",
            "Restart the program"
        ],
        answer: 1
    },
    {
        text: "What is the purpose of the Data Library in App Lab?",
        choices: [
            "To design graphics",
            "To access and use large datasets",
            "To fix syntax errors",
            "To publish apps"
        ],
        answer: 1
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
            "Deleting all data",
            "Selecting items from a list that meet certain criteria",
            "Sorting numbers randomly",
            "Creating extra loops"
        ],
        answer: 1
    },
    {
        text: "What is one benefit of combining lists and loops?",
        choices: [
            "Apps can process large amounts of information efficiently",
            "Code becomes harder to manage",
            "Variables are no longer needed",
            "Events stop working"
        ],
        answer: 0
    },
    {
        text: "The Unit 6 hackathon project allows students to:",
        choices: [
            "Only fix old apps",
            "Build an app using lists, loops, and data on a topic of their choice",
            "Avoid working with datasets",
            "Remove user input"
        ],
        answer: 1
    }
];
