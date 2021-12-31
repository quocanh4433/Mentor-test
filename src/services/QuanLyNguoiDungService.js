import { GROUPID } from "../utils/setting";
import { baseService } from "./baseService";

export class QuanLyNguoiDungService extends baseService {
    constructor () {
        super()
    }

    login = (userInfo) => { 
        return this.post("/api/QuanLyNguoiDung/DangNhap", userInfo)
    }

    getAllUser = (keyword) => {
        if(keyword !== '') {
            return this.get(`/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GROUPID}&tuKhoa=${keyword}`)
        }
        return this.get(`/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GROUPID}`)
    }
}

export const quanLyNguoiDungService = new QuanLyNguoiDungService () 
