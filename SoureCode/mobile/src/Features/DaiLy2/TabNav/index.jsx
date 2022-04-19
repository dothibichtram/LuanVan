import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useState, useEffect } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import CaNhan from "../CaNhan";
import Home from "../Home";
import ThongBao from "../ThongBao";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import hodanApi from "../../../api/hodanApi";
import daily2Api from "../../../api/daily2Api";
const Tab = createBottomTabNavigator();
function TabNavDL2(props) {
  const {navigation} = props;
  // const [soluongdonhangchuaxacnhan, setSoluongdonhangchuaxacnhan] = useState();
  //call back number order don't confirm
  const [callback, setCallBack] = useState(false);
  const [user, setUser] = useState();
  const handleCallBackSL = (data)=>{
    if(data)
    {
      // console.log(data);
      setCallBack(!callback);
    }
  }
  useEffect(() => {
    (async () => {
      //get info daily2
      const datadaily2 = await daily2Api.getAll();
      //get id Account
      const dataAccount = await AsyncStorage.getItem("user");
      //filter user list was active
      const userListActive = datadaily2.daily2.filter((item) => item.user);
      const user = userListActive.find((item) => {
        // console.log(item.user.taikhoan);
        return dataAccount.includes(item.user._id);

      });
      setUser(user);
      // console.log(dataAccount);
      const dsdonhang = await daily2Api.dsDonhang(user._id);
      // setSoluongdonhangchuaxacnhan(
      //   dsdonhang.dsdonhang.filter((item) => item.xacnhan === false).length
      // );
    // console.log(user);

    })();
  }, [callback]);
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Trang chủ") {
            iconName = focused ? "home" : "home";
          } else if (route.name === "Đơn hàng mới") {
            iconName = focused ? "notifications" : "notifications";
          } else if (route.name === "Cá nhân") {
            iconName = focused ? "person" : "person";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "green",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="Trang chủ"
        children={()=><Home user={user} navigation={navigation}  />}
        options={{ header: () => null }}
      />
      <Tab.Screen
        name="Đơn hàng mới"
        // component={ThongBao}
        children={()=><ThongBao handleCallBackSL={handleCallBackSL}  user={user} navigation={navigation} />}
        // options={{
        //   header: () => null,
        //   tabBarBadge: soluongdonhangchuaxacnhan && soluongdonhangchuaxacnhan,
        // }}
      />
      <Tab.Screen
        name="Cá nhân"
        component={CaNhan}
        options={{ header: () => null }}
      />
    </Tab.Navigator>
  );
}

export default TabNavDL2;
