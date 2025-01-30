import React from 'react'

const FarmerList = () => {
  return (
    <>
    <h2 className="bdrbtm">Farmer Listing</h2>
<form asp-area="Farmers" asp-controller="Farmer" asp-action="Upload" asp-antiforgery="true" data-ajax-loading="#dvProcessing"
      data-ajax-failure="onFailed" data-ajax-success="onSuccess"
      data-ajax="true" data-ajax-method="POST" enctype="multipart/form-data">

    <div className="dttbllst position-relative">
        <div className="mb-2">
            <div className="row g-2 align-items-center">
                <div className="col-md-9">
                    <div className="row g-2 gx-3 align-items-center">
                        <div className="col-sm-6 col-md-4 position-relative">
                            <label className="mb-0" for="floatingInputValue43">Search</label>
                            <input type="text" className="form-control minhgt srchinp" id="floatingInputValue43" aria-label="Full Name" aria-describedby="basic-addon1"  />
                            <span className="material-symbols-outlined position-absolute fw-semibold">
                                search
                            </span>
                        </div>
                        <div className="col-sm-5 col-md-4 col-xl-3">
                            <div className="mt-md-3">
                                <div className="row g-2 gx-0 align-items-center">
                                    <div className="col-3 col-sm-4 col-md-5 col-lg-6">
                                        <div className="form-check d-flex align-items-center m-0">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                            <label className="form-check-label mb-0 ms-2 mt-2" for="flexRadioDefault1">
                                                Verified
                                            </label>
                                        </div>
                                    </div>

                                    <div className="col-6 col-sm-5 col-lg-6">
                                        <div className="form-check d-flex align-items-center m-0">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                            <label className="form-check-label mb-0 ms-2 mt-2" for="flexRadioDefault2">
                                                Unverified
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="exclicnrgt exclicnfrmlst mt-md-3">
                                <a className="srchicn1" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                                    <span className="material-symbols-outlined">
                                        filter_alt
                                    </span>
                                </a>
                                <img src="content/images/excel.svg" alt="excel"  />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <table id="Entrytbl" className="FarmerList table dtr-inline nowrap m-0">
            <thead>
                <tr>
                    <th>Mobile Number</th>
                    <th>Farmer Name </th>
                    <th>State</th>
                    <th>District</th>
                    <th>Channel </th>
                    <th>Registered On</th>
                    <th>Verified</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody></tbody>

        </table>


    </div>


    {/* offcanvas start */}

    <div className="farmerlisting offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div className="offcanvas-header">
            <div className="d-flex align-items-center">
                <span className="material-symbols-outlined">
                    filter_alt
                </span>
                <h5 className="offcanvas-title" id="offcanvasExampleLabel">Apply Filter</h5>
            </div>
            <button type="button" className="btn-close pt-0" data-bs-dismiss="offcanvas" aria-label="Close">
                <span className="material-symbols-outlined">
                    close
                </span>
            </button>
        </div>
        <div className="d-flex justify-content-between flex-column h-100">
            <div className="offcanvas-body">
                <div className="row cusformrow gy-3 gx-2">
                    <div className="col-sm-6">
                        <label className="mb-0" for="floatingInputValue1">State  </label>
                        <div className="d-flex">
                             <select className="form-control selectsrch" id="ddlState">
                                <option value="">Select State</option>
                            </select>

                        </div>
                    </div>
                    <div className="col-sm-6">
                        <label className="mb-0" for="floatingInputValue2">District</label>
                        <div className="d-flex">
                            <select className="form-control selectsrch" id="ddlDistrict">
                                <option value="">Select District</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <label className="mb-0" for="floatingInputValue3">Channel</label>
                        <div className="d-flex">
                            <select className="form-select select2lib" id="floatingInputValue3" aria-label="Default select example">
                                <option selected>Select Channel</option>
                                <option value="1">one</option>
                                <option value="2">two</option>
                                <option value="3">three</option>
                            </select>

                        </div>
                    </div>
                    <div className="col-sm-6">
                        <label className="mb-0" for="Call_registered">From Date</label>
                        <div className="position-relative">
                            <input type="text" className="datepicker form-control tbltpinp" id="Call_registered" placeholder="dd-mmm-yyyy"  />
                            <img src="content/images/calendar.svg" alt="calendar" className="position-absolute"  />
                        </div>
                    </div>
                </div>
            </div>
            <div className="offcanvas-footer">
                <div className="d-flex gap-10 bdrtp mb-4">
                    <button href="#" type="submit" className="btn btnlinear">Apply Filter</button>
                    <button type="reset" className="btn btn-outline-primary" id="btnReset">Reset Filter</button>
                </div>
            </div>
        </div>
    </div>
    {/* offcanvas ends */}

	<div id="dvProcessing" style={{display:"none"}}>
        <div className="loaderFixed">
            <img src="content/images/loader.svg" />
        </div>
    </div>

    {/* Farmer Listing Modal Start */}

    <div className="modal fade " id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-header p-0 border-0">
                    <div className="d-flex justify-content-between w-100 mb-2 mb-md-3">
                        <div>
                            <p className="mb-2 lh-base">Already Exists From</p>
                            <div className="usrnum fw-semibold m-0 d-flex align-items-center" id="staticBackdropLabel">
                                +91 9832318002 -
                                <p className="usrname fw-normal m-0 lh-base ms-1">Raghavendra Prasad Singh</p>
                            </div>
                        </div>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                </div>
                <div className="modal-body p-0 overflow-x-auto">
                    <table className="table m-0">
                        <thead>
                            <tr>
                                <th>Complaint No.</th>
                                <th>Category</th>
                                <th>Sub Category</th>
                                <th>Call Registered</th>
                                <th>Issue Details</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr>
                                <td>231496</td>
                                <td>Complaint</td>
                                <td>Quality Issue</td>
                                <td>02-12-2024</td>
                                <td>If you have any queries or requ...</td>
                                <td><span className="badge bg-warning">Pending</span></td>
                                <td>
                                    <div className="d-flex">
                                        <a href="#">
                                            <img src="/images/view.svg" alt="view" />
                                        </a>
                                        <a href="#">
                                            <img src="/images/get-data.svg" alt="data" />
                                        </a>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>231495</td>
                                <td>Query</td>
                                <td>Quality Issue</td>
                                <td>24-11-2024 </td>
                                <td>If you have any queries or requ...</td>
                                <td><span className="badge bg-info">In Draft</span></td>
                                <td>
                                    <div className="d-flex">
                                        <a href="#">
                                            <img src="/images/view.svg" alt="view" />
                                        </a>
                                        <a href="#">
                                            <img src="/images/get-data.svg" alt="data" />
                                        </a>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>23144</td>
                                <td>Complaint</td>
                                <td>Quality Issue</td>
                                <td>20-11-2024</td>
                                <td>If you have any queries or requ...</td>
                                <td><span className="badge bg-grn">Closed</span></td>
                                <td>
                                    <div className="d-flex">
                                        <a href="#">
                                            <img src="/images/view.svg" alt="view" />
                                        </a>
                                        <a href="#">
                                            <img src="/images/get-data.svg" alt="data" />
                                        </a>
                                    </div>
                                </td>
                            </tr>

                          </tbody>
                    </table>
                </div>

            </div>
        </div>
    </div>
</form>
    </>
  )
}

export default FarmerList