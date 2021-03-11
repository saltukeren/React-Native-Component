import React from "react";
import {
  View,
  Image,
  TouchableOpacity,
  StyleProp,
  ImageStyle,
  StyleSheet,
} from "react-native";
import Text from "../../Text";

type RightProps = {
  rightImage?: HTMLImageElement;
  rightImageStyle?: StyleProp<ImageStyle>;
  rightImageOnPress?(): void;
};

type LeftProps = {
  leftImage?: HTMLImageElement;
  leftText?: string;
  leftImageStyle?: StyleProp<ImageStyle>;
  leftImageOnPress?(): void;
  imageLeft?: boolean;
  textLeft?: boolean;
  textAndImageLeft?: boolean;
  leftTextAndImage?: any;
};

interface TitleAndGoBackAndRightButtonHeaderProps {
  right: RightProps;
  left: LeftProps;
  height?: number;
  backgroundColor?: string;
  headerText: string;
  headerTextColor?: string;
  paddingLeftRight?: number;
}

export default function TitleAndGoBackAndRightButtonHeader({
  left,
  right,
  backgroundColor = "#fff",
  headerText,
  height = 75,
  headerTextColor,
  paddingLeftRight = 20,
}: TitleAndGoBackAndRightButtonHeaderProps) {
  const {
    rightImage = require("../../../assets/images/notification.png"),
    rightImageOnPress,
    rightImageStyle,
  } = right;

  const {
    leftImage = require("../../../assets/images/goBack.png"),
    leftImageOnPress,
    leftImageStyle,
    imageLeft,
    textLeft,
    leftText = "Left Text",
    textAndImageLeft,
    leftTextAndImage,
  } = left;

  const rightPress = () => {
    rightImageOnPress ? rightImageOnPress() : null;
  };

  const leftPress = () => {
    leftImageOnPress ? leftImageOnPress() : null;
  };

  const styles = StyleSheet.create({
    mainViewStyle: {
      flexDirection: "row",
      alignItems: "center",
      height: height,
      backgroundColor: backgroundColor,
      shadowColor: "grey",
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.7,
    },

    leftViewButtonStyle: {
      flex: 1,
      justifyContent: "center",
      paddingLeft: paddingLeftRight,
    },

    leftAndRightViewStyle: { flex: 0.2 },

    headerTextViewStyle: {
      flex: left && right ? 0.6 : 1,
      alignItems: "center",
      justifyContent: "center",
    },

    rightViewButtonStyle: {
      flex: 1,
      alignItems: "flex-end",
      justifyContent: "center",
      paddingRight: paddingLeftRight,
    },

    textAndImageLeftOrRightStyle: {
      flexDirection: "row",
      alignItems: "center",
    },

    textAndImageLeftOrRightImageStyle: { marginRight: 5 },
  });

  return (
    <View style={styles.mainViewStyle}>
      <View style={styles.leftAndRightViewStyle}>
        {(imageLeft || textLeft || textAndImageLeft) &&
          (leftImage || leftText || leftTextAndImage) && (
            <TouchableOpacity
              style={styles.leftViewButtonStyle}
              onPress={() => leftPress()}
            >
              {imageLeft && leftImage && (
                <Image style={leftImageStyle} source={leftImage} />
              )}
              {textLeft && leftText && <Text h3 text={leftText}></Text>}
              {textAndImageLeft && leftTextAndImage && (
                <View style={styles.textAndImageLeftOrRightStyle}>
                  <Image
                    style={styles.textAndImageLeftOrRightImageStyle}
                    source={require("../../../assets/images/goBack.png")}
                  />
                  <Text h4 text={String(leftTextAndImage)}></Text>
                </View>
              )}
            </TouchableOpacity>
          )}
      </View>
      <View style={styles.headerTextViewStyle}>
        <Text h1 color={headerTextColor} text={headerText} />
      </View>
      <View style={styles.leftAndRightViewStyle}>
        {rightImage && (
          <TouchableOpacity
            style={styles.rightViewButtonStyle}
            onPress={() => rightPress()}
          >
            <Image style={rightImageStyle} source={rightImage} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
