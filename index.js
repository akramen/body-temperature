'use strict';

const Button = document.getElementById('output');
const resultarea = document.getElementById('result-area')
const resultarea2 = document.getElementById('result-area2')
const yourTmpIs = document.getElementById('yourTmpIs')


Button.onclick = () => {
let Tmp = [36.7,36.6,36.5,36.4, 36.3, 36.2, 36.1, 36.0, 35.9, 35.8]
let ResultTmp = Tmp[Math.floor(Math.random() * Tmp.length)];
console.log(ResultTmp.toFixed(1));


yourTmpIs.innerText = 'あなたの今の体温';
const header = document.createElement('h2');
resultarea2.innerText = '';
header.innerText = ResultTmp.toFixed(1);
resultarea2.appendChild(header);
}


resultarea.onclick = () => {
    const header = resultarea2.innerText;
    navigator.clipboard.writeText(header);
}
