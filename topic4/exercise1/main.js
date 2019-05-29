document.addEventListener("DOMContentLoaded", loadpage);

function loadpage(){
    let counterkey = 0;
    let buttonadd = document.querySelector('#buttonadd');
    let buttonremove = document.querySelector('#buttonremove');
    let dropZone = document.querySelector('#textarea');
    dropZone.addEventListener('dragover', handleDragOver);
    dropZone.addEventListener('drop', handleFileSelect);
    buttonadd.addEventListener("click",saveData);
    buttonremove.addEventListener("click" , deleteData);
    buttonadd.addEventListener("click",saveDataDB);
    buttonremove.addEventListener("click" , deleteDataDB );

    function handleFileSelect(event) {
        event.stopPropagation();
        event.preventDefault();
    
        var files = event.dataTransfer.files;
        var reader = new FileReader();  
        reader.onload = function(event) {            
             document.getElementById('textarea').value = event.target.result;
        }        
        reader.readAsText(files[0],"UTF-8");
    }
    
    function handleDragOver(event) {
        event.stopPropagation();
        event.preventDefault();
        event.dataTransfer.dropEffect = 'copy';
    }


    let db;
    indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
    let request = indexedDB.open("MyTestDB",3);

    request.onerror = function(event) {
        alert("always with problems");
    };

    request.onsuccess = function(event) {
        db = event.target.result;
        console.log("database loaded!!" + db.name);
    };

    request.onupgradeneeded = function(event){
        db = event.target.result;
        db.createObjectStore("textArea", {autoIncrement : true});
    }

    function saveDataDB(){
        let transaction = db.transaction(["textArea"] , "readwrite");
        let store = transaction.objectStore("textArea");
        let data = document.querySelector('#textarea').value;
        let add = store.add({text: data });
    }

    function deleteDataDB(){
        let transaction = db.transaction(["textArea"] , "readwrite");
        let store = transaction.objectStore("textArea");
        let data = document.querySelector('#key').value;
        console.log(data);
        let remove = store.delete(parseInt(data));
    }

    function saveData(){
        if (typeof(Storage) != "undefined"){
            var data = document.querySelector('#textarea').value;
            localStorage.setItem(counterkey,data);
            console.log(counterkey);
            console.log(data);
            counterkey++;
        }
    }

    function deleteData(){
        var keydelete = document.querySelector('#key').value;
        localStorage.removeItem(keydelete);
        console.log("key a eliminar :" + keydelete)
    }
}