var database = [
  {
    username:"shatis",
    password:"12345"
  }
];

var newsfeed = [
  {
    username:"Raj",
    timeline:"Hii i'm tired!!"
  }
];

var userPrompt = prompt("Enter your username");
var passPrompt = prompt("Enter your password");

function signIn(user,pass){
  if(user === database[0].username &&
     pass === database[0].password){
      console.log(newsfeed);
     }
  else{
    alert("Wrong username or password");
  }
}

signIn(userPrompt,passPrompt);
