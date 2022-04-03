import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
  },
  headerContainer: {
    // backgroundColor: "#e65c00",
    backgroundColor: "#4AAE4A",
    paddingVertical: 10,
    // flex: 1,
    alignItems: "center",
  },
  containerLinkBar: {
    marginTop: 5,
    flexDirection: "row",
    // justifyContent: "center",
    
  },
  singleBar: {
    minWidth: "25%",

    padding: 17,
    // textAlign: "center",
  },
  activeBar: {
    // backgroundColor: "#4AAE4A",
    backgroundColor: "white",
    color: "#4AAE4A",
    borderColor: "#4AAE4A",
    textAlign: "center",
  },
  noActiveBar: {
    // backgroundColor: "#4AAE4A",
    backgroundColor: "white",
    color: "grey",
    borderColor: "white",
    textAlign: "center",

  },
  progressBar: {
    borderRightColor: "white",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 2,
  },
  textAlign: {
    textAlign: "center",
    justifyContent: "center"
  },
  textLinkBar: {
    color: "gray",
    textAlign: "center",
  },
  containerRedirectScreen: {
    paddingTop: 20,
    paddingHorizontal: 20,
    borderRadius: 10,

  },
  containerRowRedirect: {
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    // color: "red",
  },
  containerItemRedirect: {
    paddingBottom: 15,
    flexDirection: "column",
    alignItems: "center",
  },
  containerTextRedirect: {
    marginTop: 5, 
    // textAlign: "center",
    color: "black",
  },
  containerRowRedirect2: {
    flexDirection: "row",
    marginBottom: 20,
  },
  containerRowRedirect3: {
    flexDirection: "row",
  },
  containerRedirect: {
    borderRadius: 90,
    padding: 15,
    backgroundColor: "white",
  },
  containerRedirectKho: {
    borderRadius: 20,
    backgroundColor: "white",
    padding: 15,
  },
  iconStore: {
    fontSize: 35,
    color: "#23CC87"
  },
  title: {
    paddingBottom: 8,
    fontSize: 16,
    // fontWeight: "bold",
  },
  normalText: {
    marginLeft: 8,
    color: "grey",
  },
  listTile: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 3,
  },

});
export default styles;
