// Using a button, the user can play a dice game against the computer
const play = document.getElementById('play');

let win = 0;
let lose = 0;
let tie = 0;

let winCount = document.getElementById('winner');
let loseCount = document.getElementById('loser');
let tieCount = document.getElementById('tie');

// After a click on the button (`addEventListener`), the code generates two random numbers (one for the user and one for the computer) between 1 and 6 and saves them in two variables
play.addEventListener('click',
  function() {
    const playerDice = Math.floor(Math.random() * 6) + 1;
    const cpuDice = Math.floor(Math.random() * 6) + 1;

    // IF the user number is greater than the computer one, the user wins
    // ELSE IF the computer numbers is greater than the user one, the computer wins
    // ELSE the numbers are equal and the result is a tie
    if (playerDice > cpuDice) {
      alert(`Hai totalizzato ${playerDice} e il computer ha totalizzato ${cpuDice}. Hai vinto!`);
      win += 1;
      winCount.innerHTML = `${win}`;
    } else if (cpuDice > playerDice) {
      alert(`Hai totalizzato ${playerDice} e il computer ha totalizzato ${cpuDice}. Hai perso :(`);
      lose += 1;
      loseCount.innerHTML = `${lose}`;
    } else {
      alert(`Hai totalizzato ${playerDice} e il computer ha totalizzato ${cpuDice}. Pareggio... Riprova!`);
      tie += 1;
      tieCount.innerHTML = `${tie}`;
    }
});