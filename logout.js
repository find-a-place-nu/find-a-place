function logout() {
  sessionStorage.removeItem("currentuser");
  location = 'login.html';
}//logs user out and returns to login page
