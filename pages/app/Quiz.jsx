import Image from "next/image";
import Result from "./Result";
import buttonClick from "./events/buttonClick";
import handleClick from "./events/handleclick";
import questionsSet from "./constant/constant";
import styles from "@/styles/quizComponent/quiz.module.css";
import { useState } from "react";

export default function Quiz() {
  // states
  const [index, setindex] = useState(0);
  const [result, setresult] = useState(0);

  // console.log(questions[0]);

  let questions = [...questionsSet];
 
  console.log(questionsSet[0]);
  return (
    <div>
      {index === 3 ? (
        <Result correctAnswer={result} />
      ) : (
        <>
          {console.log("quiz")}
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
                
                  {/* {
                    questionsSet.slice(index, index + 1).map((questions,i) => {
                      <div key={i}>
                      <p>{questions.question}</p>
                  <ul className={`ulList ${styles.ulLIst}`}>
                    <li
                      className={`choice1 listiteams optionA ${styles.optionA}`}
                      id="choice1"
                      onClick={() => handleClick("choice1", index, setresult)}
                    >
                      <span
                        className={`optionsABCD ${styles.optionsABCD}`}
                        id="a"
                      >
                        A
                      </span>

                      <span
                        className={`optionNames ${styles.optionNames}`}
                        id="vietnam"
                      >
                        {questions[index].choice1}
                      </span>
                    </li>
                    </ul>
                    </div>
                    })
                  } */}
                  <p>{questions[index].question}</p>
                  <ul className={`ulList ${styles.ulLIst}`}>
                    <li
                      className={`choice1 listiteams optionA ${styles.optionA}`}
                      id="choice1"
                      onClick={() => handleClick("choice1", index, setresult)}
                    >
                      <span
                        className={`optionsABCD ${styles.optionsABCD}`}
                        id="a"
                      >
                        A
                      </span>

                      <span
                        className={`optionNames ${styles.optionNames}`}
                        id="vietnam"
                      >
                        {questions[index].choice1}
                      </span>
                    </li>
                    <li
                      className={`listiteams choice2 optionB ${styles.optionB}`}
                      id="choice2"
                      onClick={() => handleClick("choice2", index, setresult)}
                    >
                      <span
                        className={`optionsABCD ${styles.optionsABCD}`}
                        id="b"
                      >
                        B
                      </span>{" "}
                      <span
                        className={`optionNames ${styles.optionNames}`}
                        id="malaysia"
                      >
                        {questions[index].choice2}
                      </span>
                    </li>
                    <li
                      className={`listiteams choice3 optionC ${styles.optionC}`}
                      id="choice3"
                      onClick={() => handleClick("choice3", index, setresult)}
                    >
                      <span
                        className={`optionsABCD ${styles.optionsABCD}`}
                        id="c"
                      >
                        C
                      </span>{" "}
                      <span
                        className={`optionNames ${styles.optionNames}`}
                        id="sweden"
                      >
                        {questions[index].choice3}
                      </span>
                    </li>
                    <li
                      className={`listiteams choice4 optionD ${styles.optionD}`}
                      id="choice4"
                      onClick={() => handleClick("choice4", index, setresult)}
                    >
                      <span
                        className={`optionsABCD ${styles.optionsABCD}`}
                        id="d"
                      >
                        D
                      </span>{" "}
                      <span
                        className={`optionNames ${styles.optionNames}`}
                        id="austria"
                      >
                        {questions[index].choice4}
                      </span>
                    </li>
                  </ul>
                  <button
                    id="nextButton"
                    className={styles.nextButton}
                    onClick={() => buttonClick(setindex(index + 1))}
                  >
                    next
                  </button>
                </div>
              </div>
            </div>
          
        </>
      )}
    </div>
  );
}
