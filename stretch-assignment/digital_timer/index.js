let secondTens = document.getElementById("secondTens");
let secondOnes = document.getElementById("secondOnes");
let msHundreds = document.getElementById("msHundreds");
let msTens = document.getElementById("msTens");

let secondTens_Counter = 0;
let secondOnes_Counter = 0;
let msHundreds_Counter = 0;
let msTens_Counter = 0;

window.setInterval(function() {
  msTens_Counter++;
  msTens.textContent = msTens_Counter;
  if (msTens_Counter > 9) {
    msTens_Counter = 0;
    msTens.textContent = msTens_Counter;

    msHundreds_Counter += 1;
    msHundreds.textContent = msHundreds_Counter;
    if (msHundreds_Counter >= 6) {
      msHundreds_Counter = 0;
      msHundreds.textContent = msHundreds_Counter;

      secondOnes_Counter += 1;
      secondOnes.textContent = secondOnes_Counter;
      if (secondOnes_Counter > 9) {
        secondOnes_Counter = 0;
        secondOnes.textContent = secondOnes_Counter;

        secondTens_Counter += 1;
        secondTens.textContent = secondTens_Counter;
        if ((secondTens_Counter = 1)) {
          window.clearInterval();
        }
      }
    }
  }

  console.log(msTens_Counter);
}, 10);
