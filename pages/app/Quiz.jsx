import { handleClick } from "./clickEventFun";
import Image from "next/image";
// import styles from "@/styles/quizComponent/global.module.css";
import styles from "@/styles/quizComponent/quiz.module.css";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faCircleCheck,
} from "@fortawesome/free-regular-svg-icons";

export default function Quiz() {
  return (
    <div className="container">
      <div className={styles.quizSection}>
        <p id="lokesh" className={`heading ${styles.countryquiz}`}>COUNTRY QUIZ</p>
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
            <p>Kuala Lumpur is the capital of</p>
          </div>
          <ul className={styles.ulLIst}>
            <li
              className={`listiteams optionA ${styles.optionA}`}
              id="optiona"
              onClick={() => handleClick("optiona")}
            >
              <span className={`optionsABCD ${styles.optionsABCD}`} id="a">
                A
              </span>

              <span
                className={`optionNames ${styles.optionNames}`}
                id="vietnam"
              >
                Vietnam
              </span>
              <span>
                <FontAwesomeIcon
                  className={`icon ${styles.icon}`}
                  icon={faCircleXmark}
                />
              </span>
            </li>
            <li
              className={`listiteams optionB ${styles.optionB}`}
              id="optionb"
              onClick={() => handleClick("optionb")}
            >
              <span className={`optionsABCD ${styles.optionsABCD}`} id="b">
                B
              </span>{" "}
              <span
                className={`optionNames ${styles.optionNames}`}
                id="malaysia"
              >
                Malaysia
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
              className={`listiteams optionC ${styles.optionC}`}
              id="optionc"
              onClick={() => handleClick("optionc")}
            >
              <span className={`optionsABCD ${styles.optionsABCD}`} id="c">
                C
              </span>{" "}
              <span className={`optionNames ${styles.optionNames}`} id="sweden">
                Sweden
              </span>
              <FontAwesomeIcon
                className={`icon ${styles.icon}`}
                icon={faCircleXmark}
              />
            </li>
            <li
              className={`listiteams optionD ${styles.optionD}`}
              id="optiond"
              onClick={() => handleClick("optiond")}
            >
              <span className={`optionsABCD ${styles.optionsABCD}`} id="d">
                D
              </span>{" "}
              <span
                className={`optionNames ${styles.optionNames}`}
                id="austria"
              >
                Austria
              </span>
              <FontAwesomeIcon
                className={`icon ${styles.icon}`}
                icon={faCircleXmark}
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
