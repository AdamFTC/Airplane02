var username = prompt('Enter your name');
alert('Very well, ' + username + ', Shall we play a game?');
console.log('The user\s name is ' + username);
var score = 0;

var ans1 = prompt('Do you really want to play?');
console.log('The user answered the first question with:' + ans1);
if(ans1 == 'yes') {
  alert('The state knew it could count on you!');
  score += 1;
  alert('You got ' + score + ' points!')
}
else {
  alert('Why are you opposed to the people\'s game? You had better play the game or else you will be sent to Siberia :) ');
  score -= 13;
  alert('You got ' + score + ' points.');
}
if(score < 1) {
  alert('You had better show your stronger loyalty next time comrad.');
}

var ans2 = prompt('What country is Crimea in?');
if(ans2 == 'Russia' || ans2 == 'USSR' || ans2 == 'russia') {
  alert('Excellent! Александр Pistoletov approves!!!');
  score += 14;
  alert('You got ' + score + ' points.');
}
else {
  alert('low score for 2nd question');
  score +=0;
  alert('You must educate to become stronk');
  alert('Oh yeah, you didnt get any points for that one.');
}
var ans3 = prompt('What country is making into Frogfoot su-27?');
if(ans3 == 'russia' || ans3 == 'Russia' || ans3 == 'ussr' || ans3 == 'USSR') {
alert('Korrect!');
score += 20;
alert('You got ' + score + ' points');
}
else {
  alert('Good news! You has won lottery big enough to buy points and go on vacation@');
  alert('But vacation is mandatory...');
  score += 17;
  alert('...and is in Donetsk. Gift of Jellied Perch and AKM is for you.');
}
