var users = [
  {
  email : "dummy",
  password : "dummy"
  }
]

/*

document.addEventListener("DOMContentLoaded", setupForm);

function setupForm(){
    const form = document.getElementById("login-form");
    form.addEventListener("submit", handleSubmit);
}//setupForm

function handleSubmit(event){
    event.preventDefault();

  const {
      login_type,
      em,
      psw,
      result
  } = event.target;

  const processUser = login_type.value == "register" ? registerUser(em.value,psw.value) : loginUser(em.value,psw.value);
  const response    = processUser;
  result.innerHTML  = response;
}//handle Submit for register
*/

document.addEventListener("DOMContentLoaded", setuploginForm);
document.addEventListener("DOMContentLoaded", setupregisterForm);



function setuploginForm(){
    const form = document.getElementById("login-form");
    form.addEventListener("submit", handleSubmit1);
}//setupForm

function setupregisterForm(){
    const form = document.getElementById("register-form");
    form.addEventListener("submit", handleSubmit);
}//setupForm

function handleSubmit(event){
    event.preventDefault();

  const {
      em,
      psw,
      result
  } = event.target;

  const processUser = registerUser(em.value,psw.value);
  const response    = processUser;
  result.innerHTML  = response;
}//handle Submit for register

function handleSubmit1(event) {
  event.preventDefault();

  const {
    em,
    psw,
    result
  } = event.target;

  const processUser = loginUser(em.value,psw.value);
  const response = processUser;
  result.innerHTML = response;
}//hande Submit for login

function registerUser(em, psw){
    users.push({email : em, password : psw});

    sessionStorage.setItem("currentuser",em);

    setTimeout(enterWebsite,3000);

    return `New user ${em} now registered and logged in! You will be redirected shortly.`;
}//registerUser

function loginUser(em, psw){

  var truepsw = "";

  for (var i=0; i<users.length; i++) {
    if (users[i].email == em) {
      truepsw = users[i].password;
      break;
    }
  }

  if (truepsw == "") {
    return `User ${em} does not exist.`;
  } else if (truepsw == psw) {
    sessionStorage.setItem("currentuser",em);
    setTimeout(enterWebsite,3000);
    return "You have been successfully logged in! You will be redirected shortly.";
  } else {
    return "Your email and password do not match. Please try again.";
  }
}//loginUser

function enterWebsite() {
  location = 'homelistings.html';
}
