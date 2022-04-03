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

function CongCu(props) {
  const { navigation, idDaily1 } = props;
  const data = props.congcu.item;
  // console.log(data.congcu.hinhanh);
  const handleClickError = () => {
    navigation.navigate("FormCCLoiDL1", { ...data, idDaily1 });
  };
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
                uri: `${getImg(data.congcu.hinhanh)}`,
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
              <Text style={styles.headingText}>{data.congcu.ten}</Text>
              <View style={styles.listTile}>
                <Ionicons name="star-outline" size={18} style={styles.iconStyle} />
                <Text style={styles.normalText}>
                  Công dụng: {data.congcu.congdung}
                </Text>
              </View>
              <View style={styles.listTile}>
                <Ionicons name="albums-outline" size={18} style={styles.iconStyle} />
                <Text style={styles.normalText}>Mô tả: {data.congcu.mota}</Text>
              </View>
              <View style={styles.listTile}>
                <Ionicons name="trending-up-outline" size={18} style={styles.iconStyle} />
                <Text style={styles.normalText}>Số lượng: {data.soluong}</Text>
              </View>
            </View>
            <Text
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
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
export default CongCu;
