function randomBackgroundImage() {
  var numberOfBackgrounds = 5 // number of backgrounds avalible to choose from

  var randomNumber = Math.floor(Math.random() * numberOfBackgrounds) + 1;  // getting a random number from 1-5

  document.body.style.backgroundImage = "url('assets/backgrounds/background-" + randomNumber + ".png')"; // sets the background image of the body to being the randomly selected background
}
