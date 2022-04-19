import React, { useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  Image,
  Dimensions,
} from "react-native";
import axiosClient from "../../../../../api/axiosClient";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "../style";

function KhoLoi(props) {
  const { navigation, idDaily2} = props;
  const dataLoi = props.kholoi.item;
  const [data, setData] = useState();
  //   console.log(dataLoi);

  useEffect(() => {
    dataLoi.congcu
      ? setData(dataLoi.congcu)
      : dataLoi.vattu
        ? setData(dataLoi.vattu)
        : setData(dataLoi.nguyenlieu);
  }, []);
  //get link image
  const getImg = (imgName) => {
    return `${axiosClient.defaults.baseURL}/uploads/${imgName}`;
  }

  // console.log(dataLoi, data);
  return (
    <View style={styles.container}>
      {data && (
        <View style={{ paddingBottom: 5 }}>
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "white",
              borderRadius: 20,
            }}
          >
            <View style={styles.imageStyle}>
              <Image
                source={{
                  uri: `${getImg(data.hinhanh)}`,
                }}
                style={{
                  width: Dimensions.get("window").width - 220,
                  height: 130,
                  width: 130,
                  borderRadius: 20,
                  borderColor: "#F1F1F1",
                  borderWidth: 1,
                }}
              />
            </View>
            {/* <View
              style={{ position: "relative", marginTop: -20, marginLeft: -30 }}
            >
              <Image
                source={{
                  uri: `${getImg(data.hinhanh)}`,
                  
                }}
                style={{
                  width: Dimensions.get("window").width - 220,
                  height: 130,
                  borderRadius: 20,
                }}
              />
            </View> */}
            <View
              style={{
                marginTop: 10,
                marginLeft: 10,
                marginBottom: 10,
              }}
            >
              <Text style={styles.headingText}>{data.ten}</Text>
              <View style={styles.listTile}>
                <Ionicons name="star-outline" size={18} style={styles.iconStyle} />
                <Text style={styles.normalText}>Công dụng: {data.congdung}</Text>
              </View>
              <View style={styles.listTile}>
                <Ionicons name="albums-outline" size={18} style={styles.iconStyle} />
                <Text style={styles.normalText}>Mô tả: {data.mota}</Text>
              </View>
              <View style={styles.listTile}>
                <Ionicons name="locate-outline" size={18} style={styles.iconStyle} />
              {dataLoi.nguyenlieu ? (
                  <Text style={styles.normalText}>Số lượng lỗi: {dataLoi.loi.soluongloi}</Text>
              ) : (
                  <Text style={styles.normalText}>Số lượng lỗi: {dataLoi.loi.soluongloi}</Text>
              )}</View>
              <View style={styles.listTile}>
                <Ionicons name="calendar-outline" size={18} style={styles.iconStyle} />
                <Text style={styles.normalText}>Ngày báo lỗi :{dataLoi.loi.ngaybaoloi}</Text>
              </View>
            </View>
          </View>
        </View>
      )}
    </View>
  );
}
const _styles = StyleSheet.create({
  container: {
    marginTop: 0,
  },
});
export default KhoLoi;
