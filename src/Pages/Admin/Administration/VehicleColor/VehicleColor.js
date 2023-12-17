import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import commonDataService from "../../../../Api-services/CommonDataService";
import {AddNewColor, RemoveColor, UpdateColor} from "../../../../Store/Admin/AdminActions";
import Loading from "../../../../Components/ui/Loading";

const VehicleColor = () => {
    const [newColor, setNewColor] = useState ('');


    const dispatch = useDispatch ();
    const CommonDataService = new commonDataService ();
    const {loading, error} = useSelector ((state) => state.admin);

    const {admin} = useSelector ((state) => state.auth);

    const [listTable, setListTable] = useState ([]);
    const [selectedRow, setSelectedRow] = useState ({id: null, color: null});

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

    const handleRemoveItem = () => {
        if (selectedRow.id) {
            dispatch (RemoveColor(selectedRow.id,admin.token)).then (() => {
                const data = CommonDataService.getAllCarColors().then (
                    (response) => {
                        setListTable (response);
                    }
                );
            });
        }
    };
    const handleAddItem = () => {
        console.log (newColor);
        if(newColor) {
            dispatch(AddNewColor(newColor,admin.token)).then (() => {
                setNewColor('');
                const data = CommonDataService.getAllCarColors().then((response)=>{
                    setListTable(response);
                });
            });
        }
    };

    const handleUpdateItem = () => {
        if(selectedRow.id && newColor) {
            const requestBody={
                "colorId": selectedRow.id,
                "newColor": newColor
            }
            dispatch(UpdateColor(requestBody,admin.token)).then (() => {
                setNewColor('');
                const data = CommonDataService.getAllCarColors().then((response)=>{
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
                            <th scope="col">Color</th>
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
                                <h5 className="modal-title" id="exampleModalLabel">Change Vehicle Color</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">

                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Current Vehicle Color</label>
                                    <input value={selectedRow.color} disabled={true} type="text"
                                           className="form-control mb-0" id="exampleInputEmail1"/>
                                </div>

                                <div className="form-group m-0">
                                    <label htmlFor="exampleInputEmail1">New Vehicle Color</label>
                                    <input value={newColor} onChange={(e) => setNewColor (e.target.value)}
                                           type="text" className="form-control mb-0" id="exampleInputEmail1"
                                           placeholder="Enter vehicle color"/>
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
                                <h5 className="modal-title" id="exampleModalLabel">Add Vehicle Color</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">

                                <div className="form-group m-0">
                                    <label htmlFor="exampleInputEmail1">New Vehicle Color</label>
                                    <input value={newColor} onChange={(e) => setNewColor(e.target.value)}
                                           type="text" className="form-control mb-0" id="exampleInputEmail1"
                                           placeholder="Enter vehicle color"/>
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
                                <h5 className="modal-title" id="exampleModalLabel">Remove Vehicle Color</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p className='text-center' style={{fontSize: '21px'}}>Are you sure to remove
                                    "<b>{selectedRow.color}</b>"  Color</p>
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

export default VehicleColor;