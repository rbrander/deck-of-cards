
const card = document.getElementById('card');

const Y_FACTOR = 10;
const X_FACTOR = 10;

const emulate = (label) => (e) => {
  switch (label) {
    case 'dragEnd':
      /*
      const currX = e.pageX;
      const currY = e.pageY;
      const newX = ~~(currX / X_FACTOR) * X_FACTOR;
      const newY = ~~(currY / Y_FACTOR) * Y_FACTOR;
      card.style.left = `${newX}px`;
      card.style.top = `${newY}px`;
      console.log(`(${card.style.left}, ${card.style.top})`)
      */
      console.log(e.screenX, e.screenY);
      card.style.left = `${e.screenX}px`;
      card.style.top = `${e.screenY}px`;
      break;
    case 'drag':
      break;
    case 'dragStart':
      console.log(e);
      break;
    case 'drop':
      break;
    default:
      break;
  }
}

//card.addEventListener('dragstart', emulate('dragStart'));
//card.addEventListener('drag', emulate('drag'));
card.addEventListener('dragend', emulate('dragEnd'));
//card.addEventListener('drop', emulate('drop'));
