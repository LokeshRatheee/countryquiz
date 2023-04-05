import Image from "next/image";
import Result from "./Result";
import buttonClick from "./events/buttonClick";
import handleClick from "./events/handleclick";
import questionsSet from "./constant/constant";
import styles from "@/styles/quizComponent/quiz.module.css";
import { useState } from "react";

export default function Quiz() {
  // states
  const limit = questionsSet.length;
 
  const [index, setindex] = useState(0);
  const [result, setresult] = useState(0);

  let questions = [...questionsSet];
  const options = questions[0].options;

  return (
    <div>
      {/* 
          //!Alert:- Instead of using value here use any constant like
          //!        maxquestion. 
      */}
      {index === limit ? (
        <Result correctAnswers={result} />
      ) : (
        <>
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
            </div>

            <div className={styles.quizblock}>
              <div>
                <p>{questions[index].question}</p>
                <ul className={`ulList ${styles.ulList}`}>
                  {questions[index].choices.map((value, i) => {
                    return (
                      <li
                        className={`${questions[index].choices[i]} listiteams ${questions[index].classes[i]} ${styles.options}`}
                        id={value}
                        key={i}
                        onClick={() =>
                          handleClick(
                            questions[index].choices[i],
                            index,
                            setresult
                          )
                        }
                      >
                        <span
                          className={`optionsABCD ${styles.optionsABCD}`}
                          id={questions[index].id[i]}
                        >
                          {questions[index].abcd[i]}
                        </span>

                        <span
                          className={`optionNames ${styles.optionNames}`}
                          id={questions[index].citysNames[i]}
                        >
                          {questions[index].citysNames[i]}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <button
                id="nextButton"
                className={styles.nextButton}
                onClick={() => buttonClick(setindex(index + 1))}
              >
                next
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
