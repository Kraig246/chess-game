function onDragStart(event) {
  event
    .dataTransfer
    .setData('text/plain', event.target.id);
}

function allowDrop(event) {
  event.preventDefault();
}

function drop(event) {
  const id = event
    .dataTransfer
    .getData('text');

    const draggableElement = document.getElementById(id);
    const white = event.target;
    white.appendChild(draggableElement);

    const black = event.target;
    black.appendChild(draggableElement);

    event
    .dataTransfer
    .clearData();
}
