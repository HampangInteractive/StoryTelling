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
function CAT() {
    setTimeout(function(){ 
      window.location.href = "CAT.html";
}, 10);
}
function drop(event) {
  var a = new Audio('ArrangeTheLetters/letters_audio/A.mp3');
  var n = new Audio('ArrangeTheLetters/letters_audio/N.mp3');
  var t = new Audio('ArrangeTheLetters/letters_audio/T.mp3');
  var ant = new Audio('ArrangeTheLetters/audio/ant.mp3');
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

    if(draggableElementData == "a") {
      setTimeout(function() {a.play();}, 1500);
      }else if (draggableElementData == "n"){
        setTimeout(function() {n.play();}, 1500);
      }else if (draggableElementData == "t"){
        setTimeout(function() {t.play();}, 1800);
        setTimeout(function() {ant.play();}, 4900);
        setTimeout(function() {CAT();}, 6200);
      }
  } 
  else {
    var audio = new Audio('GAMESSTORY/TM/wrong.mp3');
    audio.play();
  }
 
}