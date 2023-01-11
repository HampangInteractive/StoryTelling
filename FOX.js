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
function PIG() {
    setTimeout(function(){ 
      window.location.href = "PIG.html";
}, 10);
}
function drop(event) {
  var f = new Audio('ArrangeTheLetters/letters_audio/F.mp3');
  var o = new Audio('ArrangeTheLetters/letters_audio/O.mp3');
  var x = new Audio('ArrangeTheLetters/letters_audio/X.m4a');
  var fox = new Audio('ArrangeTheLetters/audio/fox.mp3');
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

    if(draggableElementData == "f") {
      setTimeout(function() {f.play();}, 1500);
      }else if (draggableElementData == "o"){
        setTimeout(function() {o.play();}, 1500);
      }else if (draggableElementData == "x"){
        setTimeout(function() {x.play();}, 1800);
        setTimeout(function() {fox.play();}, 4900);
        setTimeout(function() {PIG();}, 6200);
      }
  } 
  else {
    var audio = new Audio('GAMESSTORY/TM/wrong.mp3');
    audio.play();
  }
 
}