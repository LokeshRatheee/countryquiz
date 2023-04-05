import Image from "next/image";
import styles from "@/styles/result.module.css";
import Quiz from "./Quiz";

export default function Result(props) {
  console.log(props);
  function tryAgain(){
    console.log("Click");
    /* 
        ?TODO :- Instead of reloading the window try to rerender the page
        ?     :- refreshing the page in not best user experience 
    */
    window.location.reload();
  }

  return (
    <>
      <div className="container">
        <div className={styles.quizSection}>
          <p className={styles.countryquiz}>COUNTRY QUIZ</p>

          <div className={styles.quizblock}>
            <Image
              src="/assets/winner.svg"
              alt="winner image"
              className={styles.winner}
              width="238"
              height="128"
            />
            <p className={styles.results}>Results</p>
            <p className={styles.resultStatement}>
              You got <span className={styles.correct
              }>{props.correctAnswers}</span> correct answers
            </p>
            <button id="tryAgainButton" onClick={() => tryAgain()} type="submit" className={styles.tryagain}>
               {/* 
                    //!Alert:- Try to avoid the use of the inline stylesling
                    //!        Try to kept all the css code in the css file. 
                */}
               
              <span
                className={styles.tryagaintext}
              >
                Try again
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
