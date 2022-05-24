import React from "react";
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

function SanPham(props) {
  const { navigation, idDaily1 } = props;
  const data = props.sanpham.item;
  //get link image
  console.log(data.loi);
  const getImg = (imgName) => {
    return `${axiosClient.defaults.baseURL}/uploads/${imgName}`;
  }

  return (
    <View style={styles.container}>
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
                uri: `${getImg(data.sanpham.hinhanh)}`,
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
          <View
            style={{
              flexDirection: "column",
              justifyContent: "space-between",
              marginTop: 10,
              marginLeft: 10,
              marginBottom: 10,
            }}
          >
            <View>
              <Text style={styles.headingText}>{data.sanpham.ten}</Text>
              <View style={styles.listTile}>
                <Ionicons name="star-outline" size={18} style={styles.iconStyle} />
                <Text style={styles.normalText}>Giá: {data.sanpham.gia} đ</Text>
              </View>
              <View style={styles.listTile}>
                <Ionicons name="git-pull-request-outline" size={18} style={styles.iconStyle} />
                <Text style={styles.normalText}>SL yêu cầu: {data.soluong}</Text>
              </View>
              <View style={styles.listTile}>
                <Ionicons name="pie-chart-outline" size={18} style={styles.iconStyle} />
                <Text style={styles.normalText}>SL hoàn thành: {data.soluonghoanthanh}</Text>
              </View>
              <View style={styles.listTile}>
                <Ionicons name="checkmark-circle-outline" size={18} style={styles.iconStyle} />
                <Text style={styles.normalText}>SL đã giao :{data.dagiao}</Text>
              </View>
              <View style={styles.listTile}>
                <Ionicons name="checkmark-circle-outline" size={18} style={styles.iconStyle} />
                <Text style={styles.normalText}>SL đã nhận :{data.danhan}</Text>
              </View>
              {/* {data.loi (
                  <Text style={styles.normalText}>Số lượng lỗi: {data.loi.soluongloi}</Text>
                )
                } */}
              {/* <View style={styles.listTile}>
                <Ionicons name="checkmark-circle-outline" size={18} style={styles.iconStyle} />
                <Text style={styles.normalText}>SL đã nhận :{data.loi}</Text>
              </View> */}
            </View>
            {/* <Text
              style={{
                color: "white",
                padding: 5,
                backgroundColor: "#E43A45",
                textAlign: "center",
                marginTop: 10,
                borderRadius: 5,
              }}
              onPress={handleClickError}
            >
              Báo lỗi
            </Text> */}
          </View>
        </View>
      </View>
    </View>
  );
}
export default SanPham;

