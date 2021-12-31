import React, { useEffect } from 'react'
import { Table } from 'antd';
import { PlusCircleOutlined, LogoutOutlined } from "@ant-design/icons"
import { useDispatch, useSelector } from 'react-redux'
import { history } from '../App'
import { getAllUserAction } from '../redux/actions/QuanLyNguoiDungAction';
import { logOut } from '../_core/shared';

export default function ListUser() {
    const { arrAllUser } = useSelector(state => state.QuanLyNguoiDungReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllUserAction())
    }, [])


     /** For table */
     const data = arrAllUser

     const columns = [
         {
             title: 'Họ Tên',
             dataIndex: 'hoTen',
             defaultSortOrder: 'descend',
             sorter: (a, b) => {
                 let nameA = a.hoTen.toLowerCase().trim();
                 let nameB = b.hoTen.toLowerCase().trim();
                 if (nameA > nameB) {
                     return 1;
                 }
                 return -1;
             },
             width: "15%"
         },
         {
             title: 'Tài Khoản',
             dataIndex: 'taiKhoan',
             defaultSortOrder: 'ascend',
             sorter: (a, b) => {
                 let accountA = a.taiKhoan.toLowerCase().trim();
                 let accountB = b.taiKhoan.toLowerCase().trim();
                 if (accountA > accountB) {
                     return 1;
                 }
                 return -1;
             },
             width: "20%"
         },
         {
             title: 'Mật Khẩu',
             dataIndex: 'matKhau',
             defaultSortOrder: 'descend',
             sorter: (a, b) => {
                 let passwordA = a.matKhau.toLowerCase().trim();
                 let passwordB = b.matKhau.toLowerCase().trim();
                 if (passwordA > passwordB) {
                     return 1;
                 }
                 return -1;
             },
             width: "17%"
         },
         {
             title: 'Email',
             dataIndex: 'email',
             defaultSortOrder: 'descend',
             sorter: (a, b) => {
                 let emailA = a.email.toLowerCase().trim();
                 let emailB = b.email.toLowerCase().trim();
                 if (emailA > emailB) {
                     return 1;
                 }
                 return -1;
             },
             width: "20%"
         },
         {
             title: 'Số ĐT',
             dataIndex: 'soDt',
             defaultSortOrder: 'descend',
             sorter: (a, b) => {
                 let phoneA = Number(a.soDt)
                 let phoneB = Number(b.soDt);
                 if (phoneA > phoneB) {
                     return 1;
                 }
                 return -1;
             },
             width: "10%"
         },
         {
             title: 'Loại',
             dataIndex: 'maLoaiNguoiDung',
             filters: [
                 {
                     text: 'Khách Hàng',
                     value: 'KhachHang',
                 },
                 {
                     text: 'Quản Trị',
                     value: 'QuanTri',
                 },
             ],
             onFilter: (value, record) => record.maLoaiNguoiDung.indexOf(value) === 0,
             width: "8%"
         },
     ];
 
     return (
         <section className="list container">
            <div className='logout' onClick={logOut}>
                <LogoutOutlined />
            </div>
             <h3 className="c-admin-title">danh sách người dùng</h3>
             <div className="list__inner">
                 <div className="c-btn-add">
                     <button onClick={() => {
                         history.push("/themnguoidung")
                     }}><PlusCircleOutlined />Thêm người dùng</button>
                 </div>
             </div>
             <Table columns={columns} dataSource={data} />
         </section>
    )
}
