const myWord=document.getElementById("word");
const popup=document.getElementById("popup-container");
const myMessage=document.getElementById("message")
const wrongLettersArray=document.getElementById("wrong-letters")
const correctLetters=['t','a','j','c','v','s','p','r','i'];
const wrongLetters=[];


function RandomWord(){
    const words=["javascript","scratch","html","java"];
    return words[Math.floor(Math.random()*words.length)];
}

function updateWrongLetters(){
   
    wrongLettersArray.innerHTML=`

    ${wrongLetters.length>0 ? `<h3>Hatalı Harfler</h3>`:""}    
    ${wrongLetters.map(letter=>`<span>${letter}</span>`)}`
}


const selectedWord=RandomWord();
function display(){
    
    console.log(selectedWord);

    myWord.innerHTML=`${selectedWord.split("").map(letter=>`
        <div class="letter">
            ${correctLetters.includes(letter) ? letter : "" }
        </div>
        `).join("")}`;

 const findWord=myWord.innerText.replace(/\n/g,'')
    console.log(findWord)
       if (selectedWord===findWord){
        popup.style.display="flex";
        myMessage.innerText="Tebrikler Kazandınız"
       }
}

window.addEventListener("keydown",function(e){
    // Basılan keycode görme için olan 
    // console.log(e.key);
    // console.log(e.keyCode)

    if (e.keyCode >=65 && e.keyCode <=90 ){
       const letter=e.key;

       if (selectedWord.includes(letter)){
        if ( correctLetters.includes(letter)){
            correctLetters.push(letter);
            display();
        }
        else{
          console.log("Bu harfi zaten ekledin")
        }
       
        } else {
            if (!wrongLetters.includes(letter)){
                wrongLetters.push(letter)
                console.log("Hatalı harfler",e.key);
                updateWrongLetters();
            }
       }
    }

    
})

display()
