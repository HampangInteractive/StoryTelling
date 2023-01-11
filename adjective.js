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
function drop(event) {
  var a = new Audio('ArrangeTheLetters/letters_audio/A.mp3');
  var b = new Audio('ArrangeTheLetters/letters_audio/B.mp3');
  var c = new Audio('ArrangeTheLetters/letters_audio/C.mp3');
  var d = new Audio('ArrangeTheLetters/letters_audio/D.mp3');
  var e = new Audio('ArrangeTheLetters/letters_audio/E.mp3');
  var f = new Audio('ArrangeTheLetters/letters_audio/F.mp3');
  var g = new Audio('ArrangeTheLetters/letters_audio/G.mp3');
  var h = new Audio('ArrangeTheLetters/letters_audio/H.mp3');
  var i = new Audio('ArrangeTheLetters/letters_audio/I.mp3'); 
  var j = new Audio('ArrangeTheLetters/letters_audio/J.mp3');
  var k = new Audio('ArrangeTheLetters/letters_audio/K.mp3');
  var l = new Audio('ArrangeTheLetters/letters_audio/L.mp3');
  var m = new Audio('ArrangeTheLetters/letters_audio/M.mp3');
  var n = new Audio('ArrangeTheLetters/letters_audio/N.mp3');
  var o = new Audio('ArrangeTheLetters/letters_audio/O.mp3');
  var p = new Audio('ArrangeTheLetters/letters_audio/P.mp3');
  var q = new Audio('ArrangeTheLetters/letters_audio/Q.mp3');
  var r = new Audio('ArrangeTheLetters/letters_audio/R.mp3');
  var s = new Audio('ArrangeTheLetters/letters_audio/S.mp3');
  var t = new Audio('ArrangeTheLetters/letters_audio/T.mp3');
  var u = new Audio('ArrangeTheLetters/letters_audio/U.mp3');
  var v = new Audio('ArrangeTheLetters/letters_audio/V.mp3');
  var w = new Audio('ArrangeTheLetters/letters_audio/W.mp3');
  var x = new Audio('ArrangeTheLetters/letters_audio/X.m4a');
  var y = new Audio('ArrangeTheLetters/letters_audio/Y.mp3');
  var z = new Audio('ArrangeTheLetters/letters_audio/Z.mp3');
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
      }else if (draggableElementData == "b"){
        setTimeout(function() {b.play();}, 1500);
      }else if (draggableElementData == "c"){
        setTimeout(function() {c.play();}, 1500);
      }else if (draggableElementData == "d"){
        setTimeout(function() {d.play();}, 1500);
      }else if (draggableElementData == "D"){
        setTimeout(function() {d.play();}, 1500);
      }else if (draggableElementData == "e"){
        setTimeout(function() {e.play();}, 1500);
      }else if (draggableElementData == "f"){
        setTimeout(function() {f.play();}, 1500);
      }else if (draggableElementData == "g"){
        setTimeout(function() {g.play();}, 1500);
      }else if (draggableElementData == "G"){
        setTimeout(function() {g.play();}, 1500);
      }else if (draggableElementData == "h"){
        setTimeout(function() {h.play();}, 1500);
      }else if (draggableElementData == "i"){
        setTimeout(function() {i.play();}, 1500);
      }else if (draggableElementData == "j"){
        setTimeout(function() {j.play();}, 1500);
      }else if (draggableElementData == "k"){
        setTimeout(function() {k.play();}, 1500);
      }else if (draggableElementData == "l"){
        setTimeout(function() {l.play();}, 1500);
      }else if (draggableElementData == "L"){
        setTimeout(function() {l.play();}, 1500);
      }else if (draggableElementData == "m"){
        setTimeout(function() {m.play();}, 1500);
      }else if (draggableElementData == "n"){
        setTimeout(function() {n.play();}, 1500);
      }else if (draggableElementData == "o"){
        setTimeout(function() {o.play();}, 1500);
      }else if (draggableElementData == "p"){
        setTimeout(function() {p.play();}, 1500);
      }else if (draggableElementData == "q"){
        setTimeout(function() {q.play();}, 1500);
      }else if (draggableElementData == "r"){
        setTimeout(function() {r.play();}, 1500);
      }else if (draggableElementData == "s"){
        setTimeout(function() {s.play();}, 1500);
      }else if (draggableElementData == "t"){
        setTimeout(function() {t.play();}, 1500);
      }else if (draggableElementData == "u"){
        setTimeout(function() {u.play();}, 1500);
      }else if (draggableElementData == "v"){
        setTimeout(function() {v.play();}, 1500);
      }else if (draggableElementData == "w"){
        setTimeout(function() {w.play();}, 1500);
      }else if (draggableElementData == "x"){
        setTimeout(function() {x.play();}, 1500);
      }else if (draggableElementData == "y"){
        setTimeout(function() {y.play();}, 1500);
      }else {
        setTimeout(function() {z.play();}, 1500);
      } 
  } 
  else {
    var audio = new Audio('GAMESSTORY/TM/wrong.mp3');
    audio.play();
  }
 
}