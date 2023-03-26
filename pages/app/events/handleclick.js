import questions from "../constant/constant";

export default function handleCLick(value, index,setresult) {
  console.log(value, index,setresult);
  const iTags = document.getElementsByTagName("i");

  // Loop through all i tags and remove them from the DOM
  for (let i = iTags.length - 1; i >= 0; i--) {
    const iTag = iTags[i];
    iTag.parentNode.removeChild(iTag);
  }

  const items = document.getElementsByTagName("i");
  // console.log(xyz);
  for (let i = 0; i < items.length; i++) {
    if (items[i].textContent === "Item 2") {
      console.log(items[i]);
      items[i].remove();
    }
  }
  // xyz[0].remove();
  //console.log(value);
  if (index === 0) {
    let nextButton = document.getElementById("nextButton");
    console.log(nextButton);
    nextButton.style.display = "block";
  } else {
  }
  const options_abcd = document.getElementsByClassName("optionsABCD");
  const cityNames = document.getElementsByClassName("optionNames");
  const listiteams = document.getElementsByClassName("listiteams");
  // const checkicon = document.getElementsByClassName("checkicon");
  // checkicon[0].style.visibility = "hidden";
  const icon = document.getElementsByClassName("icon");

  const lokesh = document.getElementsByClassName("choice1");

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

  console.log(questions[index].answer + "answer");
  if (value === questions[index].answer) {
    setresult(prevCount => prevCount + 1)
    console.log(setresult);
    const screenWidth = window.screen.width;
    // console.log(`Screen width: ${screenWidth}px`);
    if (screenWidth < "500") {
      let icon = document.createElement("i");

      icon.className = "fa-regular fa-circle-check";
      // icon.id = "checkIcon";
      // let check = document.getElementById("checkIcon");
      console.log(icon);

      icon.style.cssText =
        "padding-left:50px;width:20px;color:white;background:transparent;border-radius:12px;";
      document.getElementById(value).appendChild(icon);
    } else if (screenWidth > "489" && screenWidth < "1022") {
      // alert(screenWidth);
      console.log("asadas");

      let icon = document.createElement("i");

      icon.className = "fa-regular fa-circle-check";
      // icon.id = "checkIcon";
      // let check = document.getElementById("checkIcon");
      console.log(icon);

      icon.style.cssText =
        "width:20px;color:white;background:transparent;border-radius:12px;";
      document.getElementById(value).appendChild(icon);
    } else if (screenWidth > "1024") {
      let icon = document.createElement("i");

      icon.className = "fa-regular fa-circle-check";
      // icon.id = "checkIcon";
      // let check = document.getElementById("checkIcon");
      console.log(icon);

      icon.style.cssText =
        "width: 20px;height: 20px;top: 18px;left: 362px;right:18px;bottom: 18px;position: absolute; color: white;background: transparent;border-radius: 12px;";

      document.getElementById(value).appendChild(icon);
    }

    const green = document.getElementById(value);
    green.style.background = "#60BF88";
    green.style.color = "white";
    green.style.border = "transparent";

    let childElements = green.children;
    let childIds = [];
    for (let i = 0; i < childElements.length; i++) {
      childIds.push(childElements[i].id);
    }
    const abcd = document.getElementById(childIds[0]);
    const names = document.getElementById(childIds[1]);

    abcd.style.color = "white";

    names.style.color = "white";
  } else {
    // let icon3 = document.createElement("i");

    // icon3.className = "fa-regular fa-circle-check";

    // icon3.style.cssText =
    //   "width:20px;height:20px;top:18px;left:362px;right:18px;bottom:18px;position:absolute;color:white;background:transparent;border-radius:12px;";
    // icon3.style.cssText =
    //   "width:20px;height:20px;top:18px;left:362px;right:18px;bottom:18px;position:absolute;color:white;background:transparent;border-radius:12px;";
    // document.getElementById(questions[index].answer).appendChild(icon3);

    let icon1 = document.createElement("i");
    const screenWidth = window.screen.width;
    // console.log(`Screen width: ${screenWidth}px`);
    if (screenWidth < "500") {
      icon1.className = "fa-regular fa-circle-xmark";
      icon1.style.cssText =
        "padding-left:50px;width:20px;color:white;background:transparent;border-radius:12px;";
      document.getElementById(value).appendChild(icon1);

      let icon3 = document.createElement("i");

      icon3.className = "fa-regular fa-circle-check";

      icon3.style.cssText =
        "padding-left:50px;width:20px;color:white;background:transparent;border-radius:12px;";
      document.getElementById(questions[index].answer).appendChild(icon3);
    } else if (screenWidth > "489" && screenWidth < "1022") {
      let icon = document.createElement("i");

      icon.className = "fa-regular fa-circle-xmark";
      // icon.id = "checkIcon";
      // let check = document.getElementById("checkIcon");
      console.log(icon);

      icon.style.cssText =
        "width:20px;color:white;background:transparent;border-radius:12px;";
      document.getElementById(value).appendChild(icon);
      let icon3 = document.createElement("i");

      icon3.className = "fa-regular fa-circle-check";

      icon3.style.cssText =
        "width:20px;color:white;background:transparent;border-radius:12px;";
      document.getElementById(questions[index].answer).appendChild(icon3);
    } else if (screenWidth > "1023") {
      let icon = document.createElement("i");

      icon.className = "fa-regular fa-circle-xmark";
      // icon.id = "checkIcon";
      // let check = document.getElementById("checkIcon");
      console.log(icon);

      icon.style.cssText =
        "width: 20px;height: 20px;top: 18px;left: 362px;right:18px;bottom: 18px;position: absolute; color: white;background: transparent;border-radius: 12px;";
      document.getElementById(value).appendChild(icon);
      let icon3 = document.createElement("i");

      icon3.className = "fa-regular fa-circle-check";

      icon3.style.cssText =
        "width: 20px;height: 20px;top: 18px;left: 362px;right:18px;bottom: 18px;position: absolute; color: white;background: transparent;border-radius: 12px;";
      document.getElementById(questions[index].answer).appendChild(icon3);
    }

    const red = document.getElementById(value);

    let childElementsRed = red.children;

    let childIdsRed = [];

    for (let i = 0; i < childElementsRed.length; i++) {
      childIdsRed.push(childElementsRed[i].id);
    }

    const green = document.getElementById(questions[index].answer);
    let childElements = green.children;
    let childIds = [];
    for (let i = 0; i < childElements.length; i++) {
      childIds.push(childElements[i].id);
    }
    const abcd = document.getElementById(childIds[0]);
    const names = document.getElementById(childIds[1]);

    abcd.style.color = "white";
    names.style.color = "white";
    const abcdRed = document.getElementById(childIdsRed[0]);
    const namesRed = document.getElementById(childIdsRed[1]);
    green.style.background = "#60BF88";
    green.style.border = "transparent";
    abcdRed.style.color = "white";
    red.style.background = "#EA8282";
    red.style.border = "transparent";
    namesRed.style.color = "white";

    const icon = document.getElementsByClassName("icon");

    for (let i = 0; i < icon.length; i++) {
      icon[i].style.display = "inline";
      icon[i].style.visibility = "visible";
      i;
    }
  }
}
