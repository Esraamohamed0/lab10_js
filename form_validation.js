var sub = document.getElementById("submit");

var usernameRegex =  /^[a-zA-Z\s]+$/;

sub.addEventListener("click",function(event){

  event.preventDefault();

  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  if(username === "" || password === "")
  {
    alert("Please enter username and password");
  }
  
  if(usernameRegex.test(username) === true){
    alert("you enter valid username")
  }else
  {
    alert("Please, enter valid username, Only charachers")
  }

});
