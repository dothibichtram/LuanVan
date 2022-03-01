import axiosClient from "./axiosClient";

const daily1Api = {
  getAll(params) {
    const url = "/api/daily1/danhsach";
    return axiosClient.get(url, { params });
  },
  get(id) {
    const url = `/api/daily1/single/${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = `/api/daily1/them`;
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = `/api/daily1/single/${data.id}`;
    return axiosClient.put(url, data);
  },
  remove(id) {
    const url = `/api/daily1/single/${id}`;
    return axiosClient.delete(url);
  },
  // them daily1
  themDaily1(data) {
    const url = "/api/daily1/them";
    return axiosClient.post(url, data);
  },

  // chinh sua 1 ho dan
  suaDaiLy1(daily1Id, data) {
    const url = `/api/daily1/single/${daily1Id}`;
    return axiosClient.put(url, data);
  },
  //doi mat khau
  doiMatkhau(data){
    const url = `/api/daily1/capnhatthongtincanhan`;
    return axiosClient.put(url,data);
  },
  // danh sach daily1
  dsDaily1() {
    const url = "/api/daily1/danhsach";
    return axiosClient.get(url);
  },

   // danh sach ho dan thuoc daily1
  dsHodanThuocDaily1(daily1Id) {
    const url = `/api/daily1/dshodan/${daily1Id}`;
    return axiosClient.get(url);
  },

   // danh sach daily2 thuoc daily1
  dsDaily2ThuocDaily1(daily1Id) {
    const url = `/api/daily1/dsdaily2/${daily1Id}`;
    return axiosClient.get(url);
  },

  // danh sach daily1 chua co bo phan kinh doanh
  dsDaily1BPKDnull() {
    const url = `/api/daily1/dsdaily1bpkdnull`;
    return axiosClient.get(url);
  },
  // Duyệt hộ dân
  DuyetHodan(hodanId,daily1Id) {
    const url = `/api/daily1/duyet/${hodanId}/${daily1Id}`;
    return axiosClient.get(url);
  },
  // // search ho dan
  // searchHodan(query) {
  //   const url = `/api/daily1/search?${query}`;
  //   return axiosClient.get(url);
  // },

  // lay thong tin 1 daily1
  singleDaily1(id) {
    const url = `/api/daily1/single/${id}`;
    return axiosClient.get(url);
  },

  // xoa 1 daily1
  xoa1Daily1(id) {
    const url = `/api/daily1/single/${id}`;
    return axiosClient.delete(url);
  },

  // xoa nhieu daily1
  xoaNhieuDaily1(arrOfId) {
    const url = `/api/daily1/multiple`;
    return axiosClient.put(url, arrOfId);
  },

  // lay daily1 info based userId
  singleHodanBasedUser(id) {
    const url = `/api/daily1//user/${id}`;
    return axiosClient.get(url);
  },

  // lay thong tin 1 phan phat thuoc daily1
  singlePhanphat(daily1Id, phanphatId) {
    const url = `/api/daily1/singlephanphat/${daily1Id}/${phanphatId}`;
    return axiosClient.get(url);
  },

  //===============================
  // // lay danh sach phan phat  thuoc daily1
  // dsPhanphat(hodanId) {
  //   const url = `/api/daily1/dsphanphat/${hodanId}`;
  //   return axiosClient.get(url);
  // },

  // lay danh sach phan phat CONG CU thuoc daily1
  dsCongcuPhanphat(daily1Id) {
    const url = `/api/daily1/danhsachphanphat/${daily1Id}`;
    return axiosClient.get(url);
  },

  // lay danh sach phan phat VAT TU thuoc daily1
  dsVattuPhanphat(daily1Id) {
    const url = `/api/daily1/dsvattuphanphat/${daily1Id}`;
    return axiosClient.get(url);
  },

  // lay danh sach CONG CU thuoc daily1
  dsCongcu(daily1Id) {
    const url = `/api/daily1/dscongcu/${daily1Id}`;
    return axiosClient.get(url);
  },

  // lay danh sach VAT TU thuoc daily1
  dsVattu(daily1Id) {
    const url = `/api/daily1/dsvattu/${daily1Id}`;
    return axiosClient.get(url);
  },

  // lay danh sach NGUYEN Lieu thuoc daily1
  dsNguyenlieu(daily1Id) {
    const url = `/api/daily1/dsnguyenlieu/${daily1Id}`;
    return axiosClient.get(url);
  },
  // lay ds don hang thuoc daily1
  dsDonhang(daily1Id) {
    const url = `/api/daily1/dsdonhang/${daily1Id}`;
    return axiosClient.get(url);
  },

  // lay danh sach sanpham thuoc Daily1
  dsSanpham(daily1Id) {
    const url = `/api/daily1/dssanpham/${daily1Id}`;
    return axiosClient.get(url);
  },
  // // xac nhan don hang thuoc hodan
  // xacnhan(hodanId, donhangId) {
  //   const url = `/api/daily1/xacnhandh/${hodanId}/${donhangId}`;
  //   return axiosClient.put(url);
  // },

  // them cong cu hu loi
  themCongcuHuloi(daily1Id, payload) {
    const url = `/api/daily1/themcchuloi/${daily1Id}`;
    return axiosClient.put(url, payload);
  },

  // lay ds cong cu hu loi
  dsCongcuHuloi(daily1Id) {
    const url = `/api/daily1/dscchuloi/${daily1Id}`;
    return axiosClient.get(url);
  },

  //-------------

  // them vat tu hu loi
  themVattuHuloi(daily1Id, payload) {
    const url = `/api/daily1/themvthuloi/${daily1Id}`;
    return axiosClient.put(url, payload);
  },

  // lay ds vat tu hu loi
  dsVattuHuloi(daily1Id) {
    const url = `/api/daily1/dsvthuloi/${daily1Id}`;
    return axiosClient.get(url);
  },

  //-------------

  // them nguyen lieu hu loi
  themNguyenlieuHuloi(daily1Id, payload) {
    const url = `/api/daily1/themnglhuloi/${daily1Id}`;
    return axiosClient.put(url, payload);
  },

  // lay ds nguyen lieu hu loi
  dsNguyenlieuHuloi(daily1Id) {
    const url = `/api/daily1/dsnglhuloi/${daily1Id}`;
    return axiosClient.get(url);
  },
  // //ho dan bao cao don hang
  // baocao(data) {
  //   const url = `/api/daily1/baocao`;
  //   return axiosClient.put(url,data);
  // },
};

export default daily1Api;
