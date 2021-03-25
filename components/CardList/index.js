import React from "react";
import { View, Text, FlatList, Dimensions } from "react-native";
import CardItem from "../CardItem";
import styles from "./styles";
import cards from "./cards";

const CardList = (props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={cards}
        renderItem={({ item }) => <CardItem card={item} />}
        showsVerticalScrollIndicator={false}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        snapToInterval={Dimensions.get("window").height}
      />
    </View>
  );
};

export default CardList;
