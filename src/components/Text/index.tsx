import React from "react";
import { StyleProp, StyleSheet, Text as RNText, TextStyle } from "react-native";

interface TextProps {
  text: string;
  textType?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "h7" | undefined;
  onPress?(): void;
  style?: StyleProp<TextStyle>;
  underlineText?: string;
}

const Text = ({
  text,
  onPress = () => {},
  textType,
  underlineText = "",
  style,
}: TextProps) => {
  const textUnderline = (underlineText: string) => {
    let underlineTextState: boolean = false;

    if (text.localeCompare("underlineText")) {
      underlineTextState = true;
      console.log(underlineTextState);
    }
  };

  console.log(
    text,
    underlineText,
    textUnderline("Abdulkerim Saltuk Eren OSMANLIOĞLU"),
    "sa"
  );

  return (
    <RNText
      style={[
        StyleSheet.flatten([
          textType === "h1" &&
            StyleSheet.flatten([{ fontSize: 24, fontWeight: "bold" }]),
          textType === "h2" &&
            StyleSheet.flatten([{ fontSize: 20, fontWeight: "bold" }]),
          textType === "h3" &&
            StyleSheet.flatten([{ fontSize: 16, fontWeight: "600" }]),
          textType === "h4" &&
            StyleSheet.flatten([{ fontSize: 14, fontWeight: "600" }]),
          textType === "h5" &&
            StyleSheet.flatten([{ fontSize: 16, fontWeight: "normal" }]),
          textType === "h6" &&
            StyleSheet.flatten([{ fontSize: 14, fontWeight: "normal" }]),
          textType === "h7" &&
            StyleSheet.flatten([{ fontSize: 12, fontWeight: "normal" }]),
        ]),
      ]}
      onPress={() => onPress()}
    >
      {text}
    </RNText>
  );
};

export default Text;
