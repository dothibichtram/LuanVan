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
import * as Yup from "yup";
import { MaterialDialog } from "react-native-material-dialog";
import daily2Api from "../../../../../../api/daily2Api";
import axiosClient from "../../../../../../api/axiosClient";
function FormCCLoiDL2(props) {
  const {
    route: { params: data },
    route: {
      params: { idDaily2 },
    },
    navigation,
  } = props;
  const [visible, setVisible] = useState(false);
  const getImg = (imgName) => {
    return `${axiosClient.defaults.baseURL}/uploads/${imgName}`;
  }
  const SignupSchema = Yup.object().shape({
    soluongloi: Yup.string().required("Trường này không được để trống"),
  });
  const handleClose = () => {
    setVisible(false);
  };
  const handleOpen = () => {
    setVisible(true);
  };
  const handleSumitForm = async (dataForm) => {
    const sendRequest = await daily2Api.themCongcuHuloi(idDaily2, {
      dsccLoi: [{ ...data, ...dataForm }],
    });
    handleOpen();

    // console.log({ dsccLoi: [{ ...data, ...dataForm }] }, sendRequest);
  };
  return (
    <Formik
      initialValues={{ soluongloi: "" }}
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
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Ionicons name="arrow-back" size={25} color="white" />
            </TouchableOpacity>
            <Text style={{ color: "white", paddingLeft: "25%" }}>Thêm công cụ lỗi</Text>
          </View>
          <View style={styles.containerForm}>
            <ScrollView>
              <View style={styles.centerImg} >
                <Image
                  source={{
                    // uri: `http://10.3.53.160:5000/uploads/${data.congcu.hinhanh}`,
                    uri: `${getImg(data.congcu.hinhanh)}`
                  }}
                  style={{
                    width: Dimensions.get("window").width - 120,
                    height: 180,
                    borderRadius: 15,
                  }}
                />
              </View>
              <Text style={[styles.text]}>Tên công cụ</Text>
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
                defaultValue={data.congcu.ten}
              //   error={errors.soluong}
              //   touched={touched.soluong}
              />

             
              <Text style={styles.text}>Số lượng hư hỏng</Text>
              <TextInput
                style={[
                  styles.textInput,
                  {
                    borderColor: !touched
                      ? "#ccccccf2"
                      : errors.soluongloi
                        ? "#FF5A5F"
                        : "#ccccccf2",
                  },
                ]}
                keyboardType="numeric"
                onChangeText={handleChange("soluongloi")}
                onBlur={handleBlur("soluongloi")}
                value={values.soluongloi}
                error={errors.soluongloi}
                touched={touched.soluongloi}
              />
              {errors.soluongloi && touched.soluongloi ? (
                <>
                  <Text
                    style={{
                      color: !touched
                        ? "#ccccccf2"
                        : errors.soluongloi
                          ? "#FF5A5F"
                          : "#ccccccf2",
                      marginBottom: 10,
                    }}
                  >
                    {errors.soluongloi}
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


            </ScrollView>
          </View>
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
  centerImg: {
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: "center",
  },
  containerForm: {
    // backgroundColor: "white",
    paddingBottom: 10,
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
export default FormCCLoiDL2;
