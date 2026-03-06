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
quiz.U7 = [
    {
        text: "What is a parameter in a function?",
        choices: [
            "A variable used only in loops",
            "A value passed into a function to customize its behavior",
            "A command that stops a function",
            "A button in App Lab"
        ],
        answer: 1
    },
    {
        text: "What does the return statement do?",
        choices: [
            "Stops the entire program",
            "Sends a value back from a function",
            "Prints text to the screen",
            "Creates a new variable"
        ],
        answer: 1
    },
    {
        text: "What will this function return?\nfunction add(a, b){\n return a + b;\n}\n\nvar result = add(3, 4);",
        choices: [
            "12",
            "3",
            "7",
            "undefined"
        ],
        answer: 2
    },
    {
        text: "What is the purpose of a library in programming?",
        choices: [
            "To store images",
            "To organize reusable functions",
            "To create loops",
            "To design the app layout"
        ],
        answer: 1
    },
    {
        text: "What will be printed?\nfunction greet(name){\n console.log(\"Hello \" + name);\n}\n\ngreet(\"Alex\");",
        choices: [
            "Hello",
            "Alex",
            "Hello Alex",
            "greet Alex"
        ],
        answer: 2
    },
    {
        text: "Which of the following is an example of calling a function with parameters?",
        choices: [
            "function score()",
            "score = 10",
            "score(10, 5)",
            "var score"
        ],
        answer: 2
    },
    {
        text: "What will this return?\nfunction square(x){\n return x * x;\n}\n\nsquare(5);",
        choices: [
            "10",
            "5",
            "25",
            "20"
        ],
        answer: 2
    },
    {
        text: "Why are parameters useful?",
        choices: [
            "They allow functions to work with different inputs",
            "They stop loops",
            "They store images",
            "They design screens"
        ],
        answer: 0
    },
    {
        text: "What is the output?\nfunction multiply(a, b){\n return a * b;\n}\n\nconsole.log(multiply(2, 6));",
        choices: [
            "12",
            "8",
            "26",
            "undefined"
        ],
        answer: 0
    },
    {
        text: "Which statement is true about libraries?",
        choices: [
            "They can only contain variables",
            "They store reusable functions that others can import",
            "They only work inside one program",
            "They replace loops"
        ],
        answer: 1
    },
    {
        text: "What will be printed?\nfunction double(num){\n return num * 2;\n}\n\nvar x = double(4);\nconsole.log(x);",
        choices: [
            "2",
            "4",
            "6",
            "8"
        ],
        answer: 3
    },
    {
        text: "What happens if a function does not have a return statement?",
        choices: [
            "It causes an error every time",
            "It automatically returns 0",
            "It returns undefined",
            "It repeats forever"
        ],
        answer: 2
    },
    {
        text: "Which example correctly defines a function with parameters?",
        choices: [
            "function add{a,b}",
            "function add(a,b)",
            "add function(a,b)",
            "function = add(a,b)"
        ],
        answer: 1
    },
    {
        text: "What will this function return?\nfunction subtract(a, b){\n return a - b;\n}\n\nsubtract(10, 3);",
        choices: [
            "13",
            "7",
            "30",
            "-7"
        ],
        answer: 1
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
