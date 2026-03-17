import { useEffect, useState } from "react";

const colors = {
  red: "bg-red-500 animate-pulse",
  yellow: "bg-yellow-500 animate-pulse",
  green: "bg-green-500 animate-pulse",
};

type TrafficLightColor = keyof typeof colors;

export const useTrafficLight = () => {
  const [light, setlight] = useState<TrafficLightColor>("red");

  const [countdown, setCountdown] = useState(5);

  // Countdown effect.
  useEffect(() => {
    if (countdown === 0) return;

    console.log({ countdown });
    const intervalId = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [countdown]);

  // Change light color effect.
  (useEffect(() => {
    if (countdown > 0) return;

    setCountdown(5);

    if (light === "red") {
      setlight("green");
      return;
    }

    if (light === "yellow") {
      setlight("red");
      return;
    }

    if (light === "green") {
      setlight("yellow");
      return;
    }

    return;
  }),
    [countdown, light]);

  return { countdown, light, colors };
};
