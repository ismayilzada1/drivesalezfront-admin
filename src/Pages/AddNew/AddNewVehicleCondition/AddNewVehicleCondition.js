import React, {useEffect, useState} from "react";
import "./AddNewVehicleCondition.css";
import {useDispatch, useSelector} from "react-redux";
import commonDataService from "../../../Api-services/CommonDataService";
import {addVehicleCondition} from "../../../Store/Admin/AdminActions";

const AddNewVehicleCondition = () => {

    const dispatch = useDispatch();
    const CommonDataService= new commonDataService();

    const { loading, error } = useSelector((state) => state.admin);



    const [newConditionName, setNewConditionName] = useState('');
    const [newConditionDescription, setNewConditionDescription] = useState('');



    const [vehicleConditions, setVehicleConditions] = useState([]);




    useEffect(() => {
        const fetchData = async () => {
            try {
                const vehicleConditionsData = await CommonDataService.getAllCarConditions();
                setVehicleConditions(vehicleConditionsData);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleAddColor = () => {
        if(newConditionName) {
            const requestBody={
                "conditionName":newConditionName,
                "Description":newConditionDescription
            };
            dispatch(addVehicleCondition(requestBody)).then (() => {
                setNewConditionName ('');
                const vehicleConditionsData = CommonDataService.getAllCarConditions().then((response)=>{
                    setVehicleConditions(response);
                });
            });
        }
    };



    return (
        <>
            <div id="content-page" className="content-page">

                <div className='wrapper'>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Condition Name</label>
                        <input value={newConditionName} onChange={(e) => setNewConditionName(e.target.value)} type="text" className="form-control mb-0" id="exampleInputEmail1" placeholder="Enter new Condition Name"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Condition Description</label>
                        <input value={newConditionDescription} onChange={(e) => setNewConditionDescription(e.target.value)} type="text" className="form-control mb-0" id="exampleInputEmail1" placeholder="Enter new Condition Description"/>
                    </div>

                    <button  onClick={handleAddColor}
                             type="submit"
                             className={`btn btn-primary float-left ${loading ? 'disabled' : ''}`}
                             disabled={loading || !newConditionName || !newConditionDescription}>
                        {loading ? 'Adding Condition...' : 'Add Condition'}
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
                            <th scope="col">Name</th>
                            <th scope="col">Description</th>

                        </tr>
                        </thead>
                        <tbody>
                        {vehicleConditions.map((item, index) => (
                            <tr key={index}>
                                <th scope="row">{item.id}</th>
                                <td>{item.condition}</td>
                                <td>{item.Description}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};


export default AddNewVehicleCondition;