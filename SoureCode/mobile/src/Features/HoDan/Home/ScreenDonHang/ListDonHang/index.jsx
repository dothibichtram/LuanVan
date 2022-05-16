import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

function ListDonHang(props) {
  const {
    dataList: { item: data },
    navigation,
    hodanId,
  } = props;
  const checkComplelteOrder = data.dssanpham.find(
    (item) => item.dagiao !== item.soluong
  );
  const checkSL = data.dssanpham.find(
    (item) => item.soluonghoanthanh >= 0 && item.soluonghoanthanh > item.dagiao
  );
  // console.log(checkComplelteOrder);
  const handleClickOrder = () => {
    navigation.navigate("DonHangHD", { data });
  };
  const handleClickSendOrder = () => {
    navigation.navigate("FormGiaoHangHD", { data, hodanId });
  };

  // console.log({ data });
  return (
    <>
       <View
        // elevation={50}
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
                  <View style={styles.listTile}>
                    <Ionicons name="checkmark-circle-outline" size={18} color="grey" />
                    <Text key={item._id}
                      style={styles.contentTile} >
                      Đã giao:{item.dagiao}
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
            // <Text
            //   style={[styles.btnClass, { backgroundColor: "green", fontSize: 12 }]}
            // >
            //   Hoàn thành
            // </Text>
            <Ionicons name="checkmark-circle" size={20} color="green"/>
          ) :checkSL?(
            <Text
              style={[styles.btnClass, { backgroundColor: "#FF851B", fontSize: 12 }]}
              onPress={handleClickSendOrder}
            >
              Giao hàng
            </Text>
          ):(<></>)}
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
