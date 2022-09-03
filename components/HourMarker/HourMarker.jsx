import styles from "./HourMarker.module.scss";

export default function HourMarker({ hour = 0, cssClass }) {
  const degree = hour * 30;
  return (
    <div
      className={styles.tick + " " + cssClass}
      style={{ "--rotation": `${degree}deg` }}
    ></div>
  );
}
