const questions = [
  {
    question: "What is your name? How old are you? How old are you?",
    example: "Matheus",
  },
  {
    question: "How old are you?",
    example: "27",
  },
  {
    question: "Where are you from?",
    example: "Berlin Where are you from? Where are you from?",
  },
];

const randomQuest = () => {
  let random = questions[Math.floor(Math.random() * questions.length)];
  document.getElementById("question").innerHTML = random.question;
  document.getElementById("example").innerHTML = random.example;
};
