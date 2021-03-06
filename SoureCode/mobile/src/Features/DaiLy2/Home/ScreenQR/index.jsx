import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, SafeAreaView, TouchableOpacity } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import Ionicons from "react-native-vector-icons/Ionicons";
import { MaterialDialog } from "react-native-material-dialog";
import hodanApi from "../../../../api/hodanApi";
import daily2Api from '../../../../api/daily2Api';
import DonHangDL2 from '../ScreenDonHang/DonHang';
// import apiDonhang from "/../../../../api/apiDonhang";
// import sanphamApi from "/../../../../api/";
function QRCode(props) {
  const { navigation } = props;
  const { data } = props.user;
  const idDaily2 = props.user._id;
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
  // const handleSumit = async () => {
  //   const dataForm = {
  //     idHodan: idHodan,
  //     idDaily1: idDaily1,
  //     idSanpham: idSanpham,
  //     maDonhang: maDonhang
  //   };
  //   const sendRequest = await daily1Api.themSanphamHuloi(idDaily1, {
  //     dsspLoi: [{ ...data, ...dataForm }],
  //   });
  //   // const sendRequest = await daily1Api.themSanphamHuloi(idDaily1, {
  //   //   dsspLoi: [{ ...dssanpham, ...data }],
  //   // });
  //   console.log('----------------------------------------');
  //   // console.log({ dsspLoi: [{ ...dssanpham, ...dataForm }]},sendRequest );
  //   // dssanpham.push({ dsspLoi: [{ ...dssanpham, ...dataForm }]});
  //   // setScanned(false);
  // };

  const handleSumit = async () => {
    const dataForm = {
      idHodan: idHodan,
      idDaily2: idDaily2,
      idSanpham: idSanpham,
      maDonhang: maDonhang,
      idDonHang: maDH[0]._id,
    };
    const sendRequest = await daily2Api.themSanphamHuloi(idDaily2,
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
      //   maDH.dssanpham.sanpham.filter((item) => item._id === idSanpham)
      // );

      const getDataHD = await hodanApi.singleHodan(idHodan);
      setHodan(getDataHD);
      // const getDataDH = await hodanApi.dsDonhang(idHodan);
      // setdsDonHang(getDataDH.dsdonhang);
      const getMaDH = await daily2Api.dsDonhang(idDaily2);
      setMaDH(getMaDH.donhang.filter((item) => item.ma === `${maDonhang}`)
      );

      // setMaDH(setMaDH);
    };
    fetchData();

  };
  //  console.log(idDaily1);
  // console.log(maDH);
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
        <Text style={{ color: "white" }}>Th??m s???n ph???m l???i </Text>
      </View>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={styles.qr}

      />
      <MaterialDialog
        title="Th??ng b??o"
        visible={visible}
        onOk={() => {

          setVisible(false);
        }}
        onCancel={() => {
          setVisible(false);
        }}
      >
        <Text style={{ color: "green" }}>Th??m th??nh c??ng!</Text>
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
            <Text>M?? ????n h??ng: {maDonhang}</Text>
            {hodan?(<><Text>H??? d??n: {hodan.hodan.daidien}</Text>
            </>):(<><Text>ID H??? d??n: {idHodan}</Text></>)}
            {/* {maDH?(<><Text>S???n ph???m: {maDH[0].dssanpham[0].sanpham.ten}</Text>
            </>):(<><Text>ID s???n ph???m: {idSanpham}</Text></>)} */}
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
                X??c nh???n
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
                T???i l???i
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
              Di chuy???n camera ?????n m?? QR ????? qu??t
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
