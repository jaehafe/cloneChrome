const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"
// string처럼 반복하는 경우에 && 무조건 같아야 할때, 변수로 고정


function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  // greeting.innerText = `Hello ${username}`;
  // // greeting.innerText = "Hello " + username; / string과 변수를 합쳐줌
  // greeting.classList.remove(HIDDEN_CLASSNAME);
  paintGreetings(username);
}

function paintGreetings(username){
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);

const savedUdername = localStorage.getItem(USERNAME_KEY);

if (savedUdername === null) {
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // show the greetings
  paintGreetings(savedUdername);
}