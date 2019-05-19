function loadpage(){
class Movie {
    constructor(title, year, duration){
        this.title = title;
        this.year = year;
        this.duration = duration;
    }

    play(){
        console.log("The movie is playing");
    }

    pause(){
        console.log("The movie is pause");
    }

    resume(){
        console.log("The movie is playing again");
    }
}

class Actor{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

class EventEmitter{
    constructor(){
    }

    on(Eventname, callback){

    }

    emit(Eventname){

    }

    off(Eventname, callback){

    }
}

function playEvent(){
    consolge.log("the movie is playing");
}

function pauseEvent(){
    console.log("the movie is paused");
}

function resumeEvent(){
    console.log("the movie is playing again");
}

let movie1 = new Movie("ADVENGERS: ENDGAME", 2019, 185);
let movie2 = new Movie("ADVENGERS: INFINITY WAR", 2018, 160);
let actor = new Actor("Robert Downey" , 54);

movie1.play();
movie1.pause();
movie1.resume();

movie2.play();
movie2.pause();
movie2.resume();

}





document.addEventListener("DOMContentLoaded",loadpage);