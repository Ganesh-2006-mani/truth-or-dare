const output = document.getElementById("output");
const levelSelect = document.getElementById("level");

const truths = {
  easy: [
    "What is your favorite color?",
    "Who is your best friend?",
    "What is your favorite food?"
  ],
  medium: [
    "Have you ever lied to your parents?",
    "Who was your first crush?",
    "What is your biggest fear?"
  ],
  hard: [
    "Have you ever cheated in an exam?",
    "What is your biggest secret?",
    "Who do you secretly like?"
  ]
};

const dares = {
  easy: [
    "Clap 10 times.",
    "Smile for 30 seconds.",
    "Do 5 jumping jacks."
  ],
  medium: [
    "Sing a song loudly.",
    "Dance for 30 seconds.",
    "Act like a monkey."
  ],
  hard: [
    "Do 20 squats.",
    "Imitate a celebrity.",
    "Talk in robot voice for 1 minute."
  ]
};

function getTruth() {
  const level = levelSelect.value;
  const list = truths[level];
  const random = Math.floor(Math.random() * list.length);
  output.innerText = "TRUTH: " + list[random];
}

function getDare() {
  const level = levelSelect.value;
  const list = dares[level];
  const random = Math.floor(Math.random() * list.length);
  output.innerText = "DARE: " + list[random];
}
