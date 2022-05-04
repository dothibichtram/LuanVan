import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    paddingHorizontal: 15,
    paddingTop: 15,
  },
  imageStyle: {
    marginVertical: 10,
    marginLeft: 10,
  },
  listTile: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 2,
    flexWrap: "wrap",
    // justifyContent: "space-between",
    // marginBottom: 50,
  },
  normalText: {
    color: "grey",
    marginLeft: 8,
    fontSize: 14,
  },
  headingText: {
    fontSize: 16,    
    color: "black",
    marginBottom: 5,
  },
  iconStyle: {
    color: "grey",
  },
  appBarStyle: {
    flexDirection: "row",
    backgroundColor: "#4AAE4A",
    // paddingVertical: 10, 
    paddingBottom: 20,
    paddingTop: 40,
    paddingHorizontal: 15,
    alignItems: "center",
    // justifyContent: "space",
  }
});
export default styles;
