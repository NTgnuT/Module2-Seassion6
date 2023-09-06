import React, { useEffect, useState } from "react";

export default function Edit_Modal({
  idEdit,
  listStudent,
  handleCloseFormEdit,
}) {
  // console.log("id cần edit", idEdit);
  // khai báo state
  const [student, setStudent] = useState({
    studentName: "",
    email: "",
    address: "",
    phoneNumber: "",
  });

  // Tìm kiếm thông tin sinh viên theo id được truyền từ Comp cha
  const findStudent = () => {
    const student = listStudent.find((st) => st.studentId === idEdit);
    console.log(student);
    setStudent(student);
  };

  useEffect(() => {
    findStudent();
  }, []);
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

  // Hàm cập nhật giá trị
  const handleSubmit = (e) => {
    // Ngăn chặn sự kiện mặc định của form
    e.preventDefault();
    // Tạo 1 bản sao mới của danh sách sinh viên để không ảnh hưởng đến danh sách gốc
    const updateList = [...listStudent];

    // Tìm kiếm student theo index
    const studentIndex = updateList.findIndex((st) => st.studentId === idEdit);

    // Nếu như index > -1 tức là có tồn tại
    if (studentIndex > -1) {
      updateList[studentIndex] = { ...updateList[studentIndex], ...student };
    }

    //Lưu lại dữ liệu lên local
    localStorage.setItem("students", JSON.stringify(updateList));

    // Đóng Form
    handleCloseFormEdit();
  };
  return (
    <>
      <div id="addEmployeeModal" className="modal fade">
        <div className="modal-dialog">
          <div className="modal-content">
            <form onSubmit={handleSubmit}>
              <div className="modal-header">
                <h4 className="modal-title">Sửa thông tin sinh viên</h4>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-hidden="true"
                  // onClick={handleClose}
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
                    value={student.studentName}
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
                    value={student.email}
                    onChange={handleChange}
                    name="email"
                  />
                </div>
                <div className="form-group">
                  <label>Địa chỉ</label>
                  <textarea
                    className="form-control"
                    required=""
                    value={student.address}
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
                    value={student.phoneNumber}
                    onChange={handleChange}
                    name="phoneNumber"
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-default"
                  // onClick={handleClose}
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
