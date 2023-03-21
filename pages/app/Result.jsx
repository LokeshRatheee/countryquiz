import Image from "next/image";
import styles from "@/styles/result.module.css";

export default function Result() {
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
            <p className={styles.resultStatement}>You got 4 correct answers</p>
            <button type="submit" className={styles.tryagain}>
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
