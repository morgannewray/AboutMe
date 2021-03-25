import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    position: "absolute",
    top: 50,
    zIndex: 100,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  logo: {
    width: 100,
    height: 32,
    resizeMode: "contain",
  },
  contact: {
    marginLeft: 230,
    resizeMode: "contain",
  },
  info: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    padding: 20,
    backgroundColor: "#b8c2bb",
  },
  popupText: {
    fontSize: 20,
    alignItems: "center",
    textAlign: "center",
    color: "#0c3617",
  },
  close: {
    marginTop: 30,
  },
});

export default styles;
