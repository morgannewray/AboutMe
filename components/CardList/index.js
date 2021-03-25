import React, { useEffect, useRef } from "react";
import {
  View,
  FlatList,
  Dimensions,
  LogBox,
  Pressable,
  Text,
} from "react-native";
import CardItem from "../CardItem";
import styles from "./styles";
import cards from "./cards";

const CardList = (props) => {
  useEffect(() => {
    LogBox.ignoreLogs([
      "VirtualizedList: missing keys for items, make sure to specify a key or id property on each item or provide a custom keyExtractor.",
    ]);
  }, []);

  const flatlistRef = useRef();
  const onPressFunction = () => {
    flatlistRef.current.scrollToIndex({ index: 0 });
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatlistRef}
        data={cards}
        renderItem={({ item }) => <CardItem card={item} />}
        showsVerticalScrollIndicator={false}
        snapToAlignment={"start"}
        decelerationRate={"slow"}
        snapToInterval={Dimensions.get("window").height}
      />
      <Pressable style={styles.button} onPress={onPressFunction}>
        <Text style={styles.arrow}>^</Text>
      </Pressable>
    </View>
  );
};

export default CardList;
