import { ThongTinDatVe } from "../_core/models/ThongTinDatVe"
import { baseService } from "./baseService"

export class QuanLyDatVeService extends baseService {
    constructor() {
        super()
    }

    layChiTietPhongVe = maLichChieu => {    //{taiKhoan:"",matKhau:""}
        return this.get(`/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`, maLichChieu)
    }

    datVe = (thongTinDatVe = new ThongTinDatVe()) => { //thong tin dat ve
        return this.post(`/api/QuanLyDatVe/DatVe`, thongTinDatVe)
    }

    taoLichChieu = thongTinLichChieu => {
        return this.post(`/api/QuanLyDatVe/TaoLichChieu`, thongTinLichChieu)
    }
}

export const quanLyDatVeService = new QuanLyDatVeService()