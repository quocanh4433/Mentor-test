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

    addUser = (userInfo) => {
        return this.post("/api/QuanLyNguoiDung/ThemNguoiDung", userInfo)
    }  
}

export const quanLyNguoiDungService = new QuanLyNguoiDungService () 
