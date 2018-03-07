//Initialize Varables for Volunteers
var totalVolunteersNeeded = 8;
var totalVolunteers = 6;
var volunteersNeeded = totalVolunteersNeeded - totalVolunteers;
var percentageFilled = (totalVolunteers / totalVolunteersNeeded) * 100;
var hiddenMessage = document.getElementById("hidden-text");
var name;
var progressBar = document.getElementById("blanket-evt");
var textValue = document.getElementById("vol-number");

//When the Form is Submitted
function submit() {
  name = document.getElementById("name").value;
  //If there are volunteers needed.
  if(percentageFilled != 100) {
    totalVolunteers += 1;
    volunteersNeeded -= 1;
    percentageFilled = (totalVolunteers / totalVolunteersNeeded) * 100;
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
    hiddenMessage.textContent = "Thank you for your interest in helping our cause, but unfortunately we've filled all volunteer positions needed for this event. Feel free to sign up for another one!";
    hiddenMessage.style.display = "block";
  }
  document.getElementById("name").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("email").value = "";
}
