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
quiz.U1 = [{
            text: "Why do computers use binary to represent information?",
            choices: [
                "Because it is faster for humans to read",
                "Because computers only understand 1-9",
                "Because electronic circuits have two stable states (on/off)",
                "Because binary uses fewer numbers"
            ],
            answer: 2
        },
        {
            text: "What is a bit?",
            choices: [
                "4 binary digits",
                "8 binary digits",
                "A single binary digit (0 or 1)",
                "A unit of sound"
            ],
            answer: 2
        },
        {
            text: "How many bits are in a byte?",
            choices: [
                "2",
                "4",
                "8",
                "16"
            ],
            answer: 2
        },
        {
            text: "What is the decimal value of the binary number 1010?",
            choices: [
                "8",
                "10",
                "12",
                "14"
            ],
            answer: 1
        },
        {
            text: "Why do we use binary number systems instead of decimal in computers?",
            choices: [
                "Decimal numbers are too large",
                "Binary matches the physical design of computer hardware",
                "Humans prefer binary",
                "Binary is more colorful"
            ],
            answer: 1
        },
        {
            text: "Which system is commonly used to represent text in computers?",
            choices: [
                "JPEG",
                "MP3",
                "ASCII",
                "RGB"
            ],
            answer: 2
        },
        {
            text: "What does ASCII stand for?",
            choices: [
                "Automated System for Coding Information",
                "American Standard Code for Information Interchange",
                "Advanced System for Computer Internet Integration",
                "Applied Standard Code for Internet Information"
            ],
            answer: 1
        },
        {
            text: "In digital images, what is a pixel?",
            choices: [
                "A sound wave",
                "A single point of color in an image",
                "A compression algorithm",
                "A type of file"
            ],
            answer: 1
        },
        {
            text: "Image resolution refers to:",
            choices: [
                "The size of the file in megabytes",
                "The number of pixels used to create an image",
                "The color format of the image",
                "The speed of the camera"
            ],
            answer: 1
        },
        {
            text: "What is metadata?",
            choices: [
                "The main content of a file",
                "A type of virus",
                "Data that describes other data",
                "A compression tool"
            ],
            answer: 2
        },
        {
            text: "What is lossy compression?",
            choices: [
                "Compression that reduces file size without losing data",
                "Compression that loses some data permanently",
                "Compression only for text files",
                "Compression that increases quality"
            ],
            answer: 1
        },
        {
            text: "What is lossless compression?",
            choices: [
                "Compression that keeps all original data",
                "Compression used only for videos",
                "Compression that removes unnecessary pixels",
                "Compression that deletes metadata"
            ],
            answer: 0
        },
        {
            text: "Why is sampling important in digital sound?",
            choices: [
                "It measures screen resolution",
                "It determines how often sound is measured per second",
                "It compresses image files",
                "It increases file size"
            ],
            answer: 1
        },
        {
            text: "Increasing the bit depth in an image allows for:",
            choices: [
                "Faster downloads",
                "Fewer pixels",
                "More possible colors",
                "Smaller file sizes"
            ],
            answer: 2
        },
        {
            text: "What is one major social impact of digitizing information?",
            choices: [
                "Computers become heavier",
                "Easier access to information worldwide",
                "Binary replaces all languages",
                "Electricity is no longer needed"
            ],
            answer: 1
        }
    ]
