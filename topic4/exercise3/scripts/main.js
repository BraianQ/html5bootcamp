document.addEventListener("DOMContentLoaded" , loadpage);

function loadpage(){

  let buttonC = document.querySelector('#buttonc');
  let buttonD = document.querySelector('#buttond');
  let  = document.querySelector('#LogMessages');
  let textArea = document.querySelector('#LogMessages');
  buttonC.addEventListener("click",connect);
  buttonD.addEventListener("click",disconnect);

  function connect(){
    let wsUri = document.querySelector('#socket').value;
    websocket = new WebSocket(wsUri);
    websocket.onopen = function(evt) { onOpen(evt) };
    websocket.onclose = function(evt) { onClose(evt) };

  }

  function disconnect(){
    textArea.value += ("   DISCONNECTED");
  }

  function onOpen(evt){
    textArea.value += ("CONNECTED");
  }

}