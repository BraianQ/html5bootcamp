
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