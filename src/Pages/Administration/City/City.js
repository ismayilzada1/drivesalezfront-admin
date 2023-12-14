import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import commonDataService from "../../../Api-services/CommonDataService";
import {AddNewModel, RemoveModel, UpdateModel} from "../../../Store/Admin/AdminActions";
import Loading from "../../../Components/ui/Loading";

const City = () => {
    const [newCityName, setnewCityName] = useState ('');


    const dispatch = useDispatch ();
    const CommonDataService = new commonDataService ();
    const {loading, error} = useSelector ((state) => state.admin);

    const {admin} = useSelector ((state) => state.auth);

    const [listTableCountries, setListTableCountries] = useState ([]);
    const [listTableCities, setListTableCities] = useState ([]);

    const [selectedRowCountry, setSelectedRowCountry] = useState ({id: null, countryName: null});
    const [selectedRowCity, setSelectedRowCity] = useState ({id: null, cityName: null});

    useEffect (() => {
        const fetchData = async () => {
            try {
                const data = await CommonDataService.getAllCountries();
                setListTableCountries(data);
            } catch (error) {
                console.error ("Error fetching data:", error);
            }
        };
        fetchData ();
    }, []);

    const fetchModels = async () => {
        // try {
            // const data = await CommonDataService.getAllCitiesByCountryId(selectedRowCountry.id);
            // if (Array.isArray(data)) {
            //     setListTableCities(data);
            // } else {
            //     console.error("Data received for car models is not an array:", data);
            // }
        // } catch (error) {
        //     console.error ("Error fetching data:", error);
        // }
    };


    useEffect(()=>{
        if(selectedRowCountry){
            fetchModels();
            setSelectedRowCity({id: null, cityName: null});
        }

    },[selectedRowCountry])

    const handleRowClickCountry = (item) => {
        setSelectedRowCountry ({id: item.id, countryName: item.countryName});
    };
    const handleRowClickCity = (item) => {
        setSelectedRowCity ({id: item.id, cityName: item.cityName});
    };

    const handleRemoveItem = () => {
        if (selectedRowCountry.id) {
            dispatch (RemoveModel(selectedRowCity.id,admin.token)).then (() => {
                const dataBrands = CommonDataService.getAllCarMakes().then (
                    (response) => {
                        setListTableCountries(response);
                    }
                );
                fetchModels();
            });
        }
    };
    const handleAddItem = () => {
        if(newCityName) {
            const requestBody={
                "makeId": selectedRowCountry.id,
                "modelName": newCityName

            }
            dispatch(AddNewModel(requestBody,admin.token)).then (() => {
                setnewCityName('');
                const dataBrands = CommonDataService.getAllCarMakes().then (
                    (response) => {
                        setListTableCountries(response);
                    }
                );
                fetchModels();
            });
        }
    };

    const handleUpdateItem = () => {
        if(selectedRowCountry.id && newCityName) {
            const requestBody={
                "modelId": selectedRowCity.id,
                "newModel": newCityName
            }
            dispatch(UpdateModel(requestBody,admin.token)).then (() => {
                setnewCityName('');
                setSelectedRowCity(null);
                const dataBrands = CommonDataService.getAllCarMakes().then (
                    (response) => {
                        setListTableCountries(response);
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
                            {listTableCountries.map ((brand, index) => (
                                <tr
                                    key={index}
                                    onClick={() => handleRowClickCountry (brand)}
                                    className={selectedRowCountry.id === brand.id ? "selected my-table" : "my-table"}
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
                                {listTableCities && listTableCities.map ((item, index) => (
                                    <tr
                                        key={index}
                                        onClick={() => handleRowClickCity(item)}
                                        className={selectedRowCity.id === item.id ? "selected my-table" : "my-table"}
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
                        disabled={loading || !selectedRowCountry.id}
                        style={{marginLeft: '10px'}}
                        data-toggle="modal" data-target="#addModal">
                        Add
                    </button>


                    <button
                        type="submit"
                        className={`btn  btn-warning  ${loading ? 'disabled' : ''}`}
                        style={{marginLeft: '10px'}}
                        data-toggle="modal" data-target="#changeModal"
                        disabled={loading || !selectedRowCity.id}>
                        Change
                    </button>


                    <button
                        type="submit"
                        className={`btn  btn-danger  ${loading ? "disabled" : ""}`}
                        style={{marginLeft: '10px'}}
                        data-toggle="modal" data-target="#removeModal"
                        disabled={loading || !selectedRowCity.id}>
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
                                    <input value={selectedRowCity.modelName} disabled={true} type="text"
                                           className="form-control mb-0" id="exampleInputEmail1"/>
                                </div>

                                <div className="form-group m-0">
                                    <label htmlFor="exampleInputEmail1">New Model Name</label>
                                    <input value={newCityName} onChange={(e) => setnewCityName (e.target.value)}
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
                                    <input value={newCityName} onChange={(e) => setnewCityName(e.target.value)}
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
                                    "<b>{selectedRowCity.modelName}</b>" Model</p>
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

export default City;