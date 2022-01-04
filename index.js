let numberOfDrumButtons = document.querySelectorAll(".drum").length;

/**
 * Configures all the buttons
 * Detecting button press
 */
for (let i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    let buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

/**
 * Detecting keyboard press
 */
document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      let ahai1 = new Audio("sounds/ahai1.wav");
      ahai1.play();
      break;
    case "a":
      let ahai2 = new Audio("sounds/ahai2.wav");
      ahai2.play();
      break;
    case "s":
      let ahai3 = new Audio("sounds/ahai3.wav");
      ahai3.play();
      break;
    case "d":
      let bwah = new Audio("sounds/bwah.wav");
      bwah.play();
      break;
    case "j":
      let wowzers = new Audio("sounds/wowzers.wav");
      wowzers.play();
      break;
    case "k":
      let snorkelKing = new Audio("sounds/snorkelking.wav");
      snorkelKing.play();
      break;
    case "l":
      let gasm1 = new Audio("sounds/gasm1.wav");
      gasm1.play();
      break;
    default:
      console.log(buttonInnerHTML);
  }
}

function buttonAnimation(currentKey) {
  let activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
