// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
const synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
const speakButton = document.querySelector('#speakButton');
let textToSpeak = '';

/* Functions
-------------------------------------------------- */
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	const utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}

/* Event Listeners
-------------------------------------------------- */
// The click event handler for the button that speaks the text contained in the above var textToSpeak
speakButton.addEventListener('click', function () {
	speakNow(textToSpeak);
});


//other buttons
// Variables

const randomPhrases = [
  ['The Turkey', 'Mom', 'Dad', 'The dog', 'My Teacher', 'The Elephant', 'The Cat'],
  ['sat on', 'ate', 'danced with', 'saw', 'doesn\'t like', 'kissed'],
  ['a funny', 'a scary', 'a goofy', 'a slimy', 'a barking', 'a fat'],
  ['goat', 'monkey', 'fish', 'cow', 'frog', 'bug', 'worm'],
  ['on the moon', 'on the chair', 'in my spaghetti', 'on the grass', 'in my shoes']
];


// Functions
function getRandomPhrase(index) {
  const phrases = randomPhrases[index];
  const randomIndex = Math.floor(Math.random() * phrases.length);
  return phrases[randomIndex];
}

function generateRandomStory() {
  textToSpeak = '';
  for (let i = 0; i < 5; i++) {
    const phrase = getRandomPhrase(i);
    textToSpeak += phrase + ' ';
  }
  document.getElementById('storyOutput').textContent = textToSpeak;
}

function speakNow(string) {
  const utterThis = new SpeechSynthesisUtterance(string);
  synth.speak(utterThis);
}

// Event Listeners
speakButton.addEventListener('click', function () {
  speakNow(textToSpeak);
});

document.getElementById('btn1').addEventListener('click', function () {
  const phrase = getRandomPhrase(0);
  textToSpeak += phrase + ' ';
  speakNow(phrase);
});

document.getElementById('btn2').addEventListener('click', function () {
  const phrase = getRandomPhrase(1);
  textToSpeak += phrase + ' ';
  speakNow(phrase);
});

document.getElementById('btn3').addEventListener('click', function () {
  const phrase = getRandomPhrase(2);
  textToSpeak += phrase + ' ';
  speakNow(phrase);
});

document.getElementById('btn4').addEventListener('click', function () {
  const phrase = getRandomPhrase(3);
  textToSpeak += phrase + ' ';
  speakNow(phrase);
});

document.getElementById('btn5').addEventListener('click', function () {
  const phrase = getRandomPhrase(4);
  textToSpeak += phrase + ' ';
  speakNow(phrase);
});

document.getElementById('btn6').addEventListener('click', function () {
  generateRandomStory();
});

document.getElementById('btnReset').addEventListener('click', function () {
  textToSpeak = '';
  document.getElementById('storyOutput').textContent = '';
});

