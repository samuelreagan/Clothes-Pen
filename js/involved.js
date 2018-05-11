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

updateBookData();
