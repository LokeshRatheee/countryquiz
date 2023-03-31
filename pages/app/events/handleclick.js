import questions from "../constant/constant";

export default function handleCLick(value, index, setresult) {
  const screenWidth = window.screen.width;
  let styleText =
    screenWidth < "500"
      ? "padding-left:50px;width:20px;color:white;background:transparent;border-radius:12px;"
      : screenWidth > "489" && screenWidth < "1022"
      ? "width:20px;color:white;background:transparent;border-radius:12px;"
      : "width: 20px;height: 20px;top: 18px;left: 362px;right: 18px;bottom: 18px;position: absolute;color: white;background: transparent;border-radius: 12px;";
  function checkicon(screenWidth) {
    let checkIcon = document.createElement("i");
    checkIcon.className = `fa-regular fa-circle-check`;
    checkIcon.style.cssText = styleText;
    document.getElementById(questions[index].answer).appendChild(checkIcon);
  }
  function crossicon(screenWidth) {
    let crossIcon = document.createElement("i");
    crossIcon.className = `fa-regular fa-circle-xmark`;
    crossIcon.style.cssText = styleText;
    document.getElementById(value).appendChild(crossIcon);
  }
  function icons() {
    if (value === questions[index].answer) {
      checkicon(screenWidth);
    } else {
      checkicon(screenWidth);
      crossicon(screenWidth);
    }
  }
  function green() {
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
  function red() {
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

  function color() {
    if (value === questions[index].answer) {
      green();
    } else {
      green();
      red();
    }
  }

  const iTags = document.getElementsByTagName("i");
  // Loop through all i tags and remove them from the DOM
  for (let i = iTags.length - 1; i >= 0; i--) {
    const iTag = iTags[i];
    iTag.parentNode.removeChild(iTag);
  }
  const items = document.getElementsByTagName("i");

  for (let i = 0; i < items.length; i++) {
    if (items[i].textContent === "Item 2") {
      items[i].remove();
    }
  }

  // condition for button show when index = 0 show the button
  if (index === 0) {
    let nextButton = document.getElementById("nextButton");
    nextButton.style.display = "block";
  }

  // reset the color ior hide icon whenever we click on another button
  const options_abcd = document.getElementsByClassName("optionsABCD");
  const cityNames = document.getElementsByClassName("optionNames");
  const listiteams = document.getElementsByClassName("listiteams");
  const icon = document.getElementsByClassName("icon");

  for (let i = 0; i < icon.length; i++) {
    icon[i].style.visibility = "hidden";
    i;
  }
  for (let i = 0; i < options_abcd.length; i++) {
    options_abcd[i].style.color = "#6066D0";
  }
  for (let i = 0; i < cityNames.length; i++) {
    cityNames[i].style.color = "#6066D0";
  }
  for (let i = 0; i < listiteams.length; i++) {
    listiteams[i].style.background = "transparent";
    listiteams[i].style.border = "2px solid #6066D0";
  }

  // check user click on correct option
  if (value === questions[index].answer) {
    setresult((prevCount) => prevCount + 1);
    icons();
    color();
  }

  // if user click on wrong option
  else {
    icons();
    color();
  }
}
