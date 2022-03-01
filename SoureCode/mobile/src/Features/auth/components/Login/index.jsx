import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import SrceenDoiMatKhauHD from "../../../HoDan/CaNhan/ScreenDoiMatKhau";
import FormCCLoiHD from "../../../HoDan/Home/ScreenKho/CongCu/FormCCLoi";
import FormNLLoiHD from "../../../HoDan/Home/ScreenKho/NguyenLieu/FormNLLoi";
import FormVTLoiHD from "../../../HoDan/Home/ScreenKho/VatTu/FormVTLoi";
import ListKhoLoiHD from "../../../HoDan/Home/ScreenKho/ListKhoLoi";
import ListSanPhamHD from "../../../HoDan/Home/ScreenKho/ListSanPham";
import FormGiaoHangHD from "../../../HoDan/Home/ScreenDonHang/FormGiaoHang";
import ListCongCuHD from "../../../HoDan/Home/ScreenKho/ListCongCu";
import ListVatTuHD from "../../../HoDan/Home/ScreenKho/ListVatTu";
import ListNguyenLieuHD from "../../../HoDan/Home/ScreenKho/ListNguyenLieu";
import BCTienDoHD from "../../../HoDan/Home/ScreenTienDo/BCTienDo";
import TabNavHD from "../../../HoDan/TabNav";
import LoginForm from "../LoginForm"
import DonHangHD from "../../../HoDan/Home/ScreenDonHang/DonHang";
import Test from "../../../test";

import ScreenDoiMatKhauDL1 from "../../../DaiLy1/CaNhan/ScreenDoiMatKhau";
import TabNavDL1 from "../../../DaiLy1/TabNav";
// import Test from "../../../Test";
function Login(props) {
  const Stack = createNativeStackNavigator();
  return (
    // <LoginForm onSubmit={handleLoginSubmit} />
    <NavigationContainer>
      <Stack.Navigator screenOptions={{header : ()=> null}}>
        <Stack.Screen
          name="Login"
          component={LoginForm}
          options={{ header: () => null}}
        />
        <Stack.Screen name="TabNavHD" component={TabNavHD} />
        <Stack.Screen name="BCTienDoHD" component={BCTienDoHD} />
        <Stack.Screen name="ScreenCongCuHD" component={ListCongCuHD} />
        <Stack.Screen name="FormCongCuLoiHD" component={FormCCLoiHD} />
        <Stack.Screen name="ScreenVatTuHD" component={ListVatTuHD} />
        <Stack.Screen name="FormVattuLoiHD" component={FormVTLoiHD} />
        <Stack.Screen name="ScreenNguyenLieuHD" component={ListNguyenLieuHD} />
        <Stack.Screen name="FormNguyenLieuLoiHD" component={FormNLLoiHD} />
        <Stack.Screen name="ScreenKhoLoiHD" component={ListKhoLoiHD} />
        <Stack.Screen name="ScreenSanPhamHD" component={ListSanPhamHD} />
        <Stack.Screen name="DonHangHD" component={DonHangHD} />
        <Stack.Screen name="FormGiaoHangHD" component={FormGiaoHangHD} />
        <Stack.Screen name="ScreenDoiMatKhauHD" component={SrceenDoiMatKhauHD} />
        <Stack.Screen name="Test" component={Test} />

        <Stack.Screen name="ScreenDoiMatKhauDL1" component={ScreenDoiMatKhauDL1}/>
        <Stack.Screen name="TabNavDL1" component={TabNavDL1}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Login;
