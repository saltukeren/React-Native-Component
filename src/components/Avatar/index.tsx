import React from "react";
import {
  View,
  Image,
  StyleProp,
  ViewProps,
  ImageProps,
  StyleSheet,
} from "react-native";

interface AvatarProps {
  source: ImageProps["source"];
  size?: "sm" | "md" | "lg" | "xl" | undefined;
  resizeMode?: "center" | "contain" | "cover" | "repeat" | "stretch";
  resizeMethod?: "scale" | "auto" | "resize" | undefined;
  imageStyle?: StyleProp<ImageProps>;
  viewStyle?: StyleProp<ViewProps>;
  sm?: boolean;
  md?: boolean;
  lg?: boolean;
  xl?: boolean;
}

export default function Avatar({
  source,
  size,
  resizeMode = "contain",
  resizeMethod,
  sm = false,
  md = false,
  lg = false,
  xl = false,
  viewStyle,
  ...imageStyle
}: AvatarProps) {
  const sizeValue = (size: string) => {
    switch (size) {
      case "sm":
        return 50;
      case "md":
        return 75;
      case "lg":
        return 100;
      case "xl":
        return 200;
      default:
        return 200;
    }
  };

  return (
    <View style={viewStyle}>
      <Image
        resizeMode={resizeMode}
        source={source}
        resizeMethod={resizeMethod}
        style={StyleSheet.flatten([
          sm &&
            StyleSheet.flatten([
              { width: sizeValue("sm"), height: sizeValue("sm") },
            ]),
          md &&
            StyleSheet.flatten([
              { width: sizeValue("md"), height: sizeValue("md") },
            ]),
          lg &&
            StyleSheet.flatten([
              { width: sizeValue("lg"), height: sizeValue("lg") },
            ]),
          xl &&
            StyleSheet.flatten([
              { width: sizeValue("xl"), height: sizeValue("xl") },
            ]),
        ])}
      />
    </View>
  );
}
