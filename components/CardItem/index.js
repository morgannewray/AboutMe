import React, { useState } from "react";
import { View, Text, ImageBackground, Modal, Button } from "react-native";
import styles from "./styles";
import InfoButton from "../InfoButton";

const CardItem = (props) => {
  const { name, tagline, image, info, taglineCTA } = props.card;
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image} />

      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagline}
          <Text style={styles.subtitleCTA}>{taglineCTA}</Text>
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <View>
          <Modal visible={modalOpen} animationType="slide">
            <View style={styles.info}>
              <Text style={styles.popupText}>{info}</Text>
              <View style={styles.close}>
                <Button
                  title="close"
                  mode="contained"
                  onPress={() => setModalOpen(false)}
                />
              </View>
            </View>
          </Modal>
        </View>

        <InfoButton
          type="primary"
          content={"More Info"}
          onPress={() => {
            setModalOpen(true);
          }}
        />
        <InfoButton
          type="secondary"
          content={"Less Info"}
          onPress={() => {
            console.warn("Less info requested");
          }}
        />
      </View>
    </View>
  );
};

export default CardItem;
