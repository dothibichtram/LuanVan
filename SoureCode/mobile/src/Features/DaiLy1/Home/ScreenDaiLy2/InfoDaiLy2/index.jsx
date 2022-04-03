import React, { useState, useEffect } from "react";
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
  LogBox,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
// import hodanApi from "../../../api/hodanApi"
import daily1Api from "../../../../../api/daily1Api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ScreenDonHang from "../../ScreenDonHang";
import ScreenDaiLy2 from "../../ScreenDaiLy2";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./style";
function InfoDaiLy2(props) {
  const data = props.route.params.data;
  const { navigation } = props;
  // console.log(123456);
  // console.log(user);
  // console.log(data.ten);
  return (
    <SafeAreaView style={{ flex: 1, marginTop: 10 }}>
      <View style={styles.headerContainer}>
        <Text style={{ color: "white" }}>Thông tin đại lý 2</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          paddingTop: 20,
          paddingBottom: 20,
          paddingLeft: 20,
          borderRadius: 10,
          backgroundColor: "white",
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        {/* <Text style={{ marginRight: 10 }}  onPress={handleClickInfo}> */}
        {/* <Text style={{ marginRight: 10 }} >
          <Ionicons name="information-circle-outline" size={50} color="black" />
        </Text> */}
        <View style={{ marginLeft: 30 }}>
          <Text>Tên đại lý: {data.ten}</Text>
          <Text>Số điện thoại: {data.sdt}</Text>
          <Text>Email: {data.email}</Text>
          {/* <Text>Tài khoản: {data.taikhoan}</Text> */}
        </View>
      </View>
      <View style={styles.containerRowRedirect}>
        <View style={{ marginRight: 20 }}>
          <Text>
            <View style={styles.containerRedirectKho}>
              <Ionicons
                name="construct"
                size={55}
                color="#0000b3"
              />
            </View>
          </Text>
          <Text style={[{ marginTop: 10, textAlign: "center" }]}>
            Công cụ
          </Text>
        </View>
        <View style={{ marginRight: 20 }}>
          <Text >
            <View style={styles.containerRedirectKho}>
              <Ionicons name="basket" size={55} color="#0000b3" />
            </View>
          </Text>
          <Text style={[{ marginTop: 10, textAlign: "center" }]}>
            Vật tư
          </Text>
        </View>
        <View>
          <Text >
            <View style={styles.containerRedirectKho}>
              <Ionicons name="nuclear" size={55} color="#0000b3" />
            </View>
          </Text>
          <Text style={[{ marginTop: 10, textAlign: "center" }]}>
            Nguyên liệu
          </Text>
        </View>
      </View>
      <View style={styles.containerRowRedirect}>
        <View style={{ marginRight: 20 }}>
          <Text >
            <View style={styles.containerRedirectKho}>
              <Ionicons name="leaf" size={55} color="#0000b3" />
            </View>
          </Text>
          <Text style={[{ marginTop: 10, textAlign: "center" }]}>
            Sản phẩm
          </Text>
        </View>
        <View style={{ marginRight: 30 }}>
          <Text>
            <View style={styles.containerRedirectKho}>
              <Ionicons
                name="close-circle"
                size={55}
                color="#0000b3"
              />
            </View>
          </Text>
          <Text style={[{ marginTop: 10, textAlign: "center" }]}>
            Hư hỏng
          </Text>
        </View>
      </View>
    </SafeAreaView>
  )

  // const handleRedirectBCTienDo = () => {
  //   navigation.navigate("FormBCTienDo", { idDaily1: `${user._id}` });
  // };
  // const handleRedirectCongCu = () => {
  //   navigation.navigate("ScreenCongCuDL1", { idDaily1: `${user._id}` });
  // };
  // const handleRedirectVatTu = () => {
  //   navigation.navigate("ScreenVatTuDL1", { idDaily1: `${user._id}` });
  // };
  // const handleRedirectNguyenLieu = () => {
  //   navigation.navigate("ScreenNguyenLieuDL1", { idDaily1: `${user._id}` });
  // };
  // const handleRedirectKhoLoi = () => {
  //   navigation.navigate("ScreenKhoLoiDL1", { idDaily1: `${user._id}` });
  // };
  // const handleRedirectSanPham = () => {
  //   navigation.navigate("ScreenSanPhamDL1", { idDaily1: `${user._id}` });
  // };

}
export default InfoDaiLy2;
