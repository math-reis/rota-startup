const questions = [
  {
    question: "Você poderia falar um pouco sobre você?",
    example:
      "",
  },
  {
    question: "Como você ficou sabendo da vaga?",
    example:
      "",
  },
  {
    question: "O que você sabe sobre a empresa?",
    example:
      "",
  },
];

const randomQuest = () => {
  let random = questions[Math.floor(Math.random() * questions.length)];
  document.getElementById("question").innerHTML = random.question;
  document.getElementById("example").innerHTML = random.example;
};
