import { USER_LOGIN } from "../../utils/setting";
import { COUNT_LIKE, GET_ALL_USER, GET_USER_EDIT, LOG_IN } from "../types/QuanLyNguoiDungType"
import _ from 'lodash'

/** Check user logged  */
let userLogged = null;
if (localStorage.getItem(USER_LOGIN)) {
    userLogged = JSON.parse(localStorage.getItem(USER_LOGIN))
}

const stateDefault = {
    userLogin: userLogged,
    arrAllUser: [],
    userEdit: {}
}

export const QuanLyNguoiDungReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case LOG_IN: {
            state.userLogin = action.userInfo;
            return { ...state }
        } break;

        case COUNT_LIKE: {
            let index = _.findIndex(state.lstUserComment, user => user.id === action.id)
            state.lstUserComment[index].like += 1 
            return {...state}
        } break;

        case GET_ALL_USER: {
            state.arrAllUser = action.arrAllUser
            return {...state}
        } break;

        case GET_USER_EDIT: {
            state.userEdit = action.userEdit
            return {...state}
        } break;

        default: return { ...state }
    }
}