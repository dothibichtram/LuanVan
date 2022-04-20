import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
// import daily2Api from "../../../../api/daily2Api";
import daily1Api from "../../../../api/daily1Api";
// import Listdaily2 from "./Listdaily2";
import ListDaiLy2 from "./ListDaiLy2";
function ScreenDaily2ThuocDL1(props) {
  const { navigation, daily1Id } = props;
  // console.log(daily1Id);
  const [daily2List, setDaily2List] = useState();
  useEffect(() => {
    (async () => {
      const getdaily2List = await daily1Api.dsDaily2ThuocDaily1(daily1Id);
      setDaily2List(
        getdaily2List
      );
    })();
  }, []);
  // console.log(daily2List);

  return (
    <View>
      {daily2List && (
        <FlatList
          data={daily2List.daily2}
          renderItem={(item, index) => (
            <ListDaiLy2
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

export default ScreenDaily2ThuocDL1;
