import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import ListDonHang from "./ListDonHang";
import Ionicons from "react-native-vector-icons/Ionicons";
// import hodanApi from "../../../../api/hodanApi";
import daily1Api from "../../../../api/daily1Api";
function ScreenDonHang(props) {
  const {
    // dataList: { item: data },
    navigation,
    daily1Id,
  } = props;
  // console.log(daily1Id);
  // const data = await daily1Api.dsDonhang(daily1Id);
  const [orderList, setOrderList] = useState();
  const [data, setData] = useState();
  useEffect(() => {
    (async () => {
      const getListOrder = await daily1Api.dsDonhang(daily1Id);
      const getData = await daily1Api.dsDonhang(daily1Id);
      setData(getData);
      setOrderList(
        getListOrder.donhang.filter((item) => item.xacnhan === true)
      );
    })();
  }, []);
  // console.log(data);

  return (
    <View>
      {orderList && (
        <FlatList
          data={orderList}
          keyExtractor={(item) => item._id}
          renderItem={(item, index) => (
            <ListDonHang
              dataList={item}
              navigation={navigation}
              daily1Id={daily1Id}
            />
          )}
        />
      )}
    </View>
  );
}

export default ScreenDonHang;
