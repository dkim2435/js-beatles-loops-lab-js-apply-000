function theBeatlesPlay(musicians, instruments) {
  const arr = [];
  for (let i=0;i<musicians.length;i++) {
    arr.push('${musicians[i]} plays ${instruments[i]}');
  }
  return arr;
}

function johnLennonFacts(facts) {
  const shoutedFacts = [];
  let i =0;
  while (i<Facts.length) {
    shoutedFacts.push('${Facts[i]}!!!')
  }
}