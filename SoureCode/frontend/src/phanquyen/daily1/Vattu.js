import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import BackdropMaterial from "../../components/BackdropMaterial";
import {
  Button,
  Container,
  Content,
  Filter,
  FilterSection,
  SearchBox,
  TableSection,
  Title,
  TitleWrapper,
} from "./styledComponents";
import Header from "../../components/Header";
import TableVattu from "./tables/TableVattu";
import apiDaily1 from "../../axios/apiDaily1";
import ModalHuloi from "../../components/ModalHuloi";
import { links } from "./arrayOfLinks";
import { getCurrentDate, thisMonth } from "../../utils";
import DialogMaterial from "../../components/DialogMaterial";
import Thongke from "../../components/Thongke";

const Vattu = (props) => {
  const [query, setQuery] = useState("");
  const [searchColumns] = useState(["ten", "madh"]);
  const [loading, setLoading] = useState(false);
  const [dsVattu, setDsVattu] = useState([]);
  const { userInfo } = useSelector((state) => state.user);
  //---------------
  const [open, setOpen] = useState(false);
  const [dsVattuHuloiShow, setDsVattuHuloiShow] = useState([]);
  const [dsVattuHuloi, setDsVattuHuloi] = useState([]);
  const [daily1Info, setDaily1Info] = useState(null);
  const [active, setActive] = useState({
    code: 1,
    present: "dsvattu",
  });
  //-------------------
  const [alert, setAlert] = React.useState(false);
  const [alertMsg, setAlertMsg] = React.useState(false);
  const [dsThongke, setdsThongke] = React.useState([]);
  const [thongkeType, setThongkeType] = useState("");
  const [dateRange, setDateRange] = React.useState({
    from: "",
    to: "",
  });

  const handleClickThang = () => {
    setThongkeType("thang");
    const { firstDay, lastDay } = thisMonth();
    const startDay = new Date(firstDay);
    const endDay = new Date(lastDay);
    let dsvt = [];
    for (const vt of dsVattu) {
      const ngtao = new Date(vt.ngaytao.split("/").reverse().join("-"));
      if (ngtao >= startDay && ngtao <= endDay) {
        dsvt = [vt, ...dsvt];
      }
    }
    setdsThongke(dsvt);
  };

  const handleClickNam = () => {
    setThongkeType("nam");
    const currentYear = new Date().getFullYear();
    const startDay = new Date(`${currentYear}-01-01`);
    const endDay = new Date(`${currentYear}-12-31`);
    let dsvt = [];
    for (const vt of dsVattu) {
      const ngtao = new Date(vt.ngaytao.split("/").reverse().join("-"));
      if (ngtao >= startDay && ngtao <= endDay) {
        dsvt = [vt, ...dsvt];
      }
    }
    setdsThongke(dsvt);
  };

  const handleClickThongke = () => {
    if (validateDate()) {
      setThongkeType("range");
      const startDay = new Date(dateRange.from);
      const endDay = new Date(dateRange.to);
      let dsvt = [];
      for (const vt of dsVattu) {
        const ngtao = new Date(vt.ngaytao.split("/").reverse().join("-"));
        if (ngtao >= startDay && ngtao <= endDay) {
          dsvt = [vt, ...dsvt];
        }
      }
      setdsThongke(dsvt);
    }
  };

  const validateDate = () => {
    const from = new Date(dateRange.from);
    const to = new Date(dateRange.to);
    const today = new Date(getCurrentDate());
    if (!dateRange.from) {
      setAlertMsg("Vui lòng nhập ngày bắt đầu");
      handleOpen();
      return false;
    }
    if (from > today) {
      setAlertMsg("Ngày bắt đầu không hợp lệ");
      handleOpen();
      return false;
    }
    if (!dateRange.to) {
      setAlertMsg("Vui lòng nhập ngày kết thúc");
      handleOpen();
      return false;
    }
    if (from > to || to < from) {
      setAlertMsg("Ngày bắt đầu vượt quá ngày kết thúc");
      handleOpen();
      return false;
    }
    return true;
  };

  const handleOpen = () => setAlert(true);
  const handleClose = () => setAlert(false);

  const handleChangeDateFrom = (e) => {
    setDateRange({ ...dateRange, from: e.target.value });
  };

  const handleChangeDateTo = (e) => {
    setDateRange({ ...dateRange, to: e.target.value });
  };

  const handleClick = async () => {
    const { success } = await apiDaily1.themVattuHuloi(daily1Info._id, {
      dsvtLoi: dsVattuHuloi,
    });
    if (success) {
      setOpen(false);
      toast.success("Thêm thành công!", { theme: "colored" });
      fetchDsVattu();
    }
  };

  const fetchDsVattu = async () => {
    setLoading(true);
    const { daily1 } = await apiDaily1.singleDaily1BasedUser(userInfo._id);
    let { dsvattu } = await apiDaily1.dsVattu(daily1._id);
    dsvattu = dsvattu.map((vt) => ({
      ...vt.vattu,
      ...vt,
      madh: vt.donhang.ma,
    }));
    let { dsvattuhuloi } = await apiDaily1.dsVattuHuloi(daily1._id);
    dsvattuhuloi = dsvattuhuloi.map((vt) => ({
      ...vt.vattu,
      ...vt,
      madh: vt.donhang.ma,
    }));
    setDaily1Info(daily1);
    setDsVattuHuloiShow(dsvattuhuloi);
    setDsVattu(dsvattu);
    setLoading(false);
  };

  const search = (dsVattu) => {
    return (
      dsVattu &&
      dsVattu.filter((item) =>
        searchColumns.some(
          (col) =>
            item[col].toString().toLowerCase().indexOf(query.toLowerCase()) > -1
        )
      )
    );
  };

  useEffect(() => {
    fetchDsVattu();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <BackdropMaterial />;
  }

  return (
    <>
      <Container>
        <Header title="Vật tư" arrOfLinks={links} vaitro="daily1" />
        <Content>
          <div className="text-right mb-3">
            {active.code === 1 ? (
              <Button
                className="btn btn-primary px-4"
                onClick={() => setActive({ code: 2, present: "dscongcuhuloi" })}
              >
                Hư lỗi
              </Button>
            ) : (
              <Button
                className="btn btn-primary px-3"
                onClick={() => setActive({ code: 1, present: "dscongcu" })}
              >
                Danh sách
              </Button>
            )}
          </div>
          <FilterSection>
            <TitleWrapper className="d-flex justify-content-between align-items-center">
              <Title>
                {active.code === 1
                  ? "Danh sách vật tư"
                  : "Danh sách vật tư hư lỗi"}
              </Title>
            </TitleWrapper>

            <Filter>
              <SearchBox>
                <i class="fas fa-search"></i>
                <input
                  type="text"
                  placeholder="Tim vật tư theo mã đơn hàng, tên vậ tư"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </SearchBox>
            </Filter>

            {active.code === 1 ? (
              <TableSection>
                <TableVattu
                  dsVattu={search(dsVattu)}
                  setOpen={setOpen}
                  setDsVattuHuloi={setDsVattuHuloi}
                />
              </TableSection>
            ) : active.code === 2 ? (
              <TableSection className="noCheckbox">
                <TableVattu dsVattu={dsVattuHuloiShow} dsvattuhuloi />
              </TableSection>
            ) : null}
          </FilterSection>

          <Thongke
            onClickThang={handleClickThang}
            onClickNam={handleClickNam}
            onClickThongke={handleClickThongke}
            handleChangeDateFrom={handleChangeDateFrom}
            handleChangeDateTo={handleChangeDateTo}
            fromDate={dateRange.from}
            toDate={dateRange.to}
            dsVattu={dsThongke}
            thongkeType={thongkeType}
          />
        </Content>
      </Container>

      <ModalHuloi
        type="vattu"
        open={open}
        setOpen={setOpen}
        dsVattuHuloi={dsVattuHuloi}
        setDsVattuHuloi={setDsVattuHuloi}
        onClick={handleClick}
      />

      <DialogMaterial
        open={alert}
        onClose={handleClose}
        title="Lỗi"
        content={alertMsg}
        text2="OK"
        onClick2={handleClose}
      />
    </>
  );
};

export default Vattu;
