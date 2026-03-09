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
            "Designing computer graphics",
            "Protecting computers, networks, and data from attacks",
            "Writing code for games",
            "Building hardware"
        ],
        answer: 1
    },
    {
        text: "What is encryption?",
        choices: [
            "Deleting information",
            "Converting information into a secret code to protect it",
            "Compressing files",
            "Copying files"
        ],
        answer: 1
    },
    {
        text: "Why is personal data valuable to companies?",
        choices: [
            "It helps them understand users and improve products",
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
            "Phone number",
            "Shoe size",
            "Favorite movie"
        ],
        answer: 1
    },
    {
        text: "What is a data breach?",
        choices: [
            "When data is organized in folders",
            "When unauthorized people access private data",
            "When a computer shuts down",
            "When files are deleted"
        ],
        answer: 1
    },
    {
        text: "Which practice helps protect online accounts?",
        choices: [
            "Using simple passwords",
            "Sharing passwords with friends",
            "Using strong and unique passwords",
            "Writing passwords in public places"
        ],
        answer: 2
    },
    {
        text: "What is two-factor authentication (2FA)?",
        choices: [
            "Logging in twice",
            "Using two different passwords",
            "Using two forms of verification to access an account",
            "Using two computers"
        ],
        answer: 2
    },
    {
        text: "Which of the following is an example of a computing innovation?",
        choices: [
            "Social media platforms",
            "Paper notebooks",
            "Chalkboards",
            "Printed newspapers"
        ],
        answer: 0
    },
    {
        text: "What is one benefit of computing innovations?",
        choices: [
            "Faster communication",
            "Slower information sharing",
            "Less access to information",
            "Fewer jobs in technology"
        ],
        answer: 0
    },
    {
        text: "What is one potential harmful impact of computing innovations?",
        choices: [
            "Improved education tools",
            "Data privacy concerns",
            "Faster research",
            "Better communication"
        ],
        answer: 1
    },
    {
        text: "What is phishing?",
        choices: [
            "A computer game",
            "A technique hackers use to trick people into giving personal information",
            "A way to store data",
            "A programming language"
        ],
        answer: 1
    },
    {
        text: "Why do organizations collect large amounts of data?",
        choices: [
            "To analyze patterns and make decisions",
            "To slow down computers",
            "To reduce storage",
            "To remove users"
        ],
        answer: 0
    },
    {
        text: "What is one way encryption protects information?",
        choices: [
            "By deleting it",
            "By hiding the data so only authorized users can read it",
            "By copying the data",
            "By printing it"
        ],
        answer: 1
    },
    {
        text: "Which group might be affected by computing innovations?",
        choices: [
            "Only programmers",
            "Only teachers",
            "Only businesses",
            "Many different groups in society"
        ],
        answer: 3
    },
    {
        text: "In the “School of the Future” project, what is the goal?",
        choices: [
            "To design a video game",
            "To propose a computing innovation that improves school life",
            "To repair computers",
            "To delete old technology"
        ],
        answer: 1
    }
];
