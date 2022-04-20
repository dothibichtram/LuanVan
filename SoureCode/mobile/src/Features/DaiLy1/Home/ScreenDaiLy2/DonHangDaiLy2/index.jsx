import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import ListDonHang from "./ListDonHang";
import Ionicons from "react-native-vector-icons/Ionicons";
import daily2Api from "../../../../../api/daily2Api";
function ScreenDonHangDL2ThuocDL1(props) {
  const daily2Id = props.route.params.iddaily2;
  const { navigation} = props;
  // console.log(daily2Id);
  const [orderList, setOrderList] = useState();
  useEffect(() => {
    (async () => {
      const getListOrder = await daily2Api.dsDonhang(daily2Id);
      setOrderList(
        getListOrder.dsdonhang.filter((item) => item.xacnhan === true)
      );
    })();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, marginTop: 20 }}>
      <View style={styles.appBarStyle}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Ionicons name="arrow-back" size={25} color="white" />
        </TouchableOpacity>
        <Text style={{ color: "white", paddingLeft: "25%" }}>Danh sách đơn hàng</Text>
      </View>
      {orderList && (
        <FlatList
          data={orderList}
          keyExtractor={(item) => item._id}
          renderItem={(item, index) => (
            <ListDonHang
              dataList={item}
              navigation={navigation}
              daily2Id={daily2Id}
            />
          )}
        />
      )}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  headerContainer: {
    // backgroundColor: "#e65c00",
    backgroundColor: "#4AAE4A",
    padding: 15,
    alignItems: "center",
  },
  appBarStyle: {
    flexDirection: "row",
    backgroundColor: "#4AAE4A",
    paddingVertical: 10, 
    paddingHorizontal: 15,
    alignItems: "center",
  }
});
export default ScreenDonHangDL2ThuocDL1;
