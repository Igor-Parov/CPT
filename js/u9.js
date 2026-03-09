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
info.U9 = {
    name: "Unit 9: Algorithms",
    description: 
    "This unit is a quick exploration of how computer scientists design algorithms to solve problems and how they analyze the speed of different algorithms. Learn about the concept of algorithmic efficiency through a variety of hands-on activities and learn how it's being applied in modern computing."
}
quiz.U9 = [
  {
    text: "What is an algorithm?",
    choices: [
      "A type of hardware",
      "A computer virus",
      "A step-by-step process used to solve a problem",
      "A computer screen"
    ],
    answer: 2
  },
  {
    text: "Why are algorithms important in computing?",
    choices: [
      "They provide instructions for solving problems",
      "They decorate programs",
      "They replace computers",
      "They delete files"
    ],
    answer: 0
  },
  {
    text: "What does algorithmic efficiency refer to?",
    choices: [
      "How many variables a program has",
      "How colorful the program is",
      "How long a computer screen stays on",
      "How quickly and efficiently an algorithm solves a problem"
    ],
    answer: 3
  },
  {
    text: "Which of the following is an example of an algorithm?",
    choices: [
      "A picture file",
      "A keyboard",
      "A computer monitor",
      "A recipe for cooking food"
    ],
    answer: 1
  },
  {
    text: "What is the goal when designing algorithms?",
    choices: [
      "Make them simple, correct, and efficient",
      "Make them as slow as possible",
      "Use as many steps as possible",
      "Avoid solving the problem"
    ],
    answer: 0
  },
  {
    text: "What is linear search?",
    choices: [
      "It allows storage of many related values efficiently",
      "Searching data randomly",
      "Checking each item one by one until the target is found",
      "Dividing the data in half each time"
    ],
    answer: 2
  },
  {
    text: "What is binary search?",
    choices: [
      "Searching using images",
      "Searching without a computer",
      "Searching by checking every item",
      "Repeatedly dividing a sorted list in half to find a value"
    ],
    answer: 1
  },
  {
    text: "Binary search only works if the list is:",
    choices: [
      "Colored",
      "Large",
      "Random",
      "Sorted"
    ],
    answer: 3
  },
  {
    text: "Which search algorithm is usually faster for large sorted lists?",
    choices: [
      "Random search",
      "Manual search",
      "Linear search",
      "Binary search"
    ],
    answer: 0
  },
  {
    text: "What is one way computer scientists compare algorithms?",
    choices: [
      "By screen size",
      "By efficiency and number of steps required",
      "By number of buttons",
      "By color"
    ],
    answer: 1
  },
  {
    text: "What happens in linear search if the item is not found?",
    choices: [
      "It sorts the list",
      "It stops immediately",
      "The algorithm checks every item in the list",
      "The program crashes"
    ],
    answer: 3
  },
  {
    text: "Why might an algorithm with fewer steps be better?",
    choices: [
      "It prints more text",
      "It looks nicer",
      "It uses more electricity",
      "It runs faster and saves resources"
    ],
    answer: 2
  },
  {
    text: "Which situation best uses binary search?",
    choices: [
      "Searching through an unsorted pile of papers",
      "Searching for a word in a sorted dictionary",
      "Looking for a random file without order",
      "Searching images by color"
    ],
    answer: 1
  },
  {
    text: "What is the first step in designing an algorithm?",
    choices: [
      "Write random code",
      "Ignore the problem",
      "Turn off the computer",
      "Understand the problem you want to solve"
    ],
    answer: 2
  },
  {
    text: "Which statement about algorithms is true?",
    choices: [
      "Different algorithms can solve the same problem",
      "Algorithms never change",
      "Algorithms only exist in computers",
      "There is always only one correct algorithm"
    ],
    answer: 0
  }
];