import React, { useState, useEffect } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  RefreshControl,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import RenderPhanPhat from "./RenderPhanPhat";
import { useIsFocused } from "@react-navigation/native";
import daily2Api from "../../../api/daily2Api";
function ThongBao(props) {
  const { handleCallBackSL, user} = props;
 
  // const [infoHoDan, setInfoHoDan] = useState();
  const [orderList, setOrderList] = useState();
  const [daily2, setDaily2] = useState("");
  const [callBack, setCallBack] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };
  const isFocused = useIsFocused();
  const checkCallBack = (data) => {
    if (data) {
      setCallBack(!callBack);
      // console.log(callBack);
    }
  };
  useEffect(() => {
    (async () => {
      const getListOrder = await daily2Api.dsDonhang(user._id);
      setOrderList(getListOrder.donhang);
    })();
  }, [callBack]);
  // console.log(orderList);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={{ color: "white" }}>Đơn hàng mới</Text>
      </View>
      {orderList && (
        <FlatList
          data={orderList}
          renderItem={(item, index) => (
            <RenderPhanPhat
              phanphat={item}
              daily2Id={user._id}
              checkCallBack={checkCallBack}
              handleCallBackSL={handleCallBackSL}
            />
          )}
          keyExtractor={(item) => item._id}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    // marginTop: StatusBar.currentHeight || 0,
  },
  headerContainer: {
    backgroundColor: "#4AAE4A",
    paddingTop: 40,
    paddingBottom: 20,
    alignItems: "center",
  },
});
export default ThongBao;
