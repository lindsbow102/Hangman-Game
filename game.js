//Random word is selected and exported
var wordsToGuess = ["shooting star", "Saturn", "black hole", "Jupiter", "Milky Way", "observatory", "dwarf planet", "Hubble telescope", "supernova", "astronaut", "solar eclipse", "lunar eclipse", "gravity", "asteroid", "galaxy"];
var randoIndex = Math.floor(Math.random() * wordsToGuess.length);
var randoWord = wordsToGuess[randoIndex];
exports.randoWord = randoWord;