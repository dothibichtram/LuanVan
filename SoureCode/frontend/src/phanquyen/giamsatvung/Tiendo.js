import React, { useEffect, useRef, useState } from "react";
import Header from "../../components/Header";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import apiDonhang from "../../axios/apiDonhang";
import BackdropMaterial from "../../components/BackdropMaterial";
import TableSanphamDonhangChitiet from "./tables/TableSanphamDonhangChitiet";
import TableCongcuDonhang from "./tables/TableCongcuDonhang";
import TableVattuDonhang from "./tables/TableVattuDonhang";
import TableNguyenlieuDonhang from "./tables/TableNguyenlieuDonhang";
import apiGSV from "../../axios/apiGSV";
import { formatMoney, getTableDataClass } from "../../utils";
import CustomModal from "../../components/CustomModal";
import {
  Container,
  Content,
  DetailsInfo,
  DetailsInfoContent,
  DetailsInfoTexts,
  DetailsInfoTitle,
  Form,
  TableSection,
  TableTitle,
  TiendoDonhang,
  TiendoProcess,
  TiendoProcessText,
  Total,
  TotalValue,
} from "./styledComponents";
import ten from "../../assets/icons/ten.png";
import sdt from "../../assets/icons/sdt.png";
import email from "../../assets/icons/email.png";
import diachi from "../../assets/icons/diachi.png";
import loai from "../../assets/icons/loai.png";
import gsv from "../../assets/icons/giamsatvung.png";
import dssanpham from "../../assets/icons/dssanpham.png";
import dscongcu from "../../assets/icons/dscongcu.png";
import dsvattu from "../../assets/icons/dsvattu.png";
import dsnglieu from "../../assets/icons/dsnglieu.png";
import { MaDonhang } from "../bophankd/styledComponents";
import apiDaily1 from "../../axios/apiDaily1";
import DialogMaterial from "../../components/DialogMaterial";

const Tiendo = (props) => {
  const [dsSubDonhang, setDsSubDonhang] = useState([]);
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState("1");
  const { userInfo } = useSelector((state) => state.user);
  const { id: donhangId } = props.match.params;
  const [open, setOpen] = useState(false);
  const [singleDonhang, setSingleDonhang] = useState(null);
  const [alertMsg, setAlertMsg] = useState("");
  const [dlOpen, setDlOpen] = useState(false);
  const [tiendoDonhang, setTiendoDonhang] = useState(null);
  const ref = useRef();
  const [selectedPQ, setSelectedPQ] = useState({
    dsDonhang: [],
    type: "",
    type2: "",
  });

  const emptyTableData = (dsDonhang, type) => {
    const typeName = type === "daily2" ? "?????i l?? c???p 2" : "H??? d??n";
    if (!dsDonhang.length) {
      setAlertMsg(
        `C??c ${typeName} trong nh??nh ch??a c?? ????n h??ng ${singleDonhang?.ma}`
      );
      handleOpenDL();
      return true;
    }
    return false;
  };

  const handleClickTableData = (pqType) => {
    switch (pqType) {
      case "daily1TDHT":
        if (!emptyTableData(tiendoDonhang?.daily1DSDonhang, "daily1")) {
          setSelectedPQ({
            dsDonhang: tiendoDonhang?.daily1DSDonhang,
            type: "daily1Only",
            type2: "TDHT",
          });
          handleOpen();
        }
        break;
      case "daily2TTND":
        if (!emptyTableData(tiendoDonhang?.daily2DSDonhang, "daily2")) {
          setSelectedPQ({
            dsDonhang: tiendoDonhang?.daily2DSDonhang,
            type: "daily2",
            type2: "TTND",
          });
          handleOpen();
        }
        break;
      case "daily2TDHT":
        if (!emptyTableData(tiendoDonhang?.daily2DSDonhang, "daily2")) {
          setSelectedPQ({
            dsDonhang: tiendoDonhang?.daily2DSDonhang,
            type: "daily2",
            type2: "TDHT",
          });
          handleOpen();
        }
        break;
      case "hodanTTND":
        if (!emptyTableData(tiendoDonhang?.hodanDSDonhang, "hodan")) {
          setSelectedPQ({
            dsDonhang: tiendoDonhang?.hodanDSDonhang,
            type: "hodan",
            type2: "TTND",
          });
          handleOpen();
        }
        break;
      case "hodanTDHT":
        if (!emptyTableData(tiendoDonhang?.hodanDSDonhang, "hodan")) {
          setSelectedPQ({
            dsDonhang: tiendoDonhang?.hodanDSDonhang,
            type: "hodan",
            type2: "TDHT",
          });
          handleOpen();
        }
        break;

      default:
        return;
    }
  };

  const handleOpenDL = () => setDlOpen(true);
  const handleCloseDL = () => setDlOpen(false);

  const handleOpen = () => setOpen(true);

  const handleChangeTab = (event, newValue) => {
    setValue(newValue);
    fetchTiendoDonhang(newValue);
    setSingleDonhang(dsSubDonhang.find((dh) => dh._id === newValue));
  };

  const fetchTiendoDonhang = async (donhangId) => {
    const donhang = dsSubDonhang.find((dh) => dh._id === donhangId);
    const daily1Id = donhang?.to.daily1._id;
    const data = await apiDaily1.tiendoDonhang(daily1Id, donhang?.ma);
    setTiendoDonhang(data);
  };

  const fetchSubDonhang = async () => {
    setLoading(true);
    const { gsv } = await apiGSV.singleGsvBasedUserId(userInfo._id);
    const { donhang } = await apiDonhang.singleDonhang(donhangId);
    if (!donhang.ngaydathang) {
      props.history.push(`/giamsatvung/donhang/chitiet/${donhangId}`);
    }
    let { subdonhang } = await apiGSV.dsSubDonhang(gsv._id, donhang.ma);
    const data = await apiDaily1.tiendoDonhang(
      subdonhang[0].to.daily1._id,
      donhang.ma
    );
    subdonhang = subdonhang.map((dh) => ({
      ...dh,
      dssanpham: dh.dssanpham.map((sp) => ({ ...sp.sanpham, ...sp })),
      dscongcu: dh.dscongcu.map((cc) => ({ ...cc.congcu, ...cc })),
      dsvattu: dh.dsvattu.map((vt) => ({ ...vt.vattu, ...vt })),
      dsnguyenlieu: dh.dsnguyenlieu.map((ngl) => ({
        ...ngl.nguyenlieu,
        ...ngl,
      })),
    }));
    setSingleDonhang(subdonhang[0]);
    setDsSubDonhang(subdonhang);
    setValue(subdonhang[0]._id);
    ref.current = data;
    setTiendoDonhang(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchSubDonhang();
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
        />
        <Content>
          <Form>
            <TiendoProcess>
              <TiendoProcessText
                onClick={() =>
                  props.history.push(
                    `/giamsatvung/donhang/chitiet/${donhangId}`
                  )
                }
              >
                <i class="fas fa-long-arrow-alt-left"></i>
                <span>Quay l???i chi ti???t ????n h??ng</span>
              </TiendoProcessText>
            </TiendoProcess>

            <Box sx={{ width: "100%", typography: "body1" }}>
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <TabList
                    onChange={handleChangeTab}
                    aria-label="lab API tabs example"
                  >
                    {dsSubDonhang.map((dh) => (
                      <Tab label={dh?.to.daily1.ten} value={dh?._id} />
                    ))}
                  </TabList>
                </Box>
                {dsSubDonhang.map((dh) => (
                  <TabPanel value={dh._id}>
                    <>
                      <MaDonhang>
                        <span>M?? ????n h??ng:</span>
                        <span>{dh?.ma}</span>
                      </MaDonhang>

                      <TiendoDonhang>
                        <table className="table">
                          <thead>
                            <tr>
                              <th colSpan="2">?????i l?? c???p 1</th>
                              <th colSpan="2">?????i l?? c???p 2</th>
                              <th colSpan="2">H??? d??n</th>
                            </tr>
                            <tr>
                              <th>T??nh tr???ng nh???n ????n</th>
                              <th>T??nh tr???ng ti???n ?????</th>
                              <th>T??nh tr???ng nh???n ????n</th>
                              <th>T??nh tr???ng ti???n ?????</th>
                              <th>T??nh tr???ng nh???n ????n</th>
                              <th>T??nh tr???ng ti???n ?????</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td
                                style={{ cursor: "default" }}
                                className={
                                  tiendoDonhang && tiendoDonhang.daily1Nhandon
                                    ? "success"
                                    : tiendoDonhang &&
                                      !tiendoDonhang.daily1Nhandon
                                    ? "danger"
                                    : ref.current.daily1Nhandon
                                    ? "success"
                                    : "danger"
                                }
                              >
                                {tiendoDonhang &&
                                tiendoDonhang.daily1Nhandon ? (
                                  <i class="fas fa-check"></i>
                                ) : tiendoDonhang &&
                                  !tiendoDonhang.daily1Nhandon ? (
                                  <i class="fas fa-times"></i>
                                ) : ref.current.daily1Nhandon ? (
                                  <i class="fas fa-check"></i>
                                ) : (
                                  <i class="fas fa-times"></i>
                                )}
                              </td>
                              <td
                                onClick={() =>
                                  handleClickTableData("daily1TDHT")
                                }
                                className={getTableDataClass(
                                  tiendoDonhang
                                    ? tiendoDonhang.daily1TDHT
                                    : ref.current.daily1TDHT
                                )}
                              >{`${
                                tiendoDonhang
                                  ? tiendoDonhang.daily1TDHT
                                  : ref.current.daily1TDHT
                              } %`}</td>
                              <td
                                onClick={() =>
                                  handleClickTableData("daily2TTND")
                                }
                                className={getTableDataClass(
                                  tiendoDonhang
                                    ? tiendoDonhang.daily2TTND
                                    : ref.current.daily2TTND
                                )}
                              >{`${
                                tiendoDonhang
                                  ? tiendoDonhang.daily2TTND
                                  : ref.current.daily2TTND
                              } %`}</td>
                              <td
                                onClick={() =>
                                  handleClickTableData("daily2TDHT")
                                }
                                className={getTableDataClass(
                                  tiendoDonhang
                                    ? tiendoDonhang.daily2TDHT
                                    : ref.current.daily2TDHT
                                )}
                              >{`${
                                tiendoDonhang
                                  ? tiendoDonhang.daily2TDHT
                                  : ref.current.daily2TDHT
                              } %`}</td>
                              <td
                                onClick={() =>
                                  handleClickTableData("hodanTTND")
                                }
                                className={getTableDataClass(
                                  tiendoDonhang
                                    ? tiendoDonhang.hodanTTND
                                    : ref.current.hodanTTND
                                )}
                              >{`${
                                tiendoDonhang
                                  ? tiendoDonhang.hodanTTND
                                  : ref.current.hodanTTND
                              } %`}</td>
                              <td
                                onClick={() =>
                                  handleClickTableData("hodanTDHT")
                                }
                                className={getTableDataClass(
                                  tiendoDonhang
                                    ? tiendoDonhang.hodanTDHT
                                    : ref.current.hodanTDHT
                                )}
                              >{`${
                                tiendoDonhang
                                  ? tiendoDonhang.hodanTDHT
                                  : ref.current.hodanTDHT
                              } %`}</td>
                            </tr>
                          </tbody>
                        </table>
                      </TiendoDonhang>

                      <DetailsInfo className="mb-5">
                        <DetailsInfoTitle>
                          {/* <img src={anh} alt="anh" /> */}
                          <h5>Th??ng tin ?????i l??</h5>
                        </DetailsInfoTitle>

                        <DetailsInfoContent>
                          <DetailsInfoTexts>
                            <table>
                              <tr>
                                <td>
                                  <img src={ten} alt="ten" />
                                  <span>T??n:</span>
                                </td>
                                <td>{dh?.to.daily1.ten}</td>
                              </tr>
                              <tr>
                                <td>
                                  <img src={sdt} alt="sdt" />
                                  <span>S??T:</span>
                                </td>
                                <td>{dh?.to.daily1.sdt}</td>
                              </tr>
                              <tr>
                                <td>
                                  <img src={email} alt="email" />
                                  <span>E-mail:</span>
                                </td>
                                <td>{dh?.to.daily1.email}</td>
                              </tr>
                              <tr>
                                <td>
                                  <img src={diachi} alt="diachi" />
                                  <span>?????a ch???:</span>
                                </td>
                                <td>{`${dh?.to.daily1.xa}, ${dh?.to.daily1.huyen}, ${dh?.to.daily1.tinh}`}</td>
                              </tr>
                              <tr>
                                <td>
                                  <img src={loai} alt="loai" />
                                  <span>Lo???i s???n ph???m:</span>
                                </td>
                                <td>
                                  {dh?.to.daily1.loaisanpham
                                    .map((lsp) => lsp.ten)
                                    .join(", ")}
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <img src={gsv} alt="gsv" />
                                  <span>Thu???c gi??m s??t v??ng:</span>
                                </td>
                                <td>{`${dh?.to.daily1.giamsatvung.ten}, ${dh?.to.daily1.giamsatvung.xa}, ${dh?.to.daily1.giamsatvung.huyen}, ${dh?.to.daily1.giamsatvung.tinh}`}</td>
                              </tr>
                            </table>
                          </DetailsInfoTexts>
                        </DetailsInfoContent>
                      </DetailsInfo>
                    </>

                    <TableSection className="noCheckbox">
                      <TableTitle>
                        <img src={dssanpham} alt="dssanpham" />
                        <span>Danh s??ch s???n ph???m</span>
                      </TableTitle>
                      <TableSanphamDonhangChitiet dsSanpham={dh?.dssanpham} />
                      <div className="text-right mb-5">
                        <Total>T???ng ????n gi??: </Total>
                        <TotalValue>
                          {formatMoney(dh?.tongdongia)} vn??
                        </TotalValue>
                      </div>
                    </TableSection>

                    <TableSection className="noCheckbox">
                      <TableTitle>
                        <img src={dscongcu} alt="dscongcu" />
                        <span>Danh s??ch c??ng c???</span>
                      </TableTitle>
                      <TableCongcuDonhang dsCongcu={dh?.dscongcu} />
                      <div className="text-right mb-3">
                        <Total>T???ng s??? l?????ng: </Total>
                        <TotalValue>{dh?.tongcongcu}</TotalValue>
                      </div>
                    </TableSection>

                    <TableSection className="noCheckbox">
                      <TableTitle>
                        <img src={dsvattu} alt="dsvattu" />
                        <span>Danh s??ch v???t t??</span>
                      </TableTitle>
                      <TableVattuDonhang dsVattu={dh?.dsvattu} />
                      <div className="text-right mb-3">
                        <Total>T???ng s??? l?????ng: </Total>
                        <TotalValue>{dh?.tongvattu}</TotalValue>
                      </div>
                    </TableSection>

                    <TableSection className="noCheckbox">
                      <TableTitle>
                        <img src={dsnglieu} alt="dsnglieu" />
                        <span>Danh s??ch nguy??n li???u</span>
                      </TableTitle>
                      <TableNguyenlieuDonhang dsNguyenlieu={dh?.dsnguyenlieu} />
                      <div className="text-right mb-3">
                        <Total>T???ng kh???i l?????ng: </Total>
                        <TotalValue>{dh?.tongnguyenlieu} kg</TotalValue>
                      </div>
                    </TableSection>
                  </TabPanel>
                ))}
              </TabContext>
            </Box>
          </Form>
        </Content>
      </Container>

      <CustomModal
        open={open}
        setOpen={setOpen}
        phanquyen={selectedPQ}
        singleDonhang={singleDonhang}
      />

      <DialogMaterial
        open={dlOpen}
        onClose={handleCloseDL}
        title="Ch??a c?? ????n h??ng"
        content={alertMsg}
        text2="OK"
        onClick2={handleCloseDL}
      />
    </>
  );
};

export default Tiendo;
