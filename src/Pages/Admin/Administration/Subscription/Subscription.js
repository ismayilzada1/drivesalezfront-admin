import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import commonDataService from "../../../../Api-services/CommonDataService";
import { UpdateAnnouncementPricing } from "../../../../Store/Admin/AdminActions";
import Loading from "../../../../Components/ui/Loading";

const Subscription = () => {
    const [newPrice, setNewPrice] = useState ('');


    const[currencies,setCurrencies]=useState([]);
    const [selectedCurrency, setSelectedCurrency] = useState(null);


    const dispatch = useDispatch ();
    const CommonDataService = new commonDataService();
    const {loading, error} = useSelector ((state) => state.admin);

    const {AdminAccessToken} = useSelector ((state) => state.auth);

    const [listTable, setListTable] = useState ([]);
    const [selectedRow, setSelectedRow] = useState ({id: null,pricingName:null,price:null});

    useEffect (() => {
        const fetchData = async () => {
            try {
                const data = await CommonDataService.getAllAnnouncementPricings();
                console.log (data);
                setListTable (data);

                const dataCurrencies = await CommonDataService.getAllCurrencies();
                console.log (dataCurrencies);
                setCurrencies(dataCurrencies);
            } catch (error) {
                console.error ("Error fetching data:", error);
            }
        };
        fetchData ();
    }, []);

    const handleRowClick = (item) => {
        setSelectedRow ({id: item.id,pricingName:item.pricingName,price: item.price});
        console.log (selectedCurrency);
    };


    const handleUpdateItem = () => {
        if(selectedRow.id && newPrice) {
            const requestBody={
                "subscriptionId": selectedRow.id,
                "price": newPrice,
                "currencyId": selectedCurrency.id
            }
            dispatch(UpdateAnnouncementPricing(requestBody,AdminAccessToken)).then (() => {
                setNewPrice('');
                const data = CommonDataService.getAllAnnouncementPricings().then((response)=>{
                    setListTable(response);
                });
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

                    <table className="table table-dark">
                        <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Currency</th>

                        </tr>
                        </thead>
                        <tbody>
                        {listTable.map ((item, index) => (
                            <tr
                                key={index}
                                onClick={() => handleRowClick (item)}
                                className={selectedRow.id === item.id ? "selected my-table" : "my-table"}
                            >
                                <th scope="row">{item.id}</th>
                                <td>{item.pricingName}</td>
                                <td>{item.price?.price}</td>
                                <td>{item.price?.currency?.currencyName}</td>

                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>

                <div className='d-flex flex-row flex-wrap justify-content-end align-items-center'
                     style={{padding: '0px 20px 20px 20px'}}>

                    <button
                        type="submit"
                        className={`btn  btn-warning  ${loading ? 'disabled' : ''}`}
                        disabled={loading || !selectedRow.id}
                        style={{marginLeft: '10px'}}
                        data-toggle="modal" data-target="#changeModal">
                        Change
                    </button>

                </div>


                <div className="modal fade" id="changeModal" tabIndex="-1" role="dialog"
                     aria-labelledby="changeModal" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Change Announcement Pricing</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">

                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Current Price</label>
                                    <input value={selectedRow.price?.price} disabled={true} type="text"
                                           className="form-control mb-0" id="exampleInputEmail1"/>
                                </div>

                                <div className="form-group m-0">
                                    <label htmlFor="exampleInputEmail1">New Price</label>
                                    <input value={newPrice} onChange={(e) => setNewPrice (e.target.value)}
                                           type="number" min="0" className="form-control mb-0" id="exampleInputEmail1"
                                           />
                                </div>

                                <div className="form-group m-0">
                                    <label htmlFor="currencySelect">Select Currency</label>
                                    <select
                                        id="currencySelect"
                                        className="form-control mb-0"
                                        value={selectedCurrency}
                                        onChange={(e) => setSelectedCurrency(e.target.value)}
                                    >
                                        <option value="" disabled>Select Currency</option>
                                        {currencies.map((currency) => (
                                            <option key={currency.id} value={currency.id}>
                                                {currency.currencyName}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                            </div>
                            <button type="button" onClick={handleUpdateItem} data-toggle="modal"
                                    data-target="#changeModal" className="btn btn-warning m-3">Change</button>

                        </div>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default Subscription;