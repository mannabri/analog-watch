import styles from "./HourMarkerNumber.module.scss";

export default function HourMarker({ hour = 0, cssClass }) {
  const degree = hour * 30;
  return (
    <div
      className={styles.marker + " " + cssClass}
      style={{
        "--rotation": `${degree}deg`,
        "--anti-rotation": `${degree * -1}deg`
      }}
    >
      {hour}
    </div>
  );
}
