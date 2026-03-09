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
info.U3 = {
    name: "Unit 3: App Design and Development",
    description: 
    "This unit is an introduction to programming and app design with a heavy focus on important skills like debugging, pair programming, and user testing. Learn how to design user interfaces and write event-driven programs in App Lab and then design a project that teaches your classmates about a topic of your choosing."
}
quiz.U3 = [{
        text: "What type of programming is primarily used in App Lab?",
        choices: [
            "Sequential programming",
            "Event-driven programming",
            "Machine learning programming",
            "Binary programming"
        ],
        answer: 1
    },
    {
        text: "In event-driven programming, code runs when:",
        choices: [
            "The computer turns on",
            "A timer finishes",
            "An event (like a button click) occurs",
            "The program is downloaded"
        ],
        answer: 2
    },
    {
        text: "Which of the following is an example of an event?",
        choices: [
            "Writing a variable",
            "Clicking a button",
            "Saving a file",
            "Creating a loop"
        ],
        answer: 1
    },
    {
        text: "What is the purpose of debugging?",
        choices: [
            "Designing the app layout",
            "Finding and fixing errors in code",
            "Publishing the app",
            "Adding images"
        ],
        answer: 1
    },
    {
        text: "Which strategy is helpful when debugging?",
        choices: [
            "Guess randomly",
            "Delete all code",
            "Test small sections of code at a time",
            "Ignore error messages"
        ],
        answer: 2
    },
    {
        text: "What is pair programming?",
        choices: [
            "Two people sharing one computer and working together",
            "Programming two apps at once",
            "Copying someone else’s code",
            "Working independently"
        ],
        answer: 0
    },
    {
        text: "In pair programming, the “driver”:",
        choices: [
            "Reviews the code silently",
            "Types the code",
            "Watches and gives feedback",
            "Tests the final product"
        ],
        answer: 1
    },
    {
        text: "In pair programming, the “navigator”:",
        choices: [
            "Types all code",
            "Leaves the room",
            "Reviews, suggests ideas, and checks for errors",
            "Publishes the app"
        ],
        answer: 2
    },
    {
        text: "What is user testing?",
        choices: [
            "The programmer testing their own app",
            "Letting potential users try the app and give feedback",
            "Checking for syntax errors only",
            "Uploading the app online"
        ],
        answer: 1
    },
    {
        text: "Why is user testing important?",
        choices: [
            "It guarantees no bugs",
            "It helps improve usability and design",
            "It makes the app larger",
            "It replaces debugging"
        ],
        answer: 1
    },
    {
        text: "What is the purpose of the Design Mode in App Lab?",
        choices: [
            "Writing JavaScript code",
            "Debugging programs",
            "Designing the user interface",
            "Running the app"
        ],
        answer: 2
    },
    {
        text: "What does an onEvent() block do in App Lab?",
        choices: [
            "Creates a new screen",
            "Runs code when a specific event happens",
            "Declares a variable",
            "Repeats code forever"
        ],
        answer: 1
    },
    {
        text: "What is a variable used for in an app?",
        choices: [
            "To design buttons",
            "To store and manage data",
            "To create images",
            "To stop the program"
        ],
        answer: 1
    },
    {
        text: "What makes a user interface (UI) effective?",
        choices: [
            "Bright colors only",
            "As many buttons as possible",
            "Clear layout and easy navigation",
            "Complex instructions"
        ],
        answer: 2
    },
    {
        text: "The final project in Unit 3 is designed to:",
        choices: [
            "Replace all other apps",
            "Teach classmates about a topic of your choice",
            "Focus only on graphics",
            "Avoid user feedback"
        ],
        answer: 1
    }
];