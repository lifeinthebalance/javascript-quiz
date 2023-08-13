import { useEffect, useState } from "react";

export default function DeathTimer({ time, setTime }) {
  useEffect(() => {
    let interval = setInterval(() => {
      if (time > 0) {
        setTime((time) => time - 1);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  return <>{time > 0 && <button onClick={() => setTime(0)}>Quit</button>}</>;
}
