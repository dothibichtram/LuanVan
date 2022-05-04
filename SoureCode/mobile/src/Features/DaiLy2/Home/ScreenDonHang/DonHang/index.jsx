import React from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
function DonHangDL2(props) {
  const data = props.route.params.data;
  const { navigation } = props;
  // const formatter = new Intl.NumberFormat("es");
  return (
    <SafeAreaView style={{ flex: 1, marginTop: 0 }}>
      <View style={styles.headerContainer}>
        <Text style={{ color: "white" }}>Thông tin đơn hàng</Text>
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
                      <Ionicons name="square" size={5} color="black" /> Mã sản phẩm : {item.sanpham.ma}
                    </Text>
                    <Text>
                      <Ionicons name="square" size={5} color="black" /> Số lượng : {item.soluong}
                    </Text>
                    <Text style={{ color: "green" }}>
                      <Ionicons name="square" size={5} color="black" /> Số lượng đã hoàn thành : {item.soluonghoanthanh}
                    </Text>
                    {/* <Text><Ionicons name="square" size={5} color="black"  />
                    {" "}Đơn vị : {item.donvi}</Text> */}
                    <Text>
                      <Ionicons name="square" size={5} color="black" /> Đơn giá : {item.sanpham.gia} vnđ/m
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
      <View
        style={{
          flexDirection: "row",
          marginTop: 10,
          paddingTop: 10,
          borderTopColor: "#b3b3b3",
          borderWidth: 1,
          borderRightWidth: 0,
          borderLeftWidth: 0,
          borderBottomWidth: 0,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            borderColor: "green",
            borderWidth: 1,
            borderRadius: 90,
            width: 50,
            padding: 10,
            marginBottom: 10,
            textAlign: "center",
          }}
          onPress={() => {
            navigation.navigate("TabNavDL2");
          }}
        >
          <Ionicons name="arrow-back" size={25} color="green" />
        </Text>
        <Text
          style={{
            padding: 10,
            marginBottom: 10,
            borderRadius: 10,
            backgroundColor: "green",
            width: 200,
            textAlign: "center",
            color: "white",
            marginLeft: 30,
          }}
          onPress={() => {
            navigation.navigate("TabNavDL1");
          }}
        >
          Xác nhận
        </Text>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 0,
  },
  headerContainer: {
    // backgroundColor: "#e65c00",
    backgroundColor: "#4AAE4A",
    paddingTop: 40,
    paddingBottom: 20,
    alignItems: "center",
  },
});
export default DonHangDL2;
