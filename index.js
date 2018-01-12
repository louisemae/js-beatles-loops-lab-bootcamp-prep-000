function theBeatlesPlay(musician, instrument) {
  var array = [];
  for (var i=0; i<musician.length; i++) {
    array.push(`${musician[i]} plays ${instrument[i]}`);
  }
  return array;
}

function johnLennonFacts(facts) {
  var i = facts.length;
  while(i>0) {
    facts[i-1].push(`!!!`);
    ++i;
  }
}

function iLoveTheBeatles(number) {
  var array = [];
  do {
    array.push(`I love the Beatles!`);
    ++number;
  } while (number<15);
  return array;
}