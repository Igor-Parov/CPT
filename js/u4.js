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
quiz.U4 = [
    {
        text: "What is a variable used for in programming?",
        choices: [
            "Designing the app layout",
            "Storing information that can change",
            "Creating buttons",
            "Fixing bugs automatically"
        ],
        answer: 1
    },
    {
        text: "Which of the following is an example of assigning a value to a variable in App Lab?",
        choices: [
            "onEvent(\"button1\", \"click\", function() {})",
            "var score = 0;",
            "setScreen(\"home\");",
            "if (x > 5)"
        ],
        answer: 1
    },
    {
        text: "What is the purpose of a conditional statement?",
        choices: [
            "To store data",
            "To repeat code forever",
            "To make decisions in a program",
            "To design the interface"
        ],
        answer: 2
    },
    {
        text: "Which keyword is used to start a conditional statement in JavaScript/App Lab?",
        choices: [
            "when",
            "var",
            "if",
            "function"
        ],
        answer: 2
    },
    {
        text: "What will this code do if x = 10?\nif (x > 5) { setText(\"label1\", \"Yes\"); }",
        choices: [
            "Nothing happens",
            "It sets the label text to “No”",
            "It sets the label text to “Yes”",
            "It causes an error"
        ],
        answer: 2
    },
    {
        text: "What is an else statement used for?",
        choices: [
            "To repeat code",
            "To run code when the if condition is false",
            "To create a variable",
            "To end a program"
        ],
        answer: 1
    },
    {
        text: "What is the purpose of a function?",
        choices: [
            "To design screens",
            "To group reusable code together",
            "To store images",
            "To create hardware"
        ],
        answer: 1
    },
    {
        text: "Which of the following correctly defines a function in App Lab?",
        choices: [
            "var myFunction = ();",
            "function myFunction() { }",
            "if myFunction() { }",
            "onEvent function() { }"
        ],
        answer: 1
    },
    {
        text: "Why are functions useful in larger programs?",
        choices: [
            "They slow down code",
            "They reduce repetition and organize code",
            "They replace variables",
            "They prevent user input"
        ],
        answer: 1
    },
    {
        text: "What is a parameter in a function?",
        choices: [
            "A button ID",
            "A value passed into a function",
            "A screen name",
            "A type of loop"
        ],
        answer: 1
    },
    {
        text: "What will this function do?\nfunction greet(name) { setText(\"label1\", \"Hello \" + name); }",
        choices: [
            "Always displays “Hello”",
            "Displays a personalized greeting",
            "Creates a new screen",
            "Stores a number"
        ],
        answer: 1
    },
    {
        text: "In a decision maker app, conditionals are mainly used to:",
        choices: [
            "Store screen names",
            "Decide outcomes based on user input",
            "Create images",
            "Compress data"
        ],
        answer: 1
    },
    {
        text: "What type of error occurs when the program runs but produces the wrong result?",
        choices: [
            "Syntax error",
            "Hardware error",
            "Logic error",
            "Design error"
        ],
        answer: 2
    },
    {
        text: "Which operator checks if two values are equal?",
        choices: [
            "=",
            "==",
            "+",
            "&&"
        ],
        answer: 1
    },
    {
        text: "Combining variables, conditionals, and functions allows programmers to:",
        choices: [
            "Make apps more interactive and complex",
            "Remove all user input",
            "Eliminate debugging",
            "Avoid writing code"
        ],
        answer: 0
    }
];
