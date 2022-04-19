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
  TouchableOpacity,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
// import hodanApi from "../../../api/hodanApi"
import daily1Api from "../../../../../api/daily1Api";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import ScreenDonHang from "../../ScreenDonHang";
// import ScreenDaiLy2 from "../../ScreenDaiLy2";
import ScreenHoDanThuocDL1 from "..";
import { SafeAreaView } from "react-native-safe-area-context";
import { DataTable } from 'react-native-paper';
import styles from "./style";
function InfoHoDanThuocDL1(props) {
  const data = props.route.params.data;
  const { navigation } = props;
  // console.log(123456);
  // console.log(user);
  // console.log(data.ten);
  console.log(data._id);
  const handleRedirectCongCu = () => {
    navigation.navigate("ScreenCongCuHDThuocDL1", { idHodan: `${data._id}` });
  };
  const handleRedirectVatTu = () => {
    navigation.navigate("ScreenVatTuHDThuocDL1", { idHodan: `${data._id}` });
  };
  const handleRedirectNguyenLieu = () => {
    navigation.navigate("ScreenNguyenLieuHDThuocDL1", { idHodan: `${data._id}` });
  };
  const handleRedirectSanPham = () => {
    navigation.navigate("ScreenSanPhamHDThuocDL1", { idHodan: `${data._id}` });
  };
  const handleRedirectDonHang = () => {
    navigation.navigate("ScreenDonHangHDThuocDL1", { idHodan: `${data._id}` });
  };

  return (
    <SafeAreaView style={{ flex: 1, marginTop: 10 }}>
      <View style={styles.appBarStyle}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Ionicons name="arrow-back" size={25} color="white" />
        </TouchableOpacity>
        <Text style={{ color: "white", paddingLeft: "25%" }}>Thông tin hộ dân</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          paddingVertical: 10,
          paddingLeft: 20,
          borderRadius: 10,
          backgroundColor: "white",
          alignItems: "center",
          marginBottom: 20,
        }}
      >

        <DataTable>

          <View style={{ marginLeft: 10 }}>
            {/* <Text style={styles.title}>{data.daidien}</Text> */}
            <DataTable.Row style={styles.rowtable}>
              <DataTable.Cell >
                <Ionicons name="person-outline" size={17} color="grey" />
                <Text style={styles.lableText}>
                  Tên :
                </Text>
              </DataTable.Cell>
              <DataTable.Cell>
                <Text style={styles.normalText}>
                  {data.daidien}
                </Text>
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row style={styles.rowtable}>
              <DataTable.Cell >
                <Ionicons name="call-outline" size={17} color="grey" />
                <Text style={styles.lableText}>
                  Số điện thoại:
                </Text>
              </DataTable.Cell>
              <DataTable.Cell>
                <Text style={styles.normalText}>
                  {data.sdt}
                </Text>
              </DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row style={styles.rowtable}>
              <DataTable.Cell >
                <Ionicons name="card-outline" size={17} color="grey" />
                <Text style={styles.lableText}>
                  CMND:
                </Text>
              </DataTable.Cell>
              <DataTable.Cell>
                <Text style={styles.normalText}>
                  {data.cmnd}
                </Text>
              </DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row style={styles.rowtable}>
              <DataTable.Cell >
                <Ionicons name="location-outline" size={17} color="grey" />
                <Text style={styles.lableText}>
                  Làng nghề:
                </Text>
              </DataTable.Cell>
              <DataTable.Cell>
                <Text style={styles.normalText}>
                  {data.langnghe.ten}
                </Text>
              </DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row style={styles.rowtable}>
              <DataTable.Cell >
                <Ionicons name="grid-outline" size={17} color="grey" />
                <Text style={styles.lableText}>
                  Loại sản phẩm:
                </Text>
              </DataTable.Cell>
              <DataTable.Cell>
                <Text style={styles.normalText}>
                  {data.loaisanpham.ten}
                </Text>
              </DataTable.Cell>
            </DataTable.Row>
          </View>
        </DataTable>
      </View>

      <View style={styles.containerRowRedirect}>
        <View style={styles.containerItemRedirect}>
          <Text onPress={handleRedirectCongCu}>
            <View style={styles.containerRedirectKho}>
              <Ionicons
                name="construct"
                style={styles.iconStore}
              />
            </View>
          </Text>
          <Text style={styles.containerTextRedirect} >
            Công cụ
          </Text>
        </View>
        <View style={styles.containerItemRedirect}>
          <Text onPress={handleRedirectVatTu}>
          <View style={styles.containerRedirectKho}>
            <Ionicons name="basket"
              style={styles.iconStore} />
          </View>
          </Text>
          <Text style={styles.containerTextRedirect}>
            Vật tư
          </Text>
        </View>
        <View style={styles.containerItemRedirect}>
          <Text onPress={handleRedirectNguyenLieu}>
          <View style={styles.containerRedirectKho}>
            <Ionicons name="bonfire"
              style={styles.iconStore} />
          </View>
          </Text>
          <Text style={styles.containerTextRedirect}>
            Nguyên liệu
          </Text>
        </View>
        <View style={styles.containerItemRedirect}>
          <Text onPress={handleRedirectSanPham}>
          <View style={styles.containerRedirectKho}>
            <Ionicons name="leaf"
              style={styles.iconStore} />
          </View>
          </Text>
          <Text style={styles.containerTextRedirect}>
            Sản phẩm
          </Text>
        </View>
      </View>
      <View style={styles.containerRowRedirect}>

        <View style={styles.containerItemRedirect}>
          <Text onPress={handleRedirectDonHang}>
          <View style={styles.containerRedirectKho}>
            <Ionicons
              name="file-tray-full"
              style={styles.iconStore}
            />
          </View>
          </Text>
          <Text style={styles.containerTextRedirect}>
            Đơn hàng
          </Text>
        </View>
      </View>
    </SafeAreaView >
  )
}
export default InfoHoDanThuocDL1;
