/*** Piechart ***/
var state = 0;
window.onload = function() {
  setInterval(function() {
    piechartHover()
  }, 10);
}
function piechartHover() {
  var charityDescription = document.getElementById("charity-spending");
  var charityPiece = document.getElementById("charity-piece");
  var salaryDescription = document.getElementById("salary-spending");
  var salaryPiece = document.getElementById("salary-piece");
  var fundraisingDescription = document.getElementById("fundraising-spending");
  var fundraisingPiece = document.getElementById("fundraising-piece");
  var billsDescription = document.getElementById("bills-spending");
  var billsPiece = document.getElementById("bills-piece");
  var outreachDescription = document.getElementById("outreach-spending");
  var outreachPiece = document.getElementById("outreach-piece");
  if(getWidth() > 768) {
    if(state == 1) {
      charityDescription.style.backgroundColor = "#fff";
      charityDescription.style.color = "#ff2800";
      salaryDescription.style.backgroundColor = "#fff";
      salaryDescription.style.color = "#0077b0";
      fundraisingDescription.style.backgroundColor = "#fff";
      fundraisingDescription.style.color = "#ffbc00";
      billsDescription.style.backgroundColor = "#fff";
      billsDescription.style.color = "#CC2000";
      outreachDescription.style.backgroundColor = "#fff";
      outreachDescription.style.color = "#003A56";
      state = 0;
    }
    //Charity piece
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
  } else {
    charityDescription.style.backgroundColor = "#ff2800";
    charityDescription.style.color = "#fff";
    salaryDescription.style.backgroundColor = "#0077b0";
    salaryDescription.style.color = "#fff";
    fundraisingDescription.style.backgroundColor = "#ffbc00";
    fundraisingDescription.style.color = "#fff";
    billsDescription.style.backgroundColor = "#CC2000";
    billsDescription.style.color = "#fff";
    outreachDescription.style.backgroundColor = "#003A56";
    outreachDescription.style.color = "#fff";
    state = 1;
  }
}
function getWidth() {
  if (self.innerWidth) {
    return self.innerWidth;
  }

  if (document.documentElement && document.documentElement.clientWidth) {
    return document.documentElement.clientWidth;
  }

  if (document.body) {
    return document.body.clientWidth;
  }
}
