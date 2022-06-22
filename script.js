const myWord = document.getElementById("word");
const popup = document.getElementById("popup-container");
const myMessage = document.getElementById("success-message");
const message=document.getElementById("message")
const wrongLettersArray = document.getElementById("wrong-letters");
const items = document.querySelectorAll(".item");
const btn = document.getElementById("playAgain");
let selectedWord = RandomWord();
const correctLetters = [];
const wrongLetters = [];

function RandomWord() {
  const words = ["javascript", "scratch", "html", "java"];
  return words[Math.floor(Math.random() * words.length)];
}
function display() {
    console.log(selectedWord);
  
    myWord.innerHTML = `
      ${selectedWord
        .split("")
        .map(
          (letter) => `
          <div class="letter">
              ${correctLetters.includes(letter) ? letter : ""}
          </div>
      `
        )
        .join("")}    
  `;
  
    const findWord = myWord.innerText.replace(/\n/g, "");
  
    if (selectedWord === findWord) {
      popup.style.display = "flex";
      myMessage.innerText = "Tebrikler Kazandınız";
    }
  }

function updateWrongLetters() {
  wrongLettersArray.innerHTML = `
    ${wrongLetters.length > 0 ? `<h3>Hatalı Harfler</h3>` : " "}    
    ${wrongLetters.map((letter) => `<span>${letter}</span>`)}`;

  items.forEach((item, index) => {
    const error = wrongLetters.length;
    if (index < error) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
  if (wrongLetters.length === items.length) {
    popup.style.display = "flex";
    myMessage.innerText = "Kaybettiniz";
  }
}

function displayMessage() {    
    message.classList.add('show');

    setTimeout(function() {
        message.classList.remove('show');
    }, 2000);
}

window.addEventListener("keydown", function (e) {
  // Basılan keycode görme için olan
  // console.log(e.key);
  // console.log(e.keyCode)

  if (e.keyCode >= 65 && e.keyCode <= 90) {
    const letter = e.key;

    if (selectedWord.includes(letter)) {
      if (!correctLetters.includes(letter)) {
        correctLetters.push(letter);
        console.log(correctLetters);
        display();
      } else {
        console.log("Bu harfi zaten ekledin");
      }
    } else {
      if (!wrongLetters.includes(letter)) {
        wrongLetters.push(letter);
        console.log("Hatalı harfler", e.key);
        updateWrongLetters();
      }
    }
  }
});

btn.addEventListener("click", function () {
    correctLetters.splice(0);
    wrongLetters.splice(0);
  
    selectedWord = RandomWord();
    display();
    updateWrongLetters();
    popup.style.display = "none";
  });

display();
