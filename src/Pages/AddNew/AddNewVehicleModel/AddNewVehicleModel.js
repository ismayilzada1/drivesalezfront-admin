import React, {useEffect, useState} from "react";
import "./AddNewVehicleModel.css";
import {useDispatch, useSelector} from "react-redux";
import commonDataService from "../../../Api-services/CommonDataService";
import {AddVehicleModel} from "../../../Store/Admin/AdminActions";

const AddNewVehicleModel = () => {

    const dispatch = useDispatch();
    const CommonDataService= new commonDataService();

    const { loading, error } = useSelector((state) => state.admin);



    const [newVehicleModel, setNewVehicleModel] = useState('');

    const [brandId, setbrandId] = useState('');


    const [vehicleModels, setVehicleModels] = useState([]);
    const [vehicleBrands, setVehicleBrands] = useState([]);



    useEffect(() => {
        const fetchData = async () => {
            try {
                const vehicleModelsData = await CommonDataService.getAllCarModels();
                setVehicleModels(vehicleModelsData);

                const vehicleBrandsData = await CommonDataService.getAllCarMakes();
                setVehicleBrands(vehicleBrandsData);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleAddColor = () => {
        if(newVehicleModel) {

            const requestBody={
                "makeId": brandId  ,
                "modelName": newVehicleModel
            }

            dispatch(AddVehicleModel(requestBody)).then (() => {
                setNewVehicleModel ('');
                const vehicleModelsData = CommonDataService.getAllCarModels().then((response)=>{
                    setVehicleModels(response);
                });
            });
        }
    };



    return (
        <>
            <div id="content-page" className="content-page">

                <div className='wrapper'>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Vehicle Brand ID</label>
                        <input value={brandId} onChange={(e) => setbrandId(e.target.value)} type="text" className="form-control mb-0" id="exampleInputEmail1" placeholder="Enter new color"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Vehicle Body Type</label>
                        <input value={newVehicleModel} onChange={(e) => setNewVehicleModel(e.target.value)} type="text" className="form-control mb-0" id="exampleInputEmail1" placeholder="Enter new color"/>
                    </div>

                    <button  onClick={handleAddColor}
                             type="submit"
                             className={`btn btn-primary float-left ${loading ? 'disabled' : ''}`}
                             disabled={loading || !newVehicleModel}>
                        {loading ? 'Adding Color...' : 'Add Color'}
                    </button>
                </div>



                <div className="iq-card-body mt-lg-5">
                    {error && (
                        <div className="alert text-white bg-danger" role="alert">
                            <div className="iq-alert-icon">
                                <i className="ri-information-line"></i>
                            </div>
                            <div className="iq-alert-text">{error}</div>
                            <button type="button" className="close" data-dismiss="alert" aria-label="Close" onChange={()=>{}}>
                                <i className="ri-close-line"></i>
                            </button>
                        </div>
                    )}

                    <div className='d-flex flex-row  justify-content-start align-items-start'>

                    <table className="table table-dark table-hover mr-3">
                        <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Vehicle Brand</th>
                        </tr>
                        </thead>
                        <tbody>
                        {vehicleBrands.map((item, index) => (
                            <tr key={index}
                                onClick={()=>{setbrandId(item.id)}}
                                style={{cursor:"pointer"}}
                            >

                                <th scope="row">{item.id}</th>
                                <td>{item.makeName}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>


                    <table className="table table-dark">
                        <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Vehicle Model</th>
                            <th scope="col">Brand Name</th>

                        </tr>
                        </thead>
                        <tbody>
                        {vehicleModels.map((item, index) => (
                            <tr key={index}>
                                <th scope="row">{item.id}</th>
                                <td>{item.modelName}</td>
                                <td>{item.make.makeName}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>

                    </div>
                </div>

            </div>
        </>
    );
};


export default AddNewVehicleModel;