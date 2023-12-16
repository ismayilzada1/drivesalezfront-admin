import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import commonDataService from "../../../../Api-services/CommonDataService";
import {AddNewModel, RemoveModel, UpdateModel} from "../../../../Store/Admin/AdminActions";
import Loading from "../../../../Components/ui/Loading";

const VehicleModel = () => {
    const [newModelName, setnewModelName] = useState ('');


    const dispatch = useDispatch ();
    const CommonDataService = new commonDataService ();
    const {loading, error} = useSelector ((state) => state.admin);

    const {admin} = useSelector ((state) => state.auth);

    const [listTableBrands, setListTableBrands] = useState ([]);
    const [listTableModels, setListTableModels] = useState ([]);
    const [selectedRowMake, setSelectedRowMake] = useState ({id: null, makeName: null});
    const [selectedRowModel, setSelectedRowModel] = useState ({id: null, model: null});

    useEffect (() => {
        const fetchData = async () => {
            try {
                const data = await CommonDataService.getAllCarMakes();
                setListTableBrands (data);
            } catch (error) {
                console.error ("Error fetching data:", error);
            }
        };
        fetchData ();
    }, []);

    const fetchModels = async () => {
        try {
            const data = await CommonDataService.getAllCarModelsByMake(selectedRowMake.id);
            if (Array.isArray(data)) {
                setListTableModels(data);
            } else {
                console.error("Data received for car models is not an array:", data);
            }
        } catch (error) {
            console.error ("Error fetching data:", error);
        }
    };


    useEffect(()=>{
        if(selectedRowMake){
            fetchModels();
            setSelectedRowModel({id: null, model: null});
        }

    },[selectedRowMake])

    const handleRowClickMake = (item) => {
        setSelectedRowMake ({id: item.id, makeName: item.makeName});
    };
    const handleRowClickModel = (item) => {
        setSelectedRowModel ({id: item.id, modelName: item.modelName});
    };

    const handleRemoveItem = () => {
        if (selectedRowMake.id) {
            dispatch (RemoveModel(selectedRowModel.id,admin.token)).then (() => {
                const dataBrands = CommonDataService.getAllCarMakes().then (
                    (response) => {
                        setListTableBrands(response);
                    }
                );
                fetchModels();
            });
        }
    };
    const handleAddItem = () => {
        if(newModelName) {
            const requestBody={
                "makeId": selectedRowMake.id,
                "modelName": newModelName

            }
            dispatch(AddNewModel(requestBody,admin.token)).then (() => {
                setnewModelName('');
                const dataBrands = CommonDataService.getAllCarMakes().then (
                    (response) => {
                        setListTableBrands(response);
                    }
                );
                fetchModels();
            });
        }
    };

    const handleUpdateItem = () => {
        if(selectedRowMake.id && newModelName) {
            const requestBody={
                "modelId": selectedRowModel.id,
                "newModel": newModelName
            }
            dispatch(UpdateModel(requestBody,admin.token)).then (() => {
                setnewModelName('');
                setSelectedRowModel(null);
                const dataBrands = CommonDataService.getAllCarMakes().then (
                    (response) => {
                        setListTableBrands(response);
                    }
                );
                fetchModels();
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


                    <div className='d-flex flex-row  justify-content-start align-items-start'>
                        <table className="table table-dark mr-3">
                            <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Vehicle Brand</th>
                            </tr>
                            </thead>
                            <tbody>
                            {listTableBrands.map ((brand, index) => (
                                <tr
                                    key={index}
                                    onClick={() => handleRowClickMake (brand)}
                                    className={selectedRowMake.id === brand.id ? "selected my-table" : "my-table"}
                                >
                                    <th scope="row">{brand.id}</th>
                                    <td>{brand.makeName}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>

                        <div className="table-container">
                            <table className="table table-dark">
                                <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Vehicle Model</th>
                                </tr>
                                </thead>
                                <tbody>
                                {listTableModels && listTableModels.map ((item, index) => (
                                    <tr
                                        key={index}
                                        onClick={() => handleRowClickModel(item)}
                                        className={selectedRowModel.id === item.id ? "selected my-table" : "my-table"}
                                    >
                                        <th scope="row">{item.id}</th>
                                        <td>{item.modelName}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div className='d-flex flex-row flex-wrap justify-content-end align-items-center'
                     style={{padding: '0px 20px 20px 20px'}}>

                    <button
                        type="submit"
                        className={`btn  btn-primary ${loading ? 'disabled' : ''}`}
                        disabled={loading || !selectedRowMake.id}
                        style={{marginLeft: '10px'}}
                        data-toggle="modal" data-target="#addModal">
                        Add
                    </button>


                    <button
                        type="submit"
                        className={`btn  btn-warning  ${loading ? 'disabled' : ''}`}
                        style={{marginLeft: '10px'}}
                        data-toggle="modal" data-target="#changeModal"
                        disabled={loading || !selectedRowModel.id}>
                        Change
                    </button>


                    <button
                        type="submit"
                        className={`btn  btn-danger  ${loading ? "disabled" : ""}`}
                        style={{marginLeft: '10px'}}
                        data-toggle="modal" data-target="#removeModal"
                        disabled={loading || !selectedRowModel.id}>
                        Remove
                    </button>

                </div>


                <div className="modal fade" id="changeModal" tabIndex="-1" role="dialog"
                     aria-labelledby="changeModal" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Change Model Name</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">

                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Current Model Name</label>
                                    <input value={selectedRowModel.modelName} disabled={true} type="text"
                                           className="form-control mb-0" id="exampleInputEmail1"/>
                                </div>

                                <div className="form-group m-0">
                                    <label htmlFor="exampleInputEmail1">New Model Name</label>
                                    <input value={newModelName} onChange={(e) => setnewModelName (e.target.value)}
                                           type="text" className="form-control mb-0" id="exampleInputEmail1"
                                           placeholder="Enter model make"/>
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
                                <h5 className="modal-title" id="exampleModalLabel">Add Model Name</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">

                                <div className="form-group m-0">
                                    <label htmlFor="exampleInputEmail1">New Model Name</label>
                                    <input value={newModelName} onChange={(e) => setnewModelName(e.target.value)}
                                           type="text" className="form-control mb-0" id="exampleInputEmail1"
                                           placeholder="Enter model make"/>
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
                                <h5 className="modal-title" id="exampleModalLabel">Remove Model Name</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p className='text-center' style={{fontSize: '21px'}}>Are you sure to remove
                                    "<b>{selectedRowModel.modelName}</b>" Model</p>
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

export default VehicleModel;