import { quanLyNguoiDungService } from "../../services/QuanLyNguoiDungService";
import { ACCESS_TOKEN, http, USER_LOGIN } from "../../utils/setting";
import { history } from "../../App";
import { GET_ALL_USER, GET_USER_EDIT, LOG_IN } from "../types/QuanLyNguoiDungType";
import { message } from 'antd';

/** For Message */
const success = (content, contentDone) => {
    message
        .loading({
            content: content,
        }, 2.5)
        .then(() => message.success({
            content: contentDone,
        }, 2.5))
}

export const getAllUserAction = (keyword = '') => {
    return async (dispatch) => {
        try {
            const result = await quanLyNguoiDungService.getAllUser(keyword)
            dispatch({
                type: GET_ALL_USER,
                arrAllUser: result.data.content
            })
        } catch (error) {
            console.log("Error: ", error)
        }
    }
}

export const loginAction = (userInfo) => {
    return async (dispatch) => {
        try {
            const result = await quanLyNguoiDungService.login(userInfo)
            if (result.data.statusCode === 200) {
                dispatch({
                    type: LOG_IN,
                    userInfo: result.data.content
                });
            };
            localStorage.setItem(ACCESS_TOKEN, result.data.content.accessToken);
            localStorage.setItem(USER_LOGIN, JSON.stringify(result.data.content));
            history.push("/laydanhsachnguoidung")
        } catch (error) {
            message.error(error.response?.data.content);
            console.log("Error: ", error.response?.data)
        }
    }
}

export const addUserAction = (userInfo) => {
    return async (dispatch) => {
        try {
            const result = await quanLyNguoiDungService.addUser(userInfo)
            success('Tiến hành thêm người dùng', 'Thêm người dùng hoàn tất')
        } catch (error) {
            console.log("Error: ", error)
        }
    }
}
