let butB = document.getElementById('b');
let butEm = document.getElementById('em');
let butI = document.getElementById('i');
let butSmall = document.getElementById('small');
let butStrong = document.getElementById('strong');
let butSub = document.getElementById('sub');
let butSup = document.getElementById('sup');
let butIns = document.getElementById('ins');
let butDel = document.getElementById('del');
let butMark = document.getElementById('mark');
let h2 = document.getElementById('h2');

console.log(document.getElementById('node-dcs'));

let texto = "teste testando";

function createNode(nome, id) {
  let nodeDcs = document.getElementById('node-dcs');
  // !nodeDcs representa valor empty, null, undefined
  // !!nodeDcs representa que é um element kkk (na prática)
  if(!!nodeDcs) {
    nodeDcs.remove();
  }
  let node = document.createElement(nome);
  node.id = "node-dcs";
  node.innerHTML = texto;

  h2.insertAdjacentElement("afterend", node);
}

function removeNode(id) {

}

function b() {
  h2.innerHTML = "B"
  createNode(butB.innerHTML);
}
function em() {
  h2.innerHTML = "EM"
  createNode(butEm.innerHTML);
}
function i() {
  h2.innerHTML = "I"
  createNode(butI.innerHTML);
}
function small() {
  h2.innerHTML = "SMALL"
  createNode(butSmall.innerHTML);
}
function strong() {
  h2.innerHTML = "STRONG"
  createNode(butStrong.innerHTML);
}
function sub() {
  h2.innerHTML = "SUB"
  createNode(butSub.innerHTML);
}
function sup() {
  h2.innerHTML = "SUP"
  createNode(butSup.innerHTML);
}
function ins() {
  h2.innerHTML = "INS"
  createNode(butIns.innerHTML);
}
function del() {
  h2.innerHTML = "DEL"
  createNode(butDel.innerHTML);
}
function mark() {
  h2.innerHTML = "MARK"
  createNode(butMark.innerHTML);
}

