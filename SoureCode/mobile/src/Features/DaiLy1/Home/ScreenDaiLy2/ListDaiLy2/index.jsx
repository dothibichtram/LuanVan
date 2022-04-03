import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
function ListDaiLy2(props) {
  const {
    dataList: { item: data },
    navigation,
    daily2Id,
  } = props;
  // console.log(data.email);
  const handleClickInfo = () => {
    navigation.navigate("InfoDaiLy2", { data });
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
          <Text style={styles.title}>{data.ten}</Text>
          <View style={styles.listTile}>
            <Ionicons name="call-outline" size={18} color="grey" />
            <Text style={styles.normalText}>
              {data.sdt}
            </Text>
          </View>
          <View style={styles.listTile}>
            <Ionicons name="mail-outline" size={20} color="grey" />
            <Text style={styles.normalText}>
              {data.email}
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
export default ListDaiLy2;
