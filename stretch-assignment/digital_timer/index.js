let secondTens = document.getElementById("secondTens");
let secondOnes = document.getElementById("secondOnes");
let msHundreds = document.getElementById("msHundreds");
let msTens = document.getElementById("msTens");

let secondTens_Counter = 0;
let secondOnes_Counter = 0;
let msHundreds_Counter = 0;
let msTens_Counter = 0;

let red_text = document.createElement("style");
red_text.type = "text/css";
red_text.innerHTML = ".redText {color: red;}";
document.getElementsByTagName("head")[0].appendChild(red_text);

let timerbtns = document.querySelectorAll(".digit");

function timer() {
  msTens_Counter++;
  msTens.textContent = msTens_Counter;
  if (msTens_Counter > 9) {
    msTens_Counter = 0;
    msTens.textContent = msTens_Counter;

    msHundreds_Counter += 1;
    msHundreds.textContent = msHundreds_Counter;
    if (msHundreds_Counter > 9) {
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
          timerbtns.forEach(btn => btn.classList.add("redText"));
          clearInterval(timerCB);
        }
      }
    }
  }
  console.log(msTens_Counter);
}

let timerCB = setInterval(timer, 10);
