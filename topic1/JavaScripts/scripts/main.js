function loadpage(){
function hide() {
    document.querySelector(".hidden").classList.add("hide");
}

/*hide();*/
/*-----------------------------------------------------------------------------------------------------*/
/*
function newalert(){
    const xhr = new XMLHttpRequest();
    const url = 'http://api.icndb.com/jokes/random';
    let box;
    xhr.open('GET', url);
    xhr.responseType = 'json';
    xhr.send('');
    xhr.onload = function (){
        if (this.status == 200){
            box = xhr.response;
            document.querySelector(".hidden").innerHTML = box.value.joke;
        }else{
            document.querySelector(".hidden").classList.add("error");

        }
    }
}*/

let nodoBoton = document.querySelector('#button');
nodoBoton.addEventListener('click',newalert);

/*---------------------------------------------------------------------------------------------------*/

let config = {url : 'http://api.icndb.com/jokes/random' , responseType : 'json' , method : 'GET'};

function ajaxcalls(config){
    return new Promise(function(resolve,reject){
        config
        if (xhr.status == 200){
            resolve(document.querySelector(".hidden").innerHTML = (xhr.response).value.joke);
        }else{
            reject(document.querySelector(".hidden").classList.add("error"));
        }
    }
}
}

document.addEventListener("DOMContentLoaded",loadpage);