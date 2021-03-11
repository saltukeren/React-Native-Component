import React from "react";
import {
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  StyleProp,
  ImageStyle,
} from "react-native";
import Text from "../../Text";

interface TitleAndRightButtonHeaderProps {
  image?: HTMLImageElement;
  onPress?(): void;
  imageStyle: StyleProp<ImageStyle>;
}

export default function TitleAndRightButtonHeader({
  image = require("../../../assets/images/goBack.png"),
  onPress = () => {},
  imageStyle,
}: TitleAndRightButtonHeaderProps) {
  return (
    <View style={styles.mainViewStyle}>
      <View style={styles.subLeftViewStyle}>
        <TouchableOpacity
          style={styles.subLeftViewButtonStyle}
          onPress={() => onPress()}
        >
          <Image style={imageStyle} source={image} />
        </TouchableOpacity>
      </View>
      <View style={styles.headerTextStyle}>
        <Text h1 color={"black"} text={"Başlık"} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainViewStyle: {
    flexDirection: "row",
    alignItems: "center",
    height: 75,
    backgroundColor: "white",
    borderBottomWidth: 0.3,
  },

  subLeftViewStyle: {
    flex: 0.2,
  },

  subLeftViewButtonStyle: {
    borderWidth: 1,
    flex: 1,
    justifyContent: "center",
    paddingLeft: 20,
  },

  headerTextStyle: {
    flex: 0.6,
    alignItems: "center",
    justifyContent: "center",
  },
});
