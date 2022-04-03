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
// import ScreenDonHang from "../../ScreenDonHang";
// import ScreenDaiLy2 from "../../ScreenDaiLy2";
import ScreenHoDan from "..";
import { SafeAreaView } from "react-native-safe-area-context";
import { DataTable } from 'react-native-paper';
import styles from "./style";
function InfoHoDan(props) {
  const data = props.route.params.data;
  const { navigation } = props;
  // console.log(123456);
  // console.log(user);
  // console.log(data.ten);
  return (
    <SafeAreaView style={{ flex: 1, marginTop: 10 }}>
      <View>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Name</DataTable.Title>
          <DataTable.Title>Email</DataTable.Title>
          <DataTable.Title numeric>Age</DataTable.Title>
        </DataTable.Header>

        <DataTable.Row>
          <DataTable.Cell>John</DataTable.Cell>
          <DataTable.Cell>john@kindacode.com</DataTable.Cell>
          <DataTable.Cell numeric>33</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>Bob</DataTable.Cell>
          <DataTable.Cell>test@test.com</DataTable.Cell>
          <DataTable.Cell numeric>105</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>Mei</DataTable.Cell>
          <DataTable.Cell>mei@kindacode.com</DataTable.Cell>
          <DataTable.Cell numeric>23</DataTable.Cell>
        </DataTable.Row>

      </DataTable>
      </View>
      <View style={styles.headerContainer}>
        <Text style={{ color: "white" }}>Thông tin hộ dân</Text>
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
        <View style={{ marginLeft: 20 }}>
          <Text style={styles.title}>{data.daidien}</Text>
          <View style={styles.listTile}>
            <Ionicons name="call-outline" size={18} color="grey" />
            <Text style={styles.normalText}>
              {data.sdt}
            </Text>
          </View>
          <View style={styles.listTile}>
            <Ionicons name="location-outline" size={20} color="grey" />
            <Text style={styles.normalText}>
              {data.langnghe.ten}
            </Text>
          </View>
          <View style={styles.listTile}>
            <Ionicons name="grid-outline" size={20} color="grey" />
            <Text style={styles.normalText}>
              {data.loaisanpham.ten}
            </Text>
          </View>
          <View style={styles.listTile}>
            <Ionicons name="location-outline" size={20} color="grey" />
            <Text style={styles.normalText}>
              {data.langnghe.ten}
            </Text>
          </View>
          {/* <Text>Tài khoản: {data.taikhoan}</Text> */}
        </View>
      </View>
      <View style={styles.containerRowRedirect}>
        <View style={styles.containerItemRedirect}>
          {/* <Text onPress={handleRedirectCongCu}> */}
          <View style={styles.containerRedirectKho}>
            <Ionicons
              name="construct"
              style={styles.iconStore}
            />
          </View>
          {/* </Text> */}
          <Text style={styles.containerTextRedirect} >
            Công cụ
          </Text>
        </View>
        <View style={styles.containerItemRedirect}>
          {/* <Text onPress={handleRedirectVatTu}> */}
          <View style={styles.containerRedirectKho}>
            <Ionicons name="basket"
              style={styles.iconStore} />
          </View>
          {/* </Text> */}
          <Text style={styles.containerTextRedirect}>
            Vật tư
          </Text>
        </View>
        <View style={styles.containerItemRedirect}>
          {/* <Text onPress={handleRedirectNguyenLieu}> */}
          <View style={styles.containerRedirectKho}>
            <Ionicons name="bonfire"
              style={styles.iconStore} />
          </View>
          {/* </Text> */}
          <Text style={styles.containerTextRedirect}>
            Nguyên liệu
          </Text>
        </View>
        <View style={styles.containerItemRedirect}>
          {/* <Text onPress={handleRedirectSanPham}> */}
          <View style={styles.containerRedirectKho}>
            <Ionicons name="leaf"
              style={styles.iconStore} />
          </View>
          {/* </Text> */}
          <Text style={styles.containerTextRedirect}>
            Sản phẩm
          </Text>
        </View>
      </View>
      <View style={styles.containerRowRedirect}>

        <View style={styles.containerItemRedirect}>
          {/* <Text onPress={handleRedirectKhoLoi}> */}
          <View style={styles.containerRedirectKho}>
            <Ionicons
              name="close-circle"
              style={styles.iconStore}
            />
          </View>
          {/* </Text> */}
          <Text style={styles.containerTextRedirect}>
            Hư hỏng
          </Text>
        </View>
      </View>
    </SafeAreaView >
  )


}
export default InfoHoDan;
