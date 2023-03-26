export default function buttonClick() {


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


}
