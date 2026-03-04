const truths = [
  "What is your biggest fear?",
  "Have you ever lied to your best friend?",
  "What is your most embarrassing moment?",
  "Who was your first crush?",
  "Have you ever cheated in an exam?",
  "What is a secret no one knows about you?",
  "What is your biggest regret?",
  "Who do you trust the most?",
  "Have you ever broken someone’s heart?",
  "What is the last thing you searched on Google?",
  "What is your worst habit?",
  "Have you ever been caught doing something wrong?",
  "Who is the person you hate the most?",
  "What is the weirdest dream you’ve had?",
  "What is the biggest lie you told your parents?",
  "Who do you talk to the most?",
  "Have you ever stolen anything?",
  "What is something you’re ashamed of?",
  "Who do you admire the most?",
  "What is your biggest insecurity?"
];

const dares = [
  "Do 10 push-ups.",
  "Sing a song loudly.",
  "Dance for 30 seconds.",
  "Speak without closing your mouth for 1 minute.",
  "Act like a monkey for 20 seconds.",
  "Send a funny emoji to your last chat.",
  "Drink a glass of water without using your hands.",
  "Spin around 5 times and walk straight.",
  "Clap for 1 minute continuously.",
  "Do 15 jumping jacks.",
  "Say the alphabet backwards.",
  "Imitate a celebrity.",
  "Talk in a robot voice for 1 minute.",
  "Balance on one foot for 30 seconds.",
  "Pretend to cry like a baby.",
  "Do 20 squats.",
  "Whistle your favorite song.",
  "Write your name in the air with your finger.",
  "Do a funny face and hold it for 10 seconds.",
  "Say 5 good things about the person next to you."
];

function getTruth() {
  const randomIndex = Math.floor(Math.random() * truths.length);
  document.getElementById("output").innerText = truths[randomIndex];
}

function getDare() {
  const randomIndex = Math.floor(Math.random() * dares.length);
  document.getElementById("output").innerText = dares[randomIndex];
}
