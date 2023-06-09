import questions from "../constant/constant";

/*
  !Alert: 1.) Function is too big try to apply solid principle for making the
  !       function smaller and readable  
  !       2.) Try to put the following functions outside the handleCLick functions
  !           i)   checkicon
  !           ii)  crossicon
  !           iii) icons
  !           iv)  green
  !            v)  red
  !           vi)  color
  !       3.) When selecting a function name try to select verb to be the name of the function

*/

function setStyleText() {
  const screenWidth = window.screen.width;
  let styleText =
    screenWidth < "500"
      ? "padding-left:50px;width:20px;color:white;background:transparent;border-radius:12px;"
      : screenWidth > "489" && screenWidth < "1025"
      ? "width:20px;color:white;background:transparent;border-radius:12px;"
      : "width: 20px;height: 20px;margin-left:202px; color: white;background: transparent;border-radius: 12px;";
  return styleText;
}
function checkicon(index) {
  console.log(index);
  let checkIcon = document.createElement("i");
  checkIcon.className = `fa-regular fa-circle-check`;
  checkIcon.style.cssText = setStyleText();
  document.getElementById(questions[index].answer).appendChild(checkIcon);
}

function crossicon(value) {
  let crossIcon = document.createElement("i");
  crossIcon.className = `fa-regular fa-circle-xmark`;
  crossIcon.style.cssText = setStyleText();
  document.getElementById(value).appendChild(crossIcon);
}
function green(index, value) {
  const green = document.getElementById(questions[index].answer);
  green.style.background = "#60BF88";
  green.style.color = "white";
  green.style.border = "2px solid white";
  let childElements = green.children;
  let childIds = [];
  for (let i = 0; i < childElements.length; i++) {
    childIds.push(childElements[i].id);
  }
  const abcd = document.getElementById(childIds[0]);
  const names = document.getElementById(childIds[1]);
  abcd.style.color = "white";
  names.style.color = "white";
}
function red(index, value) {
  const red = document.getElementById(value);
  let childElementsRed = red.children;
  let childIdsRed = [];
  for (let i = 0; i < childElementsRed.length; i++) {
    childIdsRed.push(childElementsRed[i].id);
  }
  const abcdRed = document.getElementById(childIdsRed[0]);
  const namesRed = document.getElementById(childIdsRed[1]);

  abcdRed.style.color = "white";
  red.style.background = "#EA8282";
  red.style.border = "2px solid white";
  namesRed.style.color = "white";
}
function icons(value, index) {
  if (value === questions[index].answer) {
    checkicon(index);
  } else {
    checkicon(index);
    crossicon(value);
  }
}
function color(value,index) {
  if (value === questions[index].answer) {
    green(index, value);
  } else {
    green(index, value);
    red(index, value);
  }
}

function  resetothers(){
  const options_abcd = document.getElementsByClassName("optionsABCD");
  const cityNames = document.getElementsByClassName("optionNames");
  const listiteams = document.getElementsByClassName("listiteams");
  const icon = document.getElementsByClassName("icon");

  for(let i = 0 ; i < cityNames.length ; i++){
    options_abcd[i].style.color = "#6066D0";
    cityNames[i].style.color = "#6066D0";
    listiteams[i].style.background = "transparent";
    listiteams[i].style.border = "2px solid #6066D0";
   }
}

export default function handleCLick(value, index, setresult) {
// console.log(value);
  green(index, value);
  red(index, value);

  const iTags = document.getElementsByTagName("i");
  // Loop through all i tags and remove them from the DOM
  for (let i = iTags.length - 1; i >= 0; i--) {
    const iTag = iTags[i];
    iTag.parentNode.removeChild(iTag);
  }
  // const items = document.getElementsByTagName("i");

  // for (let i = 0; i < items.length; i++) {
  //   if (items[i].textContent === "Item 2") {
  //     items[i].remove();
  //   }
  // }

  // condition for button show when index = 0 show the button
  if (index === 0) {
    let nextButton = document.getElementById("nextButton");
    nextButton.style.display = "block";
  }

  // reset the color ior hide icon whenever we click on another button


  /* 
    ?TODO: the length of the icon, options_abcd citynames and listitem 
    ?      are same. These all for loops can be replace with 1 for loop.
    ?      And try to put them in a function.
  */


  
  resetothers();

  // console.log(`length of ${icon.length} , ${options_abcd.length} , ${cityNames.length} , ${listiteams.length}`)
  // check user click on correct option
  if (value === questions[index].answer) {
    setresult((prevCount) => prevCount + 1);
    icons(value, index);
    color(value,index);
  }

  // if user click on wrong option
  else {
    icons(value, index);
    color(value,index);
  }
}
