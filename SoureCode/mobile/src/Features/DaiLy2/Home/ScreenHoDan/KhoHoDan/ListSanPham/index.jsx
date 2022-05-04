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
import hodanApi from "../../../../../../api/hodanApi";
import SanPham from "../SanPham";
import styles from "../style";
import Ionicons from "react-native-vector-icons/Ionicons";
const ListSanPhamHDThuocDL2 = (props) => {
  const idHodan = props.route.params.idHodan;
  const {navigation} = props;
  const [listSanPham, setListSanPham] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const getData = await hodanApi.dsCongcu(idHodan);
      const getListSanPham = await hodanApi.get(idHodan);
      setListSanPham(getListSanPham.hodan.dssanpham);
      
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
          renderItem={(item) => <SanPham sanpham={item} navigation={navigation} idHodan={idHodan} />}
          keyExtractor={(item) => item._id}
        />
      )}
    </SafeAreaView>
  );
};

const _styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:0,
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

export default ListSanPhamHDThuocDL2;
