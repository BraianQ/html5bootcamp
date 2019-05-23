function loadpage(){

class Actor{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

class EventEmitter{
    constructor(){
        this.events = {};
    }

    on(Eventname, callback){
        if (!this.events[Eventname]){
            this.events[Eventname] = [];
        }
        this.events[Eventname].push(callback);
    }

    emit(Eventname){
        const event = this.events[Eventname];
        console.log("entre");
        if (event){
            event.forEach(callback =>{
                console.log(callback);
                if (typeof callback === 'function') {
                    callback();
                  }
                  else if (typeof callback === 'object') {
                    callback.log(Eventname);
                  }
            });
        }
    }

    off(Eventname, callback){
        let pos = events.indexOf('Eventname');
        events.splice(pos,1);
    }
}

class Movie extends EventEmitter{
    constructor(title, year, duration){
        super();
        this.title = title;
        this.year = year;
        this.duration = duration;
        this.arrcast = [];
    }

    play(){
        console.log("The movie is playing");
        this.emit("play");
    }

    pause(){
        console.log("The movie is pause");
        this.emit("pause");
    }

    resume(){
        console.log("The movie is playing again");
        this.emit("resume");
    }

    addCast(cast){
        this.arrcast.push(cast);
    }

    showCast(){
        console.log(this.arrcast);
    }
}

class Logger{
    constructor(){
    }

    log(info){
        console.log("The" + info + "Event has been emitted");
    }
}


let social = {
    share : function(friendName) {
      console.log(`${friendName} shares ${this.title}`);
    },
    like : function(friendName) {
      console.log(`${friendName} likes ${this.title}`);
    }
}

function playEvent(){
    console.log("the movie is playing" + this.title);
}

function pauseEvent(){
    console.log("the movie is paused");
}

function resumeEvent(){
    console.log("the movie is playing again");
}



let movie1 = new Movie("ADVENGERS: ENDGAME", 2019, 185);
let movie2 = new Movie("ADVENGERS: INFINITY WAR", 2018, 160);
let actorrobert = new Actor("Robert Downey" , 54);
let actors = [
    new Actor("Robert Downey1" , 54),
    new Actor("Robert Downey2" , 54),
    new Actor("Robert Downey3" , 54),
];

Object.assign(movie1, social);

movie1.share.bind(movie1);
movie1.like.bind(movie1);

movie1.share("BLACK WIDOW");
movie1.like("HULK");

movie1.on("play",playEvent);

let advengersListener = new Logger();

movie1.on("play",advengersListener);

movie1.play();


movie1.addCast(actorrobert);
movie1.showCast();
movie2.addCast(actors);
movie2.showCast();


movie1.on("play" , playEvent);

movie1.play();
movie1.pause();
movie1.resume();

movie2.play();
movie2.pause();
movie2.resume();

}





document.addEventListener("DOMContentLoaded",loadpage);