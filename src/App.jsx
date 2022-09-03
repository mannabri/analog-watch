import Watch from "../components/Watch/Watch";
import { useEffect, useState } from "react";
import styles from "./App.module.scss";

export default function App() {
  const [date, setDate] = useState(new Date(Date.now()));

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date(Date.now()));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.app}>
      <h1>Customizable Watch</h1>
      <Watch date={date} />
      <br />
      <Watch
        date={date}
        cssClass={styles.watch2}
        customConfig={{
          hourMarkers: {
            1: null,
            2: null,
            4: null,
            5: null,
            7: null,
            8: null,
            10: null,
            11: null
          }
        }}
      />
      <br />
      <Watch
        date={date}
        cssClass={styles.watch3}
        customConfig={{
          hourMarkers: {
            1: null,
            2: null,
            3: "marker",
            4: null,
            5: null,
            6: "marker",
            7: null,
            8: null,
            9: "marker",
            10: null,
            11: null,
            12: "marker"
          }
        }}
      />
      <br />
      <Watch
        date={date}
        cssClass={styles.watch4}
        customConfig={{
          hands: { second: { visible: false } },
          hourMarkers: {
            1: "marker",
            2: "marker",
            3: "marker",
            4: "marker",
            5: "marker",
            6: "marker",
            7: "marker",
            8: "marker",
            9: "marker",
            10: "marker",
            11: "marker",
            12: "marker"
          }
        }}
      />
      <br />
      <Watch date={date} cssClass={styles.watch5} />
      <br />
      <Watch date={date} cssClass={styles.watch6} />
    </div>
  );
}
