import React, { useState } from "react";
import Add_Modal from "./Add_Modal";
import Edit_Modal from "./Edit_Modal";

export default function Table() {
  const [show, setShow] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [idEdit, setIdEdit] = useState("");

  // Lấy danh sách student từ local về
  const [listStudent, setListStudent] = useState(() => {
    const students = JSON.parse(localStorage.getItem("students")) || [];
    return students;
  });

  //hàm hiện form
  const handleShowForm = () => {
    setShow(true);
  };

  //hàm ẩn form
  const handleCloseForm = () => {
    setShow(false);
  };

  // Hàm load lại dữ liệu
  const loadData = (newStudent) => {
    setListStudent(newStudent);
  };

  // Hàm xóa
  const handleDelete = (id) => {
    // B1: Lọc ra mảng mới có các student có id khác với id cần xóa
    const newListStudent = listStudent.filter((st) => st.studentId !== id);

    // B2: Lưu dữ liệu lên local
    localStorage.setItem("students", JSON.stringify(newListStudent));

    // B3: Load lại dữ liệu bằng cách cập nhật lại state
    setListStudent(newListStudent);
  };

  // Hàm hiện form Edit
  const handleShowFormEdit = (id) => {
    // Tạo ra 1 state mới để lưu trữ id cần cập nhật và truyền xuống con
    setIdEdit(id);
    setShowEdit(true);
  };

  // Hàm ẩn form Edit
  const handleCloseFormEdit = () => {
    setShowEdit(false);
  };

  return (
    <>
      {/* Component Form sẽ ở đây */}
      {show ? (
        <Add_Modal
          handleCloseForm={handleCloseForm}
          listStudent={listStudent}
          loadData={loadData}
        />
      ) : (
        <></>
      )}

      {/* Component Form Edit sẽ ở đây */}
      {showEdit ? (
        <Edit_Modal
          idEdit={idEdit}
          listStudent={listStudent}
          handleCloseFormEdit={handleCloseFormEdit}
        />
      ) : (
        <></>
      )}

      <div className="container-xl">
        <div className="table-responsive">
          <div className="table-wrapper">
            <div className="table-title">
              <div className="row">
                <div className="col-sm-6">
                  <h2>
                    Quản lý <b>sinh viên</b>
                  </h2>
                </div>
                <div className="col-sm-6">
                  <button
                    onClick={handleShowForm}
                    href="#addEmployeeModal"
                    className="btn btn-success"
                    data-toggle="modal"
                  >
                    <i className="material-icons"></i>
                    <span>Thêm mới sinh viên</span>
                  </button>
                </div>
              </div>
            </div>
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>
                    <span className="custom-checkbox">
                      <input type="checkbox" id="selectAll" />
                      <label htmlFor="selectAll" />
                    </span>
                  </th>
                  <th>Tên sinh viên</th>
                  <th>Email</th>
                  <th>Địc chỉ</th>
                  <th>Số điện thoại</th>
                  <th>Lựa chọn</th>
                </tr>
              </thead>
              <tbody>
                {listStudent.length === 0 ? (
                  <>
                    <tr>
                      <td colSpan={6}>Không có dữ liệu</td>
                    </tr>
                  </>
                ) : (
                  <>
                    {listStudent.map((st) => (
                      <tr>
                        <td>
                          <span className="custom-checkbox">
                            <input type="checkbox" />
                            <label htmlFor="checkbox5" />
                          </span>
                        </td>
                        <td>{st.studentName}</td>
                        <td>{st.email}</td>
                        <td>{st.address}</td>
                        <td>{st.phoneNumber}</td>
                        <td>
                          <a
                            className="edit"
                            onClick={() => handleShowFormEdit(st.studentId)}
                          >
                            <i className="material-icons" title="Edit">
                              
                            </i>
                          </a>
                          <a
                            className="delete"
                            onClick={() => handleDelete(st.studentId)}
                          >
                            <i
                              className="material-icons"
                              data-toggle="tooltip"
                              title="Delete"
                            >
                              
                            </i>
                          </a>
                        </td>
                      </tr>
                    ))}
                  </>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
