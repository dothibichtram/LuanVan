import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useState, useEffect } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import CaNhan from "../CaNhan";
import Home from "../Home";
import ThongBao from "../ThongBao";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import hodanApi from "../../../api/hodanApi";
import daily1Api from "../../../api/daily1Api";
import QRCode from "../Home/ScreenQR";
const Tab = createBottomTabNavigator();
function TabNavDL1(props) {
  const {navigation} = props;
  // console.log(navigation);
  const [soluongdonhangchuaxacnhan, setSoluongdonhangchuaxacnhan] = useState();
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
      //get info daily1
      const dataDaily1 = await daily1Api.getAll();
      //get id Account
      const dataAccount = await AsyncStorage.getItem("user");
      //filter user list was active
      const userListActive = dataDaily1.daily1.filter((item) => item.user);
      const user = userListActive.find((item) => {
        // console.log(item.user.taikhoan);
        return dataAccount.includes(item.user._id);

      });
      setUser(user);
      // console.log(dataAccount);
      const dsdonhang = await daily1Api.dsDonhang(user._id);
      setSoluongdonhangchuaxacnhan(
        dsdonhang.donhang.filter((item) => item.xacnhan === false).length
      );
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
          }
          else if (route.name === "Đơn hàng mới") {
            iconName = focused ? "notifications" : "notifications";
          }
          else if (route.name === "QR") {
            iconName = focused ? "qr-code-outline" : "qr-code-outline";
          }
          // else if (route.name === "Đơn hàng mới") {
          //   iconName = focused ? "notifications" : "notifications";
          // } 
          else if (route.name === "Cá nhân") {
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
        children={() => <Home user={user} navigation={navigation} />}
        options={{ header: () => null }}
      />
       <Tab.Screen
        name="Đơn hàng mới"
        // component={ThongBao}
        children={()=><ThongBao handleCallBackSL={handleCallBackSL}  user={user} navigation={navigation} />}
        options={{
          header: () => null,
          tabBarBadge: soluongdonhangchuaxacnhan && soluongdonhangchuaxacnhan,
        }}
      />
      <Tab.Screen
        name="QR"
        children={() => <QRCode user={user} navigation={navigation} />}
        options={{ header: () => null }}
      />
      {/* <Tab.Screen
        name="Đơn hàng mới"
        // component={ThongBao}
        children={()=><ThongBao handleCallBackSL={handleCallBackSL}  user={user} navigation={navigation} />}
        // options={{
        //   header: () => null,
        //   tabBarBadge: soluongdonhangchuaxacnhan && soluongdonhangchuaxacnhan,
        // }}
      /> */}
      <Tab.Screen
        name="Cá nhân"
        component={CaNhan}
        options={{ header: () => null }}
      />
    </Tab.Navigator>
  );
}

export default TabNavDL1;
