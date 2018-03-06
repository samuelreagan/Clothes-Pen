//Open & Close Mobile Menu
document.getElementById("openMenu").onclick = function() {
  document.getElementById("mobile-overlay").style.width = "100vw";
}

document.getElementById("closeMenu").onclick = function() {
  document.getElementById("mobile-overlay").style.width = "0vw";
}

//Piechart
//Charity piece
var charityDescription = document.getElementById("charity-spending");
var charityPiece = document.getElementById("charity-piece");
charityPiece.onmouseover = function() {
  charityDescription.style.backgroundColor = "#ff2800";
  charityDescription.style.color = "#fff";
}
charityPiece.onmouseleave = function() {
  charityDescription.style.backgroundColor = "#fff";
  charityDescription.style.color = "#ff2800";
}
charityDescription.onmouseover = function() {
  charityDescription.style.backgroundColor = "#ff2800";
  charityDescription.style.color = "#fff";
}
charityDescription.onmouseleave = function() {
  charityDescription.style.backgroundColor = "#fff";
  charityDescription.style.color = "#ff2800";
}
//Salary Piece
var salaryDescription = document.getElementById("salary-spending");
var salaryPiece = document.getElementById("salary-piece");
salaryPiece.onmouseover = function() {
  salaryDescription.style.backgroundColor = "#0077b0";
  salaryDescription.style.color = "#fff";
}
salaryPiece.onmouseleave = function() {
  salaryDescription.style.backgroundColor = "#fff";
  salaryDescription.style.color = "#0077b0";
}
salaryDescription.onmouseover = function() {
  salaryDescription.style.backgroundColor = "#0077b0";
  salaryDescription.style.color = "#fff";
}
salaryDescription.onmouseleave = function() {
  salaryDescription.style.backgroundColor = "#fff";
  salaryDescription.style.color = "#0077b0";
}
//Fundsraising Piece
var fundraisingDescription = document.getElementById("fundraising-spending");
var fundraisingPiece = document.getElementById("fundraising-piece");
fundraisingPiece.onmouseover = function() {
  fundraisingDescription.style.backgroundColor = "#ffbc00";
  fundraisingDescription.style.color = "#fff";
}
fundraisingPiece.onmouseleave = function() {
  fundraisingDescription.style.backgroundColor = "#fff";
  fundraisingDescription.style.color = "#ffbc00";
}
fundraisingDescription.onmouseover = function() {
  fundraisingDescription.style.backgroundColor = "#ffbc00";
  fundraisingDescription.style.color = "#fff";
}
fundraisingDescription.onmouseleave = function() {
  fundraisingDescription.style.backgroundColor = "#fff";
  fundraisingDescription.style.color = "#ffbc00";
}
//Bills spending
var billsDescription = document.getElementById("bills-spending");
var billsPiece = document.getElementById("bills-piece");
billsPiece.onmouseover = function() {
  billsDescription.style.backgroundColor = "#CC2000";
  billsDescription.style.color = "#fff";
}
billsPiece.onmouseleave = function() {
  billsDescription.style.backgroundColor = "#fff";
  billsDescription.style.color = "#CC2000";
}
billsDescription.onmouseover = function() {
  billsDescription.style.backgroundColor = "#CC2000";
  billsDescription.style.color = "#fff";
}
billsDescription.onmouseleave = function() {
  billsDescription.style.backgroundColor = "#fff";
  billsDescription.style.color = "#CC2000";
}
//OutReach Piece
var outreachDescription = document.getElementById("outreach-spending");
var outreachPiece = document.getElementById("outreach-piece");
outreachPiece.onmouseover = function() {
  outreachDescription.style.backgroundColor = "#003A56";
  outreachDescription.style.color = "#fff";
}
outreachPiece.onmouseleave = function() {
  outreachDescription.style.backgroundColor = "#fff";
  outreachDescription.style.color = "#003A56";
}
outreachDescription.onmouseover = function() {
  outreachDescription.style.backgroundColor = "#003A56";
  outreachDescription.style.color = "#fff";
}
outreachDescription.onmouseleave = function() {
  outreachDescription.style.backgroundColor = "#fff";
  outreachDescription.style.color = "#003A56";
}
