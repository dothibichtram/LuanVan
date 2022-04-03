import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
// import hodanApi from "../../../../api/hodanApi";
import daily1Api from "../../../../api/daily1Api";
// import ListHodan from "./ListHoDan";
import ListHoDan from "./ListHoDan";
import Test from "../test";
function ScreenHoDan(props) {
  const { navigation, daily1Id } = props;
  // console.log(daily1Id);
  const [hodanList, setHodanList] = useState();
  useEffect(() => {
    (async () => {
      const getHodanList = await daily1Api.dsHodanThuocDaily1(daily1Id);
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
              daily1Id={daily1Id}
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
