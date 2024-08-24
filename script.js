function logIn(){
var email = document.getElementById("email").value;
var password = document.getElementById("password").value;

  if(email === "shatissingh01@gmail.com" &&
    password === "123456"){
      window.location.assign("index.html");
    }

  else{
    alert("Wrong email or password")
  }
}
