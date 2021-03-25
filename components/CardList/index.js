import React, { useEffect } from "react";
import { View, FlatList, Dimensions, LogBox } from "react-native";
import CardItem from "../CardItem";
import styles from "./styles";
import cards from "./cards";

const CardList = (props) => {
  useEffect(() => {
    LogBox.ignoreLogs([
      "VirtualizedList: missing keys for items, make sure to specify a key or id property on each item or provide a custom keyExtractor.",
    ]);
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        data={cards}
        renderItem={({ item }) => <CardItem card={item} />}
        showsVerticalScrollIndicator={false}
        snapToAlignment={"start"}
        decelerationRate={"slow"}
        snapToInterval={Dimensions.get("window").height}
      />
    </View>
  );
};

export default CardList;
