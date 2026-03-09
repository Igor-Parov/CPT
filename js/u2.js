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
quiz.U2 = [{
        text: "What is the main purpose of the Internet?",
        choices: [
            "To store files on one computer",
            "To connect billions of devices worldwide",
            "To replace telephones",
            "To create social media"
        ],
        answer: 1
    },
    {
        text: "What does a protocol do on the Internet?",
        choices: [
            "Stores websites",
            "Speeds up computers",
            "Provides rules for communication between devices",
            "Deletes data"
        ],
        answer: 2
    },
    {
        text: "Which protocol is responsible for sending web pages to your browser?",
        choices: [
            "FTP",
            "HTTP",
            "IP",
            "SMTP"
        ],
        answer: 1
    },
    {
        text: "What does TCP stand for?",
        choices: [
            "Total Computer Process",
            "Transmission Control Protocol",
            "Transfer Code Program",
            "Technical Communication Path"
        ],
        answer: 1
    },
    {
        text: "What is the main role of TCP?",
        choices: [
            "Assigning IP addresses",
            "Breaking messages into packets and ensuring they arrive correctly",
            "Storing domain names",
            "Encrypting passwords"
        ],
        answer: 1
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
            "Naming websites",
            "Identifying a device on a network",
            "Compressing files",
            "Blocking viruses"
        ],
        answer: 1
    },
    {
        text: "What is a packet?",
        choices: [
            "A physical cable",
            "A full web page",
            "A small piece of data sent across a network",
            "A type of virus"
        ],
        answer: 2
    },
    {
        text: "Why are messages broken into packets before being sent?",
        choices: [
            "To make them harder to read",
            "To make transmission more reliable and efficient",
            "To reduce storage space",
            "To prevent copying"
        ],
        answer: 1
    },
    {
        text: "What is DNS primarily responsible for?",
        choices: [
            "Encrypting emails",
            "Delivering videos",
            "Translating domain names into IP addresses",
            "Creating websites"
        ],
        answer: 2
    },
    {
        text: "Which organization helps manage global IP address allocation?",
        choices: [
            "NASA",
            "ICANN",
            "FBI",
            "HTML"
        ],
        answer: 1
    },
    {
        text: "What does redundancy in Internet design mean?",
        choices: [
            "Using only one path for data",
            "Sending duplicate emails",
            "Having multiple possible paths for data to travel",
            "Blocking weak signals"
        ],
        answer: 2
    },
    {
        text: "What is bandwidth?",
        choices: [
            "The physical width of a cable",
            "The amount of data that can be transmitted in a given time",
            "A type of router",
            "A domain name"
        ],
        answer: 1
    },
    {
        text: "One positive impact of the Internet is:",
        choices: [
            "Faster spread of misinformation",
            "Global access to communication and information",
            "Increased cybercrime",
            "Elimination of privacy"
        ],
        answer: 1
    },
    {
        text: "One challenge associated with the Internet is:",
        choices: [
            "Limited global connectivity",
            "No access to information",
            "Cybersecurity threats and data privacy concerns",
            "Too few users"
        ],
        answer: 2
    }
];