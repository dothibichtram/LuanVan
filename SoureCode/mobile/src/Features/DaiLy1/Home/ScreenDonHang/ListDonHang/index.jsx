import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import daily1Api from "../../../../../api/daily1Api";
import apiDonhang from "../../../../../api/apiDonhang";
function ListDonHang(props) {
  const {
    dataList: { item: data },
    navigation,
    Daily1Id,
  } = props;
  const checkComplelteOrder = data.dssanpham.find(
    (item) => item.soluong !== item.soluonghoanthanh
  );
  const [orderList, setOrderList] = useState();
  // const [data, setData] = useState();
  useEffect(() => {
    (async () => {
      // const getListOrder = await daily1Api.dsDonhang(Daily1Id);
      // const getData = await daily1Api.dsDonhang(Daily1Id);
      // let { donhang } = await apiDonhang.singleDonhang(donhangId);
      // setData(getData);
      // setOrderList(
      //   getListOrder.donhang.filter((item) => item.xacnhan === true)
      // );
    })();
  }, []);


  // console.log(checkComplelteOrder);
  const handleClickOrder = () => {
    navigation.navigate("DonHangDL1", { data });
  };
  const handleClickSendOrder = () => {
    navigation.navigate("FormGiaoHangDL1", { data, Daily1Id });
  };

  // console.log({ data });
  return (
    <>
      <View
        elevation={50}
        style={{
          flexDirection: "row",
          paddingVertical: 12,
          paddingHorizontal: 15,
          borderRadius: 10,
          backgroundColor: "white",
          justifyContent: "space-between",
          marginBottom: 10,
        }}
      >
        <View>
          <View style={styles.listTile}>
            <Text style={styles.headerTile}>Mã đơn hàng: {data.ma}</Text>
            {/* <Text>{data.ma}</Text> */}
          </View>

          {checkComplelteOrder ? (
            <>
              <View style={styles.listTile}>
                <Ionicons name="calendar-outline" size={18} color="grey" />
                <Text style={styles.contentTile}>Ngày nhận: {data.ngaytao}</Text>
              </View>


              {data.dssanpham.map((item) => (
                <>
                  <View style={styles.listTile}>
                    <Ionicons name="pie-chart-outline" size={18} color="grey" />
                    <Text key={item._id}
                      style={styles.contentTile} >
                      {item.sanpham.ten} : {item.soluonghoanthanh}/{item.soluong}
                    </Text>
                  </View>
                </>
              ))}
            </>
          ) : (
            <View style={styles.listTile}>
              <Ionicons name="calendar-outline" size={18} color="grey" />
              <Text style={styles.contentTile} >Ngày nhận: {data.ngaytao}</Text>
            </View>
          )}
        </View>
        <View flexDirection="column" justifyContent="space-between" alignItems="flex-end">
          <Text
            style={{ color: "green" }}
            onPress={handleClickOrder}
          >
            Chi tiết
          </Text>
          {!checkComplelteOrder ? (
            <Ionicons name="checkmark-circle" size={20} color="green"/>
          ) : (
            <Text
              style={[styles.btnClass, { backgroundColor: "#FF851B", fontSize: 12 }]}
              onPress={handleClickSendOrder}
            >
              Giao hàng
            </Text>
          )}
        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  btnClass: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 5,
    color: "white",
    // marginRight: 5,
    // minWidth: 65,
    textAlign: "center",
  },
  listTile: {
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "space-around",
    marginBottom: 5,
  },
  headerTile: {
    fontSize: 16,
    marginBottom: 3,
  },
  contentTile: {
    marginLeft: 5,
    color: "grey",
  }
});
export default ListDonHang;
