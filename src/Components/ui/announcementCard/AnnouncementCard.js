import React, {useEffect} from "react";
import "./AnnouncementCard.css";
import {GetAnnouncements} from "../../../Store/Announcement/AnnouncementActions";
import {useNavigate} from "react-router-dom";

const AnnouncementCard = (props) => {

    const navigate=useNavigate();

    const {id, make,model,price,mileage,mileageType,engineVolume,fuelType,year,currency,imageUrl } = props;



    const createLabelValue = (label, value) => (
        <li className="list-group-item m-0 p-2">
            <span className="label info-key">{label}:</span>
            <span className="value">{value}</span>
        </li>
    );

    const handleCardClick=()=>{
        navigate(`/moderator/review-announcement/${id}`);
    }


    return (
        <a>

            <div className="col-sm-3">
                <div className="card iq-mb-3 announcement-card" onClick={handleCardClick}>

                    {imageUrl && (
                        <img
                            src={imageUrl.url}
                            className="card-img-top img-fluid tall-image"
                            alt="vehicle-image"
                        />
                    )}

                    <div className="card-body announcement-card-body">
                        <h4 className="card-title">{make?.makeName} {model?.modelName}</h4>

                        <ul className="list-group list-group-flush m-0 p-0 b-0">
                            {createLabelValue("Fuel Type", fuelType?.fuelType)}
                            {createLabelValue("Year", year?.year)}
                            {createLabelValue("Mileage", `${mileage} ${mileageType}`)}
                            {createLabelValue("Engine Volume", engineVolume)}

                        </ul>

                        <h5 className="card-title text-success float-start h3 mt-2">{price} {currency?.currencyName}</h5>
                    </div>
                </div>
            </div>

        </a>
    );
}

export default AnnouncementCard;
