//Create a Blanket Object to Store the Data
function initializeBlanketObject() {
  var updateBlanket = {
    "totalVolNeeded": 8,
    "volSignedUp": 6
  }
  localStorage.setItem("blanketStorage", JSON.stringify(updateBlanket));
}

//Update the Blanket Data on the Page
function updateBlanketData() {
  var updateBlanket = JSON.parse(localStorage.getItem('blanketStorage'));
  if(updateBlanket == null) {
    initializeBlanketObject();
  } else {
    updateBlanket = JSON.parse(localStorage.getItem('blanketStorage'));
    var volunteersNeeded = updateBlanket.totalVolNeeded - updateBlanket.volSignedUp;
    var percentageFilled = (updateBlanket.volSignedUp / updateBlanket.totalVolNeeded) * 100;
    document.getElementById("blanketPercentage").innerHTML = percentageFilled + "%";
    document.getElementById("blanketPercentage").style.width = percentageFilled + "%";
    document.getElementById("blanketVolunteers").innerHTML = volunteersNeeded + " More Volunteers Needed!";
  }
}

//Create a Backpack Object to Store the Data
function initializeBackpackObject() {
  var updateBackpack = {
    "totalVolNeeded": 10,
    "volSignedUp": 5
  }
  localStorage.setItem("backpackStorage", JSON.stringify(updateBackpack));
}

//Update the Backpack Data on the Page
function updateBackpackData() {
  var updateBackpack = JSON.parse(localStorage.getItem('backpackStorage'));
  if(updateBackpack == null) {
    initializeBackpackObject();
  } else {
    updateBackpack = JSON.parse(localStorage.getItem('backpackStorage'));
    var volunteersNeeded = updateBackpack.totalVolNeeded - updateBackpack.volSignedUp;
    var percentageFilled = (updateBackpack.volSignedUp / updateBackpack.totalVolNeeded) * 100;
    document.getElementById("backpackPercentage").innerHTML = percentageFilled + "%";
    document.getElementById("backpackPercentage").style.width = percentageFilled + "%";
    document.getElementById("backpackVolunteers").innerHTML = volunteersNeeded + " More Volunteers Needed!";
  }
}

//Update the Book Data on the Page
function updateBookData() {
  var updateBooks = JSON.parse(localStorage.getItem('bookStorage'));
  if(updateBooks == null) {
    initializeBookObject();
  } else {
    updateBooks = JSON.parse(localStorage.getItem('bookStorage'));
    var volunteersNeeded = updateBooks.totalVolNeeded - updateBooks.volSignedUp;
    var percentageFilled = (updateBooks.volSignedUp / updateBooks.totalVolNeeded) * 100;
    document.getElementById("bookPercentage").innerHTML = percentageFilled + "%";
    document.getElementById("bookPercentage").style.width = percentageFilled + "%";
    document.getElementById("bookVolunteers").innerHTML = volunteersNeeded + " More Volunteers Needed!";
  }
}

//Create a Book Object to Store the Data
function initializeBookObject() {
  var updateBooks = {
    "totalVolNeeded": 8,
    "volSignedUp": 2
  }
  localStorage.setItem("bookStorage", JSON.stringify(updateBooks));
}

updateBlanketData();
updateBackpackData();
updateBookData();
