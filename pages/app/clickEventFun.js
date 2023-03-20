function handleClick(value) {
    const options_abcd = document.getElementsByClassName("optionsABCD");
    const cityNames = document.getElementsByClassName("optionNames");
    const listiteams = document.getElementsByClassName("listiteams");
    for (let i = 0; i < options_abcd.length; i++) {
      console.log(options_abcd[i]);
      options_abcd[i].style.color = "#6066D0";
    }
    for (let i = 0; i < cityNames.length; i++) {
      console.log(cityNames[i]);
      cityNames[i].style.color = "#6066D0";
    }
    for (let i = 0; i < listiteams.length; i++) {
      listiteams[i].style.background = "transparent";
      listiteams[i].style.border = "2px solid #6066D0";
    }

    if (value === "optionb") {
    //   answer = true;
      const checkicon = document.getElementsByClassName("checkicon");
      console.log(checkicon);
      checkicon[0].style.display = "inline";

      const green = document.getElementById("optionb");
      green.style.background = "#60BF88";
      green.style.color = "white";
      green.style.border = "transparent";
      const b = document.getElementById("b");
      b.style.color = "white";
      const malaysia = document.getElementById("malaysia");
      malaysia.style.color = "white";
      let childElements = green.children;
      let childIds = [];
      for (let i = 0; i < childElements.length; i++) {
        childIds.push(childElements[i].id);
      }
    } else {
    //   answer = false;
      // icon

      const checkicon = document.getElementsByClassName("checkicon");
      console.log(checkicon);
      checkicon[0].style.display = "inline";
      const red = document.getElementById(value);

      let childElements = red.children;

      let childIds = [];
      for (let i = 0; i < childElements.length; i++) {
        childIds.push(childElements[i].id);
        console.log(childIds);
      }
      const green = document.getElementById("optionb");
      const abcd = document.getElementById(childIds[0]);
      const names = document.getElementById(childIds[1]);
      green.style.background = "#60BF88";
      green.style.border = "transparent";
      abcd.style.color = "white";
      red.style.background = "#EA8282";
      red.style.border = "transparent";
      names.style.color = "white";
      const b = document.getElementById("b");
      b.style.color = "white";
      const vietnam = document.getElementById("malaysia");
      malaysia.style.color = "white";

      // icons
      const icon = document.getElementsByClassName("icon");
      console.log(icon);
      for (let i = 0; i < icon.length; i++) {
        icon[i].style.display = "inline";
        i;
      }
    }
  }

  export {handleClick};