const balloonEl = document.querySelector('.ballon');
const styleSheet = new CSSStyleSheet();

// console.dir(boxEl);
// console.dir(balloonEl);

styleSheet.replaceSync(`
  * {
  box-sizing: border-box;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
body {
  margin: 0;
  overflow-y: hidden;
  overflow-x: hidden;
}
.flx{
  flex-direction: column;
}
.head{
    display: flex;
    justify-content: center;
    color: rgb(255, 162, 1);
}
.head span{
    color: rgb(151, 199, 7);
}

.box-element{
  display: flex;
  justify-content: center;
  align-items: center;
}
  .ballon {
    font-size: 30px;

}`);

document.adoptedStyleSheets = [styleSheet];

addEventListener('keyup', changeSize);

function changeSize(e) {
  const currentSizeEl = parseFloat(getComputedStyle(balloonEl).fontSize);
  if (e.key === 'ArrowUp') {
    //* зміна розміру кульки
    if (currentSizeEl <= 99) {
      balloonEl.style.fontSize = `${currentSizeEl + 10}px`;
    } else {
      boom();
    }
  } else if (e.key === 'ArrowDown') {
    if (currentSizeEl > 30) {
      balloonEl.style.fontSize = `${currentSizeEl - 10}px`;
    }
  }
}

function boom() {
  balloonEl.textContent = '💥';
  removeEventListener('keyup', changeSize);
}
