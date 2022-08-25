const recognition = new webkitSpeechRecognition();
recognition.lang = "es-ES";
recognition.continuous = true;
recognition.interimResults = false;

recognition.onresult = (e) => {
  console.log(e.results);
  const result = e.results[0][0].transcript;
  document.getElementById("result").textContent += result
}

recognition.addEventListener("end", ()=> {
  console.log("Grabacion finalizada");
})

document.getElementById("start").addEventListener("click", ()=>{
  recognition.start();
})
document.getElementById("stop").addEventListener("click", ()=>{
  recognition.abort();
})

function listenText(text) {
  const speech = new SpeechSynthesisUtterance();
  speech.text = text;
  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;
  window.speechSynthesis.speak(speech);
}

document.getElementById("listen").addEventListener("click",()=>{
  const text = document.getElementById("result").textContent;
  listenText(text)
})