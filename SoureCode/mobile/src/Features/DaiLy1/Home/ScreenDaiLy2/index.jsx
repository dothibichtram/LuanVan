import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
// import hodanApi from "../../../../api/hodanApi";
import daily1Api from "../../../../api/daily1Api";
import ListDaiLy2 from "./ListDaiLy2";
function ScreenDaiLy2(props) {
  const { navigation, daily1Id } = props;
  // console.log(daily1Id);
  const [daily2List, setDaily2List] = useState();
  useEffect(() => {
    (async () => {
      const getDaily2List = await daily1Api.dsDaily2ThuocDaily1(daily1Id);
      setDaily2List(
        getDaily2List
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
          )}
          keyExtractor={(item) => item._id}
        />
      )}
    </View>
  );
}

export default ScreenDaiLy2;
