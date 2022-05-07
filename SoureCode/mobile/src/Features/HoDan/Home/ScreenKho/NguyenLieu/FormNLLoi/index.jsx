import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  Image,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Formik, ErrorMessage, Field } from "formik";
import Ionicons from "react-native-vector-icons/Ionicons";
import hodanApi from "../../../../../../api/hodanApi";
import * as Yup from "yup";
import { MaterialDialog } from "react-native-material-dialog";
import axiosClient from "../../../../../../api/axiosClient";
function FormNLLoiHD(props) {
  const {
    route: { params: data },
    route: {
      params: { idHodan },
    },
    navigation,
  } = props;
  // console.log(props, idHodan);
  const [visible, setVisible] = useState(false);
  const getImg = (imgName) => {
    return `${axiosClient.defaults.baseURL}/uploads/${imgName}`;
  }
  const SignupSchema = Yup.object().shape({
    khoiluongloi: Yup.string().required("Trường này không được để trống"),
  });
  const handleClose = () => {
    setVisible(false);
  };
  const handleOpen = () => {
    setVisible(true);
  };
  const handleSumitForm = async (dataForm) => {
    const sendRequest = await hodanApi.themNguyenlieuHuloi(idHodan, {
      dsnglLoi: [{ ...data, ...dataForm }],
    });
    handleOpen();
  // console.log([{ ...data, ...dataForm }]);

  };

  return (
    <Formik
      initialValues={{ khoiluongloi: "" }}
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
        <View style={styles.container}>
        <View style={styles.headerContainer}>
            <Text style={{ color: "white" }}>Thông tin nguyên liệu lỗi</Text>
          </View>

         <View style={styles.containerForm}>
            <ScrollView>
              <View style={styles.centerImg} >
                <Image
                  source={{
                    uri: `${getImg(data.nguyenlieu.hinhanh)}`
                  }}
                  style={{
                    width: Dimensions.get("window").width - 220,
                    height: 150,
                    borderRadius: 15,
                  }}
                />
              </View>
              <Text style={[styles.text]}>Tên nguyên liệu</Text>
              <TextInput
                style={[
                  styles.textInput,
                  {
                    borderColor: !touched
                      ? "#ccccccf2"
                      : errors.tencc
                      ? "#FF5A5F"
                      : "#ccccccf2",
                  },
                ]}
                editable={false}
                onChangeText={handleChange("tencc")}
                onBlur={handleBlur("tencc")}
                //   value={values.soluong}
                defaultValue={data.nguyenlieu.ten}
                //   error={errors.soluong}
                //   touched={touched.soluong}
              />
              <Text style={styles.text}>Khối lượng hư hỏng</Text>
              <TextInput
                style={[
                  styles.textInput,
                  {
                    borderColor: !touched
                      ? "#ccccccf2"
                      : errors.khoiluongloi
                      ? "#FF5A5F"
                      : "#ccccccf2",
                  },
                ]}
                keyboardType="numeric"
                onChangeText={handleChange("khoiluongloi")}
                onBlur={handleBlur("khoiluongloi")}
                value={values.khoiluongloi}
                error={errors.khoiluongloi}
                touched={touched.khoiluongloi}
              />
              {errors.khoiluongloi && touched.khoiluongloi ? (
                <>
                  <Text
                    style={{
                      color: !touched
                        ? "#ccccccf2"
                        : errors.khoiluongloi
                        ? "#FF5A5F"
                        : "#ccccccf2",
                      marginBottom: 10,
                    }}
                  >
                    {errors.khoiluongloi}
                  </Text>
                </>
              ) : null}
              <MaterialDialog
                title="Thông báo"
                visible={visible}
                onOk={() => {
                  navigation.goBack();

                  setVisible(false);
                }}
                onCancel={() => {
                  navigation.goBack();
                  setVisible(false);
                }}
              >
                <Text style={{ color: "green" }}>Xác nhận thành công!</Text>
              </MaterialDialog>

              <View>
                <Image
                  source={{
                    uri: `http://10.3.53.160:5000/uploads/${data.nguyenlieu.hinhanh}`,
                  }}
                  style={{
                    width: Dimensions.get("window").width - 220,
                    height: 150,
                    borderRadius: 20,
                  }}
                />
              </View>
            </ScrollView>
          </View>
          <View
            style={{
              flexDirection: "row",
              // // marginTop: 150,
              // paddingTop: 10,
              borderTopColor: "#b3b3b3",
              borderTopWidth: 1,
              justifyContent: "center",
              backgroundColor: "#ffffff",
              // height: 100,
              width: '100%',
              height: 80,
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute', //Here is the trick
              bottom: 0
            }}
          >
            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderColor: 'green',
                alignItems: 'center',
                justifyContent: 'center',
                width: 55,
                height: 55,
                backgroundColor: '#fff',
                borderRadius: 50,
              }}
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Ionicons name="arrow-back" size={30} color="green" />
              </TouchableOpacity>
            <Text
              onPress={handleSubmit}
              style={{
                padding: 10,
                // marginBottom: 15,
                borderRadius: 10,
                // backgroundColor: "#0000e6",
                backgroundColor: "green",
                width: 200,
                textAlign: "center",
                color: "white",
                marginLeft: 30,
              }}
            >
              Xác nhận
            </Text>
          </View>
        </View>
      )}
    </Formik>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
  },
  headerContainer: {
    backgroundColor: "#4AAE4A",
    paddingTop: 40,
    paddingBottom: 20,
    alignItems: "center",
  },
  centerImg: {
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: "center",
  },
  containerForm: {
    // backgroundColor: "white",
    paddingBottom: 40,
    paddingLeft: 40,
    paddingTop: 10,
    paddingRight: 30,
    borderRadius: 10,
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
    // width: 8,
    color: "black",
  },
});
export default FormNLLoiHD;
