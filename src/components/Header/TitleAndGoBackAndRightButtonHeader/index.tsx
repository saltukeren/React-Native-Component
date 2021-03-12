import React from "react";
import {
  View,
  Image,
  TouchableOpacity,
  StyleProp,
  ImageStyle,
  StyleSheet,
  ViewStyle,
} from "react-native";
import Text from "../../Text";

type LeftProps = {
  image?: HTMLImageElement;
  text?: string;
  imageStyle?: StyleProp<ImageStyle>;
  onPress?(): void;
  imageLeft?: boolean;
  textLeft?: boolean;
  textAndImageLeft?: boolean;
  textAndImageText?: any;
  disabled?: boolean;
  textAndImage?: HTMLImageElement;
};

type MiddleProps = {
  headerText?: string;
  headerTextColor?: string;
  logoAndText?: boolean;
  logoAndTextImage?: HTMLImageElement;
  logoAndTextText?: string;
  logoImage?: HTMLImageElement;
  logoStyle?: StyleProp<ImageStyle>;
};

type RightProps = {
  image?: HTMLImageElement;
  text?: string;
  imageStyle?: StyleProp<ImageStyle>;
  onPress?(): void;
  imageRight?: boolean;
  textRight?: boolean;
  textAndImageRight?: boolean;
  rightTextAndImageText?: any;
  disabled?: boolean;
  rightTextAndImage?: HTMLImageElement;
};

interface TitleAndGoBackAndRightButtonHeaderProps {
  left?: LeftProps;
  middle?: MiddleProps;
  right?: RightProps;
  headerstyle?: StyleProp<ViewStyle>;
}

export default function TitleAndGoBackAndRightButtonHeader({
  left,
  right,
  middle,
  ...headerstyle
}: TitleAndGoBackAndRightButtonHeaderProps) {
  const rightPress = () => {
    right?.onPress ? right?.onPress() : null;
  };

  const leftPress = () => {
    left?.onPress ? left?.onPress() : null;
  };

  const styles = StyleSheet.create({
    mainViewStyle: {
      flexDirection: "row",
      alignItems: "center",
      height: 75,
      backgroundColor: "#fff",
      shadowColor: "grey",
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.7,
      paddingHorizontal: 15,
      ...headerstyle,
    },

    leftViewButtonStyle: {
      flex: 1,
      justifyContent: "center",
    },

    leftAndRightViewStyle: { flex: 0.2 },

    headerTextViewStyle: {
      flex: left && right ? 0.6 : 1,
      alignItems: "center",
      justifyContent: "center",
      height: "100%",
    },

    rightViewButtonStyle: {
      flex: 1,
      alignItems: "flex-end",
      justifyContent: "center",
    },

    textAndImageLeftOrRightStyle: {
      flexDirection: "row",
      alignItems: "center",
    },

    textAndImageLeftOrRightImageStyle: { marginRight: 5 },

    logoAndTextStyle: { marginRight: 10 },
  });

  return (
    <View style={styles.mainViewStyle}>
      <View style={styles.leftAndRightViewStyle}>
        {(left?.imageLeft || left?.textLeft || left?.textAndImageLeft) &&
          (left?.image || left?.text || left?.textAndImageText) && (
            <TouchableOpacity
              style={styles.leftViewButtonStyle}
              onPress={() => leftPress()}
              disabled={left?.disabled}
            >
              {left?.imageLeft && left?.image && (
                <Image style={left?.imageStyle} source={left?.image} />
              )}
              {left?.textLeft && left?.text && (
                <Text h3 text={String(left?.text)} />
              )}
              {left?.textAndImageLeft && left?.textAndImageText && (
                <View style={styles.textAndImageLeftOrRightStyle}>
                  <Image
                    style={styles.textAndImageLeftOrRightImageStyle}
                    source={left?.textAndImage}
                  />
                  <Text h3 text={String(left?.textAndImageText)}></Text>
                </View>
              )}
            </TouchableOpacity>
          )}
      </View>
      <View style={styles.headerTextViewStyle}>
        {middle?.logoImage && (
          <Image source={middle?.logoImage} style={middle?.logoStyle} />
        )}
        {middle?.headerText && (
          <Text
            h1
            color={middle?.headerTextColor}
            text={
              middle?.headerText.length > 20
                ? middle?.headerText.substr(0, 17).trimEnd() + "..."
                : middle?.headerText
            }
          />
        )}
        {middle?.logoAndText && (
          <View style={styles.textAndImageLeftOrRightStyle}>
            <Image
              source={middle?.logoAndTextImage && middle?.logoAndTextImage}
              style={styles.logoAndTextStyle}
            />
            <Text h1 text={String(middle?.logoAndTextText)} />
          </View>
        )}
      </View>
      <View style={styles.leftAndRightViewStyle}>
        {(right?.imageRight || right?.textRight || right?.textAndImageRight) &&
          (right?.image || right?.text || right?.rightTextAndImageText) && (
            <TouchableOpacity
              style={styles.rightViewButtonStyle}
              onPress={() => rightPress()}
              disabled={right?.disabled}
            >
              {right?.imageRight && right?.image && (
                <Image style={right?.imageStyle} source={right?.image} />
              )}
              {right?.textRight && right?.text && (
                <Text h3 text={right?.text}></Text>
              )}
              {right?.textAndImageRight && right?.rightTextAndImageText && (
                <View style={styles.textAndImageLeftOrRightStyle}>
                  <Image
                    style={styles.textAndImageLeftOrRightImageStyle}
                    source={right?.rightTextAndImage}
                  />
                  <Text h3 text={String(right?.rightTextAndImageText)}></Text>
                </View>
              )}
            </TouchableOpacity>
          )}
      </View>
    </View>
  );
}
