import React, { useState } from "react";
import {
  View,
  Image,
  TouchableOpacity,
  Modal,
  Text,
  Button,
  Linking,
} from "react-native";
import { Mail } from "react-native-feather";

import styles from "./styles";

const Header = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../../assets/images/logo.png")}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => setModalOpen(true)}
      >
        <Mail style={styles.contact} stroke="black" width={28} height={35} />
      </TouchableOpacity>
      <View>
        <Modal visible={modalOpen} animationType="fade">
          <View style={styles.info}>
            <Text style={styles.popupText}>
              For more information please contact{" "}
              <Text
                style={styles.hyperlink}
                onPress={() => Linking.openURL("mailto:morgannewray@gmail.com")}
              >
                morgannewray@gmail.com
              </Text>
            </Text>
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
    </View>
  );
};

export default Header;
