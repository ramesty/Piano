
// Continually listens to see if a key is pressed, when it is pressed then
// it checks if it is a valid key. If it is then we call seperate

document.addEventListener("keypress", function(event) {
  var note = event.key;
  console.log(note);
  seperate(note);
});

for(var i = 0; i < document.querySelectorAll(".note").length; i++){
  document.querySelectorAll(".note")[i].addEventListener("click", function(){
    // this.style.color = "white";
    // console.log(event.charCode);

    var note = this.innerHTML;
    seperate(note);
  });
}

function pressAnimation(currentKey){
  var currentNote = document.querySelector("." + currentKey);
  currentNote.classList.add("pressed");
  setTimeout(function(){
    currentNote.classList.remove("pressed")
  }, 300);
}

// seperate checks to see which key was pressed, and calls the function
// that matches that specific key.
function seperate(note){
  switch(note){
    case "z":
      playNote('c');
      pressAnimation('c');
      break;

    case "x":
      playNote('d');
      pressAnimation('d');
      break;

    case "c":
      playNote('e');
      pressAnimation('e');
      break;

    case "v":
      playNote('f');
      pressAnimation('f');
      break;

    case "b":
      playNote('g');
      pressAnimation('g');
      break;

    case "n":
      playNote('a');
      pressAnimation('a');
      break;

    case "m":
      playNote('b');
      pressAnimation('b');
      break;


    // sharps
    case "s":
      playNote('Cs');
      pressAnimation('cs');
      break;
    
    case "d":
      playNote('Ds');
      pressAnimation('ds');
      break;
    
    case "g":
      playNote('Fs');
      pressAnimation('fs');
      break;
  
    case "h":
      playNote('Gs');
      pressAnimation('gs');
      break;
    
    case "j":
      playNote('As');
      pressAnimation('as');
      break;

  }
}

// Audio functions that play a specific sound whenever they are called
function playNote(note){
  var audio = new Audio('sounds/' + note + '.wav');
  audio.play();
  // document.querySelector(".c").classList.add(".pressed");
}

// function dnote(){
//   var audio = new Audio('sounds/DnotePiano.wav');
//   audio.play();
// }

// function enote(){
//   var audio = new Audio('sounds/EnotePiano.wav');
//   audio.play();
// }

// function fnote(){
//   var audio = new Audio('sounds/FnotePiano.mp3');
//   audio.play();
// }

// function gnote(){
//   var audio = new Audio('sounds/GnotePiano.wav');
//   audio.play();
// }

// function anote(){
//   var audio = new Audio('sounds/AnotePiano.mp3');
//   audio.play();
// }

// function bnote(){
//   var audio = new Audio('sounds/BnotePiano.wav');
//   audio.play();
// }
