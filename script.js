// JS File

let movePiece = document.getElementById("blackRook1");
if (movePiece){
        const move = new Moveable(document.body, {
            target: document.querySelector("blackRook1"),
            draggable: true,
          });
          move.on("drag", ({ target, transform }) => {
            target.style.transform = transform;
          });
    };