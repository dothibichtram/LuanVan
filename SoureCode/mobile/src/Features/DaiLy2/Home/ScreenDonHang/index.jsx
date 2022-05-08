import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import ListDonHang from "./ListDonHang";
import Ionicons from "react-native-vector-icons/Ionicons";
// import hodanApi from "../../../../api/hodanApi";
import daily2Api from "../../../../api/daily2Api";
function ScreenDonHang(props) {
  const { navigation, daily2Id } = props;
  // console.log(daily1Api.dsDonhang(daily2Id));
  const [orderList, setOrderList] = useState();
  useEffect(() => {
    (async () => {
      const getListOrder = await daily2Api.dsDonhang(daily2Id);
      setOrderList(
        getListOrder.donhang.filter((item) => item.xacnhan === true)
      );
    })();
  }, []);
  // console.log(orderList);

  return (
    <View>
      {orderList && (
        <FlatList
          data={orderList}
          // keyExtractor={(item) => item._id}
          renderItem={(item, index) => (
            <ListDonHang
              dataList={item}
              navigation={navigation}
              daily2Id={daily2Id}
            />
          )}
        />
      )}
    </View>
  );
}

export default ScreenDonHang;
