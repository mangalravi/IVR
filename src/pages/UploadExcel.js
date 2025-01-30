import React from 'react'

const UploadExcel = () => {
  return (
    <>
    <h2 class="bdrbtm">Upload Farmer File</h2>
    <form asp-area="Farmers" asp-controller="Farmer" asp-action="Upload" asp-antiforgery="true" data-ajax-loading="#dvProcessing"
          data-ajax-failure="onFailed" data-ajax-success="onSuccess"
          data-ajax="true" data-ajax-method="POST" enctype="multipart/form-data">
	<div class="bdrbtm">
	<div class="mb40">
		<div class="row align-items-center gx-2">
				<div class="col-sm-6 col-md-4 position-relative">
			<label>Upload By</label>
				<input type="text" class="form-control validationname" placeholder="Full Name" aria-label="Full Name" aria-describedby="basic-addon1" />
			</div>
		<div class="col-sm-6 col-md-5">
						@* <input type="file" class="form-control" asp-for="ATTACHMENT" /> * /@
			<div class="mainfileupload position-relative">
			<div class='file-input'>
				<input type='file' class="form-control" asp-for="ATTACHMENT" />
				<span class='button'>Browse</span>
				<span class='label' data-js-label>No file Choosen</span>
			</div>
				<div class="btmlbl position-absolute"><strong>Note:</strong><span class="ms-1">Import data in XLSX</span> </div>
					</div>
					</div>
		<div class="col-sm-6 col-md-3">
			<div class="d-flex align-items-center dwnldicn">
				<span>Download Sample File</span>
				<span class="material-symbols-outlined">
					download
				</span>
			</div>
		</div>
		</div>
					</div>
	<div class="d-flex gap-10">
		<button href="#" type="submit" class="btn btnlinear">Upload</button>
		<button type="reset" class="btn btn-outline-primary" id="btnReset">Reset</button>
	</div>
	</div>
    <div class="dttbllst position-relative">
        <div class="row g-2 align-items-center">
            <div class="col-md-9">
                <div class="mb-2">
                    <div class="row g-2 align-items-center">
                        <div class="col-sm-6 col-md-4 col-lg-4 position-relative">
                            <label class="mb-0" for="floatingInputValue43">Search</label>
                            <input type="text" class="form-control minhgt srchinp" id="floatingInputValue43" aria-label="Full Name" aria-describedby="basic-addon1" />
                            <span class="material-symbols-outlined position-absolute fw-semibold">
                                search
                            </span>
                        </div>
                        <div class="col-sm-3">
                            <label class="mb-0" for="Call_registered">From Date</label>
                            <div class="position-relative">
                                <input type="text" class="datepicker form-control tbltpinp minhgt" id="Call_registered" placeholder="dd-mmm-yyyy" />
                                <img src="content/images/calendar.svg" alt="calendar" class="position-absolute" />
                            </div>
                        </div>
                        <div class="col-sm-3">
                            <label class="mb-0" for="Exp_Completion">To Date</label>
                            <div class="position-relative">
                                <input type="text" class="datepicker form-control tbltpinp minhgt" placeholder="dd-mmm-yyyy" id="Exp_Completion" />
                                <img src="content/images/calendar.svg" alt="calendar" class="position-absolute" />
                            </div>
                        </div>
                        <div class="col-sm-2">
                            <a href="#" class="exclicnrgt mt-3">
                                <div class="srchicn1">
                                    <img src="content/images/search.svg" alt="search" / >
                                </div>
                                <img src="content/images/excel.svg" alt="excel" / >

                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
            <table id="Entrytbl" class="FarmerList table dtr-inline nowrap m-0">
            <thead>
                <tr>
                    <th>Farmer Name</th>
                    <th>Uploaded By </th>
                    <th>Uploaded On</th>
                    <th>Record Count</th>
                    <th>Success </th>
                    <th>Failure</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><a href="#">farmer-list-gautam-buddha-nagar-1.excel</a></td>
                    <td>Mukul Kumar Singh </td>
                    <td>06-12-2024</td>
                    <td>100</td>
                    <td>90</td>
                    <td>10 </td>
                    <td><span class="badge bg-grn">Completed</span></td>
                    <td>
                        <span class="material-symbols-outlined">
                            download
                        </span>
                    </td>
                </tr>
                <tr>
                    <td><a href="#">farmer-list-gautam-buddha-nagar-2.excel</a></td>
                    <td>Nitesh Sinha </td>
                    <td>30-11-2024 </td>
                    <td>150</td>
                    <td>145</td>
                    <td>5</td>
                    <td><span class="badge bg-grn">Completed</span></td>
                    <td>
                        <span class="material-symbols-outlined">
                            download
                        </span>
                    </td>
                </tr>
                  <tr>
                    <td><a href="#">farmer-list-gautam-buddha-nagar-1.excel</a></td>
                    <td>Mukul Kumar Singh </td>
                    <td>06-12-2024</td>
                    <td>100</td>
                    <td>90</td>
                    <td>10 </td>
                    <td><span class="badge bg-wrng">Completed</span></td>
                    <td>
                        <span class="material-symbols-outlined">
                            download
                        </span>
                    </td>
                </tr>
                <tr>
                    <td><a href="#">farmer-list-gautam-buddha-nagar-2.excel</a></td>
                    <td>Nitesh Sinha </td>
                    <td>30-11-2024 </td>
                    <td>150</td>
                    <td>145</td>
                    <td>5</td>
                    <td><span class="badge bg-grn">Completed</span></td>
                    <td>
                        <span class="material-symbols-outlined">
                            download
                        </span>
                    </td>
                </tr>
                <tr>
                    <td><a href="#">farmer-list-gautam-buddha-nagar-1.excel</a></td>
                    <td>Mukul Kumar Singh </td>
                    <td>06-12-2024</td>
                    <td>100</td>
                    <td>90</td>
                    <td>10 </td>
                    <td><span class="badge bg-wrng">Completed</span></td>
                    <td>
                        <span class="material-symbols-outlined">
                            download
                        </span>
                    </td>
                </tr>
                <tr>
                    <td><a href="#">farmer-list-gautam-buddha-nagar-2.excel</a></td>
                    <td>Nitesh Sinha </td>
                    <td>30-11-2024 </td>
                    <td>150</td>
                    <td>145</td>
                    <td>5</td>
                    <td><span class="badge bg-grn">Completed</span></td>
                    <td>
                        <span class="material-symbols-outlined">
                            download
                        </span>
                    </td>
                </tr>
                  <tr>
                    <td><a href="#">farmer-list-gautam-buddha-nagar-1.excel</a></td>
                    <td>Mukul Kumar Singh </td>
                    <td>06-12-2024</td>
                    <td>100</td>
                    <td>90</td>
                    <td>10 </td>
                    <td><span class="badge bg-grn">Completed</span></td>
                    <td>
                        <span class="material-symbols-outlined">
                            download
                        </span>
                    </td>
                </tr>
                <tr>
                    <td><a href="#">farmer-list-gautam-buddha-nagar-2.excel</a></td>
                    <td>Nitesh Sinha </td>
                    <td>30-11-2024 </td>
                    <td>150</td>
                    <td>145</td>
                    <td>5</td>
                    <td><span class="badge bg-grn">Completed</span></td>
                    <td>
                        <span class="material-symbols-outlined">
                            download
                        </span>
                    </td>
                </tr>
                  <tr>
                    <td><a href="#">farmer-list-gautam-buddha-nagar-1.excel</a></td>
                    <td>Mukul Kumar Singh </td>
                    <td>06-12-2024</td>
                    <td>100</td>
                    <td>90</td>
                    <td>10 </td>
                    <td><span class="badge bg-grn">Completed</span></td>
                    <td>
                        <span class="material-symbols-outlined">
                            download
                        </span>
                    </td>
                </tr>
                <tr>
                    <td><a href="#">farmer-list-gautam-buddha-nagar-2.excel</a></td>
                    <td>Nitesh Sinha </td>
                    <td>30-11-2024 </td>
                    <td>150</td>
                    <td>145</td>
                    <td>5</td>
                    <td><span class="badge bg-grn">Completed</span></td>
                    <td>
                        <span class="material-symbols-outlined">
                            download
                        </span>
                    </td>
                </tr>
                <tr>
                    <td><a href="#">farmer-list-gautam-buddha-nagar-1.excel</a></td>
                    <td>Mukul Kumar Singh </td>
                    <td>06-12-2024</td>
                    <td>100</td>
                    <td>90</td>
                    <td>10 </td>
                    <td><span class="badge bg-grn">Completed</span></td>
                    <td>
                        <span class="material-symbols-outlined">
                            download
                        </span>
                    </td>
                </tr>
                <tr>
                    <td><a href="#">farmer-list-gautam-buddha-nagar-2.excel</a></td>
                    <td>Nitesh Sinha </td>
                    <td>30-11-2024 </td>
                    <td>150</td>
                    <td>145</td>
                    <td>5</td>
                    <td><span class="badge bg-grn">Completed</span></td>
                    <td>
                        <span class="material-symbols-outlined">
                            download
                        </span>
                    </td>
                </tr>
                  <tr>
                    <td><a href="#">farmer-list-gautam-buddha-nagar-1.excel</a></td>
                    <td>Mukul Kumar Singh </td>
                    <td>06-12-2024</td>
                    <td>100</td>
                    <td>90</td>
                    <td>10 </td>
                    <td><span class="badge bg-grn">Completed</span></td>
                    <td>
                        <span class="material-symbols-outlined">
                            download
                        </span>
                    </td>
                </tr>
                <tr>
                    <td><a href="#">farmer-list-gautam-buddha-nagar-2.excel</a></td>
                    <td>Nitesh Sinha </td>
                    <td>30-11-2024 </td>
                    <td>150</td>
                    <td>145</td>
                    <td>5</td>
                    <td><span class="badge bg-grn">Completed</span></td>
                    <td>
                        <span class="material-symbols-outlined">
                            download
                        </span>
                    </td>
                </tr>
                  <tr>
                    <td><a href="#">farmer-list-gautam-buddha-nagar-1.excel</a></td>
                    <td>Mukul Kumar Singh </td>
                    <td>06-12-2024</td>
                    <td>100</td>
                    <td>90</td>
                    <td>10 </td>
                    <td><span class="badge bg-grn">Completed</span></td>
                    <td>
                        <span class="material-symbols-outlined">
                            download
                        </span>
                    </td>
                </tr>
                <tr>
                    <td><a href="#">farmer-list-gautam-buddha-nagar-2.excel</a></td>
                    <td>Nitesh Sinha </td>
                    <td>30-11-2024 </td>
                    <td>150</td>
                    <td>145</td>
                    <td>5</td>
                    <td><span class="badge bg-grn">Completed</span></td>
                    <td>
                        <span class="material-symbols-outlined">
                            download
                        </span>
                    </td>
                </tr>
                  <tr>
                    <td><a href="#">farmer-list-gautam-buddha-nagar-1.excel</a></td>
                    <td>Mukul Kumar Singh </td>
                    <td>06-12-2024</td>
                    <td>100</td>
                    <td>90</td>
                    <td>10 </td>
                    <td><span class="badge bg-grn">Completed</span></td>
                    <td>
                        <span class="material-symbols-outlined">
                            download
                        </span>
                    </td>
                </tr>
                <tr>
                    <td><a href="#">farmer-list-gautam-buddha-nagar-2.excel</a></td>
                    <td>Nitesh Sinha </td>
                    <td>30-11-2024 </td>
                    <td>150</td>
                    <td>145</td>
                    <td>5</td>
                    <td><span class="badge bg-grn">Completed</span></td>
                    <td>
                        <span class="material-symbols-outlined">
                            download
                        </span>
                    </td>
                </tr>
                  <tr>
                    <td><a href="#">farmer-list-gautam-buddha-nagar-1.excel</a></td>
                    <td>Mukul Kumar Singh </td>
                    <td>06-12-2024</td>
                    <td>100</td>
                    <td>90</td>
                    <td>10 </td>
                    <td><span class="badge bg-grn">Completed</span></td>
                    <td>
                        <span class="material-symbols-outlined">
                            download
                        </span>
                    </td>
                </tr>
                <tr>
                    <td><a href="#">farmer-list-gautam-buddha-nagar-2.excel</a></td>
                    <td>Nitesh Sinha </td>
                    <td>30-11-2024 </td>
                    <td>150</td>
                    <td>145</td>
                    <td>5</td>
                    <td><span class="badge bg-grn">Completed</span></td>
                    <td>
                        <span class="material-symbols-outlined">
                            download
                        </span>
                    </td>
                </tr>
                  <tr>
                    <td><a href="#">farmer-list-gautam-buddha-nagar-1.excel</a></td>
                    <td>Mukul Kumar Singh </td>
                    <td>06-12-2024</td>
                    <td>100</td>
                    <td>90</td>
                    <td>10 </td>
                    <td><span class="badge bg-grn">Completed</span></td>
                    <td>
                        <span class="material-symbols-outlined">
                            download
                        </span>
                    </td>
                </tr>
                <tr>
                    <td><a href="#">farmer-list-gautam-buddha-nagar-2.excel</a></td>
                    <td>Nitesh Sinha </td>
                    <td>30-11-2024 </td>
                    <td>150</td>
                    <td>145</td>
                    <td>5</td>
                    <td><span class="badge bg-grn">Completed</span></td>
                    <td>
                        <span class="material-symbols-outlined">
                            download
                        </span>
                    </td>
                </tr>
                  <tr>
                    <td><a href="#">farmer-list-gautam-buddha-nagar-1.excel</a></td>
                    <td>Mukul Kumar Singh </td>
                    <td>06-12-2024</td>
                    <td>100</td>
                    <td>90</td>
                    <td>10 </td>
                    <td><span class="badge bg-grn">Completed</span></td>
                    <td>
                        <span class="material-symbols-outlined">
                            download
                        </span>
                    </td>
                </tr>
                <tr>
                    <td><a href="#">farmer-list-gautam-buddha-nagar-2.excel</a></td>
                    <td>Nitesh Sinha </td>
                    <td>30-11-2024 </td>
                    <td>150</td>
                    <td>145</td>
                    <td>5</td>
                    <td><span class="badge bg-grn">Completed</span></td>
                    <td>
                        <span class="material-symbols-outlined">
                            download
                        </span>
                    </td>
                </tr>
                  <tr>
                    <td><a href="#">farmer-list-gautam-buddha-nagar-1.excel</a></td>
                    <td>Mukul Kumar Singh </td>
                    <td>06-12-2024</td>
                    <td>100</td>
                    <td>90</td>
                    <td>10 </td>
                    <td><span class="badge bg-grn">Completed</span></td>
                    <td>
                        <span class="material-symbols-outlined">
                            download
                        </span>
                    </td>
                </tr>
                <tr>
                    <td><a href="#">farmer-list-gautam-buddha-nagar-2.excel</a></td>
                    <td>Nitesh Sinha </td>
                    <td>30-11-2024 </td>
                    <td>150</td>
                    <td>145</td>
                    <td>5</td>
                    <td><span class="badge bg-grn">Completed</span></td>
                    <td>
                        <span class="material-symbols-outlined">
                            download
                        </span>
                    </td>
                </tr>
                <tr>
                    <td><a href="#">farmer-list-gautam-buddha-nagar-1.excel</a></td>
                    <td>Mukul Kumar Singh </td>
                    <td>06-12-2024</td>
                    <td>100</td>
                    <td>90</td>
                    <td>10 </td>
                    <td><span class="badge bg-grn">Completed</span></td>
                    <td>
                        <span class="material-symbols-outlined">
                            download
                        </span>
                    </td>
                </tr>
                <tr>
                    <td><a href="#">farmer-list-gautam-buddha-nagar-2.excel</a></td>
                    <td>Nitesh Sinha </td>
                    <td>30-11-2024 </td>
                    <td>150</td>
                    <td>145</td>
                    <td>5</td>
                    <td><span class="badge bg-grn">Completed</span></td>
                    <td>
                        <span class="material-symbols-outlined">
                            download
                        </span>
                    </td>
                </tr>
                  <tr>
                    <td><a href="#">farmer-list-gautam-buddha-nagar-1.excel</a></td>
                    <td>Mukul Kumar Singh </td>
                    <td>06-12-2024</td>
                    <td>100</td>
                    <td>90</td>
                    <td>10 </td>
                    <td><span class="badge bg-grn">Completed</span></td>
                    <td>
                        <span class="material-symbols-outlined">
                            download
                        </span>
                    </td>
                </tr>
                <tr>
                    <td><a href="#">farmer-list-gautam-buddha-nagar-2.excel</a></td>
                    <td>Nitesh Sinha </td>
                    <td>30-11-2024 </td>
                    <td>150</td>
                    <td>145</td>
                    <td>5</td>
                    <td><span class="badge bg-grn">Completed</span></td>
                    <td>
                        <span class="material-symbols-outlined">
                            download
                        </span>
                    </td>
                </tr>
                  <tr>
                    <td><a href="#">farmer-list-gautam-buddha-nagar-1.excel</a></td>
                    <td>Mukul Kumar Singh </td>
                    <td>06-12-2024</td>
                    <td>100</td>
                    <td>90</td>
                    <td>10 </td>
                    <td><span class="badge bg-grn">Completed</span></td>
                    <td>
                        <span class="material-symbols-outlined">
                            download
                        </span>
                    </td>
                </tr>
                <tr>
                    <td><a href="#">farmer-list-gautam-buddha-nagar-2.excel</a></td>
                    <td>Nitesh Sinha </td>
                    <td>30-11-2024 </td>
                    <td>150</td>
                    <td>145</td>
                    <td>5</td>
                    <td><span class="badge bg-grn">Completed</span></td>
                    <td>
                        <span class="material-symbols-outlined">
                            download
                        </span>
                    </td>
                </tr>
                  <tr>
                    <td><a href="#">farmer-list-gautam-buddha-nagar-1.excel</a></td>
                    <td>Mukul Kumar Singh </td>
                    <td>06-12-2024</td>
                    <td>100</td>
                    <td>90</td>
                    <td>10 </td>
                    <td><span class="badge bg-grn">Completed</span></td>
                    <td>
                        <span class="material-symbols-outlined">
                            download
                        </span>
                    </td>
                </tr>
                <tr>
                    <td><a href="#">farmer-list-gautam-buddha-nagar-2.excel</a></td>
                    <td>Nitesh Sinha </td>
                    <td>30-11-2024 </td>
                    <td>150</td>
                    <td>145</td>
                    <td>5</td>
                    <td><span class="badge bg-grn">Completed</span></td>
                    <td>
                        <span class="material-symbols-outlined">
                            download
                        </span>
                    </td>
                </tr>
                  <tr>
                    <td><a href="#">farmer-list-gautam-buddha-nagar-1.excel</a></td>
                    <td>Mukul Kumar Singh </td>
                    <td>06-12-2024</td>
                    <td>100</td>
                    <td>90</td>
                    <td>10 </td>
                    <td><span class="badge bg-grn">Completed</span></td>
                    <td>
                        <span class="material-symbols-outlined">
                            download
                        </span>
                    </td>
                </tr>
                <tr>
                    <td><a href="#">farmer-list-gautam-buddha-nagar-2.excel</a></td>
                    <td>Nitesh Sinha </td>
                    <td>30-11-2024 </td>
                    <td>150</td>
                    <td>145</td>
                    <td>5</td>
                    <td><span class="badge bg-grn">Completed</span></td>
                    <td>
                        <span class="material-symbols-outlined">
                            download
                        </span>
                    </td>
                </tr>
                  <tr>
                    <td><a href="#">farmer-list-gautam-buddha-nagar-1.excel</a></td>
                    <td>Mukul Kumar Singh </td>
                    <td>06-12-2024</td>
                    <td>100</td>
                    <td>90</td>
                    <td>10 </td>
                    <td><span class="badge bg-grn">Completed</span></td>
                    <td>
                        <span class="material-symbols-outlined">
                            download
                        </span>
                    </td>
                </tr>
                <tr>
                    <td><a href="#">farmer-list-gautam-buddha-nagar-2.excel</a></td>
                    <td>Nitesh Sinha </td>
                    <td>30-11-2024 </td>
                    <td>150</td>
                    <td>145</td>
                    <td>5</td>
                    <td><span class="badge bg-grn">Completed</span></td>
                    <td>
                        <span class="material-symbols-outlined">
                            download
                        </span>
                    </td>
                </tr>
                  <tr>
                    <td><a href="#">farmer-list-gautam-buddha-nagar-1.excel</a></td>
                    <td>Mukul Kumar Singh </td>
                    <td>06-12-2024</td>
                    <td>100</td>
                    <td>90</td>
                    <td>10 </td>
                    <td><span class="badge bg-grn">Completed</span></td>
                    <td>
                        <span class="material-symbols-outlined">
                            download
                        </span>
                    </td>
                </tr>
                <tr>
                    <td><a href="#">farmer-list-gautam-buddha-nagar-2.excel</a></td>
                    <td>Nitesh Sinha </td>
                    <td>30-11-2024 </td>
                    <td>150</td>
                    <td>145</td>
                    <td>5</td>
                    <td><span class="badge bg-grn">Completed</span></td>
                    <td>
                        <span class="material-symbols-outlined">
                            download
                        </span>
                    </td>
                </tr>
                <tr>
                    <td><a href="#">farmer-list-gautam-buddha-nagar-1.excel</a></td>
                    <td>Mukul Kumar Singh </td>
                    <td>06-12-2024</td>
                    <td>100</td>
                    <td>90</td>
                    <td>10 </td>
                    <td><span class="badge bg-grn">Completed</span></td>
                    <td>
                        <span class="material-symbols-outlined">
                            download
                        </span>
                    </td>
                </tr>
                <tr>
                    <td><a href="#">farmer-list-gautam-buddha-nagar-2.excel</a></td>
                    <td>Nitesh Sinha </td>
                    <td>30-11-2024 </td>
                    <td>150</td>
                    <td>145</td>
                    <td>5</td>
                    <td><span class="badge bg-grn">Completed</span></td>
                    <td>
                        <span class="material-symbols-outlined">
                            download
                        </span>
                    </td>
                </tr>
               
               </tbody>
        </table>


    </div>



					<div id="dvProcessing" style={{display:"none"}}>
						<div class="loaderFixed">
							<img src="content/images/loader.svg" />
						</div>
					</div>
			

    </form>
    </>
  )
}

export default UploadExcel;