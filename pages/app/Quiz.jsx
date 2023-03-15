import Image from "next/image";
import styles from "@/styles/quiz.module.css";
// import undraw_adventure from "@/public/assets/undraw_adventure_4hum 1.svg"

export default function Quiz() {
  return (
    <div className="container">
      <Image
        src="/assets/background.png"
        alt="My Image"
        className={styles.img}
        width="1440"
        height="1090"
      />
      <div className={styles.quizSection}>
        <p>COUNTRY QUIZ</p>
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
