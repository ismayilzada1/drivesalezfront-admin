import React, {useEffect, useState} from "react";
import "./AddNewVehicleDrivetrainType.css";
import {useDispatch, useSelector} from "react-redux";
import commonDataService from "../../../Api-services/CommonDataService";
import {AddNewDrivetrainType} from "../../../Store/Admin/AdminActions";

const AddNewVehicleDrivetrainType = () => {

    const dispatch = useDispatch();
    const CommonDataService= new commonDataService();

    const { loading, error } = useSelector((state) => state.admin);



    const [newDrivetrainType, setNewDrivetrainType] = useState('');


    const [vehicleDrivetrainTypes, setVehicleDrivetrainTypes] = useState([]);




    useEffect(() => {
        const fetchData = async () => {
            try {
                const vehicleDrivetrainTypesData = await CommonDataService.getAllCarDriveTrainTypes();
                setVehicleDrivetrainTypes(vehicleDrivetrainTypesData);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleAddColor = () => {
        if(newDrivetrainType) {
            dispatch (AddNewDrivetrainType(newDrivetrainType)).then (() => {
                setNewDrivetrainType ('');
                const vehicleDrivetrainTypesData = CommonDataService.getAllCarDriveTrainTypes().then((response)=>{
                    setVehicleDrivetrainTypes(response);
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
                        <input value={newDrivetrainType} onChange={(e) => setNewDrivetrainType(e.target.value)} type="text" className="form-control mb-0" id="exampleInputEmail1" placeholder="Enter new color"/>
                    </div>
                    <button  onClick={handleAddColor}
                             type="submit"
                             className={`btn btn-primary float-left ${loading ? 'disabled' : ''}`}
                             disabled={loading || !newDrivetrainType}>
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
                            <th scope="col">Drivetrain Type</th>
                        </tr>
                        </thead>
                        <tbody>
                        {vehicleDrivetrainTypes.map((item, index) => (
                            <tr key={index}>
                                <th scope="row">{item.id}</th>
                                <td>{item.drivetrainType}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </>
    );
};


export default AddNewVehicleDrivetrainType;