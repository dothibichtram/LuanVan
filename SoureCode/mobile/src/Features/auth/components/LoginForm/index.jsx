import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  ScrollView,
  Alert,
} from "react-native";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { loginUser } from "../../userSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import userApi from "../../../../api/userApi";
import { MaterialDialog } from "react-native-material-dialog";
const SignupSchema = Yup.object().shape({
  taikhoan: Yup.string().required("Tài khoản chưa hợp lệ "),
  matkhau: Yup.string().required("Mật khẩu chưa hợp lệ"),
});

function LoginForm(props) {
  const { navigation } = props;
  const dispatch = useDispatch();
  const [check, setCheck] = useState();
  const [visible, setVisible] = useState(false);
  // useEffect(() => {
  //   const getData = async () => {
  //     const dataApi = await userApi.getAll();
  //     setCheck(dataApi);
  //   };
  //   getData();
  // }, []);
  const handleClose = () => {
    setVisible(false);
  };
  const handleOpen = () => {
    setVisible(true);
  };
  const handleSumitLogin = async (values) => {
    // console.log(check);

    try {
      const dataForm ={
        taikhoan : values.taikhoan.toLowerCase(),
        matkhau : values.matkhau,
      }
      const action = loginUser(dataForm);
      const resultAction = await dispatch(action);
      const vaitro = resultAction.payload.vaitro;
      unwrapResult(resultAction);
      // const getData2 = await AsyncStorage.getItem("user");
      // console.log(vaitro);
      values.taikhoan = "";
      values.matkhau = "";
      switch(vaitro) {
        case "daily1": {
          return(navigation.navigate("TabNavDL1"));
        }
        case "daily2": {
          return(navigation.navigate("TabNavDL2"));
        }
        default: {
          return (navigation.navigate("TabNavHD"));
        }

      }
      // navigation.navigate("TabNav");
    } catch (error) {
      handleOpen();
    }
  };
  return (
    //<ScrollView>
      <View style={styles.container}>
        <MaterialDialog
          title="Cảnh báo"
          visible={visible}
          onOk={() => {
            setVisible(false);
          }}
          onCancel={() => {
            setVisible(false);
          }}
        >
          <Text>
            Bạn đã nhập sai tài khoản hoặc mật khẩu, vui lòng xem lại thông tin !
          </Text>
        </MaterialDialog>

        <Formik
          initialValues={{ matkhau: "", taikhoan: "" }}
          onSubmit={handleSumitLogin}
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
              <View style={styles.containerImg}>
                <Image
                  style={styles.img}
                  source={require("../../../../../assets/logo.png")}
                />
              </View>
              <Text style={[styles.text]}>TÀI KHOẢN</Text>
              <TextInput
                style={[
                  styles.textInput,
                  {
                    borderColor: !touched
                      ? "#ccccccf2"
                      : errors.taikhoan
                      ? "#FF5A5F"
                      : "#ccccccf2",
                  },
                ]}
                onChangeText={handleChange("taikhoan")}
                onBlur={handleBlur("taikhoan")}
                value={values.taikhoan}
                error={errors.taikhoan}
                touched={touched.taikhoan}
              />
              {errors.taikhoan && touched.taikhoan ? (
                <>
                  <Text
                    style={{
                      color: !touched
                        ? "#ccccccf2"
                        : errors.taikhoan
                        ? "#FF5A5F"
                        : "#ccccccf2",
                      marginBottom: 5,
                    }}
                  >
                    {errors.taikhoan}
                  </Text>
                </>
              ) : null}
              <Text style={styles.text}>MẬT KHẨU</Text>
              <TextInput
                style={[
                  styles.textInput,
                  {
                    borderColor: !touched
                      ? "#ccccccf2"
                      : errors.matkhau
                      ? "#FF5A5F"
                      : "#ccccccf2",
                  },
                ]}
                onChangeText={handleChange("matkhau")}
                onBlur={handleBlur("matkhau")}
                value={values.matkhau}
                error={errors.matkhau}
                touched={touched.matkhau}
                secureTextEntry={true}
              />
              {errors.matkhau && touched.matkhau ? (
                <>
                  <Text
                    style={{
                      color: !touched
                        ? "#ccccccf2"
                        : errors.matkhau
                        ? "#FF5A5F"
                        : "#ccccccf2",
                      marginBottom: 5,
                    }}
                  >
                    {errors.matkhau}
                  </Text>
                </>
              ) : null}
              {/* <Button onPress={handleSubmit} title="Đăng nhập"/> */}
              <Text style={styles.button} onPress={handleSubmit}>
                ĐĂNG NHẬP
              </Text>
            </View>
          )}
        </Formik>
      </View>
   // </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: 10,
    backgroundColor: "#B0D578",
    // backgroundColor:"#b35900",
    alignItems: "center",
    paddingTop: '25%',
    height: '100%',
    // paddingBottom: 230,
  },
  containerForm: {
    // paddingTop: '30%',
    // minHeight: '60%',
    backgroundColor: "white",
    paddingHorizontal: 40,
    paddingVertical: 30,
    borderRadius: 15,
  },
  text: {
    color: "black",
  },
  textInput: {
    height: 40,
    marginBottom: 10,
    marginTop: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    // borderColor: "#ccccccf2",
    width: 200,
    color: "black",
  },
  img: {
    width: 100,
  },
  containerImg: {
    paddingBottom: 10,
    justifyContent: 'center',
    marginLeft: 50,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    backgroundColor:"#4AAE4A",
    textAlign: "center",
    color: "white",
    marginTop: 20,
  },
});

export default LoginForm;
