class Actor {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

}
class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(Eventname, callback) {
    if (!this.events[Eventname]) {
      this.events[Eventname] = [];
    }

    this.events[Eventname].push(callback);
  }

  emit(Eventname) {
    const event = this.events[Eventname];
    console.log("entre");

    if (event) {
      event.forEach(callback => {
        console.log(callback);

        if (typeof callback === 'function') {
          callback();
        } else if (typeof callback === 'object') {
          callback.log(Eventname);
        }
      });
    }
  }

  off(Eventname, callback) {
    let pos = events.indexOf('Eventname');
    events.splice(pos, 1);
  }

}
class Logger {
  constructor() {}

  log(info) {
    console.log("The" + info + "Event has been emitted");
  }

}
class Movie extends EventEmitter {
  constructor(title, year, duration) {
    super();
    this.title = title;
    this.year = year;
    this.duration = duration;
    this.arrcast = [];
  }

  play() {
    console.log("The movie is playing");
    this.emit("play");
  }

  pause() {
    console.log("The movie is pause");
    this.emit("pause");
  }

  resume() {
    console.log("The movie is playing again");
    this.emit("resume");
  }

  addCast(cast) {
    this.arrcast.push(cast);
  }

  showCast() {
    console.log(this.arrcast);
  }

}

let social = {
  share: function (friendName) {
    console.log(`${friendName} shares ${this.title}`);
  },
  like: function (friendName) {
    console.log(`${friendName} likes ${this.title}`);
  }
};

function playEvent() {
  console.log("the movie is playing" + this.title);
}

function pauseEvent() {
  console.log("the movie is paused");
}

function resumeEvent() {
  console.log("the movie is playing again");
}
