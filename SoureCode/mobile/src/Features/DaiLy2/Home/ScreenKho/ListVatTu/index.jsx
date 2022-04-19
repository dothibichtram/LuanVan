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
import VatTu from "../VatTu";
import daily2Api from "../../../../../api/daily2Api";
import styles from "../style";
import Ionicons from "react-native-vector-icons/Ionicons";
const ListVatTuDL2 = (props) => {
  const {navigation} = props;
  const idDaily2 = props.route.params.idDaily2;
  const [listVatTu, setListVatTu] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const getData = await daily2Api.dsVattu(idDaily2);
      setListVatTu(getData.dsvattu);
    };
    fetchData();
  }, []);
  console.log(listVatTu);
 
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
        <Text style={{ color: "white", paddingLeft: "25%"}}>Danh sách vật tư</Text>
      </View>
      {listVatTu && (
        <FlatList
          data={listVatTu}
          renderItem={(item) => <VatTu vattu={item}  navigation={navigation} idDaily2={idDaily2}  />}
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
    // backgroundColor: "#e65c00",
    backgroundColor: "#4AAE4A",
    paddingTop: 15,
    paddingBottom: 15,
    alignItems: "center",
  },
});

export default ListVatTuDL2;
