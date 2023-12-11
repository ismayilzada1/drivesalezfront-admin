import React, {useEffect, useState} from "react";
import "./AddNewVehicleFuelType.css";
import {useDispatch, useSelector} from "react-redux";
import commonDataService from "../../../Api-services/CommonDataService";
import {AddNewFuelType} from "../../../Store/Admin/AdminActions";

const AddNewVehicleFuelType = () => {

    const dispatch = useDispatch();
    const CommonDataService= new commonDataService();

    const { loading, error } = useSelector((state) => state.admin);



    const [newFuelType, setNewFuelType] = useState('');


    const [vehicleFuelTypes, setVehicleFuelTypes] = useState([]);



    useEffect(() => {
        const fetchData = async () => {
            try {
                const vehicleFuelTypesData = await CommonDataService.getAllCarFuelTypes();
                setVehicleFuelTypes(vehicleFuelTypesData);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleAddColor = () => {
        if(newFuelType) {
            dispatch (AddNewFuelType(newFuelType)).then (() => {
                setNewFuelType ('');
                const vehicleFuelTypesData = CommonDataService.getAllCarFuelTypes().then((response)=>{
                    setVehicleFuelTypes(response);
                });
            });
        }
    };



    return (
        <>
            <div id="content-page" className="content-page">

                <div className='wrapper'>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Vehicle Body Type</label>
                        <input value={newFuelType} onChange={(e) => setNewFuelType(e.target.value)} type="text" className="form-control mb-0" id="exampleInputEmail1" placeholder="Enter new color"/>
                    </div>
                    <button  onClick={handleAddColor}
                             type="submit"
                             className={`btn btn-primary float-left ${loading ? 'disabled' : ''}`}
                             disabled={loading || !newFuelType}>
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

                    <table className="table table-dark">
                        <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Fuel Type</th>
                        </tr>
                        </thead>
                        <tbody>
                        {vehicleFuelTypes.map((item, index) => (
                            <tr key={index}>
                                <th scope="row">{item.id}</th>
                                <td>{item.fuelType}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </>
    );
};


export default AddNewVehicleFuelType;