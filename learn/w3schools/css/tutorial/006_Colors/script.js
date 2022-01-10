let inputRgbR = document.getElementById('input-rgb-red');
let inputRgbG = document.getElementById('input-rgb-green');
let inputRgbB = document.getElementById('input-rgb-blue');
let inputRgbT = document.getElementById('input-rgb-trans');

let spanRgbR = document.getElementById('span-rgb-red');
let spanRgbG = document.getElementById('span-rgb-green');
let spanRgbB = document.getElementById('span-rgb-blue');
let spanRgbT = document.getElementById('span-rgb-trans');

let butRgbRDec = document.getElementById('but-rgb-red-dec');
let butRgbRInc = document.getElementById('but-rgb-red-inc');
let butRgbGDec = document.getElementById('but-rgb-green-dec');
let butRgbGInc = document.getElementById('but-rgb-green-inc');
let butRgbBDec = document.getElementById('but-rgb-blue-dec');
let butRgbBInc = document.getElementById('but-rgb-blue-inc');
let butRgbTDec = document.getElementById('but-rgb-trans-dec');
let butRgbTInc = document.getElementById('but-rgb-trans-inc');

/*let rgbRValue = inputRgbR.value;
let rgbGValue = inputGgbR.value;
let rgbBValue = inputBgbR.value;
let rgbTValue = inputTgbR.value;*/

spanRgbR.innerHTML = inputRgbR.value;
spanRgbG.innerHTML = inputRgbG.value;
spanRgbB.innerHTML = inputRgbB.value;
spanRgbT.innerHTML = inputRgbT.value;

butRgbRDec.disabled = true;
butRgbGDec.disabled = true;
butRgbBDec.disabled = true;
butRgbTInc.disabled = true;

let spanRgbFundo = document.getElementById('rgb-fundo');
let spanRgbTexto = document.getElementById('rgb-texto');

function funRgbChangeColor() {
  spanRgbFundo.style.backgroundColor = `rgb( ${inputRgbR.value}, ${inputRgbG.value}, ${inputRgbB.value}, ${inputRgbT.value})`;

  spanRgbTexto.style.color = `rgb( ${inputRgbR.value}, ${inputRgbG.value}, ${inputRgbB.value}, ${inputRgbT.value})`;
}

function funInputRgbR() {
  spanRgbR.innerHTML = inputRgbR.value;
  if(inputRgbR.value === '0') {
    butRgbRDec.disabled = true;
  } else {
    butRgbRDec.disabled = false;
  }

  if(inputRgbR.value === '255') {
    butRgbRInc.disabled = true;
  } else {
    butRgbRInc.disabled = false;
  }

  funRgbChangeColor();
}

function funInputRgbG() {
  spanRgbG.innerHTML = inputRgbG.value;

  if(inputRgbG.value === '0') {
    butRgbGDec.disabled = true;
  } else {
    butRgbGDec.disabled = false;
  }

  if(inputRgbG.value === '255') {
    butRgbGInc.disabled = true;
  } else {
    butRgbGInc.disabled = false;
  }

  funRgbChangeColor();
}

function funInputRgbB() {
  spanRgbB.innerHTML = inputRgbB.value;

  if(inputRgbB.value === '0') {
    butRgbBDec.disabled = true;
  } else {
    butRgbBDec.disabled = false;
  }

  if(inputRgbB.value === '255') {
    butRgbBInc.disabled = true;
  } else {
    butRgbBInc.disabled = false;
  }

  funRgbChangeColor();
}

function funInputRgbT() {
  spanRgbT.innerHTML = inputRgbT.value;

  if(inputRgbT.value === '0') {
    butRgbTDec.disabled = true;
  } else {
    butRgbTDec.disabled = false;
  }

  if(inputRgbT.value === '1') {
    butRgbTInc.disabled = true;
  } else {
    butRgbTInc.disabled = false;
  }

  funRgbChangeColor();
}

function funRgbRDec() {
  if(inputRgbR.value === '255') {
    butRgbRInc.disabled = false;
  }
  inputRgbR.value = Number(inputRgbR.value) - 1;
  spanRgbR.innerHTML = inputRgbR.value;
  funRgbChangeColor();

  if(inputRgbR.value === '0') {
    butRgbRDec.disabled = true;
  }
}

function funRgbGDec() {
  if(inputRgbG.value === '255') {
    butRgbGInc.disabled = false;
  }
  inputRgbG.value = Number(inputRgbG.value) - 1;
  spanRgbG.innerHTML = inputRgbG.value;
  funRgbChangeColor();

  if(inputRgbG.value === '0') {
    butRgbGDec.disabled = true;
  }
}

function funRgbBDec() {
  if(inputRgbB.value === '255') {
    butRgbBInc.disabled = false;
  }
  inputRgbB.value = Number(inputRgbB.value) - 1;
  spanRgbB.innerHTML = inputRgbB.value;
  funRgbChangeColor();

  if(inputRgbB.value === '0') {
    butRgbBDec.disabled = true;
  }
}

function funRgbTDec() {
  if(inputRgbT.value === '1') {
    butRgbTInc.disabled = false;
  }
  inputRgbT.value = Number(inputRgbT.value) - 0.1;
  spanRgbT.innerHTML = inputRgbT.value;
  funRgbChangeColor();

  if(inputRgbT.value === '0') {
    butRgbTDec.disabled = true;
  }
}

function funRgbRInc() {
  if(inputRgbR.value === '0') {
    butRgbRDec.disabled = false;
  }

  inputRgbR.value = Number(inputRgbR.value) + 1;
  spanRgbR.innerHTML = inputRgbR.value;
  funRgbChangeColor();

  if(inputRgbR.value === '255') {
    butRgbRInc.disabled = true;
  }
}

function funRgbGInc() {
  if(inputRgbG.value === '0') {
    butRgbGDec.disabled = false;
  }

  inputRgbG.value = Number(inputRgbG.value) + 1;
  spanRgbG.innerHTML = inputRgbG.value;
  funRgbChangeColor();

  if(inputRgbG.value === '255') {
    butRgbGInc.disabled = true;
  }
}


function funRgbBInc() {
  if(inputRgbB.value === '0') {
    butRgbBDec.disabled = false;
  }

  inputRgbB.value = Number(inputRgbB.value) + 1;
  spanRgbB.innerHTML = inputRgbB.value;
  funRgbChangeColor();

  if(inputRgbB.value === '255') {
    butRgbBInc.disabled = true;
  }
}

function funRgbTInc() {
  if(inputRgbT.value === '0') {
    butRgbTDec.disabled = false;
  }

  inputRgbT.value = Number(inputRgbT.value) + 0.1;
  spanRgbT.innerHTML = inputRgbT.value;
  funRgbChangeColor();

  if(inputRgbT.value === '1') {
    butRgbTInc.disabled = true;
  }
}










































