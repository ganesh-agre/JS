function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
    //return this.username;
}

function createUser(username, email, password){
    SetUsername.call(this, username)

    //this.username = SetUsername(username);
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "12");
console.log(chai);