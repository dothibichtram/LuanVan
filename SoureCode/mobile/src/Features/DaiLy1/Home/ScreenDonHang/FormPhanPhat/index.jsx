import React, { useState, useEffect } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  Alert,
  Platform,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Picker } from '@react-native-picker/picker';
import { StatusBar } from "expo-status-bar";
import { Formik, ErrorMessage, Field } from "formik";
import Ionicons from "react-native-vector-icons/Ionicons";
import * as ImagePicker from "expo-image-picker";
import * as Yup from "yup";
import apiTiendo from "../../../../../api/apiTiendo";
import { MaterialDialog } from "react-native-material-dialog";
// import hodanApi from "../../../../api/hodanApi";
import daily1Api from "../../../../../api/daily1Api";
import apiDonhang from "../../../../../api/apiDonhang";
import apiGiaoHang from "../../../../../api/apiGiaohang"
import apiGiaohang from "../../../../../api/apiGiaohang"
function FormPhanPhatDL1(props) {
  const { navigation } = props;
  const data = props.route.params.data;
  const daily2 = props.route.params.daily2;
  const daily1Id = props.route.params.idDaily1;
  const donhangId = props.route.params.idDonhang;

  // console.log(props);
  const SignupSchema = Yup.object().shape({
    soluong: Yup.string().required("Số lượng không được để trống "),
  });
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const [orderList, setOrderList] = useState();
  const [selectedMaDH, setSelectedMaDH] = useState();
  const [selectedMaSP, setSelectedMaSP] = useState();
  const [selectedMaDL2, setSelectedMaDL2] = useState();
  const [orderNoComplete, setOrderNoComplete] = useState();
  let checkUndifined = false;
  useEffect(() => {
    (async () => {
      setSelectedMaDH(data.ma);
      setSelectedMaSP(data.dssanpham[0].sanpham.ma);
      setSelectedMaDL2(daily2.daily2[0]._id);
      //custom file img
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);
  // console.log(data);
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };
  const thoigianValue = `${date.getDate()}/${date.getMonth() + 1
    }/${date.getFullYear()}`;

  // const [image, setImage] = useState(null);
  // const pickImage = async () => {
  //   let result = await ImagePicker.launchImageLibraryAsync({
  //     mediaTypes: ImagePicker.MediaTypeOptions.All,
  //     allowsEditing: true,
  //     aspect: [4, 3],
  //     quality: 1,
  //   });

  //   // console.log(result);

  //   if (!result.cancelled) {
  //     setImage(result.uri);
  //   }
  // };

  const handleClose = () => {
    setVisible(false);
  };
  const handleOpen = () => {
    setVisible(true);
  };
  const handleClose2 = () => {
    setVisible2(false);
  };
  const handleOpen2 = () => {
    setVisible2(true);
  };
  const handleClose3 = () => {
    setVisible3(false);
  };
  const handleOpen3 = () => {
    setVisible3(true);
  };

  const handleSumitForm = async (values) => {
    try {

      let dsdonhang = [];
      const sanphamId = data.dssanpham.find(
        (sp) => sp.sanpham.ma === selectedMaSP
      ).sanpham._id;
      //kiem tra so luong hoan thanh cua san pham
      const checkSanPham = data.dssanpham.find(
        (item) => item.sanpham._id === sanphamId
      );

      if (checkSanPham.soluong == parseInt(values.soluong)) {
        // const sanphamId = data.dssanpham.find(
        //   (sp) => sp.sanpham.ma === selectedMaSP
        // ).sanpham._id;
        // //kiem tra so luong hoan thanh cua san pham
        // const checkSanPham = data.dssanpham.find(
        //   (item) => item.sanpham._id === sanphamId
        // );
        // checkSanPham.soluong == parseInt(values.soluong)
        // {

          let dl = {
            ma: data.ma,
            dssanpham: [
              { sanpham: sanphamId, soluong: parseInt(values.soluong),  soluonghoanthanh: 0 },
            ],
            tongsanpham: data.tongsanpham,
            dscongcu: data.dscongcu.map((item) => ({
              congcu: item.congcu._id,
              soluong: item.soluong,
            })),
            tongcongcu: data.tongcongcu,
            dsvattu: data.dsvattu.map((item) => ({
              vattu: item.vattu._id,
              soluong: item.soluong,
            })),
            tongvattu: data.tongvattu,
            dsnguyenlieu: data.dsnguyenlieu.map((item) => ({
              nguyenlieu: item.nguyenlieu._id,
              khoiluong: item.khoiluong,
            })),
            tongnguyenlieu: data.tongnguyenlieu,
            tongdongia: data.tongdongia,
            from: {
              daily1: daily1Id,
            },
            to: {
              daily2: selectedMaDL2,
            },
          }
          dsdonhang.push(dl);
          const dataForm = {
            
            donhangId: data._id,
            daily1Id: daily1Id,
            daily2Id: selectedMaDL2,
            dsdonhang,
          };
          // console.log(dataForm, );
          const sendRequest = await apiDonhang.daily1ToDaily2(dataForm);

          console.log(dataForm, sendRequest );
          handleOpen();
        // }
      }
      else {
        handleOpen2();
      }
    } catch (error) { }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Ionicons name="arrow-back" size={25} color="white" />
        </TouchableOpacity>
        <Text style={{ color: "white", paddingLeft: "25%" }}>Phân phát đơn hàng</Text>
      </View>
      <MaterialDialog
        title="Thông báo"
        visible={visible2}
        onOk={() => {
          setVisible2(false);
        }}
        onCancel={() => {
          setVisible2(false);
        }}
      >
        <Text style={{ color: 'orange' }}>Tổng số lượng phân phát chưa đạt!</Text>
      </MaterialDialog>
      <MaterialDialog
        visible={visible}
        onOk={() => {
          setVisible(false);
          navigation.navigate("TabNavDL1");
        }}
        onCancel={() => {
          setVisible(false);
          navigation.navigate("TabNavDL1");
        }}
      >
        <Text style={{ color: "green" }}>Đã phân phát thành công !</Text>
      </MaterialDialog>
      {/* <MaterialDialog
        title="Thông báo"
        visible={visible}
        onOk={() => {
          setVisible2(false);
        }}
        onCancel={() => {
          setVisible2(false);
        }}
      >
        <Text style={{ color: "#ff5500" }}>
          Số lượng giao hàng không hợp lệ! Vui lòng kiểm tra lại số lượng hoàn thành!
        </Text>
      </MaterialDialog> */}
      <SafeAreaView>
        <ScrollView>
          {data && (
            <Formik
              initialValues={{ soluong: "" }}
              onSubmit={handleSumitForm}
              validationSchema={SignupSchema}
            >
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                touched,
              }) => (
                <View style={styles.containerForm}>
                  <Text style={[styles.text]}>Mã đơn hàng</Text>
                  <View
                    style={{
                      marginBottom: 12,
                      marginTop: 12,
                      borderWidth: 1,

                      borderRadius: 10,
                      width: 300,
                      color: "black",
                      borderColor: "#ccccccf2",
                    }}
                  >
                    <Picker
                      selectedValue={selectedMaDH}
                      onValueChange={(itemValue, itemIndex) =>
                        setSelectedMaDH(itemValue)
                      }
                    >
                      {data && (
                        <Picker.Item
                          label={data.ma}
                          value={data.ma}
                          key={data._id}
                        />
                      )}
                    </Picker>
                  </View>
                  <Text style={[styles.text]}>Đại lý cấp 2</Text>
                  <View
                    style={{
                      marginBottom: 12,
                      marginTop: 12,
                      borderWidth: 1,
                      borderRadius: 10,
                      width: 300,
                      color: "black",
                      borderColor: "#ccccccf2",
                    }}
                  >
                    <Picker
                      selectedValue={selectedMaDL2}
                      onValueChange={(itemValue, itemIndex) =>
                        setSelectedMaDL2(itemValue)
                      }
                    >
                      {daily2.daily2.map((item) => (
                        <Picker.Item
                          label={item.ten}
                          value={item._id}
                          key={item._id}
                        />
                      ))}
                    </Picker>
                  </View>
                  {data.dssanpham.map((item, index) => (
                    <>
                      <View key={item._id}>
                        <Text>
                          <Ionicons name="leaf-outline" size={20} color="green" />
                          {/* Tên sản phẩm :  */}
                          {item.sanpham.ten}
                        </Text>
                        <Text style={styles.text}>Số lượng /{item.soluong}</Text>
                        <TextInput
                          style={[
                            styles.textInput,
                            {
                              borderColor: !touched
                                ? "#ccccccf2"
                                : errors.soluong
                                  ? "#FF5A5F"
                                  : "#ccccccf2",
                            },
                          ]}
                          keyboardType="numeric"
                          onChangeText={handleChange("soluong")}
                          onBlur={handleBlur("soluong")}
                          value={index}
                          error={errors.soluong}
                          touched={touched.soluong}
                          label={values.soluong}
                          key={index}

                        />
                        <Text>{values.soluong.index}</Text>
                        {errors.soluong && touched.soluong ? (
                          <>
                            <Text
                              style={{
                                color: !touched
                                  ? "#ccccccf2"
                                  : errors.soluong
                                    ? "#FF5A5F"
                                    : "#ccccccf2",
                                marginBottom: 5,
                              }}
                            >
                              {errors.soluong}
                            </Text>
                          </>
                        ) : null}
                      </View>
                    </>
                  ))
                  }

                  <View
                    style={{
                      justifyContent: "center",
                      width: '100%',
                      height: 80,
                      justifyContent: 'center',
                      alignItems: 'center',
                      // position: 'absolute', //Here is the trick
                      bottom: 0,
                    }}
                  >

                    <Text
                      onPress={handleSubmit}
                      style={{
                        padding: 10,
                        // marginBottom: 15,
                        borderRadius: 10,
                        // backgroundColor: "#0000e6",
                        backgroundColor: "green",
                        width: 150,
                        textAlign: "center",
                        color: "white",
                        alignItems: "center",
                      }}
                    >
                      Xác nhận
                    </Text>
                  </View>
                </View>
              )}
            </Formik>
          )}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
  },
  headerContainer: {
    flexDirection: "row",
    backgroundColor: "#4AAE4A",
    // paddingVertical: 10, 
    paddingBottom: 20,
    paddingTop: 40,
    paddingHorizontal: 15,
    alignItems: "center",
    // justifyContent: "space",
  },

  containerForm: {
    backgroundColor: "white",
    paddingBottom: 40,
    paddingLeft: 40,
    paddingTop: 10,
    paddingRight: 30,
    borderRadius: 10,
    marginBottom: 100,
  },
  text: {
    color: "black",
  },
  textInput: {
    height: 40,
    marginBottom: 12,
    marginTop: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    width: 300,
    color: "black",
  },
  textInputTime: {
    height: 40,
    marginBottom: 12,
    marginLeft: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    width: 190,
    color: "black",
  },
  textInputImg: {
    height: 200,
    marginBottom: 12,
    marginTop: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    width: 300,
    color: "black",
  },
  img: {
    width: 100,
  },
  containerImg: {
    paddingBottom: 20,
    marginLeft: 50,
  },
});
export default FormPhanPhatDL1;
