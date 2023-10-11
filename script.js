const hideBoxesButton = document.getElementById('hideBoxesButton');
const hideBoxesButton2 = document.getElementById('hideBoxesButton2');
const hideBoxesButton3 = document.getElementById('hideBoxesButton3');
const boxes = document.querySelectorAll('.box');
const boxes2 = document.querySelectorAll('.box2');
const boxes3 = document.querySelectorAll('.box3');

// Variable to keep track of the currently open box
let currentOpenBox = null;

// Function to hide all boxes
function hideAllBoxes() {
  boxes.forEach(box => {
    box.classList.add('hide-boxes');
  });
  boxes2.forEach(box2 => {
    box2.classList.add('hide-boxes2');
  });
  boxes3.forEach(box3 => {
    box3.classList.add('hide-boxes3');
  });
  currentOpenBox = null;
}

// Initialize by hiding all boxes
hideAllBoxes();

hideBoxesButton.addEventListener('click', () => {
  if (currentOpenBox !== boxes) {
    hideAllBoxes();
    boxes.forEach(box => {
      box.classList.remove('hide-boxes');
    });
    currentOpenBox = boxes;
  } else {
    hideAllBoxes();
  }
});

hideBoxesButton2.addEventListener('click', () => {
  if (currentOpenBox !== boxes2) {
    hideAllBoxes();
    boxes2.forEach(box2 => {
      box2.classList.remove('hide-boxes2');
    });
    currentOpenBox = boxes2;
  } else {
    hideAllBoxes();
  }
});

hideBoxesButton3.addEventListener('click', () => {
  if (currentOpenBox !== boxes3) {
    hideAllBoxes();
    boxes3.forEach(box3 => {
      box3.classList.remove('hide-boxes3');
    });
    currentOpenBox = boxes3;
  } else {
    hideAllBoxes();
  }
});
