import styles from "./Button.module.css";

function Button({ text }) {
  return (
    <button className={styles.btn} type="submit">
      {text}
    </button>
  );
}

export default Button;
