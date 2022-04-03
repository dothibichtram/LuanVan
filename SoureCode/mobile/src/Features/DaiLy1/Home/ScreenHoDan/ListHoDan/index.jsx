import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
function ListHoDan(props) {
  const {
    dataList: { item: data },
    navigation,
    daily2Id,
  } = props;
  // console.log(data.daidien);
  const handleClickInfo = () => {
    navigation.navigate("InfoHoDan", { data });
  };



  return (
    <>
      <View
        style={{
          flexDirection: "row",
          paddingVertical: 12,
          paddingHorizontal: 20,
          borderRadius: 10,
          backgroundColor: "white",
          justifyContent: "space-between",
          marginBottom: 10,
        }}
      >

        <View >
          <Text style={styles.title}>{data.daidien}</Text>
          <View style={styles.listTile}>
            <Ionicons name="call-outline" size={18} color="grey" />
            <Text style={styles.normalText}>
              {data.sdt}
            </Text>
          </View>
          <View style={styles.listTile}>
            <Ionicons name="location-outline" size={20} color="grey" />
            <Text style={styles.normalText}>
              {data.langnghe.ten}
            </Text>
          </View>
          {/* <Text>Tài khoản: {data.taikhoan}</Text> */}
        </View>
        <Text style={{color: "green" }} onPress={handleClickInfo}>
          Chi tiết
        </Text>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  btnClass: {
    padding: 10,
    borderRadius: 10,
    color: "white",
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
export default ListHoDan;
