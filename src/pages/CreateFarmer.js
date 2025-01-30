import React from 'react'

const CreateFarmer = () => {
  return (
    <>
    <h2 className="bdrbtm">Create Farmer</h2>
    <form>
        <h3>Personal Information</h3>
        <div className="row g-3">
            <div className="col-sm-6 position-relative">
                <label className="required">Farmer Name</label>
                <input type="text" className="form-control validationname" placeholder="Farmer Full Name" aria-label="Full Name" aria-describedby="basic-addon1" />
            </div>
             <div className="col-6 col-md-3 col-xl-2">
                        <label className=" required" for="Call_registered">Date of Birth</label>
                        <div className="position-relative">
                            <input type="text" className="prevdatepicker form-control bigfs" id="Call_registered" placeholder="dd-mmm-yyyy" />
                            <img src="content/images/calendar.svg" alt="calendar" className="position-absolute" />
                        </div>
                    </div>
                    <div className="col-6 col-md-3 col-xl-2">
                        <label className=" required" for="floatingInputValue3">Education</label>
                        <div className="d-flex">
                            <select className="form-select" id="floatingInputValue3" aria-label="Default select example">
                                <option selected>Select</option>
                                <option value="1">10th</option>
                                <option value="2">12th</option>
                                <option value="3">Graduation</option>
                                <option value="3">Post Graduation</option>
                            </select>
    
                        </div>
                    </div>
                    <div className="col-6 col-md-3 col-lg-4 col-xl-2">
                        <label className=" required" for="floatingInputValue3">Marital Status</label>
                        <div className="d-flex">
                            <select className="form-select" id="floatingInputValue3" aria-label="Default select example">
                                <option selected>Select</option>
                                <option value="1">Married</option>
                                <option value="2">Single</option>
                                </select>
                        </div>
                    </div>
                
          <div className="col-6 col-md-3 col-lg-4 col-xl-2">
                        <label className="" for="floatingInputValue3">Gender</label>
                        <div className="d-flex">
                            <select className="form-select" id="floatingInputValue3" aria-label="Default select example">
                                <option selected>Select Gender</option>
                                <option value="1">Male</option>
                                <option value="2">Female</option>
                                <option value="3">Other</option>
                            </select>
    
                        </div>
                    </div>
                    <div className="col-6 col-md-3 col-lg-4 col-xl-2">
                        <label className="" for="floatingInputValue3">Religion</label>
                        <div className="d-flex">
                            <select className="form-select" id="floatingInputValue3" aria-label="Default select example">
                                <option selected>Select Religion</option>
                                <option value="1">Hindu</option>
                                <option value="2">Muslim</option>
                                <option value="3">Sikh</option>
                                <option value="3">Christian</option>
                            </select>
    
                        </div>
                    </div>
                    <div className="col-6 col-md-3 col-lg-4 col-xl-2">
                        <label className="" for="floatingInputValue3">Caste</label>
                        <div className="d-flex">
                            <select className="form-select" id="floatingInputValue3" aria-label="Default select example">
                                <option selected>Select Caste</option>
                                <option value="1">Genral</option>
                                <option value="2">Obc</option>
                                <option value="3">Sc</option>
                                <option value="4">St</option>
                                <option value="5">Other</option>
                            </select>
                        </div>
                    </div>
              
            <div className="col-6 col-md-4 col-lg-4 col-xl-3">
                <div className="valideinpparent">
                     <label for="floatingInputValue141" className="required">Mobile Number </label>
                    <div className="d-flex position-relative actv">
                     <input type="text" className="form-control inpvalid" id="floatingInputValue41" placeholder="Mobile Number" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                </div>
            </div>
            <div className="col-6 col-md-4 col-lg-4 col-xl-3">
      <label for="floatingInputValue142">Alt. Mobile Number</label>
                <div className="d-flex actv">
                    <input type="text" className="form-control bdrlft0" id="floatingInputValue142" placeholder="alt Mobile No." aria-label="10 Digit Mobile No." aria-describedby="basic-addon1" />
    
                </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 position-relative">
                <label for="floatingInputValue143" className="required">Email ID</label>
                <input type="text" className="form-control validationemail" id="floatingInputValue143" placeholder="Enter Email" aria-label="Enter Email" aria-describedby="basic-addon1" />
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 position-relative">
                <label for="floatingInputValue1433" >Alternate Email ID</label>
                <input type="text" className="form-control validationemail" id="floatingInputValue1433" placeholder="Alt Email" aria-label="Alt Email" aria-describedby="basic-addon1" />
            </div>
            <div className="col-6 col-md-4 col-lg-3 col-xl-2">
                <label className="" for="floatingInputValue73">Bank Account</label>
                <div className="d-flex">
                    <select className="form-select" id="floatingInputValue73" aria-label="Default select example">
                        <option selected>Select</option>
                        <option value="1">Yes</option>
                        <option value="2">No</option>
                    </select>
    
                </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3 col-xl-2">
                <label className="" for="floatingInputValue53">ITR Filling</label>
                <div className="d-flex">
                    <select className="form-select" id="floatingInputValue53" aria-label="Default select example">
                        <option selected>Select</option>
                        <option value="1">Yes</option>
                        <option value="2">No</option>
                    </select>
    
                </div>
            </div>
        </div>
    <div className="bdrbtm bdrtp mt-3 btltclr">
            <h3>Family Information</h3>
            <div className="overflow-x-auto">
                <table className="createtbl w-100">
                    <thead>
                        <tr>
                            <th>SR.</th>
                            <th>Member's Name</th>
                            <th>Relation</th>
                            <th>Date of Birth</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><input type="text" className="form-control" value="1" disabled /></td >
                            <td><input type="text" className="form-control" /></td >
                            <td><input type="text" className="form-control" /></td >
                            <td>
                                <div className="d-flex align-items-center gap-2">
                                    <div className="position-relative">
                                        <input type="text" className="prevdatepicker form-control bigfs"  placeholder="dd-mmm-yyyy" />
                                        <img src="content/images/calendar.svg" alt="calendar" className="position-absolute" />
                                    </div>
                                    <button id="add-family-member" className="btn btnfmly d-flex align-items-center">
                                        Family <span className="material-symbols-outlined">
                                            add
                                        </span>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
    </div>
        <h3>Address Information</h3>
        <div className="row g-3 align-items-end">
            <div className="col-6 col-sm-3 position-relative">
                <label className="required">Pin Code</label>
                <input type="text" className="form-control pincode" placeholder="Enter Pin Code" aria-label="Pin Code" aria-describedby="basic-addon1" />
            </div>
            <div className="col-6 col-sm-3">
                <label className="required" for="floatingInputValue23">State</label>
                <div className="d-flex">
                    <select className="form-select select2lib" id="floatingInputValue23" aria-label="Default select example">
                        <option selected>Select State</option>
                        <option value="1">one</option>
                        <option value="2">two</option>
                        <option value="3">three</option>
                    </select>
    
                </div>
            </div>
            <div className="col-6 col-sm-3">
                <label className="required" for="floatingInputValue243">District</label>
                <div className="d-flex">
                    <select className="form-select select2lib" id="floatingInputValue243" aria-label="Default select example">
                        <option selected>Select District</option>
                        <option value="1">one</option>
                        <option value="2">two</option>
                        <option value="3">three</option>
                    </select>
    
                </div>
            </div>
               <div className="col-6 col-sm-3">
                <label className="required" for="floatingInputValue253">Tehsil</label>
                <div className="d-flex">
                    <select className="form-select select2lib" id="floatingInputValue253" aria-label="Default select example">
                        <option selected>Select Tehsil</option>
                        <option value="1">one</option>
                        <option value="2">two</option>
                        <option value="3">three</option>
                    </select>
    
                </div>
            </div>
            <div className="col-xl-6">
                <div className="row g-3">
                    <div className="col-6 col-md-3 col-xl-6">
                        <label className="required" for="floatingInputValue2323">Block</label>
                        <div className="d-flex">
                            <select className="form-select select2lib" id="floatingInputValue2323" aria-label="Default select example">
                                <option selected>Select Block</option>
                                <option value="1">one</option>
                                <option value="2">two</option>
                                <option value="3">three</option>
                            </select>
    
                        </div>
                    </div>
                    <div className="col-6 col-md-3 col-xl-6">
                        <label className="required" for="floatingInputValue283">Village</label>
                        <div className="d-flex">
                            <select className="form-select select2lib" id="floatingInputValue283" aria-label="Default select example">
                                <option selected>Select Village</option>
                                <option value="1">one</option>
                                <option value="2">two</option>
                                <option value="3">three</option>
                            </select>
    
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-12 position-relative">
                        <label>Landmark</label>
                        <input type="text" className="form-control"  />
                    </div>
                </div>
            </div>
            <div className="col-xl-6 d-flex">
                <div className="w-100">
                    <label className="required">Address</label>
                    <textarea className="form-control mh-auto" placeholder="Enter Remark" id="floatingTextarea1" rows="4"></textarea>
                </div>
            </div>
            </div>
          
          
    
    </form>
    
    </>
  )
}

export default CreateFarmer