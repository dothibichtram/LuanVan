import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, LogBox } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Picker } from '@react-native-picker/picker';
function ListDonHangBaoCaoTienDo(props) {
  const {
    dataList: { item: data },
    navigation,
    hodanId,
  } = props;

  useEffect(() => {
    LogBox.ignoreLogs(['Each child in a list should have a unique "key" prop']);
  }, []);
  const checkComplelteOrder = data.dssanpham.find(
    (item) => item.soluong !== item.soluonghoanthanh
  );
  // console.log(checkComplelteOrder);
  const handleClickOrder = () => {
    navigation.navigate("BCTienDoHD", { data, hodanId });
  };
  const reducer = (previousValue, currentValue) => previousValue + currentValue;
  const completeNumberProduct = data.dssanpham
    .map((item) => item.soluonghoanthanh)
    .reduce(reducer);
  const numberProduct = data.dssanpham
    .map((item) => item.soluong)
    .reduce(reducer);
  const completePercent = Number.parseInt(
    (completeNumberProduct / numberProduct) * 100
  );
  //check complete order
  //   console.log(completePercent);

  console.log(data);
  return (
    <>
      {data.xacnhan && (
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

            {!checkComplelteOrder ? (
              <>
                <Ionicons name="checkmark-circle" size={20} color="green" />

              </>
            ) : (
              <View>
                <View style={styles.listTile}>
                  <Ionicons name="calendar-outline" size={18} color="grey" />
                  <Text style={styles.contentTile} >Ngày nhận : {data.ngaytao}</Text>
                </View>
                {data.dssanpham.map((data) => (
                  <>
                    <View style={styles.listTile}>
                      <Ionicons name="pie-chart-outline" size={18} color="grey" />
                      <Text key={data._id}
                        style={styles.contentTile} >
                        {data.sanpham.ten} : {data.soluonghoanthanh}/{data.soluong}
                      </Text>
                    </View>

                  </>
                ))}
              </View>
            )}

          </View>
          <View flexDirection="column" justifyContent="space-between" alignItems="flex-end">

            <View style={{ paddingLeft: 17 }}>
              <Text
                style={{ color: "green" }}
                onPress={handleClickOrder}
              >
                Hoàn thành : {completePercent} %

              </Text>
            </View>
            {!checkComplelteOrder ? (
              <Ionicons name="checkmark-circle" size={20} color="green" />
            ) : (
              <Text
                style={[styles.btnClass, { backgroundColor: "#FF851B", fontSize: 12 }]}
                onPress={handleClickOrder}
              >
                Báo cáo
              </Text>
            )}
          </View>

        </View>

      )}
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
    marginLeft: 10,
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
export default ListDonHangBaoCaoTienDo;
