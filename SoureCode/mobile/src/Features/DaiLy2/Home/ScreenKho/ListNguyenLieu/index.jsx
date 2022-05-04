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
import daily2Api from "../../../../../api/daily2Api";
import NguyenLieu from "../NguyenLieu";
import styles from "../style";
import Ionicons from "react-native-vector-icons/Ionicons";
const ListNguyenLieuDL2 = (props) => {
  const {navigation} = props;
  const idDaily2 = props.route.params.idDaily2;
  const [listNguyenLieu, setListNguyenLieu] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const getData = await daily2Api.dsNguyenlieu(idDaily2);
      setListNguyenLieu(getData.dsnguyenlieu);
    };
    fetchData();
  }, []);
  // console.log(listCongCu);


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
        <Text style={{ color: "white", paddingLeft: "25%"}}>Danh sách nguyên liệu</Text>
      </View>
      {listNguyenLieu && (
        <FlatList
          data={listNguyenLieu}
          renderItem={(item) => <NguyenLieu nguyenlieu={item} navigation={navigation} idDaily2={idDaily2} />}
          keyExtractor={(item) => item._id}
        />
      )}
    </SafeAreaView>
  );
};

const _styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
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

export default ListNguyenLieuDL2;
