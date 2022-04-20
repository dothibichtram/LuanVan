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
import ListCongCuDL2ThuocDL1 from "../../../DaiLy1/Home/ScreenDaiLy2/KhoDaiLy2/ListCongCu";
import ListVatTuDL2ThuocDL1 from "../../../DaiLy1/Home/ScreenDaiLy2/KhoDaiLy2/ListVatTu";
import ListNguyenLieuDL2ThuocDL1 from "../../../DaiLy1/Home/ScreenDaiLy2/KhoDaiLy2/ListNguyenLieu";
import ListSanPhamDL2ThuocDL1 from "../../../DaiLy1/Home/ScreenDaiLy2/KhoDaiLy2/ListSanPham";
import DonHangDL2ThuocDL1 from "../../../DaiLy1/Home/ScreenDaiLy2/DonHangDaiLy2/DonHang";
import ScreenDonHangDL2ThuocDL1 from "../../../DaiLy1/Home/ScreenDaiLy2/DonHangDaiLy2";
import ScreenHoDanThuocDL1 from "../../../DaiLy1/Home/ScreenHoDan";
import InfoHoDanThuocDL1 from "../../../DaiLy1/Home/ScreenHoDan/InfoHoDan";
import ListCongCuHDThuocDL1 from "../../../DaiLy1/Home/ScreenHoDan/KhoHoDan/ListCongCu";
import ListVatTuHDThuocDL1 from "../../../DaiLy1/Home/ScreenHoDan/KhoHoDan/ListVatTu";
import ListNguyenLieuHDThuocDL1 from "../../../DaiLy1/Home/ScreenHoDan/KhoHoDan/ListNguyenLieu";
import ListSanPhamHDThuocDL1 from "../../../DaiLy1/Home/ScreenHoDan/KhoHoDan/ListSanPham";
import DonHangHDThuocDL1 from "../../../DaiLy1/Home/ScreenHoDan/DonHangHoDan/DonHang";
import ScreenDonHangHDThuocDL1 from "../../../DaiLy1/Home/ScreenHoDan/DonHangHoDan";

import ScreenDoiMatKhauDL2 from "../../../DaiLy2/CaNhan/ScreenDoiMatKhau";
import TabNavDL2 from "../../../DaiLy2/TabNav";
import DonHangDL2 from "../../../DaiLy2/Home/ScreenDonHang/DonHang";
import FormCCLoiDL2 from "../../../DaiLy2/Home/ScreenKho/CongCu/FormCCLoi";
import ListCongCuDL2 from "../../../DaiLy2/Home/ScreenKho/ListCongCu";
import ListVatTuDL2 from "../../../DaiLy2/Home/ScreenKho/ListVatTu";
import FormVTLoiDL2 from "../../../DaiLy2/Home/ScreenKho/VatTu/FormVTLoi";
import ListNguyenLieuDL2 from "../../../DaiLy2/Home/ScreenKho/ListNguyenLieu";
import FormNLLoiDL2 from "../../../DaiLy2/Home/ScreenKho/NguyenLieu/FormNLLoi";
import ListSanPhamDL2 from "../../../DaiLy2/Home/ScreenKho/ListSanPham";
import ListKhoLoiDL2 from "../../../DaiLy2/Home/ScreenKho/ListKhoLoi";
import FormGiaoHangDL2 from "../../../DaiLy2/Home/ScreenDonHang/FormGiaoHang";
// import ScreenDaiLy2 from "../../../DaiLy2/Home/ScreenDaiLy2"
// import InfoDaiLy2 from "../../../DaiLy2/Home/ScreenDaiLy2/InfoDaiLy2";
import ScreenHoDan from "../../../DaiLy2/Home/ScreenHoDan";
import InfoHoDan from "../../../DaiLy2/Home/ScreenHoDan/InfoHoDan";
import ListCongCuHDThuocDL2 from "../../../DaiLy2/Home/ScreenHoDan/KhoHoDan/ListCongCu";
import ListVatTuHDThuocDL2 from "../../../DaiLy2/Home/ScreenHoDan/KhoHoDan/ListVatTu";
import ListNguyenLieuHDThuocDL2 from "../../../DaiLy2/Home/ScreenHoDan/KhoHoDan/ListNguyenLieu";
import ListSanPhamHDThuocDL2 from "../../../DaiLy2/Home/ScreenHoDan/KhoHoDan/ListSanPham";
import DonHangHDThuocDL2 from "../../../DaiLy2/Home/ScreenHoDan/DonHangHoDan/DonHang";
import ScreenDonHangHDThuocDL2 from "../../../DaiLy2/Home/ScreenHoDan/DonHangHoDan";
import Test from "../../../DaiLy2/Home/test"
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
        <Stack.Screen name="ScreenCongCuDL2ThuocDL1" component={ListCongCuDL2ThuocDL1} />
        <Stack.Screen name="ScreenVatTuDL2ThuocDL1" component={ListVatTuDL2ThuocDL1} />
        <Stack.Screen name="ScreenNguyenLieuDL2ThuocDL1" component={ListNguyenLieuDL2ThuocDL1} />
        <Stack.Screen name="ScreenSanPhamDL2ThuocDL1" component={ListSanPhamDL2ThuocDL1} />
        <Stack.Screen name="DonHangDL2ThuocDL1" component={DonHangDL2ThuocDL1}/>
        <Stack.Screen name="ScreenDonHangDL2ThuocDL1" component={ScreenDonHangDL2ThuocDL1}/>
        <Stack.Screen name="ScreenHoDanThuocDL1" component={ScreenHoDanThuocDL1} />
        <Stack.Screen name="InfoHoDanThuocDL1" component={InfoHoDanThuocDL1} />
        <Stack.Screen name="ScreenCongCuHDThuocDL1" component={ListCongCuHDThuocDL1} />
        <Stack.Screen name="ScreenVatTuHDThuocDL1" component={ListVatTuHDThuocDL1} />
        <Stack.Screen name="ScreenNguyenLieuHDThuocDL1" component={ListNguyenLieuHDThuocDL1} />
        <Stack.Screen name="ScreenSanPhamHDThuocDL1" component={ListSanPhamHDThuocDL1} />
        <Stack.Screen name="DonHangHDThuocDL1" component={DonHangHDThuocDL1}/>
        <Stack.Screen name="ScreenDonHangHDThuocDL1" component={ScreenDonHangHDThuocDL1}/>

        <Stack.Screen name="ScreenDoiMatKhauDL2" component={ScreenDoiMatKhauDL2}/>
        <Stack.Screen name="TabNavDL2" component={TabNavDL2}/>
        <Stack.Screen name="DonHangDL2" component={DonHangDL2}/>
        <Stack.Screen name="ScreenCongCuDL2" component={ListCongCuDL2} />
        <Stack.Screen name="FormCCLoiDL2" component={FormCCLoiDL2}/>
        <Stack.Screen name="ScreenVatTuDL2" component={ListVatTuDL2} />
        <Stack.Screen name="FormVattuLoiDL2" component={FormVTLoiDL2} />
        <Stack.Screen name="ScreenNguyenLieuDL2" component={ListNguyenLieuDL2} />
        <Stack.Screen name="FormNguyenLieuLoiDL2" component={FormNLLoiDL2} />
        <Stack.Screen name="ScreenSanPhamDL2" component={ListSanPhamDL2} />
        <Stack.Screen name="ScreenKhoLoiDL2" component={ListKhoLoiDL2} />
        {/* <Stack.Screen name="ScreenDaiLy2" component={ScreenDaiLy2} /> */}
        <Stack.Screen name="FormGiaoHangDL2" component={FormGiaoHangDL2} />
        {/* <Stack.Screen name="InfoDaiLy2" component={InfoDaiLy2} /> */}
        <Stack.Screen name="ScreenHoDan" component={ScreenHoDan} />
        <Stack.Screen name="InfoHoDan" component={InfoHoDan} />
        <Stack.Screen name="ScreenCongCuHDThuocDL2" component={ListCongCuHDThuocDL2} />
        <Stack.Screen name="ScreenVatTuHDThuocDL2" component={ListVatTuHDThuocDL2} />
        <Stack.Screen name="ScreenNguyenLieuHDThuocDL2" component={ListNguyenLieuHDThuocDL2} />
        <Stack.Screen name="ScreenSanPhamHDThuocDL2" component={ListSanPhamHDThuocDL2} />
        <Stack.Screen name="DonHangHDThuocDL2" component={DonHangHDThuocDL2}/>
        <Stack.Screen name="ScreenDonHangHDThuocDL2" component={ScreenDonHangHDThuocDL2}/>
        <Stack.Screen name="Test" component={Test} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Login;
