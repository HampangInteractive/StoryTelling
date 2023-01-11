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
function SCORE(){
    document.getElementById("SIT").style.visibility = "hidden";
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
  var s = new Audio('ArrangeTheLetters/letters_audio/S.mp3');
  var i = new Audio('ArrangeTheLetters/letters_audio/I.mp3');
  var t = new Audio('ArrangeTheLetters/letters_audio/T.mp3');
  var sit = new Audio('ArrangeTheLetters/audio/sit.mp3');

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

    if(draggableElementData == "s") {
        setTimeout(function() {s.play();}, 1500);
        }else if (draggableElementData == "i"){

          setTimeout(function() {i.play();}, 1500);
        }else if (draggableElementData == "t"){
          setTimeout(function() {t.play();}, 1500);
          setTimeout(function() {sit.play();}, 4900);
          setTimeout(function() {fantastic.play();}, 5900);
          setTimeout(function() {SCORE();}, 5800);
        }
  } 
  else {
    var audio = new Audio('GAMESSTORY/TM/wrong.mp3');
    audio.play();
  }
 
}