import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useDispatch } from "react-redux";
import { logout } from "../../auth/userSlice";

const CaNhan = ({ navigation }) => {
  const dispatch = useDispatch();
  const handleChangePassWord = () => {
    // console.log("ChangePassWord");
    navigation.navigate('ScreenDoiMatKhauDL2');
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
    marginTop: 0,
  },
  headerContainer: {
    // backgroundColor: "#e65c00",
    backgroundColor: "#4AAE4A",
    paddingTop: 40,
    paddingBottom: 30,
    flex: 1,
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
