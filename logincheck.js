function loginCheck() {
  if (sessionStorage.getItem("currentuser") === null) {
    location = 'login.html';
  }
}//if a user is not logged in, they are returned to the home screen
