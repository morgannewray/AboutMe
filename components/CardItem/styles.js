import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  carContainer: {
    width: "100%",
    height: Dimensions.get("window").height,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
  titles: {
    marginTop: "25%",
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    color: "#0c3617",
    fontWeight: "500",
  },
  subtitle: {
    fontSize: 20,
    color: "#5c5e62",
  },
  subtitleCTA: {
    fontSize: 20,
    color: "#5c5e62",
    textDecorationLine: "underline",
  },
  buttonContainer: {
    position: "absolute",
    bottom: 50,
    width: "100%",
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
