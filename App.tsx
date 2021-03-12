import React from "react";
import { SafeAreaView, View } from "react-native";
import Text from "./src/components/Text";

export default function App({ navigation }: any) {
  const navigate = (key: any, params = {}) => navigation.navigate(key, params);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text
          // style={{ fontWeight: "normal" }}
          textType={"h2"}
          text={"Abdulkerim Saltuk Eren OSMANLIOĞLU"}
        />
      </View>
    </SafeAreaView>
  );
}
