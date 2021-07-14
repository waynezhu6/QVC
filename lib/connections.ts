class Connections{

  private users: {[key: string]: Room}
  private rooms: {[key: string]: Room}

  constructor(){
    this.users = {}; //mapping socket.id to room object
    this.rooms = {}; //mapping room name to room object
  }

  createRoom(name: string, password: string, username: string, id: string): boolean{
    //returns true if room is created

    //check if room exists
    if(this.hasRoom(name)){
      return false;
    }

    if(!this.sanitizeInput(name, password, username)){
      return false;
    }

    let room = new Room(name, password);
    room.addUser(id, username);
    this.rooms[name] = room;
    this.users[id] = room;
    return true;
  }

  joinRoom(name: string, password: string, username: string, id: string): boolean{
    //returns true if room and password are valid
    
    if(!this.sanitizeInput(name, password, username)){
      return false;
    }

    if(this.hasRoom(name)){
      let room = this.getRoom(name);
      if(room.authenticate(password)){
        room.addUser(id, username);
        this.users[id] = room;
        return true;
      }
    }
    return false;
  }

  leaveRoom(id: string): void{
    if(id in this.users){
      let room = this.users[id];
      room.removeUser(id);
      delete this.users[id];
      if(room.isEmpty()){
        delete this.rooms[room.name];
      }
    }
  }

  hasRoom(name: string): boolean{
    //returns true if room exists
    return name in this.rooms;
  }

  getRoom(name: string): Room{
    //returns room, assuming it exists
    return this.rooms[name];
  }

  sanitizeInput(name: string, password: string, username: string): boolean{
    //return true if user inputs are non-empty and 20 chars at most
    let n = 0 < name.length && name.length <= 20;
    let p = 0 < password.length && password.length <= 20;
    // let u = 0 < username.length && username.length <= 20;
    // return n && p && u;
    return n && p;
  }

}

class Room{
  private members: {[key: string]: string}; //mapping socket.id to username
  public name: string;
  private password: string;
  
  constructor(name: string, password: string){
    this.members = {};
    this.name = name;
    this.password = password;
  }

  authenticate(password: string){
    return password === this.password;
  }

  addUser(id: string, username: string){
    //registers user with id, username
    //assumes username doesn't exist
    this.members[id] = username;
  }

  removeUser(id: string){
    //removes user with id
    //assumes user exists
    delete this.members[id]
  }

  hasUser(username: string){
    //returns true if this room has username
    let values = Object.values(this.members);
    for(const user of values){
      if(user === username) 
        return true;
    }
    return false;
  }

  isEmpty(){
    //returns true if this room has 0 members
    return Object.keys(this.members).length === 0;
  }
  
}

module.exports = {Connections};
