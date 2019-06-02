function loginCheck() {
  if (sessionStorage.getItem("currentuser") === null) {
    location = 'login.html';
  }
