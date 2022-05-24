import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, SafeAreaView, TouchableOpacity } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import Ionicons from "react-native-vector-icons/Ionicons";
import { MaterialDialog } from "react-native-material-dialog";
import hodanApi from "../../../../api/hodanApi";
import daily1Api from '../../../../api/daily1Api';
import DonHangDL1 from '../ScreenDonHang/DonHang';
// import apiDonhang from "/../../../../api/apiDonhang";
// import sanphamApi from "/../../../../api/";
function QRCode(props) {
  const { navigation } = props;
  const { data } = props.user;
  const idDaily1 = props.user._id;
  // const idDaily1 = user._id;

  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [idHodan, setIdHodan] = useState("");
  const [idSanpham, setIdSanpham] = useState("");
  const [maDonhang, setMaDonhang] = useState("");
  const [value, setValue] = useState(false);
  const [dsdonhang, setdsDonHang] = useState("");
  const [hodan, setHodan] = useState("");
  const [dssanpham, setdsSanpham] = useState("");
  const [orderList, setOrderList] = useState();
  const [maDH, setMaDH] = useState();
  const [tenSP, setTenSP] = useState();
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');

    })();
  }, []);
  const handleOpen = () => {
    setVisible(true);
  };
  // 
  const handleSumit = async () => {
    const dataForm = {
      idHodan: idHodan,
      idDaily1: idDaily1,
      idSanpham: idSanpham,
      maDonhang: maDonhang,
      idDonHang: maDH[0]._id,
    };
    const sendRequest = await daily1Api.themSanphamHuloi(idDaily1,
      { dsspLoi: [{ ...dataForm, ...data }], }
    );
    console.log({ dsspLoi: [{ ...dataForm, ...data }], }, sendRequest);
    handleOpen();
    // console.log(maDH);
  }


  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    var value = data.split('-');
    var idHodan = value[0];
    var maDonhang = value[1];
    var idSanpham = value[2];
    setIdHodan(value[0]);
    setIdSanpham(value[2]);
    setMaDonhang(value[1]);

    const fetchData = async () => {
      // const getdsSanpham = await daily1Api.dsSanpham(idDaily1);
      // setdsSanpham(
      //   getdsSanpham
      // );
      // const setTenSP =await maDH.dssanpham;
      // setTenSP(
      //   maDH.dssanpham.sanpham.filter((item) => item._id === `${maDonhang}`)
      // );
      const getSP = await daily1Api.dsSanpham(idDaily1);
      setTenSP(getSP.dssanpham.filter((item) => item.ma === `${maDonhang}`)
      );

      const getDataHD = await hodanApi.singleHodan(idHodan);
      setHodan(getDataHD);
      // const getDataDH = await hodanApi.dsDonhang(idHodan);
      // setdsDonHang(getDataDH.dsdonhang);
      const getMaDH = await daily1Api.dsDonhang(idDaily1);
      setMaDH(getMaDH.donhang.filter((item) => item.ma === `${maDonhang}`)
      );
      
      // setMaDH(setMaDH);
    };
    fetchData();
  };
  //  console.log(idDaily1);
 
  // console.log(123);
  console.log('----------------------------------------');

  // console.log(hodan.hodan.daidien);
  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={{ color: "white" }}>Thêm sản phẩm lỗi </Text>
      </View>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={styles.qr}

      />
      <MaterialDialog
        title="Thông báo"
        visible={visible}
        onOk={() => {

          setVisible(false);
        }}
        onCancel={() => {
        
          setVisible(false);
        }}
      >
        <Text style={{ color: "green" }}>Thêm sản phẩm lỗi thành công!</Text>
      </MaterialDialog>

      <View
        style={{

          borderTopColor: "#b3b3b3",
          borderTopWidth: 1,
          justifyContent: "center",
          backgroundColor: "#ffffff",
          width: '100%',
          height: 130,
          alignItems: 'center',
          position: 'absolute', //Here is the trick
          bottom: 0
        }}
      >
        {scanned &&
          <View>
            <View
            style={{
              alignItems: 'center',

            }}>
            <Text>Mã đơn hàng: {maDonhang}</Text>
            {hodan?(<><Text>Hộ dân: {hodan.hodan.daidien}</Text>
            </>):(<><Text>ID Hộ dân: {idHodan}</Text></>)}
            {/* {maDH?(<><Text>Sản phẩm: {maDH[0].dssanpham[0].sanpham.ten}</Text>
            </>):(<><Text>ID sản phẩm: {idSanpham}</Text></>)} */}
            </View>
           
            
            <View
              style={{
                marginTop: 10,
                alignItems: 'center',
                flexDirection: "row",

              }}>
              <Text
                onPress={handleSumit}
                style={{
                  padding: 10,
                  // marginBottom: 15,
                  borderRadius: 10,
                  backgroundColor: "green",
                  width: 100,
                  textAlign: "center",
                  color: "white",
                  marginLeft: 30,
                }}
              >
                Xác nhận
              </Text>
              <Text
                onPress={() => setScanned(false)}
                style={{
                  padding: 10,
                  // marginBottom: 15,
                  borderRadius: 10,
                  backgroundColor: "#326efa",
                  width: 100,
                  textAlign: "center",
                  color: "white",
                  marginLeft: 30,
                }}
              >
                Tải lại
              </Text>
            </View>
          </View>
        }


        {!scanned &&
          <View
            style={{
              marginTop: 10,
              alignItems: 'center',
              flexDirection: "row",

            }}>
            <Text>
              Di chuyển camera đến mã QR để quét
            </Text>
          </View>

        }
      </View>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   flexDirection: 'column',
  //   justifyContent: 'center',
  // },
  container: {
    flex: 1,
    marginTop: 0,
  },
  qr: {
    ...StyleSheet.absoluteFillObject,
    marginTop: 80,
    // color:'black',
  },
  qrAgain: {
    marginTop: 80,
    backgroundColor: 'red',
  },
  headerContainer: {
    backgroundColor: "#4AAE4A",
    paddingTop: 40,
    paddingBottom: 20,
    alignItems: "center",
  },
  appBarStyle: {
    flexDirection: "row",
    backgroundColor: "#4AAE4A",
    // paddingVertical: 10, 
    paddingBottom: 20,
    paddingTop: 40,
    paddingHorizontal: 15,
    alignItems: "center",
    position: 'absolute',
    top: 0,
    width: '100%',
    // justifyContent: "space",
  },
});

export default QRCode;
