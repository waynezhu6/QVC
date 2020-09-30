class Connections{

  private rooms: {[key: string]: string}
  private passwords: {[key: string]: string}

  constructor(){
    this.rooms = {}; //mapping room name to room object
    this.passwords = {}; //mapping room name to password
  }

  createRoom(room: string, password: string, username: string, id: string): boolean{
    //returns true if room is created

    //check if room exists
    if(this.roomExists(room))
      return false;

    this.passwords[room] = password;
    //this.rooms[room] = new room()
    return true;
  }

  joinRoom(room: string, password: string, username: string, id: string): boolean{
    //returns true if room and password are valid
    if(this.roomExists(room)){
      if(this.passwords[room] === password){
        return true;
      }
    }
    return false;
  }

  roomExists(room: string): boolean{
    //returns true if this room exists
    let keys = Object.keys(this.passwords);
    for(const key of keys){
      if(key === room)
        return true;
    }
    return false;
  }

  usernameExists(room: string, username: string){
    //returns true if room has the user with username
    //assumes room exists
  }

}

class Room{
  private members: string[];
  
  constructor(owner: string){
    this.members = [];
  }

  hasUser(username: string){
    //returns true if this room has username
    for(const user of this.members){
      if(user === username) 
        return true;
    }
    return false;
  }
  
}

module.exports = {Connections};