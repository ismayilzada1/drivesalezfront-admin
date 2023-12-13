import React, {useEffect, useState} from "react";
import "./AddNewCountry.css";
import {useDispatch, useSelector} from "react-redux";
import commonDataService from "../../../Api-services/CommonDataService";
import {AddCountry} from "../../../Store/Admin/AdminActions";

const AddNewCountry = () => {

    const dispatch = useDispatch();
    const CommonDataService= new commonDataService();

    const { loading, error } = useSelector((state) => state.admin);



    const [newCountry, setNewCountry] = useState('');


    const [Countries, setCountries] = useState([]);




    useEffect(() => {
        const fetchData = async () => {
            try {
                const Countries = await CommonDataService.getAllCountries();
                setCountries(Countries);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleAddColor = () => {
        if(newCountry) {
            dispatch(AddCountry(newCountry)).then (() => {
                setNewCountry ('');
                const country = CommonDataService.getAllCountries().then((response)=>{
                    setCountries(response);
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
                        <input value={newCountry} onChange={(e) => setNewCountry(e.target.value)} type="text" className="form-control mb-0" id="exampleInputEmail1" placeholder="Enter new country  "/>
                    </div>
                    <button  onClick={handleAddColor}
                             type="submit"
                             className={`btn btn-primary float-left ${loading ? 'disabled' : ''}`}
                             disabled={loading || !newCountry}>
                        {loading ? 'Adding Country...' : 'Add Country'}
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
                            <th scope="col">Country Name</th>
                        </tr>
                        </thead>
                        <tbody>
                        {Countries.map((item, index) => (
                            <tr key={index}>
                                <th scope="row">{item.id}</th>
                                <td>{item.countryName}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};


export default AddNewCountry;