import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
// import hodanApi from "../../../../api/hodanApi";
import daily2Api from "../../../../api/daily2Api";
// import ListHodan from "./ListHoDan";
import ListHoDan from "./ListHoDan";
import Test from "../test";
function ScreenHoDan(props) {
  const { navigation, daily2Id } = props;
  // console.log(daily2Id);
  const [hodanList, setHodanList] = useState();
  useEffect(() => {
    (async () => {
      const getHodanList = await daily2Api.dsHodanThuocdaily2(daily2Id);
      setHodanList(
        getHodanList
      );
    })();
  }, []);
  // console.log(hodanList);

  return (
    <View>
      {hodanList && (
        <FlatList
          data={hodanList.hodan}
          renderItem={(item, index) => (
            <ListHoDan
              dataList={item}
              navigation={navigation}
              daily2Id={daily2Id}
            />
            // <Test/>
          )}
          keyExtractor={(item) => item._id}
        />
      )}
    </View>
  );
}

export default ScreenHoDan;
