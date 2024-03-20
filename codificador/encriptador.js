let textInput = document.querySelector('#text__write');
let output = document.querySelector('#area__copy');

function encrypt() {
    let text = textInput.value;
    let resultEncrypt = text.replace(/e/g,'enter').replace(/i/g,'imes').replace(/a/g,'ai').replace(/o/g,'ober').replace(/u/g,'ufat');

    document.getElementById('area__copy').innerHTML = `<textarea readonly id="text__read" rows="35">${resultEncrypt}</textarea>
        <button id="btn-copy" onclick="copy()" title="Botão de copiar">Copiar</button>`;


    // console.log(resultEncrypt);
}

function decrypt() {
    let text = textInput.value;
    let resultDecrypt = text.replace(/ai/g,'a').replace(/enter/g,'e').replace(/imes/g,'i').replace(/ober/g,'o').replace(/ufat/g,'u');

    document.getElementById('area__copy').innerHTML = `<textarea readonly id="text__read" rows="35">${resultDecrypt}</textarea>
        <button id="btn-copy" onclick="copy()" title="Botão de copiar">Copiar</button>`;


    // console.log(resultDecrypt);
}

function copy() {
    var textCopy = document.getElementById("text__read").textContent;
  
    navigator.clipboard.writeText(textCopy)
      .then(function() {
        alert("Texto copiado para a área de transferência!");
      })
      .catch(function(err) {
        console.error('Erro ao copiar o texto: ', err);
      });
  }