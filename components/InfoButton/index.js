import React from "react";
import { View, Text, Pressable } from "react-native";
import styles from "./styles";

const InfoButton = (props) => {
  const { type, content, onPress } = props;

  const backgroundColor = type === "primary" ? "#0c3617" : "#b8c2bb";
  const textColor = type === "primary" ? "#b8c2bb" : "#0c3617";

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, { backgroundColor: backgroundColor }]}
        onPress={() => onPress()}
      >
        <Text style={[styles.text, { color: textColor }]}>{content}</Text>
      </Pressable>
    </View>
  );
};

export default InfoButton;
