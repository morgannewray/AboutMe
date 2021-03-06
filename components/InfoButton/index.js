import React from "react";
import { View, Text, Pressable } from "react-native";
import styles from "./styles";

const InfoButton = (props) => {
  const { type, content, onPress } = props;

  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={() => onPress()}>
        <Text style={styles.text}>{content}</Text>
      </Pressable>
    </View>
  );
};

export default InfoButton;
