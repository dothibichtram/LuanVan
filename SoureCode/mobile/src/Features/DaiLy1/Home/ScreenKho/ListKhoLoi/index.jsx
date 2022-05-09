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
import daily1Api from "../../../../../api/daily1Api";
import KhoLoi from "../KhoLoi";
import styles from "../style";
import Ionicons from "react-native-vector-icons/Ionicons";
const ListKhoLoiDL1 = (props) => {
  const idDaily1 = props.route.params.idDaily1;
  const {navigation} = props;
  const [listKhoLoi, setListKhoLoi] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const getCCLoi = await daily1Api.dsCongcuHuloi(idDaily1);
      const getVTLoi = await daily1Api.dsVattuHuloi(idDaily1);
      const getNLLoi = await daily1Api.dsNguyenlieuHuloi(idDaily1);
      const getSPLoi = await daily1Api.dsSanphamHuloi(idDaily1);
      setListKhoLoi([...getCCLoi.dscongcuhuloi,...getVTLoi.dsvattuhuloi,...getNLLoi.dsnguyenlieuhuloi,...getSPLoi.dssanphamhuloi]);
      // console.log({ setListKhoLoi: [{...getSPLoi.dssanphamhuloi}]});
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
          renderItem={(item) => <KhoLoi kholoi={item} navigation={navigation} idDaily1={idDaily1} />}
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

export default ListKhoLoiDL1;
