import React from 'react'

const ViewFarmerDetails = () => {
  return (
    <div className="farmerdetail">
    <h2 className="bdrbtm">Upload Farmer File</h2>
    <div className="bdrbtm pb30">
        <div className="row align-items-center">
            <div className="col-md-2">
                <div className="usrimg">
                    <img src="content/images/farmerimg.png" alt="farmerimg" />
                </div>
            </div>
            <div className="col-sm-8">
                <div className="frmrdt">
                    <h1 className="usrnm mb-0">Ramesh Kumar Sonkar</h1>
                    <p className="usrid mb-0">ID :<span> #349988399</span></p>
                    <h4 className="prgshdng mb-1 fw-normal">Profile Details Completion</h4>
                    <div className="progress-bar-container mb-1">
                        <div id="progress-bar" className="progress-bar"></div>
                    </div>
                    <div className="d-flex align-items-center">
                        <span id="progress-text" className="progress-text">100%</span>
                        <span className="ms-1">Completed</span>
                    </div>
                </div>
            </div>
            <div className="col-sm-4 col-md-2">
                <div className="position-relative pntern">
                    <img src="content/images/points-earned.png" alt="points-earned" className="w-100" />
                    <span className="fw-bold text-white position-absolute ">Points earned : <strong>23</strong></span>
                </div>
            </div>
        </div>
    </div>

    <h3 className="tblhd">Personal Information</h3>
    <div className="overflow-x-auto">
        <table className="w-100 oddclr" id="personal-info-table">
            <tr>
                <td>Date of Birth</td>
                <td id="dob">Mar 1, 1991 <span className="tblbadge">Assumed</span></td>
                <td>Education</td>
            </tr>
            <tr>
                <td>Marital Status</td>
                <td id="marital-status"></td>
                <td>Gender</td>
                <td id="gender">Male</td>
            </tr>
            <tr>
                <td>Religion</td>
                <td id="religion">Hindu</td>
                <td>Caste</td>
                <td id="caste">-</td>
            </tr>
            <tr>
                <td>Mobile Number</td>
                <td id="mobile">+91 9982 827828 <img src="content/images/whatsapp.svg" alt="whatsapp" className="whtspimg" /></td>
                <td>Alt. Mobile Number</td>
                <td id="alt-mobile">+91 9982 827828</td>
            </tr>
            <tr>
                <td>Email ID</td>
                <td id="email">ramesh.sonkar@gmail.com</td>
                <td>Alt. Email ID</td>
                <td id="alt-email">-</td>
            </tr>
            <tr>
                <td>Bank Account</td>
                <td id="bank">Yes</td>
                <td>ITR Filing</td>
                <td id="itr">Yes</td>
            </tr>
        </table>
    </div>

    <h3 className="tblhd">Family Information</h3>
    <div className="overflow-x-auto">
        <table className="w-100 hdclr" id="family-info-table">
            <thead>
                <tr>
                    <th>SR</th>
                    <th>Member's Name</th>
                    <th>Relation</th>
                    <th>Date of Birth</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td id="member-name-1">Mr. Somendra Kumar Sonkar</td>
                    <td id="relation-1">Brother</td>
                    <td id="dob-1">Mar 1, 1991</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td id="member-name-2">Mrs. Vimla Devi</td>
                    <td id="relation-2">Mother</td>
                    <td id="dob-2">-</td>
                </tr>
            </tbody>
        </table>
    </div>

    <h3 className="tblhd">Address Information</h3>
    <div className="overflow-x-auto mb-0">
        <table className="w-100 oddclr" id="address-info-table">
            <tr>
                <td>Pin code</td>
                <td id="pin-code">283121</td>
                <td>State</td>
                <td id="state">Uttar Pradesh</td>
            </tr>
            <tr>
                <td>District</td>
                <td id="district">Agra</td>
                <td>Tehsil</td>
                <td id="tehsil">Agra Dehat</td>
            </tr>
            <tr>
                <td>Block</td>
                <td id="block">Kheragarh</td>
                <td>Village</td>
                <td id="village">Kheragarh</td>
            </tr>
            <tr>
                <td>Address</td>
                <td colspan="3" id="address">Mdr 127w, Khairagarh, Agra - 283121 (Uttar Pradesh)</td>
            </tr>
            <tr>
                <td>Landmark</td>
                <td colspan="3" id="landmark">Near HP Petrol Pump</td>
            </tr>
        </table>
    </div>
</div>

  )
}

export default ViewFarmerDetails