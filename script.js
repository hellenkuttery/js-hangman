const myWord=document.getElementById("word");
const correctLetter=[s,a];
const worngLetters=[];

function RandomWord(){
    const words=["javascript","scratch","html","css"];
    return words[Math.floor(Math.random()*words.length)];
}

function display(){
    const selectedWord=RandomWord();
    console.log(selectedWord);

    myWord.innerHTML=`${selectedWord.split("").map(letter=>`
        <div class="letter">
            ${letter}
        </div>
        `).join("")}`
}

display()