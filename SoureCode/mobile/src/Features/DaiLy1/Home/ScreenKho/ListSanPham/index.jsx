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
import daily1Api from "../../../../../api/daily1Api";
import SanPham from "../SanPham";
import styles from "../style";
import Ionicons from "react-native-vector-icons/Ionicons";
const ListSanPhamDL1 = (props) => {
  const idDaily1 = props.route.params.idDaily1;
  const {navigation} = props;
  const [listSanPham, setListSanPham] = useState();

  useEffect(() => {
    const fetchData = async () => {
      // const getData = await daily1Api.dsCongcu(iddaily1);
      // const getListSanPham = await daily1Api.get(idDaily1);
      const getListSanPham = await daily1Api.dsSanpham(idDaily1);
      // setListSanPham(getListSanPham.daily1.dsSanpham);
      setListSanPham(getListSanPham.dssanpham);
      
    };
    fetchData();
  }, []);
  // console.log(props);
  

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
          renderItem={(item) => <SanPham sanpham={item} navigation={navigation} idDaily1={idDaily1} />}
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

export default ListSanPhamDL1;
