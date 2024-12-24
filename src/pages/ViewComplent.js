import React from "react";

const ViewComplent = () => {
  return (
    <>
      <h2 className="bdrbtm">Issue Listing</h2>
      <div className="dahsboarddtl mb-3 p-3 p-md-4">
        <div className="row">
          <div className="col-xl-4">
            <p className="mb-2 text-white dashhd">Complaint No.</p>
            <div className="d-flex mb-2 mb-xl-0">
              <h4 className="m-0 text-white usrid">2314963210</h4>
              <img src="content/images/IVR.svg" alt="ivr" className="mx-2" />
              <span className="badge bg-warning">Pending</span>
            </div>
          </div>
          <div className="col-xl-1"></div>
          <div className="col-xl-7">
            <div className="row gx-0">
              <div className="col-md-7">
                <div className="d-flex aftrline position-relative">
                  <div className="">
                    <p className="dashboardlbl m-0">Raised On</p>
                    <p className="dashboardlbl m-0">Last Updated</p>
                    <p className="dashboardlbl m-0">Relationship Manager</p>
                  </div>
                  <div className="ms-4">
                    <p className="text-white dashboardlbl m-0">
                      02-Dec-2024 05:30 PM
                    </p>
                    <p className="text-white dashboardlbl m-0">
                      05-Dec-2024 01:30 PM
                    </p>
                    <p className="text-white dashboardlbl m-0">Kalpana Yadav</p>
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <h4 className="dashboardlbl mb-1">Assigned To</h4>
                <div className="d-flex align-items-center">
                  <h3 className="text-white usename mb-0 me-2">
                    Ritesh Kumar Singh
                  </h3>
                  <img src="content/images/whatsapp.svg" alt="whatsapp" />
                </div>
                <h4 className="dashboardlbl mb-0">
                  Assigned On : <span> 03-Dec-2024 10:30 AM</span>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-8">
          <div className="bdrbtm">
            <div className="overflow-x-auto">
              <table className="mb-3 viewtbl">
                <thead>
                  <tr>
                    <th colspan="4" className="bg-white">
                      Call Details
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Mobile No.</td>
                    <td>
                      <strong>+91 9832318002</strong>
                    </td>
                    <td>Alt. Mobile No.</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Category</td>
                    <td>
                      <strong>Complaint </strong>
                    </td>
                    <td>Sub Category</td>
                    <td>
                      <strong>Quality Issue</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Consumer Name</td>
                    <td colspan="3">
                      <strong>Raghavendra Prasad Srivastava</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Issue Details</td>
                    <td colspan="3">
                      <strong>
                        If you have any queries or require assistance, please
                        don't hesitate to reach out. Let's maintain a clear and
                        organized record of our daily efforts.
                      </strong>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="overflow-x-auto">
              <table className="w-100 viewtbl">
                <thead>
                  <tr>
                    <th colspan="4" className="bg-white">
                      Additional Details
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>State</td>
                    <td>
                      <strong>Uttar Pradesh</strong>
                    </td>
                    <td>City</td>
                    <td>
                      <strong>Noida</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>District</td>
                    <td></td>
                    <td>Tehsil</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Village/Town</td>
                    <td></td>
                    <td>Post Office</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Address</td>
                    <td colspan="3">
                      <strong>
                        B-14, Sector 67, Noida– 201301 (U.P.) INDIA
                      </strong>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="mb-3">
            <div className="row cusformrow gy-2">
              <div className="col-md-6 col-lg-12 col-xl-6">
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
              <div className="col-md-6 col-lg-12 col-xl-6">
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
                        className="d-flex align-items-center justify-content-center m-0"
                        for="p1"
                      >
                        Pending{" "}
                      </span>
                    </label>
                    <label for="Draft1" className="m-0">
                      <input type="radio" id="Draft1" name="radio1" />
                      <span className="d-flex align-items-center justify-content-center m-0">
                        In Draft
                      </span>
                    </label>
                    <label for="Closed1" className="m-0">
                      <input type="radio" id="Closed1" name="radio1" />
                      <span className="d-flex align-items-center justify-content-center m-0">
                        Closed
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-3">
            <label for="floatingInputValue42">Comments</label>
            <div className="d-flex actv view">
              <input
                type="text"
                className="form-control bdrlft0 withselect rev"
                id="floatingInputValue432"
                placeholder="Type Comment"
                aria-label="Type Comment"
                aria-describedby="Type Comment"
              />
              <div className="dropdown form-select bdrrgt0 withinp rev min-w-140px">
                <button
                  className="btn w-100 text-start p-2 pe-3 dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  All
                </button>
                <ul className="dropdown-menu p-2">
                  <li className="p-0">
                    <a className="p-0 dropdown-item" href="#">
                      All{" "}
                    </a>
                  </li>
                  <li className="p-0">
                    <a className="p-0 dropdown-item" href="#">
                      Only Team <img src="content/images/group_add.svg" alt="grpad" />
                    </a>
                  </li>
                  <li className="p-0">
                    <a className="p-0 dropdown-item" href="#">
                      Public <img src="content/images/public.svg" alt="public" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center mb-3">
            <input type="checkbox" className="me-2" />
            <p className="m-0 noti">Notify to Customer</p>
          </div>
          <a href="#" className="btn btnlinear mb-3">
            Update
          </a>
        </div>
        <div className="col-lg-4">
          <div className="comments overflow-auto">
            <div className="cnmtshd mb-3">
              <div className="d-flex align-items-center justify-content-between actv view ">
                <h5 className="m-0 cmnthd">All Comments</h5>
                <div className="dropdown bg-white">
                  <button
                    className="btn dropdown-toggle d-flex align-items-center justify-content-between"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    All
                  </button>
                  <ul className="dropdown-menu p-2">
                    <li className="p-0">
                      <a className="p-0 dropdown-item" href="#">
                        All{" "}
                      </a>
                    </li>
                    <li className="p-0">
                      <a className="p-0 dropdown-item" href="#">
                        Only Team{" "}
                        <img src="content/images/group_add.svg" alt="grpad" />
                      </a>
                    </li>
                    <li className="p-0">
                      <a className="p-0 dropdown-item" href="#">
                        Public <img src="content/images/public.svg" alt="public" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <span className="badgegray mb10">Yesterday</span>
            </div>
            <div className="cmntbdy">
              <div className="maincmnt">
                <div className="d-flex justify-content-between align-items-center mb-1">
                  <div className="d-flex align-items-center">
                    <img src="content/images/public.svg" alt="public" />
                    <h6 className="m-0 fw-semibold ms-2">Ritesh Sinha</h6>
                  </div>
                  <p className="m-0">10:43</p>
                </div>
                Delays in the IVR response are leading to longer wait times,
                which disrupt the user experience.
              </div>
              <div className="maincmnt">
                <div className="d-flex justify-content-between align-items-center mb-1">
                  <div className="d-flex align-items-center">
                    <img src="content/images/group_add.svg" alt="group_add" />
                    <h6 className="m-0 fw-semibold ms-2">Komal Verma</h6>
                  </div>
                  <p className="m-0">10:43</p>
                </div>
                Delays in the IVR response are leading to longer wait times,
                which disrupt the user experience.
              </div>
              <div className="maincmnt">
                <div className="d-flex justify-content-between align-items-center mb-1">
                  <div className="d-flex align-items-center">
                    <img src="content/images/public.svg" alt="public" />
                    <h6 className="m-0 fw-semibold ms-2">Rahul Kumar</h6>
                  </div>
                  <p className="m-0">10:43</p>
                </div>
                Delays in the IVR response are leading to longer wait times,
                which disrupt the user experience.
              </div>
              <div className="maincmnt">
                <div className="d-flex justify-content-between align-items-center mb-1">
                  <div className="d-flex align-items-center">
                    <img src="content/images/public.svg" alt="public" />
                    <h6 className="m-0 fw-semibold ms-2">Ritesh Sinha</h6>
                  </div>
                  <p className="m-0">10:43</p>
                </div>
                Delays in the IVR response are leading to longer wait times,
                which disrupt the user experience.
              </div>
              <div className="maincmnt">
                <div className="d-flex justify-content-between align-items-center mb-1">
                  <div className="d-flex align-items-center">
                    <img src="content/images/public.svg" alt="public" />
                    <h6 className="m-0 fw-semibold ms-2">Ritesh Sinha</h6>
                  </div>
                  <p>10:43</p>
                </div>
                Delays in the IVR response are leading to longer wait times,
                which disrupt the user experience.
              </div>
              <div className="maincmnt">
                <div className="d-flex justify-content-between align-items-center mb-1">
                  <div className="d-flex align-items-center">
                    <img src="content/images/public.svg" alt="public" />
                    <h6 className="m-0 fw-semibold ms-2">Ritesh Sinha</h6>
                  </div>
                  <p className="m-0">10:43</p>
                </div>
                Delays in the IVR response are leading to longer wait times,
                which disrupt the user experience.
              </div>
              <div className="maincmnt">
                <div className="d-flex justify-content-between align-items-center mb-1">
                  <div className="d-flex align-items-center">
                    <img src="content/images/group_add.svg" alt="group_add" />
                    <h6 className="m-0 fw-semibold ms-2">Komal Verma</h6>
                  </div>
                  <p className="m-0">10:43</p>
                </div>
                Delays in the IVR response are leading to longer wait times,
                which disrupt the user experience.
              </div>
              <div className="maincmnt">
                <div className="d-flex justify-content-between align-items-center mb-1">
                  <div className="d-flex align-items-center">
                    <img src="content/images/public.svg" alt="public" />
                    <h6 className="m-0 fw-semibold ms-2">Rahul Kumar</h6>
                  </div>
                  <p className="m-0">10:43</p>
                </div>
                Delays in the IVR response are leading to longer wait times,
                which disrupt the user experience.
              </div>
              <div className="maincmnt">
                <div className="d-flex justify-content-between align-items-center mb-1">
                  <div className="d-flex align-items-center">
                    <img src="content/images/public.svg" alt="public" />
                    <h6 className="m-0 fw-semibold ms-2">Ritesh Sinha</h6>
                  </div>
                  <p className="m-0">10:43</p>
                </div>
                Delays in the IVR response are leading to longer wait times,
                which disrupt the user experience.
              </div>
              <div className="maincmnt">
                <div className="d-flex justify-content-between align-items-center mb-1">
                  <div className="d-flex align-items-center">
                    <img src="content/images/public.svg" alt="public" />
                    <h6 className="m-0 fw-semibold ms-2">Ritesh Sinha</h6>
                  </div>
                  <p>10:43</p>
                </div>
                Delays in the IVR response are leading to longer wait times,
                which disrupt the user experience.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewComplent;
