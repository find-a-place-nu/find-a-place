function aboutMe() {
  var user = sessionStorage.getItem("currentuser");
  var insertLoc = document.getElementById("about");
  var newElement = document.createElement("h3");
  newElement.className = "w3-center";
  newElement.innerHTML = `About ${user}`;

  insertLoc.insertBefore(newElement, insertLoc.firstChild);
}
