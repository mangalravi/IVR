import React from 'react';
import {Link} from 'react-router-dom';

const EntryList = () => {
  return (
    <>
    <h2 className="bdrbtm">Issue Listing</h2>
<div className="dttbllst position-relative">
    <span className="material-symbols-outlined position-absolute srchicn fw-semibold">
        search
	</span>
    <Link href="#" className="exclicn position-absolute">
    <img src="content/images/excel.svg" alt="excel" />
    </Link>
    <table id="Entrytbl" className="EntryList table dtr-inline nowrap m-0">
        <thead>
            <tr>
                <th>Comp. No.</th>
                <th>Channel Keyword </th>
                <th>Category</th>
                <th>Sub Category</th>
                <th>Registered On</th>
                <th>Compltion date</th>
                <th>Status</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>  231496 </td>
                <td>
                    <div className="d-flex align-items-center  afterline position-relative">
                        <img src="content/images/ivr-dark.svg" alt="ivr"  />
                        <span>+91 9832318002 </span>
                    </div>
                </td>
                <td>Complaint</td>
                <td>Quality Issue</td>
                <td>02-12-2024</td>
                <td>
                    <div className="d-flex align-items-center position-relative">
                    <span>
                    30-11-2024
                  </span>
                        <button type="button" className="border-0 bg-transparent p-0 ms-1 " data-bs-toggle="tooltip" data-bs-placement="top" title="This is expected date as per the rule this might be change any time">
                      <img src="content/images/info.svg" alt="info" />
                    </button>
                                              </div>
                </td>
                <td><span className="badge bg-wrng">Pending</span></td>
                <td>
                    <div className="d-flex align-items-center">
                        <Link href="#"><img src="content/images/view.svg" alt="view"/></Link>
                        <Link href="#"><img src="content/images/edit.svg" alt="edit" /></Link>
						 <Link href="#"><img src="content/images/add.svg" alt="add"/></Link>
                        <Link href="#"><img src="content/images/noti.svg" alt="noti" /></Link>
                    </div>
                </td>
            </tr>
            <tr>
                <td>  231496 </td>
                <td>
                    <div className="d-flex align-items-center  afterline position-relative">
                        <img src="content/images/sms.svg" alt="sms" />
                        <span>+91 9832318002 </span>
                    </div>
                </td>
                <td>Query</td>
                <td>Quality Issue</td>
                <td>24-11-2024 </td>
                <td>
                    <div className="d-flex align-items-center">
                        <span>
                            30-11-2024
                        </span>
                        <button type="button" className="border-0 bg-transparent p-0 ms-1" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="This is expected date as per the rule this might be change any time">
                            <img src="content/images/info.svg" alt="info" />
                        </button>
                    </div>
                </td>
                <td><span className="badge bg-inf">In Draft</span></td>
                <td>
                    <div className="d-flex align-items-center">
                        <Link href="#"><img src="content/images/view.svg" alt="view" /></Link>
                        <Link href="#"><img src="content/images/edit.svg" alt="edit" /></Link>
                        <Link href="#"><img src="content/images/add.svg" alt="add" /></Link>
                        <Link href="#"><img src="content/images/noti.svg" alt="noti" /></Link>
                    </div>
                </td>
            </tr>
            <tr>
                <td>  231494 </td>
                <td>
                    <div className="d-flex align-items-center afterline position-relative">
                        <img src="content/images/mail.svg" alt="mail" />
                        <span>raghavendra.ps@gmail.com </span>
                    </div>
                </td>
                <td>Complaint</td>
                <td>Quality Issue</td>
                <td>20-11-2024</td>
                <td> 26-11-2024 </td>
                <td><span className="badge bg-grn">Closed</span></td>
                <td>
                    <div className="d-flex align-items-center">
                        <Link href="#"><img src="content/images/view.svg" alt="view" /></Link>
                        <Link href="#"><img src="content/images/edit.svg" alt="edit" /></Link>
                        <Link href="#"><img src="content/images/add.svg" alt="add" /></Link>
                        <Link href="#"><img src="content/images/noti.svg" alt="noti" /></Link>
                    </div>
                </td>
            </tr>
            <tr>
                <td>  231494 </td>
                <td>
                    <div className="d-flex align-items-center  afterline position-relative">
                        <img src="content/images/whatsapp.svg" alt="whatsapp" />
                        <span>+91 9832318002</span>
                    </div>
                </td>
                <td>Suggestion</td>
                <td>Quality Issue</td>
                <td>20-11-2024</td>
                <td>
                    <div className="d-flex align-items-center">
                        <span>
                            30-11-2024
                        </span>
                        <button type="button" className="border-0 bg-transparent p-0 ms-1" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="This is expected date as per the rule this might be change any time" data-bs-original-title="" title="" aria-describedby="tooltip327408">
                            <img src="content/images/info.svg" alt="info" />
                        </button>
                    </div>
                </td>
                <td><span className="badge bg-wrng">Pending</span></td>
                <td>
                    <div className="d-flex align-items-center">
                        <Link href="#"><img src="content/images/view.svg" alt="view" /></Link>
                        <Link href="#"><img src="content/images/edit.svg" alt="edit" /></Link>
                        <Link href="#"><img src="content/images/add.svg" alt="add" /></Link>
                        <Link href="#"><img src="content/images/noti.svg" alt="noti" /></Link>
                    </div>
                </td>
            </tr>
            <tr>
                <td>  231496 </td>
                <td>
                    <div className="d-flex align-items-center  afterline position-relative">
                        <img src="content/images/ivr-dark.svg" alt="ivr"  />
                        <span>+91 9832318002 </span>
                    </div>
                </td>
                <td>Complaint</td>
                <td>Quality Issue</td>
                <td>02-12-2024</td>
                <td>
                    <div className="d-flex align-items-center">
                    <span>
                    30-11-2024
                  </span>
                    <button type="button" className="border-0 bg-transparent p-0 ms-1" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="This is expected date as per the rule this might be change any time" data-bs-original-title="" title="" aria-describedby="tooltip327408">
                      <img src="content/images/info.svg" alt="info" />
                    </button>
                    </div>
                </td>
                <td><span className="badge bg-wrng">Pending</span></td>
                <td>
                    <div className="d-flex align-items-center">
						 <Link href="#"><img src="content/images/view.svg" alt="view"/></Link>
                        <Link href="#"><img src="content/images/edit.svg" alt="edit" /></Link>
						 <Link href="#"><img src="content/images/add.svg" alt="add"/></Link>
                        <Link href="#"><img src="content/images/noti.svg" alt="noti" /></Link>
                    </div>
                </td>
            </tr>
            <tr>
                <td>  231496 </td>
                <td>
                    <div className="d-flex align-items-center  afterline position-relative">
                        <img src="content/images/sms.svg" alt="sms" />
                        <span>+91 9832318002 </span>
                    </div>
                </td>
                <td>Query</td>
                <td>Quality Issue</td>
                <td>24-11-2024 </td>
                <td>
                    <div className="d-flex align-items-center">
                        <span>
                            30-11-2024
                        </span>
                        <button type="button" className="border-0 bg-transparent p-0 ms-1" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="This is expected date as per the rule this might be change any time" data-bs-original-title="" title="" aria-describedby="tooltip327408">
                            <img src="content/images/info.svg" alt="info" />
                        </button>
                    </div>
                </td>
                <td><span className="badge bg-inf">In Draft</span></td>
                <td>
                    <div className="d-flex align-items-center">
                        <Link href="#"><img src="content/images/view.svg" alt="view" /></Link>
                        <Link href="#"><img src="content/images/edit.svg" alt="edit" /></Link>
                        <Link href="#"><img src="content/images/add.svg" alt="add" /></Link>
                        <Link href="#"><img src="content/images/noti.svg" alt="noti" /></Link>
                    </div>
                </td>
            </tr>
            <tr>
                <td>  231494 </td>
                <td>
                    <div className="d-flex align-items-center  afterline position-relative">
                        <img src="content/images/mail.svg" alt="mail" />
                        <span>raghavendra.ps@gmail.com </span>
                    </div>
                </td>
                <td>Complaint</td>
                <td>Quality Issue</td>
                <td>20-11-2024</td>
                <td> 26-11-2024 </td>
                <td><span className="badge bg-grn">Closed</span></td>
                <td>
                    <div className="d-flex align-items-center">
                        <Link href="#"><img src="content/images/view.svg" alt="view" /></Link>
                        <Link href="#"><img src="content/images/edit.svg" alt="edit" /></Link>
                        <Link href="#"><img src="content/images/add.svg" alt="add" /></Link>
                        <Link href="#"><img src="content/images/noti.svg" alt="noti" /></Link>
                    </div>
                </td>
            </tr>
            <tr>
                <td>  231494 </td>
                <td>
                    <div className="d-flex align-items-center  afterline position-relative">
                        <img src="content/images/whatsapp.svg" alt="whatsapp" />
                        <span>+91 9832318002</span>
                    </div>
                </td>
                <td>Suggestion</td>
                <td>Quality Issue</td>
                <td>20-11-2024</td>
                <td>
                    <div className="d-flex align-items-center">
                        <span>
                            30-11-2024
                        </span>
                        <button type="button" className="border-0 bg-transparent p-0 ms-1" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="This is expected date as per the rule this might be change any time" data-bs-original-title="" title="" aria-describedby="tooltip327408">
                            <img src="content/images/info.svg" alt="info" />
                        </button>
                    </div>
                </td>
                <td><span className="badge bg-wrng">Pending</span></td>
                <td>
                    <div className="d-flex align-items-center">
                        <Link href="#"><img src="content/images/view.svg" alt="view" /></Link>
                        <Link href="#"><img src="content/images/edit.svg" alt="edit" /></Link>
                        <Link href="#"><img src="content/images/add.svg" alt="add" /></Link>
                        <Link href="#"><img src="content/images/noti.svg" alt="noti" /></Link>
                    </div>
                </td>
            </tr>
            <tr>
                <td>  231496 </td>
                <td>
                    <div className="d-flex align-items-center  afterline position-relative">
                        <img src="content/images/ivr-dark.svg" alt="ivr" />
                        <span>+91 9832318002 </span>
                    </div>
                </td>
                <td>Complaint</td>
                <td>Quality Issue</td>
                <td>02-12-2024</td>
                <td>
                    <div className="d-flex align-items-center">
                        <span>
                            30-11-2024
                        </span>
                        <button type="button" className="border-0 bg-transparent p-0 ms-1" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="This is expected date as per the rule this might be change any time" data-bs-original-title="" title="" aria-describedby="tooltip327408">
                            <img src="content/images/info.svg" alt="info" />
                        </button>
                    </div>
                </td>
                <td><span className="badge bg-wrng">Pending</span></td>
                <td>
                    <div className="d-flex align-items-center">
                        <Link href="#"><img src="content/images/view.svg" alt="view" /></Link>
                        <Link href="#"><img src="content/images/edit.svg" alt="edit" /></Link>
                        <Link href="#"><img src="content/images/add.svg" alt="add" /></Link>
                        <Link href="#"><img src="content/images/noti.svg" alt="noti" /></Link>
                    </div>
                </td>
            </tr>
            <tr>
                <td>  231496 </td>
                <td>
                    <div className="d-flex align-items-center  afterline position-relative">
                        <img src="content/images/sms.svg" alt="sms" />
                        <span>+91 9832318002 </span>
                    </div>
                </td>
                <td>Query</td>
                <td>Quality Issue</td>
                <td>24-11-2024 </td>
                <td>
                    <div className="d-flex align-items-center">
                        <span>
                            30-11-2024
                        </span>
                        <button type="button" className="border-0 bg-transparent p-0 ms-1" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="This is expected date as per the rule this might be change any time" data-bs-original-title="" title="" aria-describedby="tooltip327408">
                            <img src="content/images/info.svg" alt="info" />
                        </button>
                    </div>
                </td>
                <td><span className="badge bg-inf">In Draft</span></td>
                <td>
                    <div className="d-flex align-items-center">
                        <Link href="#"><img src="content/images/view.svg" alt="view" /></Link>
                        <Link href="#"><img src="content/images/edit.svg" alt="edit" /></Link>
                        <Link href="#"><img src="content/images/add.svg" alt="add" /></Link>
                        <Link href="#"><img src="content/images/noti.svg" alt="noti" /></Link>
                    </div>
                </td>
            </tr>
            <tr>
                <td>  231494 </td>
                <td>
                    <div className="d-flex align-items-center  afterline position-relative">
                        <img src="content/images/mail.svg" alt="mail" />
                        <span>raghavendra.ps@gmail.com </span>
                    </div>
                </td>
                <td>Complaint</td>
                <td>Quality Issue</td>
                <td>20-11-2024</td>
                <td> 26-11-2024 </td>
                <td><span className="badge bg-grn">Closed</span></td>
                <td>
                    <div className="d-flex align-items-center">
                        <Link href="#"><img src="content/images/view.svg" alt="view" /></Link>
                        <Link href="#"><img src="content/images/edit.svg" alt="edit" /></Link>
                        <Link href="#"><img src="content/images/add.svg" alt="add" /></Link>
                        <Link href="#"><img src="content/images/noti.svg" alt="noti" /></Link>
                    </div>
                </td>
            </tr>
            <tr>
                <td>  231494 </td>
                <td>
                    <div className="d-flex align-items-center  afterline position-relative">
                        <img src="content/images/whatsapp.svg" alt="whatsapp" />
                        <span>+91 9832318002</span>
                    </div>
                </td>
                <td>Suggestion</td>
                <td>Quality Issue</td>
                <td>20-11-2024</td>
                <td>
                    <div className="d-flex align-items-center">
                        <span>
                            30-11-2024
                        </span>
                        <button type="button" className="border-0 bg-transparent p-0 ms-1" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="This is expected date as per the rule this might be change any time" data-bs-original-title="" title="" aria-describedby="tooltip327408">
                            <img src="content/images/info.svg" alt="info" />
                        </button>
                    </div>
                </td>
                <td><span className="badge bg-wrng">Pending</span></td>
                <td>
                    <div className="d-flex align-items-center">
                        <Link href="#"><img src="content/images/view.svg" alt="view" /></Link>
                        <Link href="#"><img src="content/images/edit.svg" alt="edit" /></Link>
                        <Link href="#"><img src="content/images/add.svg" alt="add" /></Link>
                        <Link href="#"><img src="content/images/noti.svg" alt="noti" /></Link>
                    </div>
                </td>
            </tr>
             <tr>
                <td>  231496 </td>
                <td>
                    <div className="d-flex align-items-center  afterline position-relative">
                        <img src="content/images/ivr-dark.svg" alt="ivr"  />
                        <span>+91 9832318002 </span>
                    </div>
                </td>
                <td>Complaint</td>
                <td>Quality Issue</td>
                <td>02-12-2024</td>
                <td>
                    <div className="d-flex align-items-center">
                    <span>
                    30-11-2024
                  </span>
                    <button type="button" className="border-0 bg-transparent p-0 ms-1" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="This is expected date as per the rule this might be change any time" data-bs-original-title="" title="" aria-describedby="tooltip327408">
                      <img src="content/images/info.svg" alt="info" />
                    </button>
                    </div>
                </td>
                <td><span className="badge bg-wrng">Pending</span></td>
                <td>
                    <div className="d-flex align-items-center">
						 <Link href="#"><img src="content/images/view.svg" alt="view"/></Link>
                        <Link href="#"><img src="content/images/edit.svg" alt="edit" /></Link>
						 <Link href="#"><img src="content/images/add.svg" alt="add"/></Link>
                        <Link href="#"><img src="content/images/noti.svg" alt="noti" /></Link>
                    </div>
                </td>
            </tr>
            <tr>
                <td>  231496 </td>
                <td>
                    <div className="d-flex align-items-center  afterline position-relative">
                        <img src="content/images/sms.svg" alt="sms" />
                        <span>+91 9832318002 </span>
                    </div>
                </td>
                <td>Query</td>
                <td>Quality Issue</td>
                <td>24-11-2024 </td>
                <td>
                    <div className="d-flex align-items-center">
                        <span>
                            30-11-2024
                        </span>
                        <button type="button" className="border-0 bg-transparent p-0 ms-1" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="This is expected date as per the rule this might be change any time" data-bs-original-title="" title="" aria-describedby="tooltip327408">
                            <img src="content/images/info.svg" alt="info" />
                        </button>
                    </div>
                </td>
                <td><span className="badge bg-inf">In Draft</span></td>
                <td>
                    <div className="d-flex align-items-center">
                        <Link href="#"><img src="content/images/view.svg" alt="view" /></Link>
                        <Link href="#"><img src="content/images/edit.svg" alt="edit" /></Link>
                        <Link href="#"><img src="content/images/add.svg" alt="add" /></Link>
                        <Link href="#"><img src="content/images/noti.svg" alt="noti" /></Link>
                    </div>
                </td>
            </tr>
            <tr>
                <td>  231494 </td>
                <td>
                    <div className="d-flex align-items-center  afterline position-relative">
                        <img src="content/images/mail.svg" alt="mail" />
                        <span>raghavendra.ps@gmail.com </span>
                    </div>
                </td>
                <td>Complaint</td>
                <td>Quality Issue</td>
                <td>20-11-2024</td>
                <td> 26-11-2024 </td>
                <td><span className="badge bg-grn">Closed</span></td>
                <td>
                    <div className="d-flex align-items-center">
                        <Link href="#"><img src="content/images/view.svg" alt="view" /></Link>
                        <Link href="#"><img src="content/images/edit.svg" alt="edit" /></Link>
                        <Link href="#"><img src="content/images/add.svg" alt="add" /></Link>
                        <Link href="#"><img src="content/images/noti.svg" alt="noti" /></Link>
                    </div>
                </td>
            </tr>
            <tr>
                <td>  231494 </td>
                <td>
                    <div className="d-flex align-items-center  afterline position-relative">
                        <img src="content/images/whatsapp.svg" alt="whatsapp" />
                        <span>+91 9832318002</span>
                    </div>
                </td>
                <td>Suggestion</td>
                <td>Quality Issue</td>
                <td>20-11-2024</td>
                <td>
                    <div className="d-flex align-items-center">
                        <span>
                            30-11-2024
                        </span>
                        <button type="button" className="border-0 bg-transparent p-0 ms-1" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="This is expected date as per the rule this might be change any time" data-bs-original-title="" title="" aria-describedby="tooltip327408">
                            <img src="content/images/info.svg" alt="info" />
                        </button>
                    </div>
                </td>
                <td><span className="badge bg-wrng">Pending</span></td>
                <td>
                    <div className="d-flex align-items-center">
                        <Link href="#"><img src="content/images/view.svg" alt="view" /></Link>
                        <Link href="#"><img src="content/images/edit.svg" alt="edit" /></Link>
                        <Link href="#"><img src="content/images/add.svg" alt="add" /></Link>
                        <Link href="#"><img src="content/images/noti.svg" alt="noti" /></Link>
                    </div>
                </td>
            </tr>
            <tr>
                <td>  231496 </td>
                <td>
                    <div className="d-flex align-items-center  afterline position-relative">
                        <img src="content/images/ivr-dark.svg" alt="ivr" />
                        <span>+91 9832318002 </span>
                    </div>
                </td>
                <td>Complaint</td>
                <td>Quality Issue</td>
                <td>02-12-2024</td>
                <td>
                    <div className="d-flex align-items-center">
                        <span>
                            30-11-2024
                        </span>
                        <button type="button" className="border-0 bg-transparent p-0 ms-1" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="This is expected date as per the rule this might be change any time" data-bs-original-title="" title="" aria-describedby="tooltip327408">
                            <img src="content/images/info.svg" alt="info" />
                        </button>
                    </div>
                </td>
                <td><span className="badge bg-wrng">Pending</span></td>
                <td>
                    <div className="d-flex align-items-center">
                        <Link href="#"><img src="content/images/view.svg" alt="view" /></Link>
                        <Link href="#"><img src="content/images/edit.svg" alt="edit" /></Link>
                        <Link href="#"><img src="content/images/add.svg" alt="add" /></Link>
                        <Link href="#"><img src="content/images/noti.svg" alt="noti" /></Link>
                    </div>
                </td>
            </tr>
            <tr>
                <td>  231496 </td>
                <td>
                    <div className="d-flex align-items-center  afterline position-relative">
                        <img src="content/images/sms.svg" alt="sms" />
                        <span>+91 9832318002 </span>
                    </div>
                </td>
                <td>Query</td>
                <td>Quality Issue</td>
                <td>24-11-2024 </td>
                <td>
                    <div className="d-flex align-items-center">
                        <span>
                            30-11-2024
                        </span>
                        <button type="button" className="border-0 bg-transparent p-0 ms-1" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="This is expected date as per the rule this might be change any time" data-bs-original-title="" title="" aria-describedby="tooltip327408">
                            <img src="content/images/info.svg" alt="info" />
                        </button>
                    </div>
                </td>
                <td><span className="badge bg-inf">In Draft</span></td>
                <td>
                    <div className="d-flex align-items-center">
                        <Link href="#"><img src="content/images/view.svg" alt="view" /></Link>
                        <Link href="#"><img src="content/images/edit.svg" alt="edit" /></Link>
                        <Link href="#"><img src="content/images/add.svg" alt="add" /></Link>
                        <Link href="#"><img src="content/images/noti.svg" alt="noti" /></Link>
                    </div>
                </td>
            </tr>
            <tr>
                <td>  231494 </td>
                <td>
                    <div className="d-flex align-items-center  afterline position-relative">
                        <img src="content/images/mail.svg" alt="mail" />
                        <span>raghavendra.ps@gmail.com </span>
                    </div>
                </td>
                <td>Complaint</td>
                <td>Quality Issue</td>
                <td>20-11-2024</td>
                <td> 26-11-2024 </td>
                <td><span className="badge bg-grn">Closed</span></td>
                <td>
                    <div className="d-flex align-items-center">
                        <Link href="#"><img src="content/images/view.svg" alt="view" /></Link>
                        <Link href="#"><img src="content/images/edit.svg" alt="edit" /></Link>
                        <Link href="#"><img src="content/images/add.svg" alt="add" /></Link>
                        <Link href="#"><img src="content/images/noti.svg" alt="noti" /></Link>
                    </div>
                </td>
            </tr>
            <tr>
                <td>  231494 </td>
                <td>
                    <div className="d-flex align-items-center  afterline position-relative">
                        <img src="content/images/whatsapp.svg" alt="whatsapp" />
                        <span>+91 9832318002</span>
                    </div>
                </td>
                <td>Suggestion</td>
                <td>Quality Issue</td>
                <td>20-11-2024</td>
                <td>
                    <div className="d-flex align-items-center">
                        <span>
                            30-11-2024
                        </span>
                        <button type="button" className="border-0 bg-transparent p-0 ms-1" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="This is expected date as per the rule this might be change any time" data-bs-original-title="" title="" aria-describedby="tooltip327408">
                            <img src="content/images/info.svg" alt="info" />
                        </button>
                    </div>
                </td>
                <td><span className="badge bg-wrng">Pending</span></td>
                <td>
                    <div className="d-flex align-items-center">
                        <Link href="#"><img src="content/images/view.svg" alt="view" /></Link>
                        <Link href="#"><img src="content/images/edit.svg" alt="edit" /></Link>
                        <Link href="#"><img src="content/images/add.svg" alt="add" /></Link>
                        <Link href="#"><img src="content/images/noti.svg" alt="noti" /></Link>
                    </div>
                </td>
            </tr>
           </tbody>
    </table>
</div>
 </>
  )
}

export default EntryList