import React, {useEffect, useState} from "react";
import "./AddNewVehicleMake.css";
import {useDispatch, useSelector} from "react-redux";
import commonDataService from "../../../Api-services/CommonDataService";
import {AddNewBrand} from "../../../Store/Admin/AdminActions";

const AddNewVehicleMake = () => {

    const dispatch = useDispatch();
    const CommonDataService= new commonDataService();

    const { loading, error } = useSelector((state) => state.admin);



    const [newBrand, setNewBrand] = useState('');


    const [vehicleBrands, setVehicleBrands] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const vehicleBrandsData = await CommonDataService.getAllCarMakes();
                setVehicleBrands(vehicleBrandsData);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleAddColor = () => {
        if(newBrand) {
            dispatch (AddNewBrand(newBrand)).then (() => {
                setNewBrand ('');
                const vehicleBrandsData = CommonDataService.getAllCarMakes().then((response)=>{
                    setVehicleBrands(response);
                });
            });
        }
    };



    return (
        <>
            <div id="content-page" className="content-page">

                <div className='wrapper'>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Vehicle Brand</label>
                        <input value={newBrand} onChange={(e) => setNewBrand(e.target.value)} type="text" className="form-control mb-0" id="exampleInputEmail1" placeholder="Enter new color"/>
                    </div>
                    <button  onClick={handleAddColor}
                             type="submit"
                             className={`btn btn-primary float-left ${loading ? 'disabled' : ''}`}
                             disabled={loading || !newBrand}>
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
                            <th scope="col">Brand Name</th>
                        </tr>
                        </thead>
                        <tbody>
                        {vehicleBrands.map((brand, index) => (
                            <tr key={index}>
                                <th scope="row">{brand.id}</th>
                                <td>{brand.makeName}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </>
    );
};


export default AddNewVehicleMake;