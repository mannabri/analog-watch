import styles from "./Hand.module.scss";

const Hand = ({ type = "hour", value = 0, cssClass }) => {
  let degree = 0;
  switch (type) {
    case "hour": {
      degree = value * 30;
      break;
    }
    case "minute": {
      degree = value * 6;
      break;
    }
    case "second": {
      degree = value * 6;
      break;
    }
    default: {
      console.warn("WARN property 'type' is missing");
      break;
    }
  }

  const customStyle = {
    "--degree": `${degree}deg`
  };
  return (
    <div
      className={styles.container + " " + cssClass}
      style={customStyle}
    ></div>
  );
};

export default Hand;
