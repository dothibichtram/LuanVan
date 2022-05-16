import React , {useState, useEffect }from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useDispatch } from "react-redux";
import { logout } from "../../auth/userSlice";
import { StatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";
function CaNhan(props){
  const { navigation } = props;
  const data = props.user;
  const idHodan = props.user._id;
  // const [user, setUser] = useState();
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const dataAccount = await AsyncStorage.getItem("user");
  //     setUser(dataAccount);
  //   };
  //   fetchData();
  // }, []);
  // console.log(idHodan);
 const dispatch = useDispatch();
  const handleChangePassWord = () => {
    navigation.navigate('ScreenDoiMatKhauHD');
  };

  const handleQRCode = () => {
    // console.log("ChangePassWord");
    navigation.navigate('ScreenQRCode',{ data: data , idHodan:idHodan});
  };
  const handleClickLogout = () => {
    dispatch(logout());
    navigation.navigate('Login')
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={{ color: "white" }}>Thông tin cá nhân </Text>
      </View>
      <View padding={20}>
        <View style={styles.containerRowRedirect} justifyContent="center">
          <Ionicons name="person-circle-outline" size={30} color="#CCC"
            style={[styles.containerRedirectKho, styles.userImage]} />
        </View>
        <Text onPress={handleQRCode}>
          <View style={styles.containerRowRedirect} >
            <Ionicons name="qr-code-outline" size={20} color="green"
              style={styles.containerRedirectKho} />
            <Text style={styles.greenText}>
              Mã QR
            </Text>
            <Ionicons name="chevron-forward-outline"
              size={20}
              color="green"
              style={styles.suffixIcon}
            />
          </View>
        </Text>

        <Text onPress={handleChangePassWord}>
          <View style={styles.containerRowRedirect} >
            <Ionicons name="key" size={20} color="orange"
              style={styles.containerRedirectKho} />
            <Text style={styles.orangeText}>
              Đổi mật khẩu
            </Text>
            <Ionicons name="chevron-forward-outline"
              size={20}
              color="orange"
              style={styles.suffixIcon}
            />
          </View>
        </Text>

        <Text onPress={handleClickLogout}>
          <View style={styles.containerRowRedirect}>
            <Ionicons name="log-out"
              size={20}
              color="red"
              style={styles.containerRedirectKho}
            />
            <Text style={styles.redText}>
              Đăng xuất
            </Text>
            <Ionicons name="chevron-forward-outline"
              size={20}
              color="red"
              style={styles.suffixIcon}
            />
          </View>
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:0,
  },
  headerContainer: {
    backgroundColor: "#4AAE4A",
    paddingTop: 40,
    paddingBottom: 20,
    alignItems: "center",
  },
  containerRowRedirect: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 15,
  },
  containerRedirectKho: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    padding: 20,
    backgroundColor: "white",
    marginRight: 10,
  },
  containerItemRedirect: {
    alignItems: "center",
  },
  orangeText: {
    color: "orange",
  },
  greenText: {
    color: "green",
  },
  redText: {
    color: "red",
  },
  suffixIcon: {
  },
  userImage: {
    padding: 30,
  }
});


export default CaNhan;
