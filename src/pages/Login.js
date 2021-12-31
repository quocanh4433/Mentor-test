import React from 'react'
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { loginAction } from '../redux/actions/QuanLyNguoiDungAction';


export default function Login() {
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            taiKhoan: "",
            matKhau: "",
        },
        onSubmit: (values) => {
            dispatch(loginAction(values))
        },
    })

    return (
        <section className="form" >
            <div className="form__bg"></div>
            <div className="form__content container2">
                <form onSubmit={formik.handleSubmit}>
                    <h3>Đăng nhập</h3>
                    <div className="form__group">
                        <label>Tài Khoản</label>
                        <input type="text" name="taiKhoan" onChange={formik.handleChange} />
                    </div>
                    <div className="form__group">
                        <label>Mật Khẩu</label>
                        <input type="password" name="matKhau" onChange={formik.handleChange} />
                    </div>
                    <div className="form__btnSubmit">
                        <button type="submit" className="c-main-btn">Đăng nhập</button>
                    </div>
                </form>
            </div>
        </section>
    )
}
