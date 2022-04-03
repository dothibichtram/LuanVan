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
import NguyenLieu from "../NguyenLieu";
import styles from "../style";
import Ionicons from "react-native-vector-icons/Ionicons";
const ListNguyenLieuDL1 = (props) => {
  const {navigation} = props;
  const idDaily1 = props.route.params.idDaily1;
  const [listNguyenLieu, setListNguyenLieu] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const getData = await daily1Api.dsNguyenlieu(idDaily1);
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
          renderItem={(item) => <NguyenLieu nguyenlieu={item} navigation={navigation} idDaily1={idDaily1} />}
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

export default ListNguyenLieuDL1;
