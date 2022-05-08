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
    <SafeAreaView style={styles.container}>
    <View style={styles.headerContainer}>
      <Text style={{ color: "white" }}>Thông tin đơn hàng</Text>
    </View>
    <ScrollView>
      <View style={styles.container}>
      <View style={styles.headerContainer}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Ionicons name="arrow-back" size={25} color="white" />
      </TouchableOpacity>
      <Text style={{ color: "white", paddingLeft: "25%" }}>Thông tin đơn hàng</Text>
    </View>
        {data.dssanpham.map((item, index) => (
          <>
            <View style={styles.listTile} key={item._id}>
              <Text>
                <Ionicons name="leaf-outline" size={20} color="green" />
                {/* Tên sản phẩm :  */}
                {item.sanpham.ten}
              </Text>
              <View style={styles.listTile1}>
                <Text style={styles.contentTile}>
                  Số lượng: {item.soluong}
                </Text>
                <Text style={styles.contentTile}>
                  Đơn giá  : {item.sanpham.gia} VNĐ
                </Text >
              </View>
              
            </View>
            <View style={styles.listTile}>
              <Text>
                <Ionicons name="pie-chart-outline" size={20} color="green" />
                Tiến độ:  {item.soluonghoanthanh}/{item.soluong}
              </Text>
              
            </View>
            <View style={styles.listTile} >
              <Text>
                <Ionicons name="construct-outline" size={20} color="green" />
                Công cụ:
              </Text>
              {item.sanpham.dscongcu &&
                item.sanpham.dscongcu.map((item, index) => (
                  <>

                    <View >
                      <View style={styles.listTile1}>
                        <Text style={styles.contentTile}>
                         {item.congcu.ten}: {item.soluong} máy
                        </Text>
                        {/* <Text style={styles.contentTile}>
                          Số lượng: 
                        </Text > */}
                      </View>
                    </View>
                  </>
                ))}
            </View>

            <View style={styles.listTile} >
              <Text>
                <Ionicons name="leaf-outline" size={20} color="green" />
                Vật tư:
              </Text>
              {item.sanpham.dsvattu &&
                    item.sanpham.dsvattu.map((item, index) => (
                  <>

                    <View >
                      <View style={styles.listTile1}>
                        <Text style={styles.contentTile}>
                        {item.vattu.ten}: {item.soluong} cái
                        </Text>
                        {/* <Text style={styles.contentTile}>
                        Số lượng: 
                        </Text > */}
                      </View>
                    </View>
                  </>
                ))}
            </View>

            <View style={styles.listTile} >
              <Text>
                <Ionicons name="basket-outline" size={20} color="green" />
                Nguyên liệu:
              </Text>
              {item.sanpham.dsnguyenlieu &&
                    item.sanpham.dsnguyenlieu.map((item, index) => (
                  <>

                    <View >
                      <View style={styles.listTile1}>
                        <Text style={styles.contentTile}>
                        {item.nguyenlieu.ten}: {item.khoiluong} {item.donvitinh}
                        </Text>
                        {/* <Text style={styles.contentTile}>
                        Số lượng: 
                        </Text > */}
                      </View>
                    </View>
                  </>
                ))}
            </View>
          </>
        ))
        }
        <View style={styles.listTile}>
          <Text>
            <Ionicons name="cash-outline" size={20} color="green" />
            Tổng tiền: {data.tongdongia} VNĐ
          </Text>
        
        </View>
        <View style={styles.listTile}>
          <Text>
            <Ionicons name="today-outline" size={20} color="green" />
            Ngày tạo: {data.ngaytao}
          </Text>
        </View>

      </View>
      {/* <Text>Tổng tiền : {data.tongdongia} VNĐ</Text>
          <Text>Ngày gửi : {data.ngaytao}</Text> */}
    </ScrollView>
    {/* <View
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
          navigation.navigate("TabNavHD");
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
          navigation.navigate("TabNavHD");
        }}
      >
        Xác nhận
      </Text>
    </View> */}
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
