import React, {useEffect, useState} from "react";
import "./AddNewVehicleGearboxType.css";
import {useDispatch, useSelector} from "react-redux";
import commonDataService from "../../../Api-services/CommonDataService";
import {AddNewGearboxType} from "../../../Store/Admin/AdminActions";

const AddNewVehicleGearboxType = () => {

    const dispatch = useDispatch();
    const CommonDataService= new commonDataService();

    const { loading, error } = useSelector((state) => state.admin);



    const [newGearboxType, setNewGearboxType] = useState('');


    const [vehicleGearboxTypes, setVehicleGearboxTypes] = useState([]);




    useEffect(() => {
        const fetchData = async () => {
            try {
                const vehicleGearboxTypesData = await CommonDataService.getAllCarGearboxTypes();
                setVehicleGearboxTypes(vehicleGearboxTypesData);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleAddColor = () => {
        if(newGearboxType) {
            dispatch(AddNewGearboxType(newGearboxType)).then (() => {
                setNewGearboxType ('');
                const vehicleGearboxTypesData = CommonDataService.getAllCarGearboxTypes().then((response)=>{
                    setVehicleGearboxTypes(response);
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
                        <input value={newGearboxType} onChange={(e) => setNewGearboxType(e.target.value)} type="text" className="form-control mb-0" id="exampleInputEmail1" placeholder="Enter new color"/>
                    </div>
                    <button  onClick={handleAddColor}
                             type="submit"
                             className={`btn btn-primary float-left ${loading ? 'disabled' : ''}`}
                             disabled={loading || !newGearboxType}>
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
                            <th scope="col">Gearbox Type</th>
                        </tr>
                        </thead>
                        <tbody>
                        {vehicleGearboxTypes.map((item, index) => (
                            <tr key={index}>
                                <th scope="row">{item.id}</th>
                                <td>{item.gearboxType}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </>
    );
};


export default AddNewVehicleGearboxType;