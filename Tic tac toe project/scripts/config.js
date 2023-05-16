function openPlayerConfig(event) {
  editedPlayer = +event.target.dataset.playerid;//dataset,evet.target ,data attribute
  playerConfigOverlayElement.style.display = "block";
  backdropElement.style.display = "block";
}

function closePlayerConfig() {
  playerConfigOverlayElement.style.display = "none";
  backdropElement.style.display = "none";
  formElement.firstElementChild.classList.remove("error");
  errorsOutputElement.display = "none";
  formElement.firstElementChild.lastElementChild.value = "";
}

function savePlayerConfig(event) {
  event.preventDefault();//revise
  const formData = new FormData(event.target);
  const enteredPlayername = formData.get("playername"); //revise form data and trim removes the excess white space inside a string
  if (!enteredPlayername ) {
    // enteredplayername === ''\
    event.target.firstElementChild.classList.add("error");
    errorsOutputElement.textContent = "please enter a valid name!";
    return;
 }
 const updatedPlayerDataElement = document.getElementById('player-' + editedPlayer +"-data");
 updatedPlayerDataElement.children[1].textContent = enteredPlayername//children gives the array of the elments as children of the selected element

 if (editedPlayer === 1) {
  players[0].name = enteredPlayername;
 }else {
  players[1].name = enteredPlayername;
 }
 closePlayerConfig();
}

