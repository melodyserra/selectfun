var humanScore = 0;
var computerScore = 0;
var computerPlay = 'rock';

// Each time you want to get the computer's play, call the getComputerPlay function. Like so: getComputerPlay();
function getComputerPlay() {
  var plays = ['rock', 'paper', 'scissors'];
  computerPlay = plays[Math.floor(Math.random() * plays.length)];
}

function play(humanPlay) {

  // Call the getComputerPlay function to generate a random computer choice
  // and save it to the computerPlay variable.
  getComputerPlay();

  // For a best of 3 version
  if (humanScore < 3 && computerScore < 3 ){
    console.log("You played " + humanPlay + ". The bot played " + computerPlay + ".");

    if (humanPlay === computerPlay) {
        console.log('You tied. :|');

    } else if (humanPlay === 'paper' && computerPlay === 'rock' ||
               humanPlay === 'rock' && computerPlay === 'scissors' ||
               humanPlay === 'scissors' && computerPlay === 'paper') {

      console.log('You win! :)');
      humanScore += 1;

    } else {
      console.log('You lose! :(');
      computerScore += 1;
    }

    console.log('You have ' + humanScore + ' points');
    console.log('The bot has ' + computerScore + ' points');
    if (humanScore === 3) {
      console.log("You are the champion!");
    }

    if (computerScore === 3) {
      console.log("The bot is the champion!");
    }
  }

}

play('rock');
play('paper');
play('paper');
play('paper');
play('scissors');
