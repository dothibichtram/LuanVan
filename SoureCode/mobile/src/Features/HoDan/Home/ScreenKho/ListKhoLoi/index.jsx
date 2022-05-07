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
import hodanApi from "../../../../../api/hodanApi";
import CongCu from "../CongCu";
import KhoLoi from "../KhoLoi";
import styles from "../style";
import Ionicons from "react-native-vector-icons/Ionicons";
const ListKhoLoiHD = (props) => {
  const idHodan = props.route.params.idHodan;
  const {navigation} = props;
  const [listKhoLoi, setListKhoLoi] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const getCCLoi = await hodanApi.dsCongcuHuloi(idHodan);
      const getVTLoi = await hodanApi.dsVattuHuloi(idHodan);
      const getNLLoi = await hodanApi.dsNguyenlieuHuloi(idHodan);

      setListKhoLoi([...getCCLoi.dscongcuhuloi,...getVTLoi.dsvattuhuloi,...getNLLoi.dsnguyenlieuhuloi]);

    };
    fetchData();
  }, []);

      //  console.log(listKhoLoi);

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
          <Text style={{ color: "white", paddingLeft: "25%"}}>Danh sách lỗi</Text>
        </View>
        {listKhoLoi && (
          <FlatList
            data={listKhoLoi}
            renderItem={(item) => <KhoLoi kholoi={item} navigation={navigation} idHodan={idHodan} />}
            keyExtractor={(item) => item._id}
          />
        )}
      </SafeAreaView>
      );
};

const _styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:  0,
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
    backgroundColor: "red",
    paddingTop: 15,
    paddingBottom: 15,
    alignItems: "center",
  },
});

export default ListKhoLoiHD;
