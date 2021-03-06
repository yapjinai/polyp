// const PX = "px";
//
// document.addEventListener('DOMContentLoaded', () => {
//   const back = document.querySelector('.back');
//   console.log("hi")
//   back.onload = () => {
//     const ceiling = document.querySelector('.ceiling');
//     const left = document.querySelector('.left');
//     const floor = document.querySelector('.floor');
//     const right = document.querySelector('.right');
//
//     const backCoords = back.getBoundingClientRect();
//
//     // ceiling.style.top = (backCoords.top) + PX;
//     ceiling.style.top = "-27px";
//     ceiling.style.left = (backCoords.left) + PX;
//     ceiling.style.transform = "perspective(379px) rotateY(0deg) rotateX(-78deg)";
//     ceiling.style.transformOrigin = "bottom";
//
//     floor.style.bottom = "-27px";
//     floor.style.left = (backCoords.left) + PX;
//     floor.style.transform = "perspective(379px) rotateY(0deg) rotateX(78deg)";
//     floor.style.transformOrigin = "top";
//
//     left.style.top = (backCoords.top) + PX;
//     left.style.left = "210px";
//     left.style.transform = "perspective(369px) rotateY(53deg) rotateX(0deg)";
//     left.style.transformOrigin = "right";
//
//     right.style.top = (backCoords.top) + PX;
//     right.style.right = "210px";
//     right.style.transform = "perspective(369px) rotateY(-53deg) rotateX(0deg)";
//     right.style.transformOrigin = "left";
// ;
//   }
// })
// //
// // function makeDraggable(elmnt, dragger) {
// //   let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0
// //
// //   dragger.addEventListener('mousedown', dragMouseDown)
// //
// //   function dragMouseDown(e) {
// //     e.preventDefault()
// //     // get the mouse cursor position at startup:
// //     pos3 = e.clientX
// //     pos4 = e.clientY
// //     document.addEventListener('mouseup', closeDragElement)
// //     // call a function whenever the cursor moves:
// //     document.addEventListener('mousemove', elementDrag)
// //   }
// //
// //   function elementDrag(e) {
// //     e.preventDefault()
// //     // calculate the new cursor position:
// //     pos1 = pos3 - e.clientX
// //     pos2 = pos4 - e.clientY
// //     pos3 = e.clientX
// //     pos4 = e.clientY
// //     // set the element's new position:
// //     elmnt.style.top = (elmnt.offsetTop - pos2) + "px"
// //     elmnt.style.left = (elmnt.offsetLeft - pos1) + "px"
// //   }
// //
// //   function closeDragElement() {
// //     /* stop moving when mouse button is released:*/
// //     document.removeEventListener('mouseup', closeDragElement)
// //     document.removeEventListener('mousemove', elementDrag)
// //   }
