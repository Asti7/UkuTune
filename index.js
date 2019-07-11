var numberOfButtons = document.querySelectorAll('.ukulele').length;

for (var i = 0; i < numberOfButtons; i++) {
  document.querySelectorAll('.ukulele')[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);


  });
}

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key) {

  switch (key) {
    case "g":
      var audio1 = new Audio('Sounds/G_SingleNoteUkulele_01_522.wav');
      audio1.play();
      break;

    case "c":
      var audio2 = new Audio('Sounds/C_SingleNoteUkulele_02_522.wav');
      audio2.play();
      break;

    case "e":
      var audio3 = new Audio('Sounds/E_SingleNoteUkulele_01_522.wav');
      audio3.play();
      break;

    case "a":
      var audio4 = new Audio('Sounds/A_SingleNoteUkulele_01_522.wav');
      audio4.play();
      break;
    default:

  }

}

function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
