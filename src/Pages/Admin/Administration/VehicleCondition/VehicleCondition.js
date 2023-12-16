import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import commonDataService from "../../../../Api-services/CommonDataService";
import {AddVehicleCondition, RemoveVehicleCondition, UpdateVehicleCondition} from "../../../../Store/Admin/AdminActions";
import Loading from "../../../../Components/ui/Loading";

const VehicleCondition = () => {

    const [newCondition, setNewCondition] = useState (null);
    const [newDescription, setNewDescription] = useState (null);


    const dispatch = useDispatch ();
    const CommonDataService = new commonDataService ();
    const {loading, error} = useSelector ((state) => state.admin);

    const {admin} = useSelector ((state) => state.auth);

    const [listTable, setListTable] = useState ([]);
    const [selectedRow, setSelectedRow] = useState ({id: null, condition: null,description:null});

    useEffect (() => {
        const fetchData = async () => {
            try {
                const data = await CommonDataService.getAllCarConditions();
                setListTable (data);
            } catch (error) {
                console.error ("Error fetching data:", error);
            }
        };
        fetchData ();
    }, []);

    const handleRowClick = (item) => {
        setSelectedRow ({id: item.id, condition: item.condition, description:item.description});
    };

    const handleRemoveItem = () => {
        if (selectedRow.id) {
            dispatch (RemoveVehicleCondition(selectedRow.id,admin.token)).then (() => {
                const data = CommonDataService.getAllCarConditions().then (
                    (response) => {
                        setListTable (response);
                    }
                );
            });
        }
    };
    const handleAddItem = () => {
        if(newCondition) {
            const requestBody={
                "condition": newCondition,
                "description": newDescription
            }
            dispatch(AddVehicleCondition(requestBody,admin.token)).then (() => {
                setNewCondition('');
                setNewDescription('');
                const data = CommonDataService.getAllCarConditions().then((response)=>{
                    setListTable(response);
                });
            });
        }
    };

    const handleUpdateItem = () => {
        if(selectedRow.id && newCondition) {
            const requestBody={
                "vehicleConditionId": selectedRow.id,
                "newVehicleCondition": newCondition,
                "newDescription": newDescription
            }
            dispatch(UpdateVehicleCondition(requestBody,admin.token)).then (() => {
                setNewCondition('');
                setNewDescription('');
                setSelectedRow(null);
                const data = CommonDataService.getAllCarConditions().then((response)=>{
                    setListTable(response);
                });
            });
        }
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
                            <th scope="col">Condition</th>
                            <th scope="col">Description</th>
                        </tr>
                        </thead>
                        <tbody>
                        {listTable.map ((item, index) => (
                            <tr
                                key={index}
                                onClick={() => handleRowClick (item)}
                                className={selectedRow.id === item.id ? "selected my-table" : "my-table"}
                            >
                                <th scope="row">{item.id}</th>
                                <td>{item.condition}</td>
                                <td>{item.description}</td>

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
                        disabled={loading || !selectedRow.id}
                        style={{marginLeft: '10px'}}
                        data-toggle="modal" data-target="#changeModal">
                        Change
                    </button>


                    <button
                        type="submit"
                        className={`btn  btn-danger  ${loading ? "disabled" : ""}`}
                        style={{marginLeft: '10px'}}
                        data-toggle="modal" data-target="#removeModal"
                        disabled={loading || !selectedRow.id}>
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
                                    <input value={selectedRow.condition} disabled={true} type="text"
                                           className="form-control mb-0" id="exampleInputEmail1"/>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Current Description</label>
                                    <textarea value={selectedRow.description} disabled={true}
                                           className="form-control mb-2" id="exampleInputEmail1"/>
                                </div>

                                <div className="form-group m-0">
                                    <label htmlFor="exampleInputEmail1">New Condition Name</label>
                                    <input value={newCondition} onChange={(e) => setNewCondition (e.target.value)}
                                           type="text" className="form-control mb-3" id="exampleInputEmail1"
                                           placeholder="Enter condition name"/>

                                    <label htmlFor="exampleInputEmail1">New Description Name</label>
                                    <input value={newDescription} onChange={(e) => setNewDescription (e.target.value)}
                                           type="text" className="form-control mb-0" id="exampleInputEmail1"
                                           placeholder="Enter condition name"/>


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
                                <h5 className="modal-title" id="exampleModalLabel">Add Condition</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">

                                <div className="form-group m-0">
                                    <label htmlFor="exampleInputEmail1">New Condition Name</label>
                                    <input value={newCondition} onChange={(e) => setNewCondition(e.target.value)}
                                           type="text" className="form-control mb-3" id="exampleInputEmail1"
                                           placeholder="Enter new condition"/>

                                    <label htmlFor="exampleInputEmail1">New Description</label>
                                    <textarea value={newDescription} onChange={(e) => setNewDescription (e.target.value)}
                                              className="form-control mb-0" id="exampleInputEmail1"
                                              placeholder="Enter description"/>
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
                                <h5 className="modal-title" id="exampleModalLabel">Remove Brand Name</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p className='text-center' style={{fontSize: '21px'}}>Are you sure to remove
                                    "<b>{selectedRow.condition}</b>" Condition</p>
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

export default VehicleCondition;