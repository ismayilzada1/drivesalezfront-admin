import React, { useEffect, useState } from "react";
import "./RemoveVehicleMake.css";
import { useDispatch, useSelector } from "react-redux";
import commonDataService from "../../../Api-services/CommonDataService";
import { RemoveBrand } from "../../../Store/Admin/AdminActions";

const RemoveVehicleMake = () => {
    const dispatch = useDispatch();
    const CommonDataService = new commonDataService();
    const { loading, error } = useSelector((state) => state.admin);

    const [removeBrand, setRemoveBrand] = useState("");
    const [vehicleBrands, setVehicleBrands] = useState([]);
    const [selectedRow, setSelectedRow] = useState({ id: null, makeName: null });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const vehicleBrandsData = await CommonDataService.getAllCarMakes();
                setVehicleBrands(vehicleBrandsData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    const handleRemoveColor = () => {
        if (removeBrand) {
            dispatch(RemoveBrand(removeBrand)).then(() => {
                setRemoveBrand("");
                const vehicleBrandsData = CommonDataService.getAllCarMakes().then(
                    (response) => {
                        setVehicleBrands(response);
                    }
                );
            });
        }
    };

    const handleRowClick = (brand) => {
        setSelectedRow({ id: brand.id, makeName: brand.makeName });
    };

    return (
        <>
            <div id="content-page" className="content-page">
                <div className="wrapper">
                    <button
                        onClick={handleRemoveColor}
                        type="submit"
                        className={`btn btn-primary float-left ${loading ? "disabled" : ""}`}
                        disabled={loading || !selectedRow.id}
                    >
                        {loading ? "Removing Make..." : "Remove Make"}
                    </button>
                </div>

                <div className="iq-card-body mt-lg-5">
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
                                onChange={() => {}}
                            >
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
                            <tr
                                key={index}
                                onClick={() => handleRowClick(brand)}
                                className={selectedRow.id === brand.id ? "selected my-table" : "my-table"}
                            >
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

export default RemoveVehicleMake;
