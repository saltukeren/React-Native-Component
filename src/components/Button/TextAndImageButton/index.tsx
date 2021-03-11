import React from "react";
import {
  TouchableOpacity,
  Image,
  StyleProp,
  ImageStyle,
  StyleSheet,
} from "react-native";
import Text from "../../Text";

interface TextAndImageButtonProps {
  onPress(): void;
  imageStyle?: StyleProp<ImageStyle>;
  buttonText: string;
  image: HTMLImageElement;
}

export default function TextAndImageButton({
  onPress = () => {},
  imageStyle,
  buttonText,
  image = require("../../../assets/images/goBack.png"),
}: TextAndImageButtonProps) {
  const styles = StyleSheet.create({
    buttonStyle: {
      flexDirection: "row",
      alignItems: "center",
    },

    imageStyle: {
      marginRight: 5,
    },
  });

  return (
    <TouchableOpacity style={styles.buttonStyle} onPress={() => onPress()}>
      {image && (
        <Image source={image} style={[imageStyle, styles.imageStyle]} />
      )}
      {buttonText && <Text h3 text={buttonText}></Text>}
    </TouchableOpacity>
  );
}
