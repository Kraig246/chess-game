function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", "whitePawn1");
}

function drop(ev) {
  ev.preventDefault();
  let data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.querySelector("#whitePawn1"));
}

function allowDrop1(ev) {
  ev.preventDefault();
}

function drag1(ev) {
  ev.dataTransfer.setData("text", "whitePawn2");
}

function drop1(ev) {
  ev.preventDefault();
  let data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.querySelector("#whitePawn2"));
}
