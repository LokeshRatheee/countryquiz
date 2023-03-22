// import { handleClick } from "./clickEventFun";
import Image from "next/image";
import styles from "@/styles/quizComponent/quiz.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faCircleCheck,
} from "@fortawesome/free-regular-svg-icons";
import { useEffect, useState } from "react";

export default function Quiz() {
  let questionsSet = [
    {
      question: "Kuala is the capital of?",
      choice1: "THILAND",
      choice2: "HONGKONG",
      choice3: "SINGAPUR",
      choice4: "Malaysia",
      answer: "choice4",
    },
    {
      question: "Canberra is the capital of?",
      choice1: "AUSTRALIA",
      choice2: "NEWYORK",
      choice3: "CHINA",
      choice4: "JAPAN",
      answer: "choice1",
    },
    {
      question: "Reykjavík is the capital of?",
      choice1: "KORIA",
      choice2: "JAPAN",
      choice3: "ICELAND",
      choice4: "INDIA",
      answer: "choice3",
    },
  ];

  let questions = [...questionsSet];

  const [index, setindex] = useState(0);
  function buttonClick() {
    

    const options_abcd = document.getElementsByClassName("optionsABCD");
    const cityNames = document.getElementsByClassName("optionNames");
    const listiteams = document.getElementsByClassName("listiteams");
    const checkicon = document.getElementsByClassName("checkicon");
    checkicon[0].style.visibility = "hidden";
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

    console.log("click");
    setindex(index + 1);
    console.log(index);

    if (index == questions.length - 1) {
      setindex(0);
      console.log("index is 0");
    }
  }

  function handleClick(value) {
    console.log(value);

      const options_abcd = document.getElementsByClassName("optionsABCD");
    const cityNames = document.getElementsByClassName("optionNames");
    const listiteams = document.getElementsByClassName("listiteams");
    const checkicon = document.getElementsByClassName("checkicon");
    checkicon[0].style.visibility = "hidden";
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



    console.log(questions[index].answer);
    if(value === questions[index].answer){
      console.log("match");
      const checkicon = document.getElementsByClassName("checkicon");
      
      checkicon[0].style.display = "inline";
      checkicon[0].style.visibility = "visible";

      const green = document.getElementById(value);
      console.log(green);
      green.style.background = "#60BF88";
      green.style.color = "white";
      green.style.border = "transparent";
      // const b = document.getElementById("b");
      // b.style.color = "white";
      // const malaysia = document.getElementById("malaysia");
      // malaysia.style.color = "white";
      let childElements = green.children;
      let childIds = [];
      for (let i = 0; i < childElements.length; i++) {
        childIds.push(childElements[i].id);
      }
      
    }
    else{
      console.log("not match");
      const checkicon = document.getElementsByClassName("checkicon");
      console.log(checkicon);
      checkicon[0].style.display = "inline";
      checkicon[0].style.visibility = "visible";
      const red = document.getElementById(value);

      let childElements = red.children;

      let childIds = [];
      for (let i = 0; i < childElements.length; i++) {
        childIds.push(childElements[i].id);
        
      }
      const green = document.getElementById(questions[index].answer);
      const abcd = document.getElementById(childIds[0]);
      const names = document.getElementById(childIds[1]);
      green.style.background = "#60BF88";
      green.style.border = "transparent";
      abcd.style.color = "white";
      red.style.background = "#EA8282";
      red.style.border = "transparent";
      names.style.color = "white";
      // const b = document.getElementById("b");
      // b.style.color = "white";
      // const vietnam = document.getElementById("malaysia");
      // malaysia.style.color = "white";

      
      const icon = document.getElementsByClassName("icon");
      
      for (let i = 0; i < icon.length; i++) {
        icon[i].style.display = "inline";
        icon[i].style.visibility = "visible";
        i;
      }
    }

    // for (let i = 0; i < qqq.length; i++) {
    //   // console.log(questions[index].answer)
    //   if (qqq[i].id === questions[index].answer) {
    //     // console.log(qqq[i].id);
    //     // console.log("match");
    //     const checkicon = document.getElementsByClassName("checkicon");
      
    //   checkicon[0].style.display = "inline";
    //   checkicon[0].style.visibility = "visible";

    //   const green = document.getElementById(qqq[i].id);
    //   green.style.background = "#60BF88";
    //   green.style.color = "white";
    //   green.style.border = "transparent";
    //   const b = document.getElementById("b");
    //   b.style.color = "white";
    //   const malaysia = document.getElementById("malaysia");
    //   malaysia.style.color = "white";
    //   let childElements = green.children;
    //   let childIds = [];
    //   for (let i = 0; i < childElements.length; i++) {
    //     childIds.push(childElements[i].id);
    //   }
    //   }
    // }



    // const options_abcd = document.getElementsByClassName("optionsABCD");
    // const cityNames = document.getElementsByClassName("optionNames");
    // const listiteams = document.getElementsByClassName("listiteams");
    // const checkicon = document.getElementsByClassName("checkicon");
    // checkicon[0].style.visibility = "hidden";
    // const icon = document.getElementsByClassName("icon");
   
    // const lokesh = document.getElementsByClassName("choice1");
 
    // for (let i = 0; i < icon.length; i++) {
      
    //   icon[i].style.visibility = "hidden";
    //   i;
    // }
    // for (let i = 0; i < options_abcd.length; i++) {
      
    //   options_abcd[i].style.color = "#6066D0";
    // }
    // for (let i = 0; i < cityNames.length; i++) {
      
    //   cityNames[i].style.color = "#6066D0";
    // }
    // for (let i = 0; i < listiteams.length; i++) {
    //   listiteams[i].style.background = "transparent";
    //   listiteams[i].style.border = "2px solid #6066D0";
    // }
    

    // if (value === "optionb") {
      
    //   const checkicon = document.getElementsByClassName("checkicon");
      
    //   checkicon[0].style.display = "inline";
    //   checkicon[0].style.visibility = "visible";

    //   const green = document.getElementById("optionb");
    //   green.style.background = "#60BF88";
    //   green.style.color = "white";
    //   green.style.border = "transparent";
    //   const b = document.getElementById("b");
    //   b.style.color = "white";
    //   const malaysia = document.getElementById("malaysia");
    //   malaysia.style.color = "white";
    //   let childElements = green.children;
    //   let childIds = [];
    //   for (let i = 0; i < childElements.length; i++) {
    //     childIds.push(childElements[i].id);
    //   }
    // } else {
      

    //   const checkicon = document.getElementsByClassName("checkicon");
    //   console.log(checkicon);
    //   checkicon[0].style.display = "inline";
    //   checkicon[0].style.visibility = "visible";
    //   const red = document.getElementById(value);

    //   let childElements = red.children;

    //   let childIds = [];
    //   for (let i = 0; i < childElements.length; i++) {
    //     childIds.push(childElements[i].id);
        
    //   }
    //   const green = document.getElementById("optionb");
    //   const abcd = document.getElementById(childIds[0]);
    //   const names = document.getElementById(childIds[1]);
    //   green.style.background = "#60BF88";
    //   green.style.border = "transparent";
    //   abcd.style.color = "white";
    //   red.style.background = "#EA8282";
    //   red.style.border = "transparent";
    //   names.style.color = "white";
    //   const b = document.getElementById("b");
    //   b.style.color = "white";
    //   const vietnam = document.getElementById("malaysia");
    //   malaysia.style.color = "white";

      
    //   const icon = document.getElementsByClassName("icon");
      
    //   for (let i = 0; i < icon.length; i++) {
    //     icon[i].style.display = "inline";
    //     icon[i].style.visibility = "visible";
    //     i;
    //   }
    // }
  }

  return (
    <div className={styles.container}>
      <div className={styles.quizSection}>
        <p id="lokesh" className={`heading ${styles.countryquiz}`}>
          COUNTRY QUIZ
        </p>
        <Image
          src="/assets/undrew.svg"
          alt="my image"
          className={styles.undraw}
          height="116"
          width="162"
          quality={100}
        />

        <div className={styles.quizblock}>
          <div>
            <p>{questions[index].question}</p>
            <ul className={`ulList ${styles.ulLIst}`}>
              <li
                className={`choice1 listiteams optionA ${styles.optionA}`}
                id="choice1"
                onClick={() => handleClick("choice1")}
              >
                <span className={`optionsABCD ${styles.optionsABCD}`} id="a">
                  A
                </span>

                <span
                  className={`optionNames ${styles.optionNames}`}
                  id="vietnam"
                >
                  {questions[index].choice1}
                </span>
                <span>
                  <FontAwesomeIcon
                    className={`icon ${styles.icon}`}
                    icon={faCircleXmark}
                  />
                </span>
              </li>
              <li
                className={`listiteams choice2 optionB ${styles.optionB}`}
                id="choice2"
                onClick={() => handleClick("choice2")}
              >
                <span className={`optionsABCD ${styles.optionsABCD}`} id="b">
                  B
                </span>{" "}
                <span
                  className={`optionNames ${styles.optionNames}`}
                  id="malaysia"
                >
                  {questions[index].choice2}
                </span>
                <span>
                  <FontAwesomeIcon
                    id="checkIconID"
                    className={`checkicon ${styles.checkicon}`}
                    icon={faCircleCheck}
                  />
                </span>
              </li>
              <li
                className={`listiteams choice3 optionC ${styles.optionC}`}
                id="choice3"
                onClick={() => handleClick("choice3")}
              >
                <span className={`optionsABCD ${styles.optionsABCD}`} id="c">
                  C
                </span>{" "}
                <span
                  className={`optionNames ${styles.optionNames}`}
                  id="sweden"
                >
                  {questions[index].choice3}
                </span>
                <FontAwesomeIcon
                  className={`icon ${styles.icon}`}
                  icon={faCircleXmark}
                />
              </li>
              <li
                className={`listiteams choice4 optionD ${styles.optionD}`}
                id="choice4" 
                onClick={() => handleClick("choice4")}
           
              >
                <span className={`optionsABCD ${styles.optionsABCD}`} id="d">
                  D
                </span>{" "}
                <span
                  className={`optionNames ${styles.optionNames}`}
                  id="austria"
                >
                  {questions[index].choice4}
                </span>
                <FontAwesomeIcon
                  className={`icon ${styles.icon}`}
                  icon={faCircleXmark}
                />
              </li>
            </ul>
          </div>
        </div>
        <button
          style={{ width: "100px", height: "100px", fontSize: "30px" }}
          onClick={() => buttonClick()}
        >
          next
        </button>
      </div>
    </div>
  );
}
