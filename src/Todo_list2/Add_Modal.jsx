import React, { useState } from "react";
import { v4 as uuid } from "uuid";

export default function Add_Modal({ handleCloseForm, listStudent, loadData }) {
  // Lấy props từ cha
  // cách 1:  const handleCloseForm = props.handleCloseForm;
  // cách 2: const {handleCloseForm} = props
  // cách 3: viết thẳng {handleCloseForm} lên chữ props

  // hàm đóng form
  const handleClose = () => {
    handleCloseForm();
  };

  // khai báo state
  const [student, setStudent] = useState({
    studentName: "",
    email: "",
    address: "",
    phoneNumber: "",
  });

  // Hàm lắng nghe và lấy dữ liệu từ các ô input
  const handleChange = (e) => {
    // lấy value và name của từng ô input khi nhập
    // Cách 1:
    const name = e.target.name;
    const value = e.target.value;

    // Cách 2:
    // const {name, value} = e.target

    // Setstate cho student
    // Bảo lưu lại giá trị cũ
    setStudent({ ...student, [name]: value });
  };

  // Hàm submit
  const handleSubmit = (e) => {
    // B1: ngăn chặn sự kiện mặc định của form
    e.preventDefault();

    // B2: Tạo đối tượng mới
    const newStudent = { ...student, studentId: uuid() };
    // Bảo lưu các giá trị trong mảng cũ và thêm mảng mới vào
    const newListStudent = [...listStudent, newStudent];

    // B3: Đẩy dữ liệu lên local
    localStorage.setItem("students", JSON.stringify(newListStudent));

    // B4: đóng form
    handleClose();

    // B5: Tải lại dữ liệu từ con lên cha
    loadData(newListStudent);
  };

  return (
    <>
      <div id="addEmployeeModal" className="modal fade">
        <div className="modal-dialog">
          <div className="modal-content">
            <form onSubmit={handleSubmit}>
              <div className="modal-header">
                <h4 className="modal-title">Thêm mới sinh viên</h4>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-hidden="true"
                  onClick={handleClose}
                >
                  ×
                </button>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label>Tên sinh viên</label>
                  <input
                    type="text"
                    className="form-control"
                    required=""
                    onChange={handleChange}
                    name="studentName"
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    required=""
                    onChange={handleChange}
                    name="email"
                  />
                </div>
                <div className="form-group">
                  <label>Địa chỉ</label>
                  <textarea
                    className="form-control"
                    required=""
                    defaultValue={""}
                    onChange={handleChange}
                    name="address"
                  />
                </div>
                <div className="form-group">
                  <label>Số điện thoại</label>
                  <input
                    type="text"
                    className="form-control"
                    required=""
                    onChange={handleChange}
                    name="phoneNumber"
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-default"
                  onClick={handleClose}
                >
                  Close
                </button>
                <button type="submit" className="btn btn-success">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
