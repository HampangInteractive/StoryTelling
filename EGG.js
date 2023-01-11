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
function NUT() {
    setTimeout(function(){ 
      window.location.href = "NUT.html";
}, 10);
}
function SCORE(){
    document.getElementById("EGG").style.visibility = "hidden";
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
  var e = new Audio('ArrangeTheLetters/letters_audio/E.mp3');
  var g = new Audio('ArrangeTheLetters/letters_audio/G.mp3');
  var G = new Audio('ArrangeTheLetters/letters_audio/G.mp3');
  var egg = new Audio('ArrangeTheLetters/audio/egg.mp3');
  
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

    if(draggableElementData == "e") {
      setTimeout(function() {e.play();}, 1500);
      }else if (draggableElementData == "g"){
        setTimeout(function() {g.play();}, 1500);
      }else if (draggableElementData == "G"){
        setTimeout(function() {G.play();}, 1500);
        setTimeout(function() {egg.play();}, 4900);
        setTimeout(function() {fantastic.play();}, 5900);
        setTimeout(function() {SCORE();}, 5800);;
      }
  } 
  else {
    var audio = new Audio('GAMESSTORY/TM/wrong.mp3');
    audio.play();
  }
 
}