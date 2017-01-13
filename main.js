var wrestlers = {
	singles: ['Kevin Owens', 'Chris Jericho', 'Randy Orton', 'John Cena', 'Chris Benoit', 'Hulk Hogan', 'Kane', 'Undertaker', 'Shawn Michaels', 'Triple H', 'Eddie Guerrero', 'Big Show', 'Bret Hart', 'A.J. Styles', 'Brock Lesnar', 'Rey Mysterio', 'Goldberg', 'Sting', 'Ric Flair', 'Ricky Steamboat', 'Jimmy Snuka', 'The Rock', 'Edge', 'RVD', 'Batista', 'Owen Hart', 'Stone Cold', 'Kurt Angle', 'Matt Hardy', 'Jeff Hardy', 'CM Punk', 'Dusty Rhodes', 'Mick Foley', 'Andre The Giant', 'Roddy Piper', 'The Miz', 'The Ultimate Warrior', 'Booker T', 'Razor', 'Diesel', 'Lex Luger', 'Corbin', 'Rollins', 'Rusev', 'Regins', 'Zayn', 'Ziggler', 'Dean Ambrose', 'Strowman', 'Finn Balor'],
	tags: ['The Dudleys', 'Hardy Boys', 'Rated RKO', 'Edge and Christain', 'Brothers of destruction', 'The new day', 'World greatest tag team', 'The Shield', 'Prime time players', 'Jerishow', 'DX', 'Road Dog and Bill Gun', 'Too Cool', 'The Hart Foundation', 'The Steiner Brothers', 'The Road Warriors', 'Demolition', 'M&M', 'The British Bulldogs', 'Harlem Heat', 'The Outsiders', 'Two man power trip', 'The bushwhackers', 'The head shrinkers', 'Paul London & Brian Kendrick', 'APA', 'Kane and Big show', 'Booker T & Golddust', 'The Legacy', 'The Mega Powers', 'Los Guerreros', 'John Morrison & The Miz', 'Team Hell NO', 'RVD & Sabu', 'Mr.Fuji & Professor Toru Tanaka', 'The Rock N Sock Connection', 'The club', 'American Alpha', 'The USOS' ]
}

function shuffle(array) {
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

function getTournament() {
	var shuffleWrestlers = shuffle(wrestlers[process.argv[2]])
	var reducedWrestlers = shuffleWrestlers.slice(0, process.argv[3]);

for(var i=0; i<reducedWrestlers.length-1;i++) {
	console.log(reducedWrestlers[i] + ' VS ' + reducedWrestlers[i+1]);
	i++

}
}

console.log(wrestlers['singles'].length);
console.log(wrestlers['tags'].length);

getTournament();

