import React, { useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  Dimensions,
  Image,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import daily2Api from "../../../../api/daily2Api";
import apiDonhang from "../../../../api/apiDonhang";
import { Snackbar } from "react-native-paper";
function RenderPhanPhat(props) {
  const { phanphat, daily2Id, checkCallBack, handleCallBackSL } = props;
  // console.log(props);
  const { item: data } = phanphat;
  // console.log(props);
  const [visible, setVisible] = useState(false);
  // const formatter = new Intl.NumberFormat("es");

  const handleComfirm = async () => {
    //call to send request
    try {
      const sendRequest = await apiDonhang.xacnhan(data._id);
      checkCallBack("Callback");
      handleCallBackSL("CallBack");
      setVisible(true);
      console.log(sendRequest);
    } catch (error) {
      console.log(error, RNRestart);
      
    }
  };
  return (
    <>
      <View
        style={{ marginBottom: 10, flexDirection: "column-reverse" }}
        key={data._id}
      >
        {/* <View
          style={{
            justifyContent: "space-between",
            marginTop: 10,
          }}
        >
          <Snackbar
            visible={visible}
            onDismiss={() => setVisible(false)}
            duration={6000}
            style={{ backgroundColor: "green" }}
          >
            Xác nhận đơn hàng thành công !
          </Snackbar>
        </View> */}

        <View
          style={{
            padding: 8,
            backgroundColor: "white",
            borderColor: "#cccccc",
            borderWidth: 1,
            marginTop: 10,
            marginLeft: 50,
            marginRight: 40,
            borderRadius: 20,
            marginBottom: 0,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Ionicons
              style={{ position: "relative", marginLeft: -55, marginTop: -5 }}
              name="logo-buffer"
              size={30}
              color="green"
            />
            <Ionicons
              style={{
                position: "relative",
                marginLeft: -3,
                marginTop: -3,
                transform: [{ rotate: "60deg" }],
              }}
              name="play"
              size={15}
              color="#cccccc"
            />
          </View>
          <View style={{ marginLeft: 10, marginTop: 0}}>
            <View >
              <Text style={styles.headerTile}>Mã đơn hàng: {data.ma}</Text>
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
              </>
            ))}
            <View style={styles.listTile}>
              <Text>
                <Ionicons name="cash-outline" size={20} color="green" />
                Tổng tiền: {data.tongdongia} VNĐ
              </Text>
              {/* <Text>
                <Ionicons name="leaf-outline" size={20} color="green" />
                Ngày tạo: {data.ngaytao}
              </Text> */}
            </View>

          </View>
          <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
            {data.xacnhan ? (
              <Text style={[styles.btnClass, { backgroundColor: "#a6a6a6" }]}>
                Đã xác nhận
              </Text>
            ) : (
              <Text
              style={[styles.btnClass, { backgroundColor: "#FF851B", fontSize: 12 }]}
                onPress={handleComfirm}
              >
                Xác nhận
              </Text>
            )}
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 5,
          }}
        >
          <Text style={{ padding: 10, backgroundColor: "#cccccc" }}>
            Ngày {data.ngaytao}
          </Text>
        </View>
      </View>
    </>
  );
}



const styles = StyleSheet.create({
  imgClass: {
    width: Dimensions.get("window").width - 300,
    height: 5,
    borderRadius: 5,
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
    marginRight : 10,
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
    marginLeft: 10,
    marginBottom: 5,
  },
  listTile1: {
    marginLeft: 20,
    marginBottom: 5,
  },
  headerTile: {
    fontSize: 16,
    marginBottom: 3,
  },
  contentTile: {
    marginLeft: 0,
    color: "grey",
  }
});
export default RenderPhanPhat;
