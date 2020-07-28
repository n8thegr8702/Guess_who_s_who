let celebs = require("../src/celebrities.json");

function displayCelebrities(celeb) {
  let newDiv = document.createElement("DIV");
  newDiv.className = "card";
  newDiv.width = "300";
  newDiv.style = "width: 9rem;";
  let img = new Image(),
    url = celeb.photoUrl,
    container = document.getElementById("imageDisplay");

  let divBody = document.createElement("DIV");
  divBody.className = "card-body";

  let celebName = document.createElement("p");
  celebName.textContent = celeb.name;
  celebName.className = "card-text";

  divBody.appendChild(celebName);
  img.onload = function() {
    newDiv.appendChild(img);
    newDiv.appendChild(divBody);
    container.appendChild(newDiv);
  };
  img.src = url;
  img.className = "card-img-top";
  img.height = "150";
}

for (let celeb of celebs) {
  displayCelebrities(celeb);
}
