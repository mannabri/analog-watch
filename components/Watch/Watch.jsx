import HourMarker from "../HourMarker/HourMarker";
import HourMarkerNumber from "../HourMarkerNumber/HourMarkerNumber";
import Hand from "../Hand/Hand";
import styles from "./Watch.module.scss";
import merge from "deepmerge";

const DEFAULT_CONFIG = {
  hands: {
    hour: {
      visible: true
    },
    minute: {
      visible: true
    },
    second: {
      visible: true
    }
  },
  mount: {
    visible: true
  },
  hourMarkers: {
    1: "number",
    2: "number",
    3: "number",
    4: "number",
    5: "number",
    6: "number",
    7: "number",
    8: "number",
    9: "number",
    10: "number",
    11: "number",
    12: "number"
  }
};

const Watch = ({ date, cssClass, customConfig = {} }) => {
  const config = merge(DEFAULT_CONFIG, customConfig);

  return (
    <div className={styles.case + " " + cssClass}>
      <div className={styles.face}></div>
      {Object.entries(config.hourMarkers).map(([hour, type]) => {
        if (type === "marker") {
          return (
            <HourMarker hour={hour} cssClass={styles.hourMarker} key={hour} />
          );
        }
        if (type === "number") {
          return (
            <HourMarkerNumber
              hour={hour}
              cssClass={styles.hourMarkerNumber}
              key={hour}
            />
          );
        }
        return null;
      })}
      {config.hands.hour.visible && (
        <Hand
          type={"hour"}
          value={date.getHours()}
          cssClass={styles.hourHand}
        />
      )}
      {config.hands.minute.visible && (
        <Hand
          type={"minute"}
          value={date.getMinutes()}
          cssClass={styles.minuteHand}
        />
      )}
      {config.mount.visible && <div className={styles.handsMount}></div>}
      {config.hands.second.visible && (
        <Hand
          type={"second"}
          value={date.getSeconds()}
          cssClass={styles.secondHand}
        />
      )}
    </div>
  );
};

export default Watch;
