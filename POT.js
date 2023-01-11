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
function CAN() {
    setTimeout(function(){ 
      window.location.href = "CAN.html";
}, 10);
}
function drop(event) {
  var p = new Audio('ArrangeTheLetters/letters_audio/P.mp3');
  var o = new Audio('ArrangeTheLetters/letters_audio/O.mp3');
  var t = new Audio('ArrangeTheLetters/letters_audio/T.mp3');
  var pot = new Audio('ArrangeTheLetters/audio/pot.mp3');
  
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

    if(draggableElementData == "p") {
      setTimeout(function() {p.play();}, 1500);
      }else if (draggableElementData == "o"){
        setTimeout(function() {o.play();}, 1500);
      }else if (draggableElementData == "t"){
        setTimeout(function() {t.play();}, 1800);
        setTimeout(function() {pot.play();}, 4900);
        setTimeout(function() {CAN();}, 6200);
      }
  } 
  else {
    var audio = new Audio('GAMESSTORY/TM/wrong.mp3');
    audio.play();
  }
 
}