function loadpage(){
function hide() {
    document.querySelector(".hidden").classList.add("hide");
}
/*
let nodoBoton = document.querySelector('#button');
nodoBoton.addEventListener('click',hide);
*/


/*-----------------------------------------------------------------------------------------------------*/

function getDataAPI(){
    const xhr = new XMLHttpRequest();
    const url = 'http://api.icndb.com/jokes/random';
    let box;
    xhr.open('GET', url);
    xhr.responseType = 'json';
    xhr.onload = function (){
        if (this.status == 200){
            box = xhr.response;
            document.querySelector(".hidden").innerHTML = box.value.joke;
        }else{
            document.querySelector(".hidden").classList.add("error");

        }
    }
    xhr.send('');
}

let nodoBoton = document.querySelector('#button');
nodoBoton.addEventListener('click',getDataAPI);

/*---------------------------------------------------------------------------------------------------*/

let  search = document.querySelector("#qsearch");
search.addEventListener('change',() => {
    getDataAPIList(search.value);
})

function getDataAPIList(q) {
    let basicurl = 'https://api.github.com/search/repositories';
    let parameter = 'q=' + encodeURIComponent(q);
    let fullurl = basicurl + '?' + parameter;

    console.log(fullurl);

    let config2 = {url: fullurl, method: 'GET',responseType: 'json'};

    ajaxCall(config2).then(function (response) {
        let data = response.items;
        let list = document.getElementById('list');
        console.log(data);
        data.forEach(data => {
            let newli = document.createElement('li');
            newli.innerHTML = data.url;
            list.appendChild(newli);
        });
    }).catch(() => {
        document.getElementById('list').innerHTML = 'error';
    })
}



/*---------------------------------------------------------------------------------------------------*/


let config1 = {url : 'http://api.icndb.com/jokes/random' , responseType : 'json' , method : 'GET'};

function ajaxCall(config1){
    return new Promise(function(resolve,reject){
        const xhr = new XMLHttpRequest();
        xhr.open(config1.method,config1.url);
        xhr.responseType = config1.responseType;
        xhr.send('');
        xhr.onload = function (){
            if (xhr.status == 200){
                resolve(xhr.response);
            }else{
                reject('error');
        }
        }
    })
}

/*-------------------------------------------------------------------------------------------------------------------------*/ 




}

document.addEventListener("DOMContentLoaded",loadpage);