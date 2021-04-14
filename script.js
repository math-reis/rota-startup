const questions = [
  {
    question: "Você poderia falar um pouco sobre você?",
    example:
      "De forma sucinta e objetiva, relate as suas experiências pessoais e profissionais que sejam pertinentes para o cargo. Evite divagar sobre assuntos menos relevantes.",
  },
  {
    question: "Como você ficou sabendo da vaga?",
    example:
      "Caso tenha descoberto a vaga através de um anúncio ou site, conte o que te chamou atenção e por que você se interessou por ela. Caso tenha sido um indicação, mencione quem a indicou.",
  },
  {
    question: "O que você sabe sobre a nossa empresa?",
    example:
      "Tenha a certeza de estudar antecipadamente sobre a empresa. Conheça a sua missão, os seus objetivos e seus valores, e demonstre o quanto você está alinhado com os mesmos. Se for preciso, entre em contato com a própria empresa ou com seus funcionários para conhecê-la melhor.",
  },
  {
    question: "Por que você quer essa vaga?",
    example:
      "Demonstre conhecimento e interesse pela vaga e pela empresa, e deixe claro o porquê delas serem excelentes oportunidades para você.",
  },
  {
    question: "Por que devemos contratar você?",
    example:
      "Demonstre por que você é a pessoa certa para o cargo, e por que será um bom investimento para a empresa. Mostre que você não apenas pode fazer o trabalho proposto, mas que também o pode fazer de maneira excelente e alinhada com a sua cultura.",
  },
  {
    question: "Quais são os seus pontos fortes?",
    example:
      "Reflita e fale sobre os seus reais pontos fortes e relevantes para o cargo. Não menospreze as suas capacidades, mas também evite mencionar qualidades que você não possui.",
  },
  {
    question: "Quais são seus pontos fracos?",
    example:
      "Seja honesto e autoconsciente. Mencione os seus reais pontos fracos, e deixe claro que você pode e está se esforçando para melhorá-los. Evite exageros, tanto para mais quanto para menos.",
  },
  {
    question: "Qual é o seu emprego dos sonhos?",
    example:
      "Fale sobre as suas ambições e objetivos futuros, mas evite manifestar desinteresse pelo cargo atual. Mostre que, mesmo tendo outros sonhos, atualmente você está totalmente focado e alinhado com os valores e objetivos da empresa.",
  },
  {
    question: "Você está se candidatando a outras vagas?",
    example:
      "Seja sincero, mas evite demonstrar falta de foco e interesse pela empresa. Caso tenha se candidatado a outras vagas, identifique os pontos em comum entre elas, e deixe claro que você está explorando vagas do mesmo segmento.",
  },
  {
    question: "Por que você está deixando seu emprego atual?",
    example:
      "Evite falar de forma negativa sobre o seu atual ou antigo emprego. O melhor é demonstrar o seu desejo de evoluir, evidenciando que essa é uma boa oportunidade para isso. Deixe claro que a vaga pretendida é mais adequada para você do que a sua posição atual ou anterior.",
  },
  {
    question: "Por que você foi demitido?",
    example:
      "Não é necessário dar detalhes sobre a sua demissão, mas é preciso ser honesto na resposta. Se possível, identifique os pontos positivos que você obteve com a experiência, e demonstre que você está continuamente evoluindo com os seus erros.",
  },
  {
    question: "",
    example: "",
  },
  {
    question: "",
    example: "",
  },
  {
    question: "",
    example: "",
  },
  {
    question: "",
    example: "",
  },
  {
    question: "",
    example: "",
  },
  {
    question: "",
    example: "",
  },
  {
    question: "",
    example: "",
  },
  {
    question: "",
    example: "",
  },
  {
    question: "",
    example: "",
  },
  {
    question: "",
    example: "",
  },
  {
    question: "",
    example: "",
  },
  {
    question: "",
    example: "",
  },
  {
    question: "",
    example: "",
  },
  {
    question: "",
    example: "",
  },
  {
    question: "",
    example: "",
  },
  {
    question: "",
    example: "",
  },
  {
    question: "",
    example: "",
  },
  {
    question: "",
    example: "",
  },
  {
    question: "",
    example: "",
  },
  {
    question: "",
    example: "",
  },
  {
    question: "",
    example: "",
  },
  {
    question: "",
    example: "",
  },
];

const randomQuest = () => {
  let random = questions[Math.floor(Math.random() * questions.length)];
  document.getElementById("question").innerHTML = random.question;
  document.getElementById("example").innerHTML = random.example;
};
