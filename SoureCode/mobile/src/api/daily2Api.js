import axiosClient from "./axiosClient";

const daily2Api = {
  getAll(params) {
    const url = "/api/daily2/danhsach";
    return axiosClient.get(url, { params });
  },
  get(id) {
    const url = `/api/daily2/single/${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = `/api/daily2/them`;
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = `/api/daily2/single/${data.id}`;
    return axiosClient.put(url, data);
  },
  remove(id) {
    const url = `/api/daily2/single/${id}`;
    return axiosClient.delete(url);
  },
  // them daily2
  themdaily2(data) {
    const url = "/api/daily2/them";
    return axiosClient.post(url, data);
  },

  // chinh sua 1 ho dan
  suadaily2(daily2Id, data) {
    const url = `/api/daily2/single/${daily2Id}`;
    return axiosClient.put(url, data);
  },
  //doi mat khau
  doiMatkhau(data){
    const url = `/api/daily2/capnhatthongtincanhan`;
    return axiosClient.put(url,data);
  },
  // danh sach daily2
  dsdaily2() {
    const url = "/api/daily2/danhsach";
    return axiosClient.get(url);
  },

   // danh sach ho dan thuoc daily2
  dsHodanThuocdaily2(daily2Id) {
    const url = `/api/daily2/dshodan/${daily2Id}`;
    return axiosClient.get(url);
  },

   // danh sach daily2 thuoc daily2
  // dsDaily2Thuocdaily2(daily2Id) {
  //   const url = `/api/daily2/dsdaily2/${daily2Id}`;
  //   return axiosClient.get(url);
  // },

  // danh sach dai ly 2 daily1 null
  dsdaily2daily1null() {
    const url = `/api/daily2/dsdly2dly1null`;
    return axiosClient.get(url);
  },
  // danh sach daily2 chua co bo phan kinh doanh
  dsdaily2BPKDnull() {
    const url = `/api/daily2/dsdaily2bpkdnull`;
    return axiosClient.get(url);
  },
  // Duyệt hộ dân
  // DuyetHodan(hodanId,daily2Id) {
  //   const url = `/api/daily2/duyet/${hodanId}/${daily2Id}`;
  //   return axiosClient.get(url);
  // },
  // // search ho dan
  // searchHodan(query) {
  //   const url = `/api/daily2/search?${query}`;
  //   return axiosClient.get(url);
  // },

  // lay thong tin 1 daily2
  singledaily2(id) {
    const url = `/api/daily2/single/${id}`;
    return axiosClient.get(url);
  },

  // xoa 1 daily2
  xoa1daily2(id) {
    const url = `/api/daily2/single/${id}`;
    return axiosClient.delete(url);
  },

  // xoa nhieu daily2
  xoaNhieudaily2(arrOfId) {
    const url = `/api/daily2/multiple`;
    return axiosClient.put(url, arrOfId);
  },

  // lay daily2 info based userId
  singleHodanBasedUser(id) {
    const url = `/api/daily2/user/${id}`;
    return axiosClient.get(url);
  },

  // lay thong tin 1 phan phat thuoc daily2
  singlePhanphat(daily2Id, phanphatId) {
    const url = `/api/daily2/singlephanphat/${daily2Id}/${phanphatId}`;
    return axiosClient.get(url);
  },

  //===============================
  // lay danh sach phan phat  thuoc daily2
  dsPhanphat(daily2Id) {
    const url = `/api/daily2/dsphanphat/${daily2Id}`;
    return axiosClient.get(url);
  },
//note: dsCongcuPhanphat


  // // lay danh sach phan phat CONG CU thuoc daily2
  // dsCongcuPhanphat(daily2Id) {
  //   const url = `/api/daily2/danhsachphanphat/${daily2Id}`;
  //   return axiosClient.get(url);
  // },

  // lay danh sach phan phat VAT TU thuoc daily2
  dsVattuPhanphat(daily2Id) {
    const url = `/api/daily2/dsvattuphanphat/${daily2Id}`;
    return axiosClient.get(url);
  },

  // lay danh sach CONG CU thuoc daily2
  dsCongcu(daily2Id) {
    const url = `/api/daily2/dscongcu/${daily2Id}`;
    return axiosClient.get(url);
  },

  // lay danh sach VAT TU thuoc daily2
  dsVattu(daily2Id) {
    const url = `/api/daily2/dsvattu/${daily2Id}`;
    return axiosClient.get(url);
  },

  // lay danh sach NGUYEN Lieu thuoc daily2
  dsNguyenlieu(daily2Id) {
    const url = `/api/daily2/dsnguyenlieu/${daily2Id}`;
    return axiosClient.get(url);
  },
  // lay ds don hang thuoc daily2
  dsDonhang(daily2Id) {
    const url = `/api/daily2/dsdonhang/${daily2Id}`;
    return axiosClient.get(url);
  },

  // lay danh sach sanpham thuoc daily2
  dsSanpham(daily2Id) {
    const url = `/api/daily2/dssanpham/${daily2Id}`;
    return axiosClient.get(url);
  },
  // // xac nhan don hang thuoc hodan
  // xacnhan(hodanId, donhangId) {
  //   const url = `/api/daily2/xacnhandh/${hodanId}/${donhangId}`;
  //   return axiosClient.put(url);
  // },

  // them cong cu hu loi
  themCongcuHuloi(daily2Id, payload) {
    const url = `/api/daily2/themcchuloi/${daily2Id}`;
    return axiosClient.put(url, payload);
  },

  // lay ds cong cu hu loi
  dsCongcuHuloi(daily2Id) {
    const url = `/api/daily2/dscchuloi/${daily2Id}`;
    return axiosClient.get(url);
  },

  //-------------

  // them vat tu hu loi
  themVattuHuloi(daily2Id, payload) {
    const url = `/api/daily2/themvthuloi/${daily2Id}`;
    return axiosClient.put(url, payload);
  },

  // lay ds vat tu hu loi
  dsVattuHuloi(daily2Id) {
    const url = `/api/daily2/dsvthuloi/${daily2Id}`;
    return axiosClient.get(url);
  },

  //-------------

  // them nguyen lieu hu loi
  themNguyenlieuHuloi(daily2Id, payload) {
    const url = `/api/daily2/themnglhuloi/${daily2Id}`;
    return axiosClient.put(url, payload);
  },

  // lay ds nguyen lieu hu loi
  dsNguyenlieuHuloi(daily2Id) {
    const url = `/api/daily2/dsnglhuloi/${daily2Id}`;
    return axiosClient.get(url);
  },
  // //ho dan bao cao don hang
  // baocao(data) {
  //   const url = `/api/daily2/baocao`;
  //   return axiosClient.put(url,data);
  // },
};

export default daily2Api;
