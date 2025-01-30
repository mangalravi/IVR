import React from "react";

const RegisterComplement = () => {
  return (
    <>
      <h2 className="bdrbtm">Manage Entry</h2>
      <form>
        <div className="bdrbtm">
          <label className="required">Channel</label>
          <ul
            className="d-grid d-sm-flex nav nav-pills"
            id="pills-tab"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <button
                className="nav-link d-flex align-items-center justify-content-center active justify-content-sm-start w-100 fw-medium"
                id="pills-IVR-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-IVR"
                type="button"
                role="tab"
                aria-controls="pills-IVR"
                aria-selected="true"
              >
                <img src="content/images/IVR.svg" alt="IVR" />
                IVR
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link d-flex align-items-center justify-content-center justify-content-sm-start w-100 fw-medium"
                id="pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-profile"
                type="button"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                <img src="content/images/SMS.svg" alt="SMS" />
                SMS
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link d-flex align-items-center justify-content-center justify-content-sm-start w-100 fw-medium"
                id="pills-contact-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-contact"
                type="button"
                role="tab"
                aria-controls="pills-contact"
                aria-selected="false"
              >
                <img src="content/images/mail.svg" alt="mail" />
                Email
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link d-flex align-items-center justify-content-center justify-content-sm-start w-100 fw-medium"
                id="pills-disabled-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-disabled"
                type="button"
                role="tab"
                aria-controls="pills-disabled"
                aria-selected="false"
              >
                <img src="content/images/whatsapp.svg" alt="whatsapp" />
                WhatsApp
              </button>
            </li>
          </ul>
        </div>
        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-IVR"
            role="tabpanel"
            aria-labelledby="pills-IVR-tab"
            tabindex="0"
          >
            <h3>Call Details</h3>
            <div className="bdrbtm">
              <div className="row cusformrow gy-2 align-items-end">
                <div className="col-sm-6 col-md-4 col-lg-3">
                  <div className="valideinpparent">
                    <div className="d-flex align-items-center justify-content-between">
                      <label
                        htmlFor="floatingInputValue41"
                        className="required"
                      >
                        Mobile Number
                      </label>
                      <span className="complentviewtxt">
                        3 Complaints raised
                      </span>
                    </div>
                    <div className="d-flex position-relative actv">
                      <select
                        className="form-select bdrrgt0 withinp"
                        aria-label="Select country code"
                      >
                        <option selected>+91</option>
                        <option value="+92">+92</option>
                        <option value="+93">+93</option>
                        <option value="+94">+94</option>
                      </select>
                      <input
                        type="text"
                        className="form-control withselect inpvalid"
                        id="floatingInputValue41"
                        placeholder="Mobile Number"
                        aria-label="Mobile number input"
                        aria-describedby="basic-addon1"
                      />
                      <button
                        type="button"
                        className="bg-transparent border-0 p-0 position-absolute"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                        aria-label="Search profile"
                      >
                        <img
                          src="content/images/profile_search.svg"
                          alt="profile search icon"
                          className="topab"
                        />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3">
                  <label for="floatingInputValue42">Alt. Mobile Number</label>
                  <div className="d-flex actv">
                    <select
                      className="form-select bdrrgt0 withinp "
                      aria-label="Default select example"
                    >
                      <option selected>+91</option>
                      <option value="+92">+92</option>
                      <option value="+93">+93</option>
                      <option value="+94">+94</option>
                    </select>
                    <input
                      type="text"
                      className="form-control bdrlft0 withselect"
                      id="floatingInputValue42"
                      placeholder="10 Digit Mobile No."
                      aria-label="10 Digit Mobile No."
                      aria-describedby="basic-addon1"
                    />
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3 position-relative">
                  <label for="floatingInputValue43" className="required">
                    Consumer Name{" "}
                  </label>
                  <input
                    type="text"
                    className="form-control validationname"
                    id="floatingInputValue43"
                    placeholder="Full Name"
                    aria-label="Full Name"
                    aria-describedby="basic-addon1"
                  />
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3">
                  <label for="floatingInputValue43">Email Id</label>
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInputValue43"
                    placeholder="Enter Email"
                    aria-label="Enter Email"
                    aria-describedby="basic-addon1"
                  />
                </div>
                <div className="col-xl-6">
                  <div className="row cusformrow gy-2">
                    <div className="col-sm-6">
                      <label for="floatingInputValue44" className="required">
                        Category{" "}
                      </label>
                      <div className="d-flex">
                        <select
                          className="form-select select2lib"
                          id="floatingInputValue44"
                          aria-label="Default select example"
                        >
                          <option selected>Select Category</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <label for="floatingInputValue45">Sub Category</label>
                      <div className="d-flex">
                        <select
                          className="form-select"
                          id="floatingInputValue45"
                          aria-label="Default select example"
                        >
                          <option selected>Select Sub Category</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="row cusformrow gy-2 align-items-baseline">
                        <div className="col-sm-6">
                          <label for="Call_registered">Call Registered</label>
                          <div className="position-relative">
                            <input
                              type="text"
                              className="datepicker form-control"
                              id="Call_registered"
                              placeholder="dd-mmm-yyyy"
                              disabled
                            />
                            <img
                              src="content/images/calendar.svg"
                              alt="calendar"
                              className="position-absolute"
                            />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="d-flex align-items-baseline">
                            <label for="Exp_Completion">Completion Date</label>
                            <button
                              type="button"
                              className="border-0 bg-transparent p-0 ms-1"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="This is expected date as per the rule this might be change any time"
                            >
                              <img src="content/images/info.svg" alt="info" />
                            </button>
                          </div>
                          <div className="position-relative">
                            <input
                              type="text"
                              className="datepicker form-control"
                              placeholder="dd-mmm-yyyy"
                              id="Exp_Completion"
                            />
                            <img
                              src="content/images/calendar.svg"
                              alt="calendar"
                              className="position-absolute"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <label for="status1" className="required">
                        Status{" "}
                      </label>
                      <div className="mydict" id="status1">
                        <div className="d-flex">
                          <label for="Pending1" className="m-0">
                            <input
                              type="radio"
                              id="Pending1"
                              name="radio1"
                              checked=""
                            />
                            <span
                              className="d-flex align-items-center justify-content-cent er m-0"
                              for="p1"
                            >
                              Pending{" "}
                            </span>
                          </label>
                          <label for="Draft1" className="m-0">
                            <input type="radio" id="Draft1" name="radio1" />
                            <span className="d-flex align-items-center justify -content-center m-0">
                              In Draft
                            </span>
                          </label>
                          <label for="Closed1" className="m-0">
                            <input type="radio" id="Closed1" name="radio1" />
                            <span className="d-flex align-items-center justify- content-center m-0">
                              Closed
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6">
                  <label>Issue Details</label>
                  <textarea
                    className="form-control h-100"
                    placeholder="Enter Remark"
                    id="floatingTextarea1"
                    rows="4"
                  ></textarea>
                </div>
              </div>
            </div>
            <h3>Additional Details</h3>
            <div className="bdrbtm">
              <div className="row cusformrow gy-2">
                <div className="col-sm-6 col-md-4 col-lg-3">
                  <label for="floatingInputValue1" className="required">
                    State{" "}
                  </label>
                  <div className="d-flex">
                    <select
                      className="form-select select2lib"
                      id="floatingInputValue1"
                      aria-label="Default select example"
                    >
                      <option selected>select</option>
                      <option value="1">one</option>
                      <option value="2">two</option>
                      <option value="3">three</option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3">
                  <label for="floatingInputValue2">City </label>
                  <div className="d-flex">
                    <select
                      className="form-select"
                      id="floatingInputValue2"
                      aria-label="Default select example"
                    >
                      <option selected>select</option>
                      <option value="1">one</option>
                      <option value="2">two</option>
                      <option value="3">three</option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3">
                  <label for="floatingInputValue3">District </label>
                  <div className="d-flex">
                    <select
                      className="form-select"
                      id="floatingInputValue3"
                      aria-label="Default select example"
                    >
                      <option selected>select</option>
                      <option value="1">one</option>
                      <option value="2">two</option>
                      <option value="3">three</option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3">
                  <label for="floatingInputValue4">Tehsil </label>
                  <div className="d-flex">
                    <select
                      className="form-select"
                      id="floatingInputValue4"
                      aria-label="Default select example"
                    >
                      <option selected>select</option>
                      <option value="1">one</option>
                      <option value="2">two</option>
                      <option value="3">three</option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3">
                  <label for="floatingInputValue5">Village/Town </label>
                  <div className="d-flex">
                    <select
                      className="form-select"
                      id="floatingInputValue5"
                      aria-label="Default select example"
                    >
                      <option selected>select</option>
                      <option value="1">one</option>
                      <option value="2">two</option>
                      <option value="3">three</option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3">
                  <label for="floatingInputValue6">Post Office </label>
                  <div className="d-flex">
                    <select
                      className="form-select"
                      id="floatingInputValue6"
                      aria-label="Default select example"
                    >
                      <option selected>select</option>
                      <option value="1">one</option>
                      <option value="2">two</option>
                      <option value="3">three</option>
                    </select>
                  </div>
                </div>
                <div className="col-xl-6">
                  <label for="floatingInputValue7">Address</label>
                  <input
                    type="text"
                    id="floatingInputValue7"
                    placeholder="Apartment, building, floor etc."
                    className="form-control"
                  />
                </div>
              </div>
            </div>
            <div className="d-flex gap-10">
              <a href="#" className="btn btnlinear">
                Submit
              </a>
              <button className="btn btn-outline-primary">Reset</button>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
            tabindex="0"
          >
            <h3>Call Details</h3>
            <div className="bdrbtm">
              <div className="row cusformrow gy-2 align-items-end">
                <div className="col-sm-6 col-md-4 col-lg-3 ">
                  <div className="valideinpparent">
                    <div className="d-flex align-items-center justify-content-between">
                      <label for="floatingInputValue41" className="required">
                        Mobile Number{" "}
                      </label>
                      <span className="complentviewtxt">
                        3 Complaint raised
                      </span>
                    </div>
                    <div className="d-flex position-relative actv">
                      <select
                        className="form-select bdrrgt0 withinp "
                        aria-label="Default select example"
                      >
                        <option selected>+91</option>
                        <option value="+92">+92</option>
                        <option value="+93">+93</option>
                        <option value="+94">+94</option>
                      </select>
                      <input
                        type="text"
                        className="form-control withselect inpvalid"
                        id="floatingInputValue41"
                        placeholder="Mobile Number"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                      <button
                        type="button"
                        className="bg-transparent border-0 p-0 position-absolute"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                      >
                        <img
                          src="content/images/profile_search.svg"
                          alt="profile_search"
                          className="topab"
                        />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3 position-relative">
                  <label for="floatingInputValue9" className="required">
                    Consumer Name{" "}
                  </label>
                  <input
                    type="text"
                    className="form-control validationname"
                    id="floatingInputValue9"
                    placeholder="Full Name"
                    aria-label="Full Name"
                    aria-describedby="basic-addon1"
                  />
                </div>
                <div className="col-sm-6 col-md-3">
                  <label for="floatingInputValue91">Email Id </label>
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInputValue91"
                    placeholder="Enter Email"
                    aria-label="Enter Email"
                    aria-describedby="basic-addon1"
                  />
                </div>
                <div className="col-xl-6">
                  <div className="row cusformrow gy-2">
                    <div className="col-sm-6">
                      <label for="floatingInputValue10" className="required">
                        Category{" "}
                      </label>
                      <div className="d-flex">
                        <select
                          className="form-select"
                          aria-label="Default select example"
                          id="floatingInputValue10"
                        >
                          <option selected>Select Category</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <label for="floatingInputValue11">Sub Category</label>
                      <div className="d-flex">
                        <select
                          className="form-select"
                          id="floatingInputValue11"
                          aria-label="Default select example"
                        >
                          <option selected>Select Sub Category</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="row cusformrow gy-2 align-items-baseline">
                        <div className="col-sm-6">
                          <label for="Call_Registered">Call Registered</label>
                          <div className="position-relative">
                            <input
                              type="text"
                              className="datepicker form-control"
                              id="Call_Registered"
                              placeholder="dd-mmm-yyyy"
                              disabled
                            />
                            <img
                              src="content/images/calendar.svg"
                              alt="calendar"
                              className="position-absolute"
                            />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="d-flex align-items-baseline">
                            <label for="Exp_Completion">Completion Date</label>
                            <button
                              type="button"
                              className="border-0 bg-transparent p-0 ms-1"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="This is expected date as per the rule this might be change any time"
                            >
                              <img src="content/images/info.svg" alt="info" />
                            </button>
                          </div>
                          <div className="position-relative">
                            <input
                              type="text"
                              className="datepicker form-control"
                              id="Ex_Completion"
                              placeholder="dd-mmm-yyyy"
                            />
                            <img
                              src="content/images/calendar.svg"
                              alt="calendar"
                              className="position-absolute"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <label for="status2" className="required">
                        Status{" "}
                      </label>
                      <div className="mydict" id="status2">
                        <div className="d-flex">
                          <label for="Pending2" className="m-0 ">
                            <input
                              type="radio"
                              id="Pending2"
                              name="radio2"
                              checked
                            />
                            <span
                              className="d-flex align-items-center justify-content-c enter m-0 checked"
                              for="p2"
                            >
                              Pending{" "}
                            </span>
                          </label>
                          <label for="Draft2" className="m-0">
                            <input type="radio" id="Draft2" name="radio2" />
                            <span className="d-flex align-items-center justify -content-center m-0">
                              In Draft
                            </span>
                          </label>
                          <label for="Closed2" className="m-0">
                            <input type="radio" id="Closed2" name="radio2" />
                            <span className="d-flex align-items-center justify- content-center m-0">
                              Closed
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6">
                  <label for="floatingTextarea2">Issue Details</label>
                  <textarea
                    className="form-control h-100"
                    placeholder="Enter Remark"
                    id="floatingTextarea2"
                    rows="4"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="d-flex gap-10">
              <a href="#" className="btn btnlinear">
                Submit
              </a>
              <button className="btn btn-outline-primary">Reset</button>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-contact"
            role="tabpanel"
            aria-labelledby="pills-contact-tab"
            tabindex="0"
          >
            <h3>Call Details</h3>
            <div className="bdrbtm">
              <div className="row cusformrow mb-2">
                <div className="col-sm-6 col-md-4 col-lg-3 ">
                  <div className="valideinpparent position-relative">
                    <div className="d-flex align-items-center justify-content-between">
                      <label for="floatingInputValue41" className="required">
                        Email Id{" "}
                      </label>
                      <span className="complentviewtxt">
                        3 Complaint raised
                      </span>
                    </div>
                    <div className="d-flex position-relative actv">
                      <input
                        type="text"
                        className="form-control withselect validationemail"
                        id="floatingInputValue41"
                        placeholder="Email Id"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                      <button
                        type="button"
                        className="bg-transparent border-0 p-0 position-absolute"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                      >
                        <img
                          src="content/images/profile_search.svg"
                          alt="profile_search"
                          className="topab"
                        />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3 position-relative">
                  <label for="floatingInputValue15" className="required">
                    Consumer Name{" "}
                  </label>
                  <input
                    type="text"
                    className="form-control bdrlft0 validationname"
                    id="floatingInputValue15"
                    placeholder="Consumer Name "
                  />
                </div>
              </div>
              <div className="row cusformrow gy-2 align-items-end">
                <div className="col-xl-6">
                  <div className="row cusformrow gy-2">
                    <div className="col-sm-6">
                      <label for="floatingInputValue16" className="required">
                        Category{" "}
                      </label>
                      <div className="d-flex">
                        <select
                          className="form-select"
                          id="floatingInputValue16"
                          aria-label="Default select example"
                        >
                          <option selected>Select Category</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <label for="floatingInputValue17">Sub Category</label>
                      <div className="d-flex">
                        <select
                          className="form-select"
                          id="floatingInputValue17"
                          aria-label="Default select example"
                        >
                          <option selected>Select Sub Category</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="row cusformrow gy-2 align-items-baseline">
                        <div className="col-sm-6">
                          <label for="Call Registered">Call Registered</label>
                          <div className="position-relative">
                            <input
                              type="text"
                              className="datepicker form-control"
                              placeholder="dd-mmm-yyyy"
                              disabled
                            />
                            <img
                              src="content/images/calendar.svg"
                              alt="calendar"
                              className="position-absolute"
                            />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="d-flex align-items-baseline">
                            <label for="Exp_Completion">Completion Date</label>
                            <button
                              type="button"
                              className="border-0 bg-transparent p-0 ms-1"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="This is expected date as per the rule this might be change any time"
                            >
                              <img src="content/images/info.svg" alt="info" />
                            </button>
                          </div>
                          <div className="position-relative">
                            <input
                              type="text"
                              className="datepicker form-control"
                              placeholder="dd-mmm-yyyy"
                            />
                            <img
                              src="content/images/calendar.svg"
                              alt="calendar"
                              className="position-absolute"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <label for="status3" className="required">
                        Status{" "}
                      </label>
                      <div className="mydict" id="status3">
                        <div className="d-flex">
                          <label className="m-0">
                            <input type="radio" name="radio3" checked="" />
                            <span className="d-flex align-items-center justif y-content-center m-0">
                              Pending{" "}
                            </span>
                          </label>
                          <label className="m-0">
                            <input type="radio" name="radio3" />
                            <span className="d-flex align-items-ce nter justify-content-center m-0">
                              In Draft
                            </span>
                          </label>
                          <label className="m-0">
                            <input type="radio" name="radio3" />
                            <span className="d-flex align-items-ce nter justify-content-center m-0">
                              Closed
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6">
                  <label>Issue Details</label>
                  <textarea
                    className="form-control h-100"
                    placeholder="Enter Remark"
                    id="floatingTextarea3"
                    rows="4"
                  ></textarea>
                </div>
              </div>
            </div>
            <h3>Additional Details</h3>
            <div className="bdrbtm">
              <div className="row cusformrow gy-2">
                <div className="col-sm-6 col-md-4 col-lg-3">
                  <label for="floatingInputValue18">Mobile Number </label>
                  <div className="d-flex position-relative actv">
                    <select className="form-select bdrrgt0 withinp">
                      <option selected>+91</option>
                      <option value="+92">+92</option>
                      <option value="+93">+93</option>
                      <option value="+94">+94</option>
                    </select>
                    <input
                      type="text"
                      className="form-control withselect"
                      id="floatingInputValue18"
                      placeholder="Mobile Number"
                      aria-label="Mobile Number"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3">
                  <label for="floatingInputValue19">State </label>
                  <div className="d-flex">
                    <select
                      className="form-select"
                      id="floatingInputValue19"
                      aria-label="Default select example"
                    >
                      <option selected>select</option>
                      <option value="1">one</option>
                      <option value="2">two</option>
                      <option value="3">three</option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3">
                  <label for="floatingInputValue20">City </label>
                  <div className="d-flex">
                    <select
                      className="form-select"
                      id="floatingInputValue20"
                      aria-label="Default select example"
                    >
                      <option selected>select</option>
                      <option value="1">one</option>
                      <option value="2">two</option>
                      <option value="3">three</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex gap-10">
              <a href="#" className="btn btnlinear">
                Submit
              </a>
              <button className="btn btn-outline-primary">Reset</button>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-disabled"
            role="tabpanel"
            aria-labelledby="pills-disabled-tab"
            tabindex="0"
          >
            <h3>Call Details</h3>
            <div className="bdrbtm">
              <div className="row cusformrow gy-2 align-items-end">
                <div className="col-sm-6 col-md-4 col-lg-3 ">
                  <div className="valideinpparent">
                    <div className="d-flex align-items-center justify-content-between">
                      <label for="floatingInputValue41" className="required">
                        Mobile Number{" "}
                      </label>
                      <span className="complentviewtxt">
                        3 Complaint raised
                      </span>
                    </div>
                    <div className="d-flex position-relative actv">
                      <select
                        className="form-select bdrrgt0 withinp "
                        aria-label="Default select example"
                      >
                        <option selected="">+91</option>
                        <option value="+92">+92</option>
                        <option value="+93">+93</option>
                        <option value="+94">+94</option>
                      </select>
                      <input
                        type="text"
                        className="form-control withselect inpvalid"
                        id="floatingInputValue41"
                        placeholder="Mobile Number"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                      <button
                        type="button"
                        className="bg-transparent border-0 p-0 position-absolute"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                      >
                        <img
                          src="/images/profile_search.svg"
                          alt="profile_search"
                          className="topab"
                        />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3 position-relative">
                  <label for="floatingInputValue9" className="required">
                    Consumer Name{" "}
                  </label>
                  <input
                    type="text"
                    className="form-control validationname"
                    id="floatingInputValue9"
                    placeholder="Full Name"
                    aria-label="Full Name"
                    aria-describedby="basic-addon1"
                  />
                </div>
                <div className="col-sm-6 col-md-3">
                  <label for="floatingInputValue91">Email Id </label>
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInputValue91"
                    placeholder="Enter Email"
                    aria-label="Enter Email"
                    aria-describedby="basic-addon1"
                  />
                </div>
                <div className="col-xl-6">
                  <div className="row cusformrow gy-2">
                    <div className="col-sm-6">
                      <label for="floatingInputValue10" className="required">
                        Category{" "}
                      </label>
                      <div className="d-flex">
                        <select
                          className="form-select"
                          aria-label="Default select example"
                          id="floatingInputValue10"
                        >
                          <option selected>Select Category</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <label for="floatingInputValue11">Sub Category</label>
                      <div className="d-flex">
                        <select
                          className="form-select"
                          id="floatingInputValue11"
                          aria-label="Default select example"
                        >
                          <option selected>Select Sub Category</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="row cusformrow gy-2 align-items-baseline">
                        <div className="col-sm-6">
                          <label for="Call_Registered">Call Registered</label>
                          <div className="position-relative">
                            <input
                              type="text"
                              className="datepicker form-control flatpickr-input"
                              id="Call_Registered"
                              placeholder="dd-mmm-yyyy"
                              disabled=""
                              readonly="readonly"
                            />
                            <img
                              src="content/images/calendar.svg"
                              alt="calendar"
                              className="position-absolute"
                            />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="d-flex align-items-baseline">
                            <label for="Exp_Completion">Completion Date</label>
                            <button
                              type="button"
                              className="border-0 bg-transparent p-0 ms-1"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="This is expected date as per the rule this might be change any time"
                            >
                              <img src="content/images/info.svg" alt="info" />
                            </button>
                          </div>
                          <div className="position-relative">
                            <input
                              type="text"
                              className="datepicker form-control flatpickr-input"
                              id="Ex_Completion"
                              placeholder="dd-mmm-yyyy"
                              readonly="readonly"
                            />
                            <img
                              src="content/images/calendar.svg"
                              alt="calendar"
                              className="position-absolute"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <label for="status4" className="required">
                        Status{" "}
                      </label>
                      <div className="mydict" id="status4">
                        <div className="d-flex">
                          <label for="Pending4" className="m-0">
                            <input
                              type="radio"
                              id="Pending4"
                              name="radio4"
                              checked=""
                            />
                            <span className="d-flex align-items-center justify-content-cent er m-0">
                              Pending{" "}
                            </span>
                          </label>
                          <label for="Draft4" className="m-0">
                            <input type="radio" id="Draft4" name="radio4" />
                            <span className="d-flex align-items-center justify -content-center m-0">
                              In Draft
                            </span>
                          </label>
                          <label for="Closed4" className="m-0">
                            <input type="radio" id="Closed4" name="radio4" />
                            <span className="d-flex align-items-center justify- content-center m-0">
                              Closed
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6">
                  <label for="floatingTextarea2">Issue Details</label>
                  <textarea
                    className="form-control h-100"
                    placeholder="Enter Remark"
                    id="floatingTextarea2"
                    rows="4"
                  ></textarea>
                </div>
              </div>
            </div>
            <h3>Additional Details</h3>
            <div className="bdrbtm">
              <div className="row cusformrow gy-2">
                <div className="col-sm-6 col-lg-3">
                  <label for="floatingInputValue24">State </label>
                  <div className="d-flex">
                    <select
                      className="form-select"
                      id="floatingInputValue24"
                      aria-label="Default select example"
                    >
                      <option selected>select</option>
                      <option value="1">one</option>
                      <option value="2">two</option>
                      <option value="3">three</option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                  <label for="floatingInputValue25">City </label>
                  <div className="d-flex">
                    <select
                      className="form-select"
                      id="floatingInputValue25"
                      aria-label="Default select example"
                    >
                      <option selected>select</option>
                      <option value="1">one</option>
                      <option value="2">two</option>
                      <option value="3">three</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex gap-10">
              <a href="#" className="btn btnlinear">
                Submit
              </a>
              <button className="btn btn-outline-primary">Reset</button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default RegisterComplement;
