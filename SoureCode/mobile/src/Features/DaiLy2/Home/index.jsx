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
import daily2Api from "../../../api/daily2Api";
import styles from "./style";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ScreenDonHang from "./ScreenDonHang";
// import ScreenDaiLy2 from "./ScreenDaiLy2";
import ScreenHoDan from "./ScreenHoDan";
function Home(props) {
  const { navigation } = props;
  // console.log(props);
  const { user } = props;
  // console.log(user);
  const [checkTienDo, setCheckTienDo] = useState(false);
  const [checkDonHang, setCheckDonHang] = useState(true);
  const [checkKho, setCheckKho] = useState(false);
  // const [checkDaiLy2, setCheckDaiLy2] = useState(false);
  const [checkHoDan, setCheckHoDan] = useState(false);
  const [idAccount, setIdAccount] = useState();
  //  console.log(user.taikhoan);
  useEffect(() => {
    (async () => {
      LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
    })();
  }, []);


  const handleChangeActiveBar1 = () => {
    // setCheckTienDo(false);
    setCheckDonHang(true);
    setCheckKho(false);
    // setCheckDaiLy2(false);
    setCheckHoDan(false);

  };

  const handleChangeActiveBar2 = () => {
    // setCheckTienDo(false);
    setCheckDonHang(false);
    setCheckKho(false);
    setCheckHoDan(true);
    // setCheckDaiLy2(false);
  };
  const handleChangeActiveBar3 = () => {
    // setCheckTienDo(false);
    setCheckDonHang(false);
    setCheckKho(true);
    // setCheckDaiLy2(false);
    setCheckHoDan(false);

  };

  const handleRedirectBCTienDo = () => {
    navigation.navigate("FormBCTienDo", { idDaily2: `${user._id}` });
  };
  const handleRedirectCongCu = () => {
    navigation.navigate("ScreenCongCuDL2", { idDaily2: `${user._id}` });
  };
  const handleRedirectVatTu = () => {
    navigation.navigate("ScreenVatTuDL2", { idDaily2: `${user._id}` });
  };
  const handleRedirectNguyenLieu = () => {
    navigation.navigate("ScreenNguyenLieuDL2", { idDaily2: `${user._id}` });
  };
  const handleRedirectKhoLoi = () => {
    navigation.navigate("ScreenKhoLoiDL2", { idDaily2: `${user._id}` });
  };
  const handleRedirectSanPham = () => {
    navigation.navigate("ScreenSanPhamDL2", { idDaily2: `${user._id}` });
  };

  return (
    <View style={styles.container}>
      {user && (
        <>
          <View style={styles.headerContainer}>
            <Text style={{ color: "white" }}>Xin chào {user.ten} </Text>
          </View>
          <View style={styles.containerLinkBar}>
            <Text
              style={[
                styles.singleBar,
                styles.progressBar,
                checkDonHang ? styles.activeBar : styles.noActiveBar,
              ]}
              onPress={handleChangeActiveBar1}
            >
              <View>
                {/* <Ionicons
                  style={styles.textAlign}
                  name="cart"
                  size={40}
                  color="white"
                /> */}
                {/* <Text style={styles.textLinkBar}>Đơn hàng</Text> */}
                <Text style={checkDonHang ? styles.activeBar : styles.noActiveBar}>Đơn hàng</Text>
              </View>
            </Text>

            {/* <Text
              style={[
                styles.singleBar,
                styles.progressBar,
                checkDaiLy2 ? styles.activeBar : styles.noActiveBar,
              ]}
              onPress={handleChangeActiveBar2}
            >
              <View>
                <Text style={
                  checkDaiLy2 ? styles.activeBar : styles.noActiveBar}>Đại lý 2</Text>
              </View>
            </Text> */}

            <Text
              style={[
                styles.singleBar,
                styles.progressBar,
                checkHoDan ? styles.activeBar : styles.noActiveBar,
              ]}
              onPress={handleChangeActiveBar2}
            >
              <View>
                {/* <Ionicons
                  style={styles.textAlign}
                  name="rose"
                  size={40}
                  color="white"
                /> */}
                <Text style={checkHoDan ? styles.activeBar : styles.noActiveBar}>Hộ dân</Text>
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
                {/* <Ionicons
                  style={styles.textAlign}
                  name="folder-open"
                  size={40}
                  color="gray"
                /> */}
                <Text style={checkKho ? styles.activeBar : styles.noActiveBar}>Kho</Text>
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
                    <ScreenTienDo navigation={navigation} daily2Id={user._id} />
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
                  <ScreenDonHang navigation={navigation} daily2Id={user._id} />
                </>
              // ) 
              // : checkDaiLy2 ? (
              //   <>
              //     <ScreenDaiLy2 navigation={navigation} daily2Id={user._id} />
              //   </>
              ) : checkHoDan ? (
                <>
                  <ScreenHoDan navigation={navigation} daily2Id={user._id} />
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
