import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import ListDonHang from "./ListDonHang";
import Ionicons from "react-native-vector-icons/Ionicons";
// import hodanApi from "../../../../api/hodanApi";
import daily1Api from "../../../../api/daily1Api";
function ScreenDonHang(props) {
  const { navigation, daily1Id } = props;
  // console.log(hodanId);
  const [orderList, setOrderList] = useState();
  useEffect(() => {
    (async () => {
      const getListOrder = await daily1Api.dsDonhang(daily1Id);
      // setOrderList(
      //   getListOrder.dsdonhang.filter((item) => item.xacnhan === true)
      // );
    })();
  }, []);
  // console.log(orderList);

  return (
    <View>
      {orderList && (
        <FlatList
          data={orderList}
          renderItem={(item, index) => (
            <ListDonHang
              dataList={item}
              navigation={navigation}
              daily1Id={daily1Id}
            />
          )}
          keyExtractor={(item) => item._id}
        />
      )}
    </View>
  );
}

export default ScreenDonHang;
