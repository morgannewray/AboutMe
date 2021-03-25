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
    color: "#242526",
    fontWeight: "500",
    fontFamily: "Optima",
  },
  subtitle: {
    fontSize: 20,
    color: "#5c5e62",
    fontWeight: "500",
    fontFamily: "Palatino",
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
    backgroundColor: "#939597",
  },
  popupText: {
    fontSize: 24,
    alignItems: "center",
    textAlign: "center",
    color: "white",
    fontWeight: "500",
    fontFamily: "Optima",
  },
  close: {
    marginTop: 30,
  },
});

export default styles;
