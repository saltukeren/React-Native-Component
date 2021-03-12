import React from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import TextAndImageButton from "../../Button/TextAndImageButton";
import Text from "../../Text";

type ThreeButtonProps = {
  firstButtonOnPress?(): void;
  secondButtonOnPress?(): void;
  thirdButtonOnPress?(): void;
  firstImage?: HTMLImageElement;
  secondImage?: HTMLImageElement;
  thirdImage?: HTMLImageElement;
};

interface TitleAndGoBackAndMaxThreeButtonHeaderProps {
  height?: number;
  backgroundColor?: string;
  goBack?: boolean;
  right: ThreeButtonProps;
  goBackPress?(): void;
}

export default function TitleAndGoBackAndMaxThreeButtonHeader({
  height = 75,
  backgroundColor,
  goBack = true,
  right,
  goBackPress = () => {},
}: TitleAndGoBackAndMaxThreeButtonHeaderProps) {
  const {
    firstButtonOnPress,
    secondButtonOnPress,
    thirdButtonOnPress,
    firstImage,
    secondImage,
    thirdImage,
  } = right;

  const firstButton = () => {
    firstButtonOnPress ? firstButtonOnPress() : null;
  };

  const secondButton = () => {
    secondButtonOnPress ? secondButtonOnPress() : null;
  };

  const thirdButton = () => {
    thirdButtonOnPress ? thirdButtonOnPress() : null;
  };

  const styles = StyleSheet.create({
    mainViewStyle: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      height: height,
      backgroundColor: backgroundColor,
      shadowColor: "grey",
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.7,
    },

    threeButtonViewStyle: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
  });

  return (
    <View style={styles.mainViewStyle}>
      <View
        style={{ flexDirection: "row", alignItems: "center", paddingLeft: 20 }}
      >
        {goBack && (
          <TouchableOpacity
            style={{ marginRight: 20 }}
            onPress={() => goBackPress()}
            hitSlop={{ bottom: 30, right: 30, top: 30, left: 30 }}
          >
            <Image source={require("../../../assets/images/goBack.png")} />
          </TouchableOpacity>
        )}
        <Text h1 text={"Başlık"} />
      </View>
      <View style={styles.threeButtonViewStyle}>
        {firstImage && (
          <TextAndImageButton
            image={firstImage}
            onPress={() => firstButton()}
          />
        )}
        {secondImage && (
          <TextAndImageButton
            image={secondImage}
            onPress={() => secondButton()}
          />
        )}
        {thirdImage && (
          <TextAndImageButton
            image={thirdImage}
            onPress={() => thirdButton()}
          />
        )}
      </View>
    </View>
  );
}
