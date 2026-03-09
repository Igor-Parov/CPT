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
info.U2 = {
    name: "Unit 2: The Internet",
    description: 
    "This unit reveals how the Internet was designed to connect billions of devices and people to one another. Learn how the different protocols of the Internet work and actually build them yourself using the Internet Simulator. Then consider the impacts the Internet has had, both good and bad, on modern life."
}
quiz.U2 = [
  {
    text: "What is the main purpose of the Internet?",
    choices: [
      "To replace telephones",
      "To create social media",
      "To connect billions of devices worldwide",
      "To store files on one computer"
    ],
    answer: 2
  },
  {
    text: "What does a protocol do on the Internet?",
    choices: [
      "Provides rules for communication between devices",
      "Deletes data",
      "Speeds up computers",
      "Stores websites"
    ],
    answer: 0
  },
  {
    text: "Which protocol is responsible for sending web pages to your browser?",
    choices: [
      "SMTP",
      "FTP",
      "IP",
      "HTTP"
    ],
    answer: 3
  },
  {
    text: "What does TCP stand for?",
    choices: [
      "Transmission Control Protocol",
      "Transfer Code Program",
      "Technical Communication Path",
      "Total Computer Process"
    ],
    answer: 1
  },
  {
    text: "What is the main role of TCP?",
    choices: [
      "Breaking messages into packets and ensuring they arrive correctly",
      "Encrypting passwords",
      "Assigning IP addresses",
      "Storing domain names"
    ],
    answer: 0
  },
  {
    text: "What does IP stand for?",
    choices: [
      "Internet Provider",
      "Internal Process",
      "Internet Protocol",
      "Information Packet"
    ],
    answer: 2
  },
  {
    text: "What is an IP address used for?",
    choices: [
      "Identifying a device on a network",
      "Naming websites",
      "Blocking viruses",
      "Compressing files"
    ],
    answer: 1
  },
  {
    text: "What is a packet?",
    choices: [
      "A type of virus",
      "A physical cable",
      "A small piece of data sent across a network",
      "A full web page"
    ],
    answer: 3
  },
  {
    text: "Why are messages broken into packets before being sent?",
    choices: [
      "To make transmission more reliable and efficient",
      "To reduce storage space",
      "To prevent copying",
      "To make them harder to read"
    ],
    answer: 2
  },
  {
    text: "What is DNS primarily responsible for?",
    choices: [
      "Encrypting emails",
      "Delivering videos",
      "Creating websites",
      "Translating domain names into IP addresses"
    ],
    answer: 1
  },
  {
    text: "Which organization helps manage global IP address allocation?",
    choices: [
      "ICANN",
      "NASA",
      "FBI",
      "HTML"
    ],
    answer: 0
  },
  {
    text: "What does redundancy in Internet design mean?",
    choices: [
      "Using only one path for data",
      "Sending duplicate emails",
      "Blocking weak signals",
      "Having multiple possible paths for data to travel"
    ],
    answer: 3
  },
  {
    text: "What is bandwidth?",
    choices: [
      "A type of router",
      "The amount of data that can be transmitted in a given time",
      "A domain name",
      "The physical width of a cable"
    ],
    answer: 1
  },
  {
    text: "One positive impact of the Internet is:",
    choices: [
      "Global access to communication and information",
      "Faster spread of misinformation",
      "Increased cybercrime",
      "Elimination of privacy"
    ],
    answer: 2
  },
  {
    text: "One challenge associated with the Internet is:",
    choices: [
      "Cybersecurity threats and data privacy concerns",
      "Too few users",
      "No access to information",
      "Limited global connectivity"
    ],
    answer: 0
  }
];