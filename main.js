const wrestlers = require('./wrestlers.json');

const DEFAULT_ENTRANT_TYPE = 'singles';
const DEFAULT_NUMBER_OF_ENTRANT = 32;

function shuffleArray(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function getShuffledEntrants(type) {
	return shuffleArray(wrestlers[type]);
}

function getCorrectNumberOfEntrants(entrants,numberOfEntrants){
	return entrants.slice(0, numberOfEntrants);
}

function printMatch(entrantOne, entrantTwo) {
	console.log(`${entrantOne} VS ${entrantTwo}`);
}


function getTournament() {
	const entrantType = process.argv[2] || DEFAULT_ENTRANT_TYPE;
	const numberOfEntrants = process.argv[3] || DEFAULT_NUMBER_OF_ENTRANT;

	const shuffledEntrants = getShuffledEntrants(entrantType);
	const entrants = getCorrectNumberOfEntrants(shuffledEntrants, numberOfEntrants)


	for(var i=0; i<entrants.length-1;i++) {
		printMatch(entrants[i], entrants[i+1]);
		i++;
	}	
}

getTournament();

