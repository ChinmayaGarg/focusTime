import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { colors } from "../utils/colors";
// we have destructured and defaulted the props. Defaulting is a good habit for properties that are 100% not necessarily required.
// ...props is nothing but spreading the rest of the propsi.e. getting the rest of the properties on the variable props.
export const RoundedButton = ({
  style = {},
  textStyle = {},
  size = 125,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[styles(size).radius, style]}
      onPress={props.onPress}
    >
      <Text style={[styles(size).text, textStyle]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = (size) =>
  StyleSheet.create({
    radius: {
      borderRadius: size / 2,
      width: size,
      height: size,
      alignItems: "center",
      borderColor: colors.white,
      borderWidth: 2,
      justifyContent: "center",
    },
    text: {
      color: "#fff",
      fontSize: size / 3,
      alignItems: "center",
      // backgroundColor:'#000',
    },
  });
