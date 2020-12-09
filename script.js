const item = document.querySelector("#whitePawn1");

document.addeventListener("dragstart", dragstart);



function dragstart(e) {
  console.log('drag starts...');
  e.dataTransfer.setData("text/plain", e.target.id);
}

const check = document.querySelectorAll(".white");

check.forEach(white => {
  white.addEventlistener('dragenter', dragEnter)
  white.addEventlistener('dragover', dragOver);
  white.addEventlistener('dragleave', dragLeave);
  white.addEventlistener('drop', drop)
});



function dragEnter(e) {
  e.preventDefault();
  e.target.classList.add('drag-over');
}

function dragOver(e) {
  e.target.classList.remove('drag-over');
}

function drop(e) {
  e.target.classList.remove('drag-over');
}

const id = e.dataTransfer.getData('text/plain');
const draggable = document.getElementById(id);

e.target.appendChild(draggable);
