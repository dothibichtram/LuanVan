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


import ScreenDoiMatKhauDL1 from "../../../DaiLy1/CaNhan/ScreenDoiMatKhau";
import TabNavDL1 from "../../../DaiLy1/TabNav";
import DonHangDL1 from "../../../DaiLy1/Home/ScreenDonHang/DonHang";
import FormCCLoiDL1 from "../../../DaiLy1/Home/ScreenKho/CongCu/FormCCLoi";
import ListCongCuDL1 from "../../../DaiLy1/Home/ScreenKho/ListCongCu";
import ListVatTuDL1 from "../../../DaiLy1/Home/ScreenKho/ListVatTu";
import FormVTLoiDL1 from "../../../DaiLy1/Home/ScreenKho/VatTu/FormVTLoi";
import ListNguyenLieuDL1 from "../../../DaiLy1/Home/ScreenKho/ListNguyenLieu";
import FormNLLoiDL1 from "../../../DaiLy1/Home/ScreenKho/NguyenLieu/FormNLLoi";
import ListSanPhamDL1 from "../../../DaiLy1/Home/ScreenKho/ListSanPham";
import ListKhoLoiDL1 from "../../../DaiLy1/Home/ScreenKho/ListKhoLoi";
import ScreenDaiLy2 from "../../../DaiLy1/Home/ScreenDaiLy2"
import FormGiaoHangDL1 from "../../../DaiLy1/Home/ScreenDonHang/FormGiaoHang";
import InfoDaiLy2 from "../../../DaiLy1/Home/ScreenDaiLy2/InfoDaiLy2";
import ScreenHoDan from "../../../DaiLy1/Home/ScreenHoDan";
import InfoHoDan from "../../../DaiLy1/Home/ScreenHoDan/InfoHoDan";
import Test from "../../../DaiLy1/Home/test"
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

        <Stack.Screen name="ScreenDoiMatKhauDL1" component={ScreenDoiMatKhauDL1}/>
        <Stack.Screen name="TabNavDL1" component={TabNavDL1}/>
        <Stack.Screen name="DonHangDL1" component={DonHangDL1}/>
        <Stack.Screen name="ScreenCongCuDL1" component={ListCongCuDL1} />
        <Stack.Screen name="FormCCLoiDL1" component={FormCCLoiDL1}/>
        <Stack.Screen name="ScreenVatTuDL1" component={ListVatTuDL1} />
        <Stack.Screen name="FormVattuLoiDL1" component={FormVTLoiDL1} />
        <Stack.Screen name="ScreenNguyenLieuDL1" component={ListNguyenLieuDL1} />
        <Stack.Screen name="FormNguyenLieuLoiDL1" component={FormNLLoiDL1} />
        <Stack.Screen name="ScreenSanPhamDL1" component={ListSanPhamDL1} />
        <Stack.Screen name="ScreenKhoLoiDL1" component={ListKhoLoiDL1} />
        <Stack.Screen name="ScreenDaiLy2" component={ScreenDaiLy2} />
        <Stack.Screen name="FormGiaoHangDL1" component={FormGiaoHangDL1} />
        <Stack.Screen name="InfoDaiLy2" component={InfoDaiLy2} />
        <Stack.Screen name="ScreenHoDan" component={ScreenHoDan} />
        <Stack.Screen name="InfoHoDan" component={InfoHoDan} />
        <Stack.Screen name="Test" component={Test} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Login;
