import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import adminservice from "../../../../Api-services/AdminService";
import {
    AddCity,
    AddNewColor, BanUser,
    RemoveCity,
    RemoveColor, UnBanUser,
    UpdateCity,
    UpdateColor
} from "../../../../Store/Admin/AdminActions";
import Loading from "../../../../Components/ui/Loading";


const User = () => {

    const [title, setTitle] = useState ('');


    const dispatch = useDispatch ();
    const AdminService = new adminservice ();
    const {loading, error} = useSelector ((state) => state.admin);

    const {AdminAccessToken} = useSelector ((state) => state.auth);

    const [listTable, setListTable] = useState ([]);
    const [selectedRow, setSelectedRow] = useState ({id: null,name:null,surname:null,email:null});


    const [emailDescription,setEmailDescription]=useState(null);


    const [searchTerm, setSearchTerm] = useState('');
    const [filteredUsers, setFilteredUsers] = useState([]);
    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        if (listTable) {
            const filteredResults = listTable.filter(user => user.email.toLowerCase().includes(e.target.value.toLowerCase()));
            setFilteredUsers(filteredResults);
        }
    };


    useEffect (() => {
        const fetchData = async () => {
            try {
                const data = await AdminService.GetAllUsers(AdminAccessToken);
                console.log(data);
                setListTable (data);
            } catch (error) {
                console.error ("Error fetching data:", error);
            }
        };
        fetchData ();
    }, []);

    const handleRowClick = (item) => {
        setSelectedRow ({id: item.id, name: item.name,surname: item.surname,email:item.email});
    };

    const banUser = () => {
        if (selectedRow.id) {
            dispatch (BanUser(selectedRow.id,AdminAccessToken)).then (() => {
                const data = AdminService.GetAllUsers(AdminAccessToken).then (
                    (response) => {
                        setListTable (response);
                    }
                );
            });
        }
    };

    const unbanUser = () => {
        if (selectedRow.id) {
            dispatch (UnBanUser(selectedRow.id,AdminAccessToken)).then (() => {
                const data = AdminService.GetAllUsers(AdminAccessToken).then (
                    (response) => {
                        setListTable (response);
                    }
                );
            });
        }
    };

    const sendMessageUser = () => {
        // console.log (title);
        // if(title) {
        //     dispatch(AddNewColor(title,AdminAccessToken)).then (() => {
        //         setTitle('');
        //         const data = CommonDataService.getAllCarColors().then((response)=>{
        //             setListTable(response);
        //         });
        //     });
        // }
    };



    return (
        <div>
            {loading && (<Loading/>)}


            <div id="content-page" className="content-page">

                <div className="input-group" style={{padding: '0px 20px 20px 20px'}}>
                    <input type="text" onChange={handleSearch} value={searchTerm} className="form-control"
                           placeholder="Search by email" aria-label="Search"
                           aria-describedby="basic-addon2"/>
                </div>

                <div className="iq-card-body">
                    {error && (
                        <div className="alert text-white bg-danger" role="alert">
                            <div className="iq-alert-icon">
                                <i className="ri-information-line"></i>
                            </div>
                            <div className="iq-alert-text">{error}</div>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="alert"
                                aria-label="Close"
                                onChange={() => {
                                }}
                            >
                                <i className="ri-close-line"></i>
                            </button>
                        </div>
                    )}

                    <table className="table table-dark">
                        <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Surname</th>
                            <th scope="col">Email</th>
                            <th scope="col">Banned</th>
                        </tr>
                        </thead>
                        <tbody>
                        {filteredUsers.length > 0 ? (
                            filteredUsers.map((item, index) => (
                                <tr
                                    key={index}
                                    onClick={() => handleRowClick(item)}
                                    className={selectedRow.id === item.id ? "selected my-table" : "my-table"}
                                >
                                    <th scope="row">{item?.id}</th>
                                    <th scope="row">{item?.firstName}</th>
                                    <th scope="row">{item?.lastName}</th>
                                    <th scope="row">{item?.email}</th>
                                    <th scope="row">
                                        {item.isBanned ? 'Yes' : 'No'}
                                    </th>
                                    {/*<th scope="row">*/}
                                    {/*    {item?.PhoneNumbers && item.PhoneNumbers.map((phoneNumber, index) => (*/}
                                    {/*        <span key={index}>{phoneNumber} </span>*/}
                                    {/*    ))}*/}
                                    {/*</th>*/}
                                </tr>
                            ))
                        ) : (
                            listTable.map((item, index) => (
                                <tr
                                    key={index}
                                    onClick={() => handleRowClick(item)}
                                    className={selectedRow.id === item.id ? "selected my-table" : "my-table"}
                                >
                                    <th scope="row">{item?.id}</th>
                                    <th scope="row">{item?.firstName}</th>
                                    <th scope="row">{item?.lastName}</th>
                                    <th scope="row">{item?.email}</th>
                                    <th scope="row">
                                        {item.isBanned ? 'Yes' : 'No'}
                                    </th>


                                    {/*<th scope="row">*/}
                                    {/*    {item?.PhoneNumbers && item.PhoneNumbers.map((phoneNumber, index) => (*/}
                                    {/*        <span key={index}>{phoneNumber} </span>*/}
                                    {/*    ))}*/}
                                    {/*</th>*/}
                                </tr>
                            ))
                        )}

                        </tbody>
                    </table>
                </div>

                <div className='d-flex flex-row flex-wrap justify-content-end align-items-center'
                     style={{padding: '0px 20px 20px 20px'}}>

                    <button
                        type="submit"
                        className={`btn  btn-primary ${loading ? 'disabled' : ''}`}
                        disabled={loading || !selectedRow.id}
                        style={{marginLeft: '10px'}}
                        data-toggle="modal" data-target="#sendMessageModal"
                    >
                        Send Message
                    </button>


                    <button
                        type="submit"
                        className={`btn  btn-danger  ${loading ? "disabled" : ""}`}
                        style={{marginLeft: '10px'}}
                        data-toggle="modal" data-target="#banUserModal"
                        disabled={loading || !selectedRow.id}>
                        Ban
                    </button>

                    <button
                        type="submit"
                        className={`btn  btn-warning  ${loading ? "disabled" : ""}`}
                        style={{marginLeft: '10px'}}
                        data-toggle="modal" data-target="#unbanUserModal"
                        disabled={loading || !selectedRow.id}>
                        Unban
                    </button>

                </div>


                <div className="modal fade" id="sendMessageModal" tabIndex="-1" role="dialog"
                     aria-labelledby="sendMessageModal" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Send Message to
                                    " {selectedRow.email} "</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">

                                <div className="form-group m-0">
                                    <label htmlFor="exampleInputEmail1">Title</label>
                                    <input value={title} onChange={(e) => setTitle(e.target.value)}
                                           type="text" className="form-control mb-0" id="exampleInputEmail1"
                                           placeholder="Enter mail title"/>

                                </div>

                                <div className="form-group m-0">
                                    <label htmlFor="exampleInputEmail1">Description</label>


                                </div>

                            </div>

                            <button type="button" onClick={sendMessageUser} data-toggle="modal"
                                    data-target="#sendMessageModal" className="btn btn-primary m-3">Send
                            </button>

                        </div>
                    </div>
                </div>

                <div className="modal fade" id="banUserModal" tabIndex="-1" role="dialog"
                     aria-labelledby="banUserModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Ban User</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p className='text-center' style={{fontSize: '21px'}}>Are you sure to ban
                                    "<b>{selectedRow.email}</b>"</p>
                            </div>
                            <button type="button" onClick={banUser} data-toggle="modal"
                                    data-target="#banUserModal" className="btn btn-danger m-3">Ban
                            </button>

                        </div>
                    </div>
                </div>

                <div className="modal fade" id="unbanUserModal" tabIndex="-1" role="dialog"
                     aria-labelledby="unbanUserModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Unban User</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p className='text-center' style={{fontSize: '21px'}}>Are you sure to unban
                                    "<b>{selectedRow.email}</b>"</p>
                            </div>
                            <button type="button" onClick={unbanUser} data-toggle="modal"
                                    data-target="#unbanUserModal" className="btn btn-warning m-3">Unban
                            </button>

                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default User;