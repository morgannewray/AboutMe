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
    marginLeft: 200,
    resizeMode: "contain",
  },
  info: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    padding: 20,
    backgroundColor: "#939597",
  },
  popupText: {
    fontSize: 20,
    alignItems: "center",
    textAlign: "center",
    color: "white",
    fontWeight: "500",
    fontFamily: "Optima",
  },
  hyperlink: {
    fontSize: 20,
    alignItems: "center",
    textAlign: "center",
    color: "blue",
    textDecorationLine: "underline",
    fontWeight: "500",
    fontFamily: "Optima",
  },
  close: {
    marginTop: 30,
  },
});

export default styles;
