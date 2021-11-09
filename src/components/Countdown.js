import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";

import { fontSizes, spacing } from "../utils/sizes";
import { colors } from "../utils/colors";

// setInterval(): This is used to do repetitive tasks in JavaScript

const minutesToMillis = (mins) => mins * 1000 * 60;
const formatTime = (time) => (time < 10 ? `0${time}` : time);

export const Countdown = ({
  minutes = 20,
  isPaused = true,
  onProgress,
  onEnd,
}) => {
  const [millis, setMillis] = useState(null);

  useEffect(() => {
    setMillis(minutesToMillis(minutes));
  }, [minutes]);

  useEffect(() => {
    if (isPaused) {
      if (interval.current) clearInterval(interval.current);
      return;
    }
    interval.current = setInterval(countDown, 1000);
    return () => clearInterval(interval.current);
  }, [isPaused]);

  const interval = React.useRef(null);

  const countDown = () => {
    setMillis((time) => {
      if (time === 0) {
        clearInterval(interval.current);
        onEnd();
        return time;
      } else {
        const timeLeft = time - 1000;
        onProgress(timeLeft / minutesToMillis(minutes));
        return timeLeft;
      }
    });
  };

  const minute = Math.floor((millis / 1000 / 60) % 60);
  const seconds = Math.floor((millis / 1000) % 60);

  return (
    <Text style={styles.text}>
      {formatTime(minute)}:{formatTime(seconds)}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: fontSizes.xxxl,
    fontWeight: "bold",
    color: colors.white,
    padding: spacing.lg,
    backgroundColor: "rgba(94,132,226,0.3)",
    textAlign: "center",
  },
});
