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
nodoBoton.addEventListener('click',ajaxcalls);

/*---------------------------------------------------------------------------------------------------*/

let config1 = {url : 'http://api.icndb.com/jokes/random' , responseType : 'json' , method : 'GET'};

function ajaxcalls(config){
    return new Promise(function(resolve,reject){
        const xhr = new XMLHttpRequest();
        xhr.open(config1.method,config1.url);
        xhr.responseType = config1.responseType;
        xhr.send('');
        xhr.onload = function (){
            if (xhr.status == 200){
                let box = xhr.response;
                resolve(document.querySelector(".hidden").innerHTML = box.value.joke);
            }else{
                reject(document.querySelector(".hidden").classList.add("error"));
        }
        }
    })
}
}

document.addEventListener("DOMContentLoaded",loadpage);