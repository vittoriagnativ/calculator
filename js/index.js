document.querySelectorAll('.calc .digits-oper')
    .forEach( el => el.addEventListener('click', pressedDigitOrOper));
    
    
function pressedDigitOrOper(ev) {
    const displ = document.querySelector('.calc .displ');
    displ.value += ev.target.innerText;
}

document.querySelector('.calc .eval')
    .addEventListener('click', evaluate);

function evaluate() {
    const displ = document.querySelector('.calc .displ');
    displ.value = eval(displ.value);
}
document.querySelector('reset')
  .addEventListener('reset');
  function reset() {
      const displ = document.querySelector('reset');
      displ.value = reset(displ.value);
  }
  