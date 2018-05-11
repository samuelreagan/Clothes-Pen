//Initialize Varables for Volunteers
var updateObject = JSON.parse(localStorage.getItem('bookStorage'));
var volunteersNeeded = updateObject.totalVolNeeded - updateObject.volSignedUp;
var percentageFilled = (updateObject.volSignedUp / updateObject.totalVolNeeded) * 100;
var hiddenMessage = document.getElementById("hidden-text");
var name;
var progressBar = document.getElementById("book-evt");
progressBar.innerHTML = percentageFilled + "%";
progressBar.style.width = percentageFilled + "%";
var textValue = document.getElementById("vol-number");
if(volunteersNeeded == 1) {
  textValue.textContent = volunteersNeeded + " More Volunteer Needed!";
} else {
  textValue.textContent = volunteersNeeded + " More Volunteers Needed!";
}

//When the Form is Submitted
function submit() {
  name = document.getElementById("name").value;
  //If there are volunteers needed.
  if(percentageFilled != 100) {
    updateObject.volSignedUp += 1;
    volunteersNeeded -= 1;
    percentageFilled = (updateObject.volSignedUp / updateObject.totalVolNeeded) * 100;
    progressBar.style.width = percentageFilled + "%";
    progressBar.textContent = percentageFilled + "%";
    //Check if there is only 1 volunteer needed.
    if(volunteersNeeded == 1) {
      textValue.textContent = volunteersNeeded + " More Volunteer Needed!";
    } else {
      textValue.textContent = volunteersNeeded + " More Volunteers Needed!";
    }
    //Update Text in the Webpage
    hiddenMessage.textContent = "Thank you for volunteering to help us with our cause, " + name + "! A Clothes Pen representative will contact you soon to get you all the information you need!";
    hiddenMessage.style.display = "block";
  }
  //If there aren't volunteers needed.
  else {
    hiddenMessage.textContent = "Thank you " + name + ", but we have plenty of volunteers! Try signing up for a different event!";
    hiddenMessage.style.display = "block";
  }
  //Reset Input Elements
  document.getElementById("name").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("email").value = "";
  //Update the Other Page
  localStorage.setItem("bookStorage", JSON.stringify(updateObject));
}

//Form Validation
function validateForm() {
  var errorMessage = "";
  var phoneRegex = /^\d{10}$/;
  var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  if(phoneRegex.test(phone) == false) {
    errorMessage += "<b>- Invalid Phone Number</b>: Please make sure your phone number is 10 digits and doesn't include any symbols or spaces.<br>";
    document.getElementById("errorMessage").innerHTML = errorMessage;
    document.getElementById("errorMessage").style.display = "block";
  }
  if(emailRegex.test(email) == false) {
    errorMessage += "<b>- Invalid Email</b><br>";
    document.getElementById("errorMessage").innerHTML = errorMessage;
    document.getElementById("errorMessage").style.display = "block";
  }
  if(emailRegex.test(email) == true && phoneRegex.test(phone) == true) {
    document.getElementById("errorMessage").style.display = "none";
    submit();
  }
}
