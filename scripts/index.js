// const cardsContainer = document.querySelector(".cards");
// const cardsContainerInner = document.querySelector(".cards__inner");
// const cards = Array.from(document.querySelectorAll(".card"));
// const overlay = document.querySelector(".overlay");

// const applyOverlayMask = (e) => {
//   const overlayEl = e.currentTarget;
//   const x = e.pageX - cardsContainer.offsetLeft;
//   const y = e.pageY - cardsContainer.offsetTop;

//   overlayEl.style = `--opacity: 1; --x: ${x}px; --y:${y}px;`;
// };

// const observer = new ResizeObserver((entries) => {
//   entries.forEach((entry) => {
//     const cardIndex = cards.indexOf(entry.target);
//     let width = entry.borderBoxSize[0].inlineSize;
//     let height = entry.borderBoxSize[0].blockSize;

//     if (cardIndex >= 0) {
//       overlay.children[cardIndex].style.width = `${width}px`;
//       overlay.children[cardIndex].style.height = `${height}px`;
//     }
//   });
// });

// const initOverlayCard = (cardEl) => {
//   const overlayCard = document.createElement("div");
//   overlayCard.classList.add("card");
//   overlay.append(overlayCard);
//   observer.observe(cardEl);
// };

// cards.forEach(initOverlayCard);
// document.body.addEventListener("pointermove", applyOverlayMask);

// Hamburger

function toggleHam() {
  var menu_items = document.getElementById("menu_items");

  if (menu_items.style.display == "none" || menu_items.style.display == "") {
    menu_items.style.display = "flex";
  } else {
    menu_items.style.display = "none";
  }
}
