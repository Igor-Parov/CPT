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
info.U8 = {
    name: "Unit 8: Cybersecurity and Global Impacts",
    description: 
    "In this unit learn how computing innovations have impacted our world in beneficial and harmful ways. Learn how data can pose a threat to our privacy and security and the ways that encryption and other techniques are used to protect it. Throughout the unit participate in a (school of the future) conference in which you and a team make a proposal for how best to improve school life with computing innovations."
}
quiz.U8 = [
  {
    text: "What is cybersecurity?",
    choices: [
      "Protecting computers, networks, and data from attacks",
      "Designing computer graphics",
      "Writing code for games",
      "Building hardware"
    ],
    answer: 1
  },
  {
    text: "What is encryption?",
    choices: [
      "Copying files",
      "Compressing files",
      "Deleting information",
      "Converting information into a secret code to protect it"
    ],
    answer: 3
  },
  {
    text: "Why is personal data valuable to companies?",
    choices: [
      "A collection of related data",
      "It deletes advertisements",
      "It replaces computers",
      "It stops hackers"
    ],
    answer: 0
  },
  {
    text: "Which of the following is an example of sensitive personal information?",
    choices: [
      "Favorite color",
      "Shoe size",
      "Favorite movie",
      "Phone number"
    ],
    answer: 3
  },
  {
    text: "What is a data breach?",
    choices: [
      "When unauthorized people access private data",
      "When data is organized in folders",
      "When a computer shuts down",
      "When files are deleted"
    ],
    answer: 1
  },
  {
    text: "Which practice helps protect online accounts?",
    choices: [
      "Using strong and unique passwords",
      "Using simple passwords",
      "Sharing passwords with friends",
      "Writing passwords in public places"
    ],
    answer: 0
  },
  {
    text: "What is two-factor authentication (2FA)?",
    choices: [
      "Using two forms of verification to access an account",
      "Logging in twice",
      "Using two different passwords",
      "Using two computers"
    ],
    answer: 3
  },
  {
    text: "Which of the following is an example of a computing innovation?",
    choices: [
      "Chalkboards",
      "Printed newspapers",
      "Paper notebooks",
      "Social media platforms"
    ],
    answer: 2
  },
  {
    text: "What is one benefit of computing innovations?",
    choices: [
      "Faster communication",
      "Slower information sharing",
      "Less access to information",
      "Fewer jobs in technology"
    ],
    answer: 1
  },
  {
    text: "What is one potential harmful impact of computing innovations?",
    choices: [
      "Better communication",
      "Improved education tools",
      "Faster research",
      "Data privacy concerns"
    ],
    answer: 0
  },
  {
    text: "What is phishing?",
    choices: [
      "A technique hackers use to trick people into giving personal information",
      "A computer game",
      "A way to store data",
      "A programming language"
    ],
    answer: 3
  },
  {
    text: "Why do organizations collect large amounts of data?",
    choices: [
      "To analyze patterns and make decisions",
      "To slow down computers",
      "To reduce storage",
      "To remove users"
    ],
    answer: 2
  },
  {
    text: "What is one way encryption protects information?",
    choices: [
      "By hiding the data so only authorized users can read it",
      "By deleting it",
      "By copying the data",
      "By printing it"
    ],
    answer: 1
  },
  {
    text: "Which group might be affected by computing innovations?",
    choices: [
      "Only teachers",
      "Only programmers",
      "Only businesses",
      "Many different groups in society"
    ],
    answer: 2
  },
  {
    text: "In the “School of the Future” project, what is the goal?",
    choices: [
      "To propose a computing innovation that improves school life",
      "To design a video game",
      "To repair computers",
      "To delete old technology"
    ],
    answer: 0
  }
];
