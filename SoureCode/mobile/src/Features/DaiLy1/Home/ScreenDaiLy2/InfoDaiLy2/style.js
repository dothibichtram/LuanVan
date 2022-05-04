import { StyleSheet } from "react-native";
import { StatusBar } from 'expo-status-bar';

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
  },
  headerContainer: {
    backgroundColor: "#4AAE4A",
    paddingTop: 40,
    paddingBottom: 20,
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
    // paddingBottom: 8,
    fontSize: 15,
    // textAlign: "center",
    // marginLeft: 20,
    // fontWeight: "bold",
  },
  normalText: {
    marginLeft: 10,
    color: "grey",
    fontSize: 14,
  },
  lableText: {
    marginLeft: 10,
    color: "black",
    fontSize: 14,
  },
  listTile: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 3,
  },
  rowtable: {
    borderBottomWidth:0,
    // flexDirection: "row",
    // alignItems: "center",
    marginBottom: -15,
    // fontSize: 10,
  },
  appBarStyle: {
    flexDirection: "row",
    backgroundColor: "#4AAE4A",
    // paddingVertical: 10, 
    paddingTop: 40,
    paddingBottom: 20,
    paddingHorizontal: 15,
    alignItems: "center",
  }
});
export default styles;
