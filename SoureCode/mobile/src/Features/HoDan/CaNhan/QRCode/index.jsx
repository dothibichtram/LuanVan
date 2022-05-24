import React ,{useState, useEffect }from "react";
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
// import axiosClient from "../../../../../api/axiosClient";
import axiosClient from "../../../../api/axiosClient";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "./style";
import SvgQRCode from 'react-native-qrcode-svg';
import AsyncStorage from "@react-native-async-storage/async-storage";

function QRCode(props) {
  const { navigation,idHodan } = props;

  // const data = props.route.params.data;
  
  // const [user, setUser] = useState();
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const dataAccount = await AsyncStorage.getItem("user");
  //     setUser(dataAccount);
  //   };
  //   fetchData();
  // }, []);
  // const { navigation, idHodan } = props;
  const data = props.donhang.item;
  // console.log(props);

  //get link image
  // const getImg = (imgName) => {
  //   return `${axiosClient.defaults.baseURL}/uploads/${imgName}`;
  // }
// console.log(data.dssanpham[0].qrcode);
 
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
          {/* <Text>Test</Text> */}
          <View style={styles.imageStyle}>
          <Text><SvgQRCode value={data.dssanpham[0].qrcode} />
          </Text>
            {/* <Image
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
            /> */}
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
              <Text style={styles.headingText}>{data.ma}</Text>
              <View style={styles.listTile}>
                <Ionicons name="star-outline" size={18} style={styles.iconStyle} />
                <Text style={styles.normalText}>
                   {data.dssanpham[0].sanpham.ten}
                </Text>
              </View>
              
              {/* <View style={styles.listTile}>
                <Ionicons name="albums-outline" size={18} style={styles.iconStyle} />
                <Text style={styles.normalText}>Mô tả: {data.congcu.mota}</Text>
              </View> */}
              <View style={styles.listTile}>
                <Ionicons name="trending-up-outline" size={18} style={styles.iconStyle} />
                <Text style={styles.normalText}>Số lượng: {data.dssanpham[0].soluong}</Text>
              </View>
              <View style={styles.listTile}>
                <Ionicons name="calendar-outline" size={18} style={styles.iconStyle} />
                <Text style={styles.normalText}>Ngày tạo: {data.ngaytao}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
export default QRCode;
