import React from "react";

export default function Delete_Modal() {
  return (
    <>
      <div id="deleteEmployeeModal" className="modal fade">
        <div className="modal-dialog">
          <div className="modal-content">
            <form>
              <div className="modal-header">
                <h4 className="modal-title">Xóa nhân viên</h4>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-hidden="true"
                >
                  x
                </button>
              </div>
              <div className="modal-body">
                <p>Bạn chắc chắn muốn xóa sinh viên&lt;ST001&gt;?</p>
              </div>
              <div className="modal-footer">
                <input
                  type="button"
                  className="btn btn-default"
                  data-dismiss="modal"
                  defaultValue="Hủy"
                />
                <input
                  type="submit"
                  className="btn btn-danger"
                  defaultValue="Xóa"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
