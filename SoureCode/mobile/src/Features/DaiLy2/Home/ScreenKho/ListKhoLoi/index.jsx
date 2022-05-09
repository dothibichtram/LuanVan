import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity
} from "react-native";
import daily2Api from "../../../../../api/daily2Api";
import KhoLoi from "../KhoLoi";
import styles from "../style";
import Ionicons from "react-native-vector-icons/Ionicons";
const ListKhoLoiDL2 = (props) => {
  const idDaily2 = props.route.params.idDaily2;
  const {navigation} = props;
  const [listKhoLoi, setListKhoLoi] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const getCCLoi = await daily2Api.dsCongcuHuloi(idDaily2);
      const getVTLoi = await daily2Api.dsVattuHuloi(idDaily2);
      const getNLLoi = await daily2Api.dsNguyenlieuHuloi(idDaily2);
      const getSPLoi = await daily2Api.dsSanphamHuloi(idDaily2);
      setListKhoLoi([...getCCLoi.dscongcuhuloi,...getVTLoi.dsvattuhuloi,...getNLLoi.dsnguyenlieuhuloi,...getSPLoi.dssanphamhuloi]);

    };
    fetchData();
  }, []);

      //  console.log(idDaily1);

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
          renderItem={(item) => <KhoLoi kholoi={item} navigation={navigation} idDaily2={idDaily2} />}
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
    backgroundColor: "red",
    paddingTop: 15,
    paddingBottom: 15,
    alignItems: "center",
  },
});

export default ListKhoLoiDL2;
