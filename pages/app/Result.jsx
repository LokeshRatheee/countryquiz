import Image from "next/image";
import styles from "@/styles/result.module.css";
import Quiz from "./Quiz";

export default function Result(props) {
  console.log(props);
  function tryAgain(){
    console.log("Click");
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
              }>{props.correctAnswer}</span> correct answers
            </p>
            <button id="tryAgainButton" onClick={() => tryAgain()} type="submit" className={styles.tryagain}>
              <span
                className="tryagaintext"
                style={{
                  width: "87px",
                  height: "27px",
                  left: "676px",
                  top: "717px",
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: "18px",
                  lineHeight: "27px",
                  color: "#1d355d",
                }}
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
