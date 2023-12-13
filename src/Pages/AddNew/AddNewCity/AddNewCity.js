import React, {useEffect, useState} from "react";
import "./AddNewCity.css";
import {useDispatch, useSelector} from "react-redux";
import commonDataService from "../../../Api-services/CommonDataService";
import {AddCity} from "../../../Store/Admin/AdminActions";

const AddNewCity = () => {

    const dispatch = useDispatch();
    const CommonDataService= new commonDataService();

    const { loading, error } = useSelector((state) => state.admin);



    const [newCity, setNewCity] = useState('');

    const [CountryId, setCountryId] = useState('');


    const [Countries, setCountries] = useState([]);
    const [Cities, setCities] = useState([]);



    useEffect(() => {
        const fetchData = async () => {
            try {
                const countries = await CommonDataService.getAllCountries();
                setCountries(countries);

                const cities = await CommonDataService.getAllCities();
                setCities(cities);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleAddColor = () => {
        if(CountryId) {
            const requestBody={
                "countryId": CountryId,
                "CityName": newCity
            }

            dispatch(AddCity(requestBody)).then (() => {
                setNewCity('');
                const NewCity = CommonDataService.getAllCities().then((response)=>{
                    setCities(response);
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
                        <input value={CountryId} onChange={(e) => setCountryId(e.target.value)} type="text" className="form-control mb-0" id="exampleInputEmail1" placeholder="Enter Country Id"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Vehicle Body Type</label>
                        <input value={newCity} onChange={(e) => setNewCity(e.target.value)} type="text" className="form-control mb-0" id="exampleInputEmail1" placeholder="Enter new City"/>
                    </div>


                    <button  onClick={handleAddColor}
                             type="submit"
                             className={`btn btn-primary float-left ${loading ? 'disabled' : ''}`}
                             disabled={loading || !newCity || !CountryId}>
                        {loading ? 'Adding City...' : 'Add City'}
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


                        <table className="table table-dark mr-3">
                            <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Country</th>

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

                        <div className="table-container">
                        <table className="table table-dark table-hover">
                            <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">City</th>
                                <th scope="col">Country</th>
                            </tr>
                            </thead>
                            <tbody>
                            {Cities.map((item, index) => (
                                <tr key={index}
                                    onClick={()=>{setCountryId(item.id)}}
                                    style={{cursor:"pointer"}}
                                >

                                    <th scope="row">{item.id}</th>
                                    <td>{item.cityName}</td>
                                    <td>{item.country.countryName}</td>

                                </tr>
                            ))}
                            </tbody>
                        </table>
                        </div>

                    </div>
                </div>

            </div>
        </>
    );
};


export default AddNewCity;