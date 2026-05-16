function login(){

let u = loginUser.value;

let p = loginPass.value;

let users =
JSON.parse(localStorage.getItem("users")) || [];

let ok =
users.find(x =>
x.username === u &&
x.password === p);

if(ok){

localStorage.setItem("loggedIn","true");

localStorage.setItem("currentUser",u);

localStorage.setItem(
"userEmail",
u + "@gmail.com"
);

location.href = "home.html";

}

else{

alert("Wrong Username or Password");

}

}