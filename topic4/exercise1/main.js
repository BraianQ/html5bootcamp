document.addEventListener("DOMContentLoaded", loadpage);

function loadpage(){
    let counterkey = 0;
    let buttonadd = document.querySelector('#buttonadd');
    let buttonremove = document.querySelector('#buttonremove');
    buttonadd.addEventListener("click",saveData);
    buttonremove.addEventListener("click" , deleteData);

    window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

    let request = window.indexedDB.open("MyTestDB",3);

    request.onerror = function(event) {
        alert("always with problems");
      };
    request.onsuccess = function(event) {
        db = event.target.result;
    };

    request.onupgradeneeded = function(event){
        let db = event.target.result;
        let objectStore = db.createObjectStore("textArea", {autoIncrement : true});
    }



    function saveData(){
        if (typeof(Storage) != "undefined"){
            var data = document.querySelector('#textarea').value;
            localStorage.setItem(counterkey,data);
            counterkey++;
        }
    }

    function deleteData(){
        var keydelete = document.querySelector('#key').value;
        localStorage.removeItem(keydelete);
    }
}