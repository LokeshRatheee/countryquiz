import Image from "next/image";
import styles from "@/styles/quiz.module.css";

export default function Quiz() {
  return (
    <div className="container">
    
      <div className={styles.quizSection}>
        <p className={styles.countryquiz}>COUNTRY QUIZ</p>
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
            <li className={styles.optionA}>
              <span className={styles.optionsABCD}>A</span> <span className={styles.optionNames}>Vietnam</span>
            </li>
            <li className={styles.optionB}>
              <span className={styles.optionsABCD}>B</span> <span className={styles.optionNames}>Malaysia</span>
            </li>
            <li className={styles.optionC}>
              <span className={styles.optionsABCD}>C</span> <span className={styles.optionNames}>Sweden</span>
            </li>
            <li className={styles.optionD}>
              <span className={styles.optionsABCD}>D</span> <span className={styles.optionNames}>Austria</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
