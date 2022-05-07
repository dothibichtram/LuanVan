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
import VatTu from "../VatTu";
import styles from "../style";
import Ionicons from "react-native-vector-icons/Ionicons";
const ListVatTu = (props) => {
  const {navigation} = props;
  const idHodan = props.route.params.idHodan;
  const [listVatTu, setListVatTu] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const getData = await hodanApi.dsVattu(idHodan);
      setListVatTu(getData.dsvattu);
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
        <Text style={{ color: "white", paddingLeft: "25%"}}>Danh sách công cụ</Text>
      </View>
      {listVatTu && (
        <FlatList
          data={listVatTu}
          renderItem={(item) => <VatTu vattu={item}  navigation={navigation} idHodan={idHodan}  />}
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

export default ListVatTu;
