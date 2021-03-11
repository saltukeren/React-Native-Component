import React from "react";
import { SafeAreaView, View } from "react-native";
import TitleAndGoBackAndRightButtonHeader from "./src/components/Header/TitleAndGoBackAndRightButtonHeader";
import TitleAndGoBackHeader from "./src/components/Header/TitleAndGoBackHeader";
import Text from "./src/components/Text";

export default function App({ navigation }: any) {
  const navigate = (key: any, params = {}) => navigation.navigate(key, params);

  return (
    <SafeAreaView>
      <View style={{ flex: 1 }}>
        <TitleAndGoBackAndRightButtonHeader
          left={{
            textAndImageLeft: true,
            leftTextAndImage: "Geri Git"
          }}
          right={{}}
          headerText={"Başlık"}
        />
      </View>
    </SafeAreaView>
  );
}
