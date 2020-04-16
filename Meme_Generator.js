const divFigure = document.querySelector("#figure");

function createNewDiv(e){
  const newDiv = document.createElement("div");
  newDiv.setAttribute("id", "divFigure");

  const topDiv = document.createElement("div");
  const downDiv = document.createElement("div");

  topDiv.classList.add("topDiv");
  downDiv.classList.add("downDiv");

  topDiv.setAttribute("style", "font-family:sans-serif; color:White; font-size: 30px;");
  downDiv.setAttribute("style", "font-family:sans-serif; color:White; font-size: 30px;");

  const newImg = document.createElement("img");

  newImg.setAttribute("id", "myImg");
  newImg.setAttribute("src", "#");
  newImg.setAttribute("alt", "No Image!");

  newDiv.append(newImg);
  newDiv.append(topDiv);
  newDiv.append(downDiv);

  divFigure.append(newDiv);
}

createNewDiv();

const eventFigure = document.querySelector("#urlForFigure");
const urlImg= document.querySelector('#url');
eventFigure.addEventListener('submit', function(e){
  e.preventDefault();
  addFigure(urlImg.value);
  urlImg.value='';
});
function addFigure(url) {
  const myImg = document.querySelector("#myImg");
  myImg.src = url;
}

const eventTop = document.querySelector("#topText");
const topText = document.querySelector('#top');
const topColor = document.querySelector('#topColor');
eventTop.addEventListener('submit', function(e){
  e.preventDefault();
  addTopText(topText.value, "top");
  topText.value='';

  addTopColor(topColor.value);
  topColor.value='';
});
function addTopText(text, pos) {
  const topDivText = document.querySelector(".topDiv");
  topDivText.innerText = text;
}
function addTopColor(text) {
  document.querySelector(".topDiv").style.color=text;
}

const eventDown = document.querySelector("#downText");
const downText = document.querySelector('#down');
const downColor = document.querySelector('#downColor');
eventDown.addEventListener('submit', function(e){
  e.preventDefault();
  addDownText(downText.value, "down");
  downText.value='';

  addTDownColor(downColor.value);
  downColor.value='';
});
function addDownText(text, pos) {
  const downDivText = document.querySelector(".downDiv");
  downDivText.innerText = text;
}
function addTDownColor(text) {
  document.querySelector(".downDiv").style.color=text;
}

$(document).ready(function() { 
  var element = $("#divFigure");

  $("#btn-Preview-Image").on('click', function() { 
      html2canvas(element, { letterRendering: 1, allowTaint : true,
          onrendered: function(canvas) { 

            const newDivCanvas = document.createElement("div");

            const newButton = document.createElement("button");
            newButton.innerText = "DELETE";
            newButton.setAttribute("id", "canvasBTN");

            newDivCanvas.append(newButton);
            newDivCanvas.append(canvas);
          
            $("#previewImage").append(newDivCanvas);
          } 
      }); 
  });
});

const canvasList = document.querySelector('#previewImage');
canvasList.addEventListener('click', function(e){
    if (e.target.tagName === 'BUTTON'){
        e.target.parentElement.remove();
    }
});