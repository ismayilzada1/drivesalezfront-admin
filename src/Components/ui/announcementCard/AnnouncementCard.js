import React, {useEffect} from "react";
import "./AnnouncementCard.css";
import {GetAnnouncements} from "../../../Store/Announcement/AnnouncementActions";
import {useNavigate} from "react-router-dom";

const AnnouncementCard = (props) => {

    const navigate=useNavigate();

    const {id, vehicle,price,currency,imageUrls } = props;

    useEffect(() => {
    }, [imageUrls]);

    const createLabelValue = (label, value) => (
        <li className="list-group-item m-0 p-2">
            <span className="label info-key">{label}:</span>
            <span className="value">{value}</span>
        </li>
    );

    const handleCardClick=()=>{
        navigate(`/moderator-review-announcement/${id}`);
    }


    return (
        <a>

            <div className="col-sm-3">
                <div className="card iq-mb-3 announcement-card" onClick={handleCardClick}>

                            {imageUrls && imageUrls[0] && (
                                <img
                                    src={imageUrls[0].url}
                                    className="card-img-top img-fluid tall-image"
                                    alt="vehicle-image"
                                />
                            )}

                    <div className="card-body announcement-card-body">
                        <h4 className="card-title">{vehicle.make.makeName} {vehicle.model.modelName}</h4>

                        <ul className="list-group list-group-flush m-0 p-0 b-0">
                            {createLabelValue("Fuel Type", vehicle.fuelType.fuelType)}
                            {createLabelValue("Year", vehicle.year.year)}
                            {createLabelValue("Mileage", `${vehicle.vehicleDetails.mileAge} ${vehicle.vehicleDetails.mileAgeType}`)}
                            {createLabelValue("Engine Volume", vehicle.vehicleDetails.engineVolume)}

                        </ul>

                         <h5 className="card-title text-success float-start h3 mt-2">{price} {currency.currencyName}</h5>
                    </div>
                </div>
            </div>

        </a>
    );
}

export default AnnouncementCard;
