import React, { useEffect, useRef, useState } from "react";
import Header from "../../components/Header";
import { toast } from "react-toastify";
import MenuItem from "@mui/material/MenuItem";
import BackdropMaterial from "../../components/BackdropMaterial";
import apiDonhang from "../../axios/apiDonhang";
import { useSelector } from "react-redux";
import TableSanphamDonhang from "./tables/TableSanphamDonhang";
import TableDonhangGoc from "./tables/TableDonhangGoc";
import {
  formatMoney,
  getDsNguyenVatlieu,
  getTongNguyenVatlieu,
} from "../../utils";
import MultipleSelect from "../../components/MultipleSelect";
import apiGSV from "../../axios/apiGSV";
import {
  Container,
  Content,
  ErrMsg,
  Form,
  FormContent,
  FormGroup,
  FormTitle,
  Input,
  Label,
  TableSection,
  TableTitle,
  Total,
  TotalValue,
} from "./styledComponents";
import ma from "../../assets/icons/ma.png";
import daily1 from "../../assets/icons/daily1_2.png";
import dssanpham from "../../assets/icons/dssanpham.png";
import CustomAlert from "../../components/CustomAlert";
import DialogMaterial from "../../components/DialogMaterial";

const DonhangThem = (props) => {
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [singleDonhang, setSingleDonhang] = useState(null);
  const [singleGSV, setSingleGSV] = useState(null);
  const [selectedDaily1, setselectedDaily1] = useState([]);
  const { id: donhangId } = props.match.params;
  const { userInfo } = useSelector((state) => state.user);
  const [open, setOpen] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");
  const stateRef = useRef();
  const [dsThoaman, setDsThoaman] = useState([
    {
      daily1: null,
      dssanpham: [],
    },
  ]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const lackOfTotalSoluong = () => {
    let tongSLSPGoc = singleDonhang.dssanpham.reduce((acc, item) => {
      return acc + item.soluong;
    }, 0);
    let tongSLSPPhanphat = 0;
    dsThoaman.forEach((tm) => {
      let tongsl = tm.dssanpham.reduce((acc, item) => {
        return acc + parseInt(item.soluongpp);
      }, 0);
      tongSLSPPhanphat = tongSLSPPhanphat + tongsl;
    });
    if (tongSLSPGoc !== tongSLSPPhanphat) {
      setAlertMsg(`T???ng s??? l?????ng s???n ph???m ph??n ph??t ch??a ?????t: ${tongSLSPGoc}`);
      handleOpen();
      return true;
    }
    return false;
  };

  const getTongDonhang = (dssp) => {
    dssp = dssp.map((item) =>
      item.soluongpp ? { ...item, soluong: item.soluongpp } : item
    );
    const { tongdongia } = getDsNguyenVatlieu(dssp);
    return tongdongia;
  };

  const handleChangeSlSanpham = (e, spId, daily1Id) => {
    const val = e.target.value;
    if (!exceedSoluong(val, spId, daily1Id)) {
      setDsThoaman(
        dsThoaman.map((tm) =>
          tm.daily1._id === daily1Id
            ? {
                ...tm,
                dssanpham: tm.dssanpham.map((sp) =>
                  sp._id === spId
                    ? {
                        ...sp,
                        soluongpp: val,
                      }
                    : sp
                ),
              }
            : tm
        )
      );
    }
  };

  const calcTongSoluong1Sanpham = (val, spId, daily1Id) => {
    stateRef.current = stateRef.current.map((tm) =>
      tm.daily1._id === daily1Id
        ? {
            ...tm,
            dssanpham: tm.dssanpham.map((sp) =>
              sp._id === spId
                ? {
                    ...sp,
                    soluongpp: val,
                  }
                : sp
            ),
          }
        : tm
    );

    let tongsl = parseInt(val);
    stateRef.current.forEach((tm) => {
      if (tm.daily1._id !== daily1Id) {
        const sp = tm.dssanpham.find((sp) => sp._id === spId);
        if (sp) {
          tongsl = tongsl + parseInt(sp.soluongpp);
        }
      }
    });

    return tongsl;
  };

  const exceedSoluong = (val, spId, daily1Id) => {
    const sanphamGoc = singleDonhang.dssanpham.find(
      (sp) => sp.sanpham._id === spId
    );
    const tongsl = calcTongSoluong1Sanpham(val, spId, daily1Id);
    if (tongsl > sanphamGoc.soluong) {
      let msg = `
      T???ng s??? l?????ng s???n ph???m "${sanphamGoc.sanpham.ma}" v?????t qu?? ${
        tongsl - sanphamGoc.soluong
      } so v???i s??? l?????ng g???c ${sanphamGoc.soluong}
      `;
      setAlertMsg(msg);
      handleOpen();
      return true;
    }
    return false;
  };

  const handleChangeDaily1 = (e) => {
    const {
      target: { value },
    } = e;
    setselectedDaily1(typeof value === "string" ? value.split(",") : value);
    let temp = [...dsThoaman];
    temp = temp.map((tm) =>
      value.includes(tm.daily1._id)
        ? {
            ...tm,
            dssanpham: tm.dssanpham.map((sp) => ({ ...sp, soluongpp: 1 })),
          }
        : {
            ...tm,
            dssanpham: tm.dssanpham.map((sp) => ({ ...sp, soluongpp: 0 })),
          }
    );
    stateRef.current = temp;
    setDsThoaman(temp);
    
  };
console.log(handleChangeDaily1);
  const getDsThoaman = (donhang, dsDaily1) => {
    let temp = [
      {
        daily1: null,
        dssanpham: [],
      },
    ];
    dsDaily1.forEach((daily1) => {
      temp = [
        {
          daily1: {
            _id: daily1._id,
            ten: daily1.ten,
          },
          dssanpham: [],
        },
        ...temp,
      ];
      donhang.dssanpham.forEach((sp) => {
        if (daily1.loaisanpham.includes(sp.sanpham.loaisanpham._id)) {
          temp = temp.map((t) =>
            t.daily1 !== null && t.daily1._id === daily1._id
              ? {
                  ...t,
                  dssanpham: [
                    ...t.dssanpham,
                    { ...sp.sanpham, soluong: sp.soluong },
                  ],
                }
              : t
          );
        }
      });
    });
    temp = temp.filter(
      (item) => item.daily1 !== null && item.dssanpham.length > 0
    );
    temp =
      temp.length > 1
        ? temp.map((item) => ({
            ...item,
            dssanpham: item.dssanpham.map((sp) => ({ ...sp, soluongpp: 1 })),
          }))
        : temp.map((item) => ({
            ...item,
            dssanpham: item.dssanpham.map((sp) => ({
              ...sp,
              soluongpp: sp.soluong,
            })),
          }));

    console.log({ donhang, dsDaily1 });

    setDsThoaman(temp);
    stateRef.current = temp;
  };

  const emptyFields = () => {
    if (!selectedDaily1.length) {
      setErrMsg("Th??ng tin kh??ng ???????c ????? tr???ng");
      return true;
    }
    return false;
  };

  const handleSubmit = async () => {
    if (!emptyFields()) {
      if (!lackOfTotalSoluong()) {
        let dsdonhang = [];

        let dsthoamanTemp = [...dsThoaman];
        dsthoamanTemp = dsthoamanTemp.map((tm) => ({
          ...tm,
          dssanpham: tm.dssanpham.map((sp) => ({
            ...sp,
            soluong: sp.soluongpp,
          })),
        }));
        dsthoamanTemp.forEach((tm) => {
          if (selectedDaily1.includes(tm.daily1._id)) {
            const {
              danhsachcongcu,
              danhsachvattu,
              danhsachnguyenlieu,
              tongdongia,
            } = getDsNguyenVatlieu(tm.dssanpham);
            let dl = {
              ma: singleDonhang.ma,
              dssanpham: tm.dssanpham.map((item) => ({
                sanpham: item._id,
                soluong: item.soluong,
                soluonghoanthanh: 0,
              })),
              tongsanpham: getTongNguyenVatlieu(tm.dssanpham, "sanpham"),
              dscongcu: danhsachcongcu.map((item) => ({
                congcu: item.congcu._id,
                soluong: item.soluong,
              })),
              tongcongcu: getTongNguyenVatlieu(danhsachcongcu, "congcu"),
              dsvattu: danhsachvattu.map((item) => ({
                vattu: item.vattu._id,
                soluong: item.soluong,
              })),
              tongvattu: getTongNguyenVatlieu(danhsachvattu, "vattu"),
              dsnguyenlieu: danhsachnguyenlieu.map((item) => ({
                nguyenlieu: item.nguyenlieu._id,
                khoiluong: item.khoiluong,
              })),
              tongnguyenlieu: getTongNguyenVatlieu(
                danhsachnguyenlieu,
                "nguyenlieu"
              ),
              tongdongia,
              from: {
                giamsatvung: singleGSV._id,
              },
              to: {
                daily1: tm.daily1._id,
              },
            };
            dsdonhang.push(dl);
          }
        });
        console.log({ dsdonhang });
        const { success } = await apiDonhang.gsvToDaily1({
          donhangId: singleDonhang._id,
          dsdonhang,
          gsvId: singleGSV._id,
        });
        if (success) {
          toast.success("Th??m th??nh c??ng!", { theme: "colored" });
          props.history.push(
            `/giamsatvung/donhang/chitiet/${donhangId}/tiendo`
          );
        }
      }
    }
  };

  const fetchDsDonhang = async () => {
    setLoading(true);
    const { donhang } = await apiDonhang.singleDonhang(donhangId);
    if (!donhang.xacnhan) {
      props.history.push(`/giamsatvung/donhang/chitiet/${donhangId}`);
    }
    // const { gsv } = await apiGSV.singleGsvBasedUserId(userInfo._id);
    // let { daily1 } = await apiGSV.dsDaily1(daily1._id);
    // daily1 = daily1.filter((dl1) => dl1.user);

    const { gsv} = await apiGSV.singleGsvBasedUserId(userInfo._id);
    let { daily1 } = await apiGSV.dsDaily1(gsv._id);
    daily1 = daily1.filter((dl1) => dl1.user);
    // const { sanpham } = await apiDaily2.dsSanpham(daily2._id);

    getDsThoaman(donhang, daily1);
    setSingleDonhang(donhang);
    setSingleGSV(gsv);
    setLoading(false);
  };

  const getMappedDSSP = (dssp) => {
    let arr =
      dssp &&
      dssp.length &&
      dssp.map((sp) => ({ ...sp.sanpham, soluong: sp.soluong }));
    return arr;
  };

  useEffect(() => {
    fetchDsDonhang();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <BackdropMaterial />;
  }

  return (
    <>
      <Container>
        <Header
          title="Quay l???i danh s??ch ????n h??ng"
          titleBack
          onClick={() => props.history.push("/giamsatvung/donhang")}
          headerRight={
            <button className="btn btn-primary px-3" onClick={handleSubmit}>
              <span>L??u</span>
              <i class="fas fa-save"></i>
            </button>
          }
        />
        <Content>
          <Form className="px-5">
            <FormContent>
              <FormTitle>Ph??n ph??t ????n h??ng</FormTitle>
              <FormGroup>
                <Label>
                  <img src={ma} alt="ma" />
                  <span>M?? ????n h??ng:</span>
                </Label>
                <Input type="text" defaultValue={singleDonhang?.ma} disabled />
              </FormGroup>

              <FormGroup>
                <Label>
                  <img src={daily1} alt="daily1" />
                  <span>?????i l?? c???p 1:</span>
                </Label>
                {dsThoaman && dsThoaman.length ? (
                  <MultipleSelect
                    label="Ch???n ?????i l?? c???p 1"
                    value={selectedDaily1}
                    onChange={handleChangeDaily1}
                  >
                    {dsThoaman.map((dl1) => (
                      <MenuItem key={dl1?.daily1?._id} value={dl1?.daily1?._id}>
                        {dl1?.daily1?.ten}
                      </MenuItem>
                    ))}
                  </MultipleSelect>
                ) : (
                  <MultipleSelect label="Ch???n ?????i l?? c???p 1" />
                )}
                {selectedDaily1.length === 0 && <ErrMsg>{errMsg}</ErrMsg>}
              </FormGroup>
            </FormContent>

            <TableSection className="noCheckbox">
              <TableTitle>
                <img src={dssanpham} alt="dssanpham" />
                <span>S???n ph???m ????n h??ng</span>
              </TableTitle>
              <TableDonhangGoc donhang={singleDonhang} />
              <div className="text-right">
                <Total>T???ng ????n h??ng:</Total>
                <TotalValue>
                  {formatMoney(
                    singleDonhang?.dssanpham.length &&
                      getTongDonhang(getMappedDSSP(singleDonhang?.dssanpham))
                  )}
                </TotalValue>
              </div>
            </TableSection>

            {dsThoaman.map((tm) =>
              selectedDaily1.includes(tm?.daily1?._id) ? (
                <TableSection className="noCheckbox">
                  <TableTitle>
                    <img src={daily1} alt="daily1" />
                    <span>{tm?.daily1?.ten}</span>
                  </TableTitle>
                  <TableSanphamDonhang
                    dsSanpham={tm?.dssanpham}
                    handleChangeSlSanpham={handleChangeSlSanpham}
                    dl1Id={tm?.daily1?._id}
                  />
                  <div className="text-right">
                    <Total>T???ng ????n h??ng:</Total>
                    <TotalValue>
                      {formatMoney(getTongDonhang(tm?.dssanpham))}
                    </TotalValue>
                    <CustomAlert title="S??? l?????ng c??n l???i">
                      {tm?.dssanpham.map((sp) => (
                        <p>
                          {`${sp?.ten} (${sp?.ma})`}:
                          <span>
                            {isNaN(
                              sp?.soluong -
                                calcTongSoluong1Sanpham(
                                  sp?.soluongpp,
                                  sp?._id,
                                  tm?.daily1?._id
                                )
                            )
                              ? ""
                              : sp?.soluong -
                                calcTongSoluong1Sanpham(
                                  sp?.soluongpp,
                                  sp?._id,
                                  tm?.daily1?._id
                                )}
                          </span>
                        </p>
                      ))}
                    </CustomAlert>
                  </div>
                </TableSection>
              ) : null
            )}
          </Form>
        </Content>
      </Container>

      <DialogMaterial
        open={open}
        onClose={handleClose}
        title="L???i s??? l?????ng"
        content={alertMsg}
        text2="OK"
        onClick2={handleClose}
      />
    </>
  );
};

export default DonhangThem;
