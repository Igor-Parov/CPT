/* Copilot was used
   To generate 15 multiple choice questions for each Unit based of code.org Units that we studied and putting 15 questions for separate google doc for each unit
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
info.U1 = {
    name: "Unit 1: Digital Information",
    description: 
    "This unit explores the technical challenges and questions that arise from the need to represent digital information in computers. Learn how complex information like numbers, text, images, and sound are represented in text, how compression works, and the broader social impacts of digitizing the world's information."
}
quiz.U1 = [
  {
    text: "Why do computers use binary to represent information?",
    choices: [
      "Because electronic circuits have two stable states (on/off)",
      "Because binary uses fewer numbers",
      "Because it is faster for humans to read",
      "Because computers only understand 1-9"
    ],
    answer: 0
  },
  {
    text: "What is a bit?",
    choices: [
      "4 binary digits",
      "A single binary digit (0 or 1)",
      "8 binary digits",
      "A unit of sound"
    ],
    answer: 1
  },
  {
    text: "How many bits are in a byte?",
    choices: [
      "16",
      "8",
      "4",
      "2"
    ],
    answer: 1
  },
  {
    text: "What is the decimal value of the binary number 1010?",
    choices: [
      "12",
      "8",
      "14",
      "10"
    ],
    answer: 3
  },
  {
    text: "Why do we use binary number systems instead of decimal in computers?",
    choices: [
      "Humans prefer binary",
      "Binary matches the physical design of computer hardware",
      "Binary is more colorful",
      "Decimal numbers are too large"
    ],
    answer: 1
  },
  {
    text: "Which system is commonly used to represent text in computers?",
    choices: [
      "MP3",
      "JPEG",
      "ASCII",
      "RGB"
    ],
    answer: 2
  },
  {
    text: "What does ASCII stand for?",
    choices: [
      "American Standard Code for Information Interchange",
      "Applied Standard Code for Internet Information",
      "Advanced System for Computer Internet Integration",
      "Automated System for Coding Information"
    ],
    answer: 0
  },
  {
    text: "In digital images, what is a pixel?",
    choices: [
      "A compression algorithm",
      "A type of file",
      "A single point of color in an image",
      "A sound wave"
    ],
    answer: 2
  },
  {
    text: "Image resolution refers to:",
    choices: [
      "The color format of the image",
      "The number of pixels used to create an image",
      "The size of the file in megabytes",
      "The speed of the camera"
    ],
    answer: 1
  },
  {
    text: "What is metadata?",
    choices: [
      "A type of virus",
      "The main content of a file",
      "A compression tool",
      "Data that describes other data"
    ],
    answer: 3
  },
  {
    text: "What is lossy compression?",
    choices: [
      "Compression that loses some data permanently",
      "Compression that increases quality",
      "Compression only for text files",
      "Compression that reduces file size without losing data"
    ],
    answer: 0
  },
  {
    text: "What is lossless compression?",
    choices: [
      "Compression that deletes metadata",
      "Compression used only for videos",
      "Compression that removes unnecessary pixels",
      "Compression that keeps all original data"
    ],
    answer: 3
  },
  {
    text: "Why is sampling important in digital sound?",
    choices: [
      "It determines how often sound is measured per second",
      "It compresses image files",
      "It measures screen resolution",
      "It increases file size"
    ],
    answer: 0
  },
  {
    text: "Increasing the bit depth in an image allows for:",
    choices: [
      "Fewer pixels",
      "More possible colors",
      "Smaller file sizes",
      "Faster downloads"
    ],
    answer: 1
  },
  {
    text: "What is one major social impact of digitizing information?",
    choices: [
      "Computers become heavier",
      "Binary replaces all languages",
      "Electricity is no longer needed",
      "Easier access to information worldwide"
    ],
    answer: 3
  }
];