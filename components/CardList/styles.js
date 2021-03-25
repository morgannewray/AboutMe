import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  button: {
    position: "absolute",
    width: 30,
    height: 30,
    borderRadius: 50 / 2,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    bottom: 15,
    left: 30,
  },
  arrow: {
    color: "white",
    fontSize: 30,
  },
});

export default styles;
