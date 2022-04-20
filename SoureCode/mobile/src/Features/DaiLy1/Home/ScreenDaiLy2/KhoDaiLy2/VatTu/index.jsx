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
import axiosClient from "../../../../../../api/axiosClient";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "../style";

function VatTu(props) {
  const { navigation, idDaily1} = props;
  const data = props.vattu.item;
  // console.log(123456);
  // console.log(data);
  //get link image
  const getImg = (imgName) => {
    return `${axiosClient.defaults.baseURL}/uploads/${imgName}`;
  }

  return (
    <View style={styles.container}>
      <View style={{ paddingBottom: 5 }}>
        <View
          style={{
            flexDirection: "row",
            // marginTop: 20,
            // marginLeft: 40,
            // backgroundColor: "#ff751a",
            backgroundColor: "white",
            borderRadius: 20,
          }}
        >
          <View style={styles.imageStyle}>
            <Image
              source={{
                uri: `${getImg(data.vattu.hinhanh)}`,
              }}
              style={{
                width: Dimensions.get("window").width - 220,
                height: 130,
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
              <Text style={styles.headingText}>{data.vattu.ten}</Text>
              <View style={styles.listTile}>
                <Ionicons name="star-outline" size={18} style={styles.iconStyle} />
                <Text style={styles.normalText}>
                  Công dụng: {data.vattu.congdung}
                </Text>
              </View>
              <View style={styles.listTile}>
                <Ionicons name="albums-outline" size={18} style={styles.iconStyle} />
                <Text style={styles.normalText}>Mô tả: {data.vattu.mota}</Text>
              </View>
              <View style={styles.listTile}>
                <Ionicons name="trending-up-outline" size={18} style={styles.iconStyle} />
                <Text style={styles.normalText}>Số lượng: {data.soluong}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
export default VatTu;
