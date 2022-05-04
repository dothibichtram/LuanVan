import React, { useEffect, useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import daily1Api from "../../../../../../api/daily1Api";

function DonHangHDThuocDL1(props) {
  // const hodanId = props.route.params.idHodan;
  // const { navigation } = props;
  // const [orderList, setOrderList] = useState();
 
  const { navigation } = props;
  const data = props.route.params.data;
  // console.log(data);

  // useEffect(() => {
  //   (async () => {
  //     const getListOrder = await daily1Api.dsHodanThuocDaily1(hodanId);
  //     console.log(getListOrder.dsDonhang);
  //     setOrderList(
  //       getListOrder.dsDonhang.filter((item) => item.xacnhan === true)
  //     );
  //   })();
  // }, []);

  // const formatter = new Intl.NumberFormat("es");
  // console.log(data.ma);
  return (
    <SafeAreaView style={{ flex: 1, marginTop: 0 }}>
      <View style={styles.appBarStyle}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Ionicons name="arrow-back" size={25} color="white" />
        </TouchableOpacity>
        <Text style={{ color: "white", paddingLeft: "25%" }}>Thông tin đơn hàng</Text>
      </View>
      <ScrollView>
        <View style={styles.container}>
          <View style={{ marginLeft: 20 }}>
            <Text>Mã đơn hàng : {data.ma}</Text>
            {data.dssanpham.map((item, index) => (
              <>
                <View key={item._id}>
                  <Text>Sản phẩm {index + 1}</Text>
                  <View style={{ marginLeft: 10 }}>
                    <Text>
                      <Ionicons name="square" size={5} color="black" /> Tên sản phẩm : {item.sanpham.ten}
                    </Text>
                    <Text>
                      <Ionicons name="square" size={5} color="black" /> Mã sản  phẩm : {item.sanpham.ma}
                    </Text>
                    <Text>
                      <Ionicons name="square" size={5} color="black" /> Số lượng
                      : {item.soluong}
                    </Text>
                    <Text style={{ color: "green" }}>
                      <Ionicons name="square" size={5} color="black" /> Số lượng
                      đã hoàn thành : {item.soluonghoanthanh}
                    </Text>
                    <Text>
                      <Ionicons name="square" size={5} color="black" /> Đơn giá
                      : {item.sanpham.gia} vnđ
                    </Text>
                    <Text>
                      <Ionicons name="square" size={5} color="black" /> Mô tả :{" "}
                      {item.sanpham.mota}
                    </Text>

                    {item.sanpham.dscongcu &&
                      item.sanpham.dscongcu.map((item, index) => (
                        <>
                          <View key={item._id}>
                            <Text>
                              <Ionicons name="square" size={5} color="black" />{" "}
                              Công cụ
                            </Text>
                            <View style={{ marginLeft: 40 }}>
                              <Text>
                                <Ionicons
                                  name="square"
                                  size={5}
                                  color="black"
                                />{" "}
                                Tên công cụ : {item.congcu.ten}
                              </Text>
                              <Text>
                                <Ionicons
                                  name="square"
                                  size={5}
                                  color="black"
                                />{" "}
                                Số lượng: {item.soluong} máy
                              </Text>
                              <Text>
                                <Ionicons
                                  name="square"
                                  size={5}
                                  color="black"
                                />{" "}
                                Mô tả : {item.congcu.mota}
                              </Text>
                            </View>
                          </View>
                        </>
                      ))}
                    {item.sanpham.dsvattu &&
                      item.sanpham.dsvattu.map((item, index) => (
                        <>
                          <View key={item._id}>
                            <Text>
                              <Ionicons name="square" size={5} color="black" />{" "}
                              Vật tư
                            </Text>
                            <View style={{ marginLeft: 40 }}>
                              <Text>
                                <Ionicons
                                  name="square"
                                  size={5}
                                  color="black"
                                />{" "}
                                Tên vật tư : {item.vattu.ten}
                              </Text>
                              <Text>
                                <Ionicons
                                  name="square"
                                  size={5}
                                  color="black"
                                />{" "}
                                Số lượng: {item.soluong} cái
                              </Text>
                              <Text>
                                <Ionicons
                                  name="square"
                                  size={5}
                                  color="black"
                                />{" "}
                                Mô tả : {item.vattu.mota}
                              </Text>
                            </View>
                          </View>
                        </>
                      ))}
                    {item.sanpham.dsnguyenlieu &&
                      item.sanpham.dsnguyenlieu.map((item, index) => (
                        <>
                          <View key={item._id}>
                            <Text>
                              <Ionicons name="square" size={5} color="black" />{" "}
                              Nguyên liệu
                            </Text>
                            <View style={{ marginLeft: 40 }}>
                              <Text>
                                Tên nguyên liệu: {item.nguyenlieu.ten}
                              </Text>
                              <Text>
                                Số lượng: {item.khoiluong} {item.donvitinh}
                              </Text>
                              <Text>Mô tả : {item.nguyenlieu.mota}</Text>
                            </View>
                          </View>
                        </>
                      ))}
                  </View>
                </View>
              </>
            ))}

            <Text>Tổng tiền : {data.tongdongia} VNĐ</Text>
            <Text>Ngày gửi : {data.ngaytao}</Text>
          </View>
        </View>
      </ScrollView>
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
    // paddingVertical: 10, 
    paddingBottom: 20,
    paddingTop: 40,
    paddingHorizontal: 15,
    alignItems: "center",
  }
});
export default DonHangHDThuocDL1;
