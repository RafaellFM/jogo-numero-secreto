const box = document.querySelector(".box");
const elementoBox = document.querySelector("#chute");

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = "pt-br";
recognition.start();

recognition.addEventListener("result", (voz) => {    
    const fala = voz.results[0][0].transcript;    
    exibeChute(fala);
    verificaOChute(fala);
});

function exibeChute(chute){
    elementoBox.innerHTML = `<div>Você disse: </div>
    <span class="box">${chute}</span>`
}

recognition.addEventListener("end", () => recognition.start())
 
