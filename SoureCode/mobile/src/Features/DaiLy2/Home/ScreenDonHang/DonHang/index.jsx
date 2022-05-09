import React from "react";
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
function DonHangDL2(props) {
  const data = props.route.params.data;
  const { navigation } = props;
  // const formatter = new Intl.NumberFormat("es");
  return (
    <SafeAreaView style={styles.container}>
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
      <ScrollView>
        <View style={styles.container}>
        <View >
            <Text style={styles.headerTile}>{data.ma}</Text>
            {/* <Text>{data.ma}</Text> */}
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
              {/* <View style={styles.listTile}>
                <Text>
                  <Ionicons name="archive-outline" size={20} color="green" />
                  Đã nhận:  {item.danhan}/{item.soluong}
                </Text>
              </View> */}
              <View style={styles.listTile}>
                <Text>
                  <Ionicons name="checkmark-circle-outline" size={20} color="green" />
                  Đã giao:  {item.dagiao}/{item.soluong}
                </Text>
              </View>
              {/* <View style={styles.listTile} >
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

                        </View>
                      </View>
                    </>
                  ))}
              </View> */}
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
            navigation.navigate("TabNavDL2");
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
    flex: 1,
    marginTop: 0,
  },
  headerContainer: {
    flexDirection: "row",
    backgroundColor: "#4AAE4A",
    // paddingVertical: 10, 
    paddingBottom: 20,
    paddingTop: 40,
    paddingHorizontal: 15,
    alignItems: "center",
    // justifyContent: "space",
  },
  containerItem: {
    flexDirection: "row",
    marginLeft: 0,
    backgroundColor: "#e6e6e6",
    borderRadius: 5,
  },
  txt: {
    color: "black",
  },
  btnClass: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 5,
    color: "white",
    marginTop: 5,
    marginRight: 10,
    textAlign: "center",
  },
  // btnClass: {
  //   paddingHorizontal: 12,
  //   paddingVertical: 8,
  //   borderRadius: 5,
  //   color: "white",
  //   textAlign: "center",
  // },
  listTile: {
    marginLeft: 40,
    marginBottom: 3,
  },
  listTile1: {
    marginLeft: 40,
    marginBottom: 5,
  },
  headerTile: {
    fontSize: 16,
    padding: 5,
    marginLeft: 30,
    textAlign: "center",
  },
  contentTile: {
    marginLeft: 0,
    color: "grey",
  }
});
export default DonHangDL2;
