import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import commonDataService from "../../../../Api-services/CommonDataService";
import {
    AddCity,
    AddNewColor,
    RemoveCity,
    RemoveColor,
    UpdateCity,
    UpdateColor
} from "../../../../Store/Admin/AdminActions";
import Loading from "../../../../Components/ui/Loading";


const User = () => {

    const [title, setTitle] = useState ('');


    const dispatch = useDispatch ();
    const CommonDataService = new commonDataService ();
    const {loading, error} = useSelector ((state) => state.admin);

    const {AdminAccessToken} = useSelector ((state) => state.auth);

    const [listTable, setListTable] = useState ([]);
    const [selectedRow, setSelectedRow] = useState ({id: null, color: null});


    const [emailDescription,setEmailDescription]=useState(null);

    useEffect (() => {
        const fetchData = async () => {
            try {
                const data = await CommonDataService.getAllCarColors();
                setListTable (data);
            } catch (error) {
                console.error ("Error fetching data:", error);
            }
        };
        fetchData ();
    }, []);

    const handleRowClick = (item) => {
        setSelectedRow ({id: item.id, color: item.color});
    };

    const banUser = () => {
        if (selectedRow.id) {
            dispatch (RemoveColor(selectedRow.id,AdminAccessToken)).then (() => {
                const data = CommonDataService.getAllCarColors().then (
                    (response) => {
                        setListTable (response);
                    }
                );
            });
        }
    };
    const sendMessageUser = () => {
        console.log (title);
        if(title) {
            dispatch(AddNewColor(title,AdminAccessToken)).then (() => {
                setTitle('');
                const data = CommonDataService.getAllCarColors().then((response)=>{
                    setListTable(response);
                });
            });
        }
    };


    const searchByEmail=()=>{

    }

    return (
        <div>
            {loading && (<Loading/>)}


            <div id="content-page" className="content-page">

                <div className="input-group" style={{padding: '0px 20px 20px 20px'}}>
                    <input type="text" onChange={searchByEmail} className="form-control" placeholder="Search by email" aria-label="Search"
                           aria-describedby="basic-addon2"/>
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" onClick={searchByEmail} type="button">
                            Search
                        </button>

                    </div>
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
                            <th scope="col">Phone no</th>

                        </tr>
                        </thead>
                        <tbody>
                        {listTable.map((item, index) => (
                            <tr
                                key={index}
                                onClick={() => handleRowClick(item)}
                                className={selectedRow.id === item.id ? "selected my-table" : "my-table"}
                            >
                                <th scope="row">{item.id}</th>
                                <td>{item.color}</td>
                            </tr>
                        ))}
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
                        data-toggle="modal" data-target="#removeModal"
                        disabled={loading || !selectedRow.id}>
                        Ban
                    </button>

                </div>


                <div className="modal fade" id="sendMessageModal" tabIndex="-1" role="dialog"
                     aria-labelledby="sendMessageModal" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Send Message to user</h5>
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

                            <button type="button" onClick={sendMessageUser} data-bs-toggle="modal"
                                    data-bs-target="#sendMessageModal" className="btn btn-primary m-3">Send
                            </button>

                        </div>
                    </div>
                </div>

                <div className="modal fade" id="banUserModal" tabIndex="-1" role="dialog"
                     aria-labelledby="removeModalLabel" aria-hidden="true">
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
                                    "<b>{selectedRow.color}</b>"</p>
                            </div>
                            <button type="button" onClick={banUser} data-bs-toggle="modal"
                                    data-bs-target="#banUserModal" className="btn btn-danger m-3">Ban
                            </button>

                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default User;