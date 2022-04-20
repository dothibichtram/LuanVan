import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import daily2Api from "../../../../../../api/daily2Api";
import SanPham from "../SanPham";
import styles from "../style";
import Ionicons from "react-native-vector-icons/Ionicons";
const ListSanPhamHDThuocDL1 = (props) => {
  const idDaily2 = props.route.params.idDaily2;
  const {navigation} = props;
  const [listSanPham, setListSanPham] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const getData = await daily2Api.dsCongcu(idDaily2);
      const getListSanPham = await daily2Api.get(idDaily2);
      setListSanPham(getListSanPham.daily2.dssanpham);
      
    };
    fetchData();
  }, []);
  

  return (
    <SafeAreaView style={_styles.container}>
      <View style={styles.appBarStyle}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Ionicons name="arrow-back" size={25} color="white" />
        </TouchableOpacity>
        <Text style={{ color: "white", paddingLeft: "25%"}}>Danh sách sản phẩm</Text>
      </View>
      {listSanPham && (
        <FlatList
          data={listSanPham}
          renderItem={(item) => <SanPham sanpham={item} navigation={navigation} idDaily2={idDaily2} />}
          keyExtractor={(item) => item._id}
        />
      )}
    </SafeAreaView>
  );
};

const _styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  headerContainer: {
    backgroundColor: "#e65c00",
    paddingTop: 15,
    paddingBottom: 15,
    alignItems: "center",
  },
});

export default ListSanPhamHDThuocDL1;
