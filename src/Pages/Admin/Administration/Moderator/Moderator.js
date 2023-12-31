import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import adminService from "../../../../Api-services/AdminService";
import {AddNewModerator, RemoveModerator, UpdateBrand} from "../../../../Store/Admin/AdminActions";
import Loading from "../../../../Components/ui/Loading";

const Moderator = () => {

    const [newModeratorName, setNewModeratorName] = useState ('');
    const [newModeratorSurname, setNewModeratorSurname] = useState ('');
    const [newModeratorEmail, setNewModeratorEmail] = useState ('');
    const [newModeratorPassword, setNewModeratorPassword] = useState ('');


    const dispatch = useDispatch ();
    const AdminService = new adminService();
    const {loading, error} = useSelector ((state) => state.admin);

    const {AdminAccessToken} = useSelector ((state) => state.auth);

    const [listTable, setListTable] = useState ([]);
    const [selectedRow, setSelectedRow] = useState ({id: null, email: null,name:null,surname:null});

    useEffect (() => {
        const fetchData = async () => {
            try {
                const data = await AdminService.GetAllModerators(AdminAccessToken);
                setListTable (data);
                console.log (data);
            } catch (error) {
                console.error ("Error fetching data:", error);
            }
        };
        fetchData ();
    }, []);

    const handleRowClick = (item) => {
        setSelectedRow ({id: item.id, email: item.email,name:item.name,surname:item.surname});
    };

    const handleRemoveItem = () => {
        if (selectedRow?.id) {

            dispatch (RemoveModerator(selectedRow?.id,AdminAccessToken)).then (() => {
                const data = AdminService.GetAllModerators(AdminAccessToken).then (
                    (response) => {
                        setListTable (response);
                    }
                );
            });

        }
    };
    const handleAddItem = () => {
        if (newModeratorName && newModeratorSurname && newModeratorEmail && newModeratorPassword) {
            const requestBody = {
                "email": newModeratorEmail,
                "firstName": newModeratorName,
                "lastName": newModeratorSurname,
                "password": newModeratorPassword
            }

            dispatch(AddNewModerator(requestBody, AdminAccessToken))
                .then(() => {
                    console.log('Moderator added successfully.');
                    return AdminService.GetAllModerators(AdminAccessToken);
                })
                .then((response) => {
                    console.log('Fetching updated moderator list:', response);
                    setListTable(response);
                })
                .then(()=>{
                    setNewModeratorName('');
                    setNewModeratorSurname('');
                    setNewModeratorEmail('');
                    setNewModeratorPassword('');
                })
                .catch((error) => {
                    console.error('Error adding moderator:', error);
                });
        }
    };


    const handleUpdateItem = () => {
        // if(selectedRow.id && newModeratorName && newModeratorSurname && newModeratorEmail && newModeratorPassword) {
        //     const requestBody={
        //         "makeId": selectedRow.id,
        //         "newMake": newBrandName
        //     }
        //     dispatch(UpdateBrand(requestBody,admin.token)).then (() => {
        //         setNewBrandName('');
        //         setSelectedRow(null);
        //         const data = CommonDataService.getAllCarMakes().then((response)=>{
        //             setListTable(response);
        //         });
        //     });
        // }
    };

    return (
        <div>
            {loading && (<Loading/>)}

            <div id="content-page" className="content-page">
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
                        </tr>
                        </thead>
                        <tbody>
                        {listTable?.map ((item, index) => (
                            <tr
                                key={index}
                                onClick={() => handleRowClick (item)}
                                className={selectedRow?.id === item?.id ? "selected my-table" : "my-table"}>

                                <th scope="row">{item.id}</th>
                                <td>{item?.name}</td>
                                <td>{item?.surname}</td>
                                <td>{item?.email}</td>
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
                        disabled={loading}
                        style={{marginLeft: '10px'}}
                        data-toggle="modal" data-target="#addModal">
                        Add
                    </button>


                    <button
                        type="submit"
                        className={`btn  btn-warning  ${loading ? 'disabled' : ''}`}
                        disabled={loading || !selectedRow?.id}
                        style={{marginLeft: '10px'}}
                        data-toggle="modal" data-target="#changeModal">
                        Change
                    </button>


                    <button
                        type="submit"
                        className={`btn  btn-danger  ${loading ? "disabled" : ""}`}
                        style={{marginLeft: '10px'}}
                        data-toggle="modal" data-target="#removeModal"
                        disabled={loading || !selectedRow?.id}>
                        Remove
                    </button>

                </div>


                <div className="modal fade" id="changeModal" tabIndex="-1" role="dialog"
                     aria-labelledby="changeModal" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Change Brand Name</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">

                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Current Brand Name</label>
                                    <input value={selectedRow?.name} disabled={true} type="text"
                                           className="form-control mb-0" id="exampleInputEmail1"/>
                                </div>

                                <div className="form-group m-0">
                                    <label htmlFor="exampleInputEmail1">New Brand Name</label>
                                    <input value={newModeratorName} onChange={(e) => setNewModeratorName (e.target.value)}
                                           type="text" className="form-control mb-0" id="exampleInputEmail1"
                                           placeholder="Enter new make"/>
                                </div>

                            </div>
                            <button type="button" onClick={handleUpdateItem} data-toggle="modal"
                                    data-target="#changeModal" className="btn btn-warning m-3">Change</button>

                        </div>
                    </div>
                </div>

                <div className="modal fade" id="addModal" tabIndex="-1" role="dialog"
                     aria-labelledby="addModal" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Add Moderator</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">

                                <div className="form-group m-0">
                                    <label htmlFor="exampleInputEmail1">New Moderator Name</label>
                                    <input value={newModeratorName} onChange={(e) => setNewModeratorName(e.target.value)}
                                           type="text" className="form-control mb-0" id="exampleInputEmail1"
                                           placeholder="Name"/>
                                </div>

                                <div className="form-group m-0">
                                    <label htmlFor="exampleInputEmail1">New Moderator Surname</label>
                                    <input value={newModeratorSurname} onChange={(e) => setNewModeratorSurname(e.target.value)}
                                           type="text" className="form-control mb-0" id="exampleInputEmail1"
                                           placeholder="Surname"/>
                                </div>


                                <div className="form-group m-0">
                                    <label htmlFor="exampleInputEmail1">New Moderator Email</label>
                                    <input value={newModeratorEmail} onChange={(e) => setNewModeratorEmail(e.target.value)}
                                           type="email" className="form-control mb-0" id="exampleInputEmail1"
                                           placeholder="Email"/>
                                </div>

                                <div className="form-group m-0">
                                    <label htmlFor="exampleInputEmail1">New Moderator Password</label>
                                    <input value={newModeratorPassword} onChange={(e) => setNewModeratorPassword(e.target.value)}
                                           type="password" className="form-control mb-0" id="exampleInputEmail1"
                                           placeholder="Password"/>
                                </div>

                            </div>
                            <button type="button" onClick={handleAddItem} data-toggle="modal"
                                    data-target="#addModal" className="btn btn-primary m-3">Add</button>

                        </div>
                    </div>
                </div>

                <div className="modal fade" id="removeModal" tabIndex="-1" role="dialog"
                     aria-labelledby="removeModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Remove Moderator</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p className='text-center' style={{fontSize: '21px'}}>Are you sure to remove moderator
                                    "<b>{selectedRow?.name} {selectedRow?.surname}</b>"</p>
                            </div>
                            <button type="button" onClick={handleRemoveItem} data-toggle="modal"
                                    data-target="#removeModal" className="btn btn-danger m-3">Remove
                            </button>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Moderator;