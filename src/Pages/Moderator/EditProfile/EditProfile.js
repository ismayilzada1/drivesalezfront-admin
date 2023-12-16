import React from 'react';

const EditProfile = () => {
    return (
        <div id="content-page" className="content-page">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="iq-card">
                            <div className="iq-card-body p-0">
                                <div className="iq-edit-list">
                                    <ul className="iq-edit-profile d-flex nav nav-pills">
                                        <li className="col-md-3 p-0">
                                            <a className="nav-link active" data-toggle="pill"
                                               href="#personal-information">
                                                Personal Information
                                            </a>
                                        </li>
                                        <li className="col-md-3 p-0">
                                            <a className="nav-link" data-toggle="pill" href="#chang-pwd">
                                                Change Password
                                            </a>
                                        </li>
                                        <li className="col-md-3 p-0">
                                            <a className="nav-link" data-toggle="pill" href="#emailandsms">
                                                Email and SMS
                                            </a>
                                        </li>
                                        <li className="col-md-3 p-0">
                                            <a className="nav-link" data-toggle="pill" href="#manage-contact">
                                                Manage Contact
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="iq-edit-list-data">
                            <div className="tab-content">
                                <div className="tab-pane fade active show" id="personal-information" role="tabpanel">
                                    <div className="iq-card">
                                        <div className="iq-card-header d-flex justify-content-between">
                                            <div className="iq-header-title">
                                                <h4 className="card-title">Personal Information</h4>
                                            </div>
                                        </div>
                                        <div className="iq-card-body">
                                            <form>
                                                <div className="form-group row align-items-center">
                                                    <div className="col-md-12">
                                                        <div className="profile-img-edit">
                                                            <img className="profile-pic" src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1702598400&semt=sph"
                                                                 alt="profile-pic"/>
                                                            <div className="p-image">
                                                                <i className="ri-pencil-line upload-button"></i>
                                                                <input className="file-upload" type="file"
                                                                       accept="image/*"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className=" row align-items-center">
                                                    <div className="form-group col-sm-6">
                                                        <label htmlFor="fname">First Name:</label>
                                                        <input type="text" className="form-control" id="fname"
                                                               value="Nik"/>
                                                    </div>
                                                    <div className="form-group col-sm-6">
                                                        <label htmlFor="lname">Last Name:</label>
                                                        <input type="text" className="form-control" id="lname"
                                                               value="Jhon"/>
                                                    </div>
                                                    <div className="form-group col-sm-6">
                                                        <label htmlFor="uname">User Name:</label>
                                                        <input type="text" className="form-control" id="uname"
                                                               value="Nik@01"/>
                                                    </div>
                                                    <div className="form-group col-sm-6">
                                                        <label htmlFor="cname">City:</label>
                                                        <input type="text" className="form-control" id="cname"
                                                               value="Atlanta"/>
                                                    </div>
                                                    <div className="form-group col-sm-6">
                                                        <label className="d-block">Gender:</label>
                                                        <div
                                                            className="custom-control custom-radio custom-control-inline">
                                                            <input type="radio" id="customRadio6" name="customRadio1"
                                                                   className="custom-control-input" checked=""/>
                                                            <label className="custom-control-label"
                                                                   htmlFor="customRadio6"> Male </label>
                                                        </div>
                                                        <div
                                                            className="custom-control custom-radio custom-control-inline">
                                                            <input type="radio" id="customRadio7" name="customRadio1"
                                                                   className="custom-control-input"/>
                                                            <label className="custom-control-label"
                                                                   htmlFor="customRadio7"> Female </label>
                                                        </div>
                                                    </div>
                                                    <div className="form-group col-sm-6">
                                                        <label htmlFor="dob">Date Of Birth:</label>
                                                        <input type="date" className="form-control" id="dob"
                                                               value="1984-01-24"/>
                                                    </div>
                                                    <div className="form-group col-sm-6">
                                                        <label>Marital Status:</label>
                                                        <select className="form-control" id="mrgstatus">
                                                            <option selected="">Single</option>
                                                            <option>Married</option>
                                                            <option>Widowed</option>
                                                            <option>Divorced</option>
                                                            <option>Separated</option>
                                                        </select>
                                                    </div>
                                                    <div className="form-group col-sm-6">
                                                        <label>Age:</label>
                                                        <select className="form-control" id="age">
                                                            <option>12-18</option>
                                                            <option>19-32</option>
                                                            <option selected="">33-45</option>
                                                            <option>46-62</option>
                                                            <option>63 ></option>
                                                        </select>
                                                    </div>
                                                    <div className="form-group col-sm-6">
                                                        <label>Country:</label>
                                                        <select className="form-control" id="country">
                                                            <option>Caneda</option>
                                                            <option>Noida</option>
                                                            <option selected="">USA</option>
                                                            <option>India</option>
                                                            <option>Africa</option>
                                                        </select>
                                                    </div>
                                                    <div className="form-group col-sm-6">
                                                        <label>State:</label>
                                                        <select className="form-control" id="state">
                                                            <option>California</option>
                                                            <option>Florida</option>
                                                            <option selected="">Georgia</option>
                                                            <option>Connecticut</option>
                                                            <option>Louisiana</option>
                                                        </select>
                                                    </div>
                                                    <div className="form-group col-sm-12">
                                                        <label>Address:</label>
                                                        <textarea className="form-control" name="address" rows="5"
                                                                  value="" style={{lineHeight:"22px"}}>
37 Cardinal Lane
Petersburg, VA 23803
United States of America
Zip Code: 85001
                                             </textarea>
                                                    </div>
                                                </div>
                                                <button type="submit" className="btn btn-primary mr-2">Submit</button>
                                                <button type="reset" className="btn iq-bg-danger">Cancle</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="chang-pwd" role="tabpanel">
                                    <div className="iq-card">
                                        <div className="iq-card-header d-flex justify-content-between">
                                            <div className="iq-header-title">
                                                <h4 className="card-title">Change Password</h4>
                                            </div>
                                        </div>
                                        <div className="iq-card-body">
                                            <form>
                                                <div className="form-group">
                                                    <label htmlFor="cpass">Current Password:</label>
                                                    <a href="javascripe:void();" className="float-right">Forgot
                                                        Password</a>
                                                    <input type="Password" className="form-control" id="cpass"
                                                           value=""/>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="npass">New Password:</label>
                                                    <input type="Password" className="form-control" id="npass"
                                                           value=""/>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="vpass">Verify Password:</label>
                                                    <input type="Password" className="form-control" id="vpass"
                                                           value=""/>
                                                </div>
                                                <button type="submit" className="btn btn-primary mr-2">Submit</button>
                                                <button type="reset" className="btn iq-bg-danger">Cancle</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="emailandsms" role="tabpanel">
                                    <div className="iq-card">
                                        <div className="iq-card-header d-flex justify-content-between">
                                            <div className="iq-header-title">
                                                <h4 className="card-title">Email and SMS</h4>
                                            </div>
                                        </div>
                                        <div className="iq-card-body">
                                            <form>
                                                <div className="form-group row align-items-center">
                                                    <label className="col-md-3" htmlFor="emailnotification">Email
                                                        Notification:</label>
                                                    <div className="col-md-9 custom-control custom-switch">
                                                        <input type="checkbox" className="custom-control-input"
                                                               id="emailnotification" checked=""/>
                                                        <label className="custom-control-label"
                                                               htmlFor="emailnotification"></label>
                                                    </div>
                                                </div>
                                                <div className="form-group row align-items-center">
                                                    <label className="col-md-3" htmlFor="smsnotification">SMS
                                                        Notification:</label>
                                                    <div className="col-md-9 custom-control custom-switch">
                                                        <input type="checkbox" className="custom-control-input"
                                                               id="smsnotification" checked=""/>
                                                        <label className="custom-control-label"
                                                               htmlFor="smsnotification"></label>
                                                    </div>
                                                </div>
                                                <div className="form-group row align-items-center">
                                                    <label className="col-md-3" htmlFor="npass">When To Email</label>
                                                    <div className="col-md-9">
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input"
                                                                   id="email01"/>
                                                            <label className="custom-control-label" htmlFor="email01">You
                                                                have new notifications.</label>
                                                        </div>
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input"
                                                                   id="email02"/>
                                                            <label className="custom-control-label" htmlFor="email02">You're
                                                                sent a direct message</label>
                                                        </div>
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input"
                                                                   id="email03" checked=""/>
                                                            <label className="custom-control-label" htmlFor="email03">Someone
                                                                adds you as a connection</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group row align-items-center">
                                                    <label className="col-md-3" htmlFor="npass">When To Escalate
                                                        Emails</label>
                                                    <div className="col-md-9">
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input"
                                                                   id="email04"/>
                                                            <label className="custom-control-label"
                                                                   htmlFor="email04"> Upon new order.</label>
                                                        </div>
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input"
                                                                   id="email05"/>
                                                            <label className="custom-control-label"
                                                                   htmlFor="email05"> New membership approval</label>
                                                        </div>
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input"
                                                                   id="email06" checked=""/>
                                                            <label className="custom-control-label"
                                                                   htmlFor="email06"> Member registration</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <button type="submit" className="btn btn-primary mr-2">Submit</button>
                                                <button type="reset" className="btn iq-bg-danger">Cancle</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="manage-contact" role="tabpanel">
                                    <div className="iq-card">
                                        <div className="iq-card-header d-flex justify-content-between">
                                            <div className="iq-header-title">
                                                <h4 className="card-title">Manage Contact</h4>
                                            </div>
                                        </div>
                                        <div className="iq-card-body">
                                            <form>
                                                <div className="form-group">
                                                    <label htmlFor="cno">Contact Number:</label>
                                                    <input type="text" className="form-control" id="cno"
                                                           value="001 2536 123 458"/>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="email">Email:</label>
                                                    <input type="text" className="form-control" id="email"
                                                           value="nikjone@demo.com"/>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="url">Url:</label>
                                                    <input type="text" className="form-control" id="url"
                                                           value="https://getbootstrap.com"/>
                                                </div>
                                                <button type="submit" className="btn btn-primary mr-2">Submit</button>
                                                <button type="reset" className="btn iq-bg-danger">Cancle</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default EditProfile;