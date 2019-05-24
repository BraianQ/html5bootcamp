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