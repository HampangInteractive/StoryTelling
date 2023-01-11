const draggableElements = document.querySelectorAll(".draggable");
const droppableElements = document.querySelectorAll(".droppable");
draggableElements.forEach(elem => {
  elem.addEventListener("dragstart", dragStart);
});

droppableElements.forEach(elem => {
  elem.addEventListener("dragenter", dragEnter);
  elem.addEventListener("dragover", dragOver); 
  elem.addEventListener("dragleave", dragLeave); 
  elem.addEventListener("drop", drop); 
});

function dragStart(event) {
  event.dataTransfer.setData("text", event.target.id);
}
function dragEnter(event) {
  if(!event.target.classList.contains("dropped")) {
    event.target.classList.add("droppable-hover");
  }
}
function dragOver(event) {
  if(!event.target.classList.contains("dropped")) {
    event.preventDefault(); 
  }
}
function dragLeave(event) {
  if(!event.target.classList.contains("dropped")) {
    event.target.classList.remove("droppable-hover");
  }
}
function WET() {
    setTimeout(function(){ 
      window.location.href = "WET.html";
}, 10);
}

function SCORE(){
  document.getElementById("WET").style.visibility = "hidden";
  document.getElementById("SCORE").style.visibility = "visible";
  }; 
  var fantastic = new Audio('GAMESSTORY/TM/fantastic.mp3');
  function fantasticPause() {         
    if(fantastic.play) {
      fantastic.pause();
      fantastic.currentTime = 0;
    }
  }
function drop(event) {
  var w = new Audio('ArrangeTheLetters/letters_audio/W.mp3');
  var e = new Audio('ArrangeTheLetters/letters_audio/E.mp3');
  var t = new Audio('ArrangeTheLetters/letters_audio/T.mp3');
  var wet = new Audio('ArrangeTheLetters/audio/wet.mp3');


  event.preventDefault();
  event.target.classList.remove("droppable-hover");
  const draggableElementData = event.dataTransfer.getData("text"); 
  const droppableElementData = event.target.getAttribute("data-draggable-id");
  const isCorrectMatching = draggableElementData === droppableElementData;

  if(isCorrectMatching) {
    const draggableElement = document.getElementById(draggableElementData);
    event.target.classList.add("dropped");
    draggableElement.classList.add("dropped");
    draggableElement.setAttribute("draggable", "false");
    event.target.insertAdjacentHTML("afterbegin", `<i class="fa-${draggableElementData}"></i>`);
    var audio = new Audio('GAMESSTORY/TM/correct.mp3');
    audio.play();

    if(draggableElementData == "w") {
      setTimeout(function() {w.play();}, 1500);
      }else if (draggableElementData == "e"){
        setTimeout(function() {e.play();}, 1500);
      }else if (draggableElementData == "t"){
        setTimeout(function() {t.play();}, 1500);
        setTimeout(function() {wet.play();}, 4900);
        setTimeout(function() {fantastic.play();}, 6300);
        setTimeout(function() {SCORE();}, 6200);
      }
  } 
  else {
    var audio = new Audio('GAMESSTORY/TM/wrong.mp3');
    audio.play();
  }
 
}