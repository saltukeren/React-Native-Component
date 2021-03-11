import React from "react";
import { StyleSheet, Text as RNText } from "react-native";

interface TextProps {
  text: string;
  color?: string;
  fontSize?: number;
  fontFamily?: "bold" | "light" | "medium" | "regular";
  fontStyle?: "italic" | "normal";
  fontWeight?:
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900"
    | "bold"
    | "normal";
  textAlign?: "auto" | "center" | "justify" | "left" | "right";
  textDecorationLine?:
    | "line-through"
    | "none"
    | "underline"
    | "underline line-through";
  textDecorationColor?: string;
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  h5?: boolean;
  h6?: boolean;
  h7?: boolean;
  onPress?(): void;
}

const Text = ({
  text,
  fontSize,
  color = "#192A59",
  fontFamily,
  textAlign,
  textDecorationLine,
  textDecorationColor,
  fontStyle = "normal",
  onPress = () => {},
  fontWeight = "normal",
  h1 = false,
  h2 = false,
  h3 = false,
  h4 = false,
  h5 = false,
  h6 = false,
  h7 = false,
}: TextProps) => {
  return (
    <RNText
      style={StyleSheet.flatten([
        h1 && StyleSheet.flatten([{ fontSize: 24, fontWeight: "bold" }]),
        h2 && StyleSheet.flatten([{ fontSize: 20, fontWeight: "bold" }]),
        h3 && StyleSheet.flatten([{ fontSize: 16, fontWeight: "600" }]),
        h4 && StyleSheet.flatten([{ fontSize: 14, fontWeight: "600" }]),
        h5 && StyleSheet.flatten([{ fontSize: 16, fontWeight: "normal" }]),
        h6 && StyleSheet.flatten([{ fontSize: 14, fontWeight: "normal" }]),
        h7 && StyleSheet.flatten([{ fontSize: 12, fontWeight: "normal" }]),
        {
          color: color,
          fontFamily: fontFamily,
          fontStyle: fontStyle,
          textAlign: textAlign,
          textDecorationLine: textDecorationLine,
          textDecorationColor: textDecorationColor,
        },
        fontSize ? { fontSize: fontSize } : {},
        fontWeight ? { fontWeight: fontWeight } : {},
      ])}
      onPress={() => onPress()}
    >
      {text}
    </RNText>
  );
};

export default Text;
