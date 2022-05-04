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
import hodanApi from "../../../api/hodanApi"
import styles from "./style";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ScreenDonHang from "./ScreenDonHang";
import ScreenTienDo from "./ScreenTienDo";

function Home(props) {
  const { navigation } = props;
  // console.log(props);
  const { user } = props;
  // console.log(user);
  const [checkTienDo, setCheckTienDo] = useState(true);
  const [checkDonHang, setCheckDonHang] = useState(false);
  const [checkKho, setCheckKho] = useState(false);
  const [idAccount, setIdAccount] = useState();

  useEffect(() => {
    (async () => {
      LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
    })();
  }, []);
  // console.log(hoDan)
  const handleChangeActiveBar1 = () => {
    setCheckTienDo(true);
    setCheckDonHang(false);
    setCheckKho(false);
  };
  const handleChangeActiveBar2 = () => {
    setCheckTienDo(false);
    setCheckDonHang(true);
    setCheckKho(false);
  };
  const handleChangeActiveBar3 = () => {
    setCheckTienDo(false);
    setCheckDonHang(false);
    setCheckKho(true);
  };
  const handleRedirectBCTienDo = () => {
    navigation.navigate("FormBCTienDoHD", { idHodan: `${user._id}` });
  };
  const handleRedirectCongCu = () => {
    navigation.navigate("ScreenCongCuHD", { idHodan: `${user._id}` });
  };
  const handleRedirectVatTu = () => {
    navigation.navigate("ScreenVatTuHD", { idHodan: `${user._id}` });
  };
  const handleRedirectNguyenLieu = () => {
    navigation.navigate("ScreenNguyenLieuHD", { idHodan: `${user._id}` });
  };
  const handleRedirectKhoLoi = () => {
    navigation.navigate("ScreenKhoLoiHD", { idHodan: `${user._id}` });
  };
  const handleRedirectSanPham = () => {
    navigation.navigate("ScreenSanPhamHD", { idHodan: `${user._id}` });
  };

  return (
    <View style={styles.container}>
      {user && (
        <>
          <View style={styles.headerContainer}>
            <Text style={{ color: "white" }}>Xin chào {user.daidien} </Text>
          </View>

          {/****************************** {Start link bar} **************************************/}
          <View style={styles.containerLinkBar}>
            <Text
              style={[
                styles.singleBar,
                styles.progressBar,
                checkTienDo ? styles.activeBar : styles.noActiveBar,
              ]}
              onPress={handleChangeActiveBar1}
            >
              <View>
                <Text style={styles.textLinkBar}>Tiến độ</Text>
              </View>
            </Text>
            <Text
              style={[
                styles.singleBar,
                styles.progressBar,
                checkDonHang ? styles.activeBar : styles.noActiveBar,
              ]}
              onPress={handleChangeActiveBar2}
            >
              <View>
                <Text style={styles.textLinkBar}>Đơn hàng</Text>
              </View>
            </Text>
            <Text
              style={[
                styles.singleBar,
                styles.progressBar,
                checkKho ? styles.activeBar : styles.noActiveBar,
              ]}
              onPress={handleChangeActiveBar3}
            >
              <View>
                
                <Text style={styles.textLinkBar}>Kho</Text>
              </View>
            </Text>
          </View>

          {/****************************** {End link bar} **************************************/}
          {/****************************** {Start redirect screen} ******************************/}
          <ScrollView>
            <View style={styles.containerRedirectScreen}>
              {checkTienDo ? (
                <>
                  <View style={styles.containerRowRedirect}>
                    <ScreenTienDo navigation={navigation} hodanId={user._id} />
                  </View>
                </>
              ) : checkKho ? (
                <>
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
                      <Text onPress={handleRedirectKhoLoi}>
                        <View style={styles.containerRedirectKho}>
                          <Ionicons
                            name="close-circle"
                            style={styles.iconStore}
                          />
                        </View>
                      </Text>
                      <Text style={styles.containerTextRedirect}>
                        Hư hỏng
                      </Text>
                    </View>
                  </View>
                </>
              ) : checkDonHang ? (
                <>
                  <ScreenDonHang navigation={navigation} hodanId={user._id} />
                </>
              ) : (<></>)
              }
            </View>
          </ScrollView>

          {/****************************** {End redirect screen} ******************************/}
        </>
      )}
    </View>
  );
}

export default Home;
