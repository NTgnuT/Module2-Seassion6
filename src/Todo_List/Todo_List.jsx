import React, { useState } from "react";

export default function Todo_List() {
  const [jobs, setJobs] = useState(() => {
    const jobLocal = JSON.parse(localStorage.getItem("jobs")) || [];
    return jobLocal;
  });
  const [job, setJob] = useState("");

  // Thêm mới công việc
  const handleAddJob = (e) => {
    e.preventDefault();
    const newJob = {
      id: Math.round(Math.random() * 8999999) + 1000000,
      status: false,
      title: job,
    };
    setJobs([...jobs, newJob]);
    localStorage.setItem("jobs", JSON.stringify(jobs));
    setJob("");
  };

  // Xóa công việc
  const handleDelete = (id) => {
    const updatedJobs = jobs.filter((e) => e.id != id);
    localStorage.setItem("jobs", JSON.stringify(updatedJobs));
    setJobs(updatedJobs);
  };

  return (
    <>
      <>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Todo list</title>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.2.0/mdb.min.css"
          rel="stylesheet"
        />
        <section className="vh-100 gradient-custom">
          <div className="container py-5 h-100">
            <div
              className="row d-flex justify-content-center align-items-center
              h-100"
            >
              <div className="col col-xl-10">
                <div className="card">
                  <div className="card-body p-5">
                    <h3 style={{ textAlign: "center", marginBottom: 40 }}>
                      MINI PROJECT TODO LIST
                    </h3>
                    <form
                      className="d-flex justify-content-center
                              align-items-center mb-4"
                    >
                      <div className="form-outline flex-fill">
                        <input
                          type="text"
                          id="form2"
                          className="form-control"
                          onChange={(e) => setJob(e.target.value)}
                          name="name"
                          value={job}
                        />
                        <label className="form-label" htmlFor="form2">
                          Thêm công việc
                        </label>
                      </div>
                      <button
                        type="submit"
                        className="btn btn-info
                                  ms-2"
                        onClick={(e) => handleAddJob(e)}
                      >
                        Thêm
                      </button>
                    </form>
                    {/* Tabs navs */}
                    <ul
                      className="nav nav-tabs mb-4 pb-2"
                      id="ex1"
                      role="tablist"
                    >
                      <li className="nav-item" role="presentation">
                        <a className="nav-link active">Tất cả công việc</a>
                      </li>
                    </ul>
                    {/* Tabs navs */}
                    {/* Tabs content */}
                    <div className="tab-content">
                      <div className="tab-pane fade show active">
                        <ul className="list-group mb-0">
                          {jobs.map((value, index) => (
                            <li
                              className="list-group-item d-flex
                                          align-items-center border-0 mb-2
                                          rounded justify-content-between"
                              style={{ backgroundColor: "#f4f6f7" }}
                              key={index}
                            >
                              <div>
                                <input
                                  className="form-check-input
                                                  me-2"
                                  type="checkbox"
                                  defaultChecked=""
                                />
                                <span>{value.title}</span>
                              </div>
                              <div>
                                <a
                                  href="#!"
                                  className="text-info"
                                  title="Sửa công việc"
                                >
                                  <i
                                    className="fas
                                                      fa-pencil-alt
                                                      me-3"
                                  />
                                </a>
                                <a
                                  href="#!"
                                  className="text-danger"
                                  title="Xóa công việc"
                                  onClick={() => handleDelete(value.id)}
                                >
                                  <i
                                    className="fas
                                                      fa-trash-alt"
                                  />
                                </a>
                              </div>
                            </li>
                          ))}
                          <li
                            className="list-group-item d-flex
                                          align-items-center border-0 mb-2
                                          justify-content-between"
                            style={{ backgroundColor: "#f4f6f7" }}
                          >
                            <div>
                              <input
                                className="form-check-input"
                                type="checkbox"
                              />
                              Cras justo odio
                            </div>
                            <div>
                              <a
                                href="#!"
                                className="text-info"
                                title="Sửa công việc"
                              >
                                <i
                                  className="fas
                                                      fa-pencil-alt
                                                      me-3"
                                />
                              </a>
                              <a
                                href="#!"
                                className="text-danger"
                                title="Xóa công việc"
                              >
                                <i
                                  className="fas
                                                      fa-trash-alt"
                                />
                              </a>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* Tabs content */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </>
  );
}
