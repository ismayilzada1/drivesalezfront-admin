import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import "./ReviewAnnouncement.css";
import {Modal, Button} from 'react-bootstrap';
import {useDispatch, useSelector} from "react-redux";
import {ConfirmAnnouncement, RejectAnnouncement, SetAnnouncement} from '../../../Store/Announcement/AnnouncementActions'
import LoadingPage from "../../../Components/ui/Loading";

const ReviewAnnouncement = () => {

    const {id} = useParams ();

    const {announcement, loading, error} = useSelector ((state) => state.announcement);

    const {admin} = useSelector ((state) => state.auth);

    const dispatch = useDispatch ();

    const [selectedImageIndex, setSelectedImageIndex] = useState (0);
    const [isTransitioning, setIsTransitioning] = useState (false);
    const [showModal, setShowModal] = useState (false);
    const [activeTab, setActiveTab] = useState ('tabs-1');

    const Images = announcement?.imageUrls?.map (image => image.url) || [];

    const navigate=useNavigate();

    const handleTabClick = (tabId, e) => {
        e.preventDefault ();
        setActiveTab (tabId);
    };


    const handleCloseModal = () => {
        console.log (options);
        setShowModal (false);
    };


    const handleThumbnailClick = (index) => {
        if (!isTransitioning) {
            setIsTransitioning (true);
            setSelectedImageIndex (index);
        }
    };

    const handlePrevButtonClick = () => {
        if (!isTransitioning) {
            setIsTransitioning (true);
            setSelectedImageIndex ((prevIndex) => (prevIndex - 1 + Images.length) % Images.length);
        }
    };

    const handleNextButtonClick = () => {
        if (!isTransitioning) {
            setIsTransitioning (true);
            setSelectedImageIndex ((prevIndex) => (prevIndex + 1) % Images.length);
        }
    };

    useEffect (() => {
        const transitionTimeout = setTimeout (() => {
            setIsTransitioning (false);
        }, 200);

        return () => clearTimeout (transitionTimeout);
    }, [isTransitioning]);

    useEffect (() => {
        const carousel = document.getElementById ("carouselExampleCaptions");

        if (carousel) {
            const carouselItems = carousel.querySelectorAll (".carousel-item");

            carouselItems.forEach ((item, index) => {
                if (index === selectedImageIndex) {
                    item.classList.add ("active");
                } else {
                    item.classList.remove ("active");
                }
            });
        }
    }, [selectedImageIndex]);


    const renderIndicators = () => {
        return Images?.map ((_, index) => (
            <button
                key={index}
                type="button"
                data-bs-target="#carouselExampleCaptions"
                onClick={() => handleThumbnailClick (index)}
                className={`carousel-indicator-button ${selectedImageIndex === index ? 'active' : ''}`}
            ></button>
        ));
    };


    const handleRejectAnnouncement=async()=>{
        try {
            await dispatch(RejectAnnouncement(id,admin.token));
            navigate('/moderator-announcement-authority');
        } catch (error) {
            console.error ('Error fetching announcement:', error);
        }
    }

    const handleConfirmAnnouncement=async()=>{
        try {
            await dispatch(ConfirmAnnouncement(id,admin.token));
            navigate('/moderator-announcement-authority');
        } catch (error) {
            console.error ('Error fetching announcement:', error);
        }
    }

    useEffect (() => {
        const fetchData = async () => {
            try {
                dispatch (SetAnnouncement (id));
            } catch (error) {
                console.error ('Error fetching announcement:', error);
            }
        };

        fetchData ();
    }, [id]);


    const {
        make,
        model,
        year,
        fuelType,
        isBrandNew,
        vehicleDetails: {
            bodyType,
            color,
            horsePower,
            gearboxType,
            drivetrainType,
            conditions,
            marketVersion,
            ownerQuantity,
            seatCount,
            vinCode,
            options,
            engineVolume,
            mileAge,
            mileageType
        } = {},
    } = announcement?.vehicle || {};

    const {
        barter,
        onCredit,
        description,
        price,
        currency,
        announcementState,
        imageUrls,
        country,
        city,
        expirationDate,
        userId,
        userName,
        email,
        firstName,
        lastName,
        phoneNumbers
    } = announcement || {};

    function formatTimestamp(timestamp) {
        const dateObject = new Date (timestamp);
        const options = {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        };
        const formattedDate = dateObject.toLocaleString ('en-GB', options);
        return formattedDate;
    }

    const createLabelValue = (label, value) => (
            <div className="list-group-item d-flex align-items-center">
                <span className="label info-key mr-3">{label}:</span>
                <span className="value">{value}</span>
            </div>
    );

    return (
        <div id="content-page" className="content-page">
            {loading ? (
                <LoadingPage/>
            ) : (
                <>
                    <section className="section mt-2" id="trainers">
                        <div className="container">
                            <div id="carouselExampleCaptions" className="carousel slide">
                                <div className="carousel-indicators">
                                    {renderIndicators ()}
                                </div>


                                <div className="carousel-inner">
                                    {Images?.map ((image, index) => (
                                        <div
                                            key={index}
                                            className={`carousel-item ${index === 0 ? 'active' : ''}`}
                                        >

                                            <div className="image-container img-container">
                                                <div className="background-container"
                                                     style={{backgroundImage: `url(${image})`}}></div>
                                                <img
                                                    src={image}
                                                    className="d-block"
                                                    alt={`Slide ${index}`}
                                                    onClick={() => {
                                                        setShowModal (true);
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>


                                <button className="carousel-control-prev" type="button"
                                        data-bs-target="#carouselExampleCaptions"
                                        onClick={handlePrevButtonClick}>
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                </button>
                                <button className="carousel-control-next" type="button"
                                        data-bs-target="#carouselExampleCaptions"
                                        onClick={handleNextButtonClick}>
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                </button>
                            </div>
                            <div className="d-flex flex-wrap flex-row justify-content-center align-items-center mt-3">
                                {Images?.map ((image, index) => (
                                    <div className="d-flex flex-row justify-content-center align-items-center"
                                         key={index}>
                                        <div className="thumbnail-container">
                                            <img
                                                src={image}
                                                className="thumbnail-image"
                                                data-bs-target="#carouselExampleCaptions"

                                                onClick={() => handleThumbnailClick (index)}
                                                style={{
                                                    opacity: selectedImageIndex === index ? 1 : 0.7,
                                                }}
                                                alt={'vehicleImage'}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className='d-flex flex-row justify-content-end align-items-center mt-3'>
                                <button className='btn btn-lg btn-danger pr-lg-4 pl-lg-4  mr-5'
                                        data-toggle="modal" data-target="#RejectModal">Reject
                                </button>
                                <button data-toggle="modal" data-target="#ConfirmModal"
                                        className='btn btn-lg btn-success pr-lg-4 pl-lg-4'>Confirm
                                </button>
                            </div>

                            <div className="row mt-3" id="tabs">

                                <div className="col-lg-4">
                                    <ul>
                                        <li>
                                            <a href='#tabs-1' onClick={(e) => handleTabClick ('tabs-1', e)}>
                                                <i className="fa fa-cog"></i> Vehicle Specs
                                            </a>
                                        </li>
                                        <li>
                                            <a href='#tabs-2' onClick={(e) => handleTabClick ('tabs-2', e)}>
                                                <i className="fa fa-info-circle"></i> Vehicle Description
                                            </a>
                                        </li>
                                        <li>
                                            <a href='#tabs-3' onClick={(e) => handleTabClick ('tabs-3', e)}>
                                                <i className="fa fa-plus-circle"></i> Vehicle Extras
                                            </a>
                                        </li>
                                        <li>
                                            <a href='#tabs-4' onClick={(e) => handleTabClick ('tabs-4', e)}>
                                                <i className="fa fa-phone"></i> Contact Details
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-8">
                                    <section className='tabs-content' style={{width: '100%'}}>
                                        <article id='tabs-1'
                                                 className={`fade-in-element ${activeTab === 'tabs-1' ? 'active-tab' : ''}`}>


                                            <h4>Vehicle Specs</h4>

                                            <div className="row">

                                                <div className="col-sm-6">
                                                    <label>Make</label>
                                                    <p>{make && make.makeName}</p>
                                                </div>

                                                <div className="col-sm-6">
                                                    <label> Model</label>
                                                    <p>{model?.modelName}</p>
                                                </div>

                                                <div className="col-sm-6">
                                                    <label>Body Type</label>
                                                    <p>{bodyType?.bodyType}</p>
                                                </div>

                                                <div className="col-sm-6">
                                                    <label>First registration</label>
                                                    <p>{year?.year}</p>
                                                </div>


                                                <div className="col-sm-6">
                                                    <label>Mileage</label>
                                                    <p>{mileAge} {mileageType}</p>
                                                </div>

                                                <div className="col-sm-6">
                                                    <label>Fuel Type</label>
                                                    <p>{fuelType?.fuelType}</p>
                                                </div>

                                                <div className="col-sm-6">
                                                    <label>Engine Volume</label>
                                                    <p>{engineVolume} cc</p>
                                                </div>


                                                <div className="col-sm-6">
                                                    <label>Horse Power</label>
                                                    <p>{horsePower}</p>
                                                </div>


                                                <div className="col-sm-6">
                                                    <label>Gearbox</label>
                                                    <p>{gearboxType?.gearboxType}</p>
                                                </div>

                                                <div className="col-sm-6">
                                                    <label>Number of seats</label>
                                                    <p>{seatCount}</p>
                                                </div>

                                                <div className="col-sm-6">
                                                    <label>Market Version</label>
                                                    <p>{marketVersion?.marketVersion}</p>
                                                </div>

                                                <div className="col-sm-6">
                                                    <label>Drive Train Type</label>
                                                    <p>{drivetrainType?.drivetrainType}</p>
                                                </div>

                                                <div className="col-sm-6">
                                                    <label>Owner Quantity</label>
                                                    <p>{ownerQuantity}</p>
                                                </div>

                                                <div className="col-sm-6">
                                                    <label>Brand New</label>
                                                    <p>{isBrandNew ? 'Yes' : 'No'}</p>
                                                </div>

                                                <div className="col-sm-6">
                                                    <label>Color</label>
                                                    <p>{color?.color}</p>
                                                </div>

                                                <div className="col-sm-6">
                                                    <label>Barter</label>
                                                    <p>{barter ? 'Yes' : 'No'}</p>
                                                </div>

                                                <div className="col-sm-6">
                                                    <label>On Credit</label>
                                                    <p>{onCredit ? 'Yes' : 'No'}</p>
                                                </div>

                                                <div className="col-sm-12">
                                                    <label style={{fontSize: '1.4em'}}>Price</label>
                                                    <p className="main-price text-success font-weight-bold"
                                                       style={{fontSize: '2.2em'}}>
                                                        {price && `${price} ${currency.currencyName}`}
                                                    </p>
                                                </div>

                                                <div className="col-sm-6">
                                                    <p>{formatTimestamp (expirationDate)}</p>
                                                </div>

                                            </div>
                                        </article>
                                        <article id='tabs-2'
                                                 className={`fade-in-element ${activeTab === 'tabs-2' ? 'active-tab' : ''}`}>
                                            <h4>Vehicle Description</h4>

                                            <div className='row'>
                                                <p className='col-sm-12'>{description}</p>

                                                <p className='col-sm-12 font-weight-bold' style={{fontSize: '1.2em'}}>
                                                    VIN CODE:
                                                    <a
                                                        href={`https://www.google.com/search?q=${vinCode}&tbm=isch`}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="font-weight-bold ms-2"
                                                        style={{fontSize: '1em', opacity: .7}}
                                                    >
                                                        {vinCode}
                                                    </a>
                                                </p>

                                            </div>
                                        </article>
                                        <article id='tabs-3'
                                                 className={`fade-in-element ${activeTab === 'tabs-3' ? 'active-tab' : ''}`}>
                                            <h4>Vehicle Extras</h4>

                                            <div className="row">
                                                {options?.map ((option, index) => (
                                                    <div className="col-sm-6">
                                                        <p>{option.option}</p>
                                                    </div>
                                                ))}
                                            </div>

                                            {conditions && conditions.length > 0 && (
                                                <div>
                                                    <h4>Vehicle Conditions</h4>
                                                    <div className="row">
                                                        {conditions.map ((condition, index) => (
                                                            <div key={condition.id} className="col-sm-6">
                                                                <p className={'mb-1'}
                                                                   style={{fontWeight: "bold"}}>{condition.condition}</p>
                                                                <p>{condition.description}</p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}


                                        </article>
                                        <article id='tabs-4'
                                                 className={`fade-in-element ${activeTab === 'tabs-4' ? 'active-tab' : ''}`}>
                                            <h4>Contact Details</h4>

                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <label>Name Surname</label>

                                                    <p>{firstName} {lastName}</p>
                                                </div>

                                                <div className="col-sm-6">
                                                    <label>Email</label>
                                                    <p><a href="#">{email}</a></p>
                                                </div>

                                                <div className="col-sm-6">
                                                    <label>Country</label>
                                                    <p>{country?.countryName}</p>
                                                </div>

                                                <div className="col-sm-6">
                                                    <label>City</label>
                                                    <p>{city?.cityName}</p>
                                                </div>


                                                <div className="col-sm-6">
                                                    <label className="mb-2">Mobile phones</label>
                                                    {phoneNumbers?.map ((phone, index) => (
                                                        <p key={index} className="m-2">
                                                            {phone.phoneNumber}
                                                        </p>
                                                    ))}
                                                </div>


                                            </div>
                                        </article>

                                    </section>
                                </div>
                            </div>
                        </div>
                    </section>


                    <Modal
                        show={showModal}
                        onHide={handleCloseModal}
                        centered
                        className="fade"
                        backdrop="static"
                        id="ModalImage"
                        dialogClassName="modal-dialog-fullscreen">

                        <Modal.Body className=" modalImage-body modal-image-container">
                            <Button className="close-button" onClick={handleCloseModal}>
                                <span aria-hidden="true">&times;</span>
                            </Button>
                            <img
                                src={Images[selectedImageIndex]}
                                alt={`Slide ${selectedImageIndex}`}
                                className="modal-image"
                                onClick={(e) => e.stopPropagation ()}
                            />
                            <div className="thumbnails-container">
                                {Images?.map ((image, index) => (
                                    <img
                                        key={index}
                                        src={image}
                                        alt={`Thumbnail ${index}`}
                                        className={`thumbnail-image ${selectedImageIndex === index ? 'active' : ''}`}
                                        onClick={() => handleThumbnailClick (index)}

                                    />
                                ))}
                            </div>
                        </Modal.Body>
                    </Modal>


                    <div className="modal fade" id="ConfirmModal" tabIndex="-1" role="dialog"
                         aria-labelledby="ConfirmModal" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Confirm Announcement</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <div
                                        className="d-flex flex-wrap flex-row justify-content-center align-items-center mt-3">
                                        {Images?.map ((image, index) => (
                                            <div className="d-flex flex-row justify-content-center align-items-center"
                                                 key={index}>
                                                <div className="thumbnail-container">
                                                    <img
                                                        src={image}
                                                        className="thumbnail-image"
                                                        data-bs-target="#carouselExampleCaptions"
                                                        onClick={()=>{setSelectedImageIndex(index)}}
                                                        style={{
                                                            opacity: selectedImageIndex === index ? 1 : 0.7,
                                                        }}
                                                        alt={'vehicleImage'}
                                                    />
                                                </div>
                                            </div>
                                        ))}


                                    </div>
                                    <p className={'m-2'}>{description}</p>

                                    <ul className="list-group mt-3">
                                        {createLabelValue ("Make", make?.makeName)}
                                        {createLabelValue ("Model", model?.modelName)}
                                        {createLabelValue ("Body Type", bodyType?.bodyType)}
                                        {createLabelValue ("Fuel Type", fuelType?.fuelType)}
                                        {createLabelValue ("Year", year?.year)}
                                        {createLabelValue ("Color", color?.color)}
                                    </ul>
                                    <h5 className='text-success text-lg-right mt-5'>{price} {currency.currencyName}</h5>

                                </div>
                                <button type="button" data-toggle="modal"
                                        data-target="#addModal" onClick={handleConfirmAnnouncement} className="btn btn-success m-3">Confirm
                                </button>

                            </div>
                        </div>
                    </div>

                    <div className="modal fade" id="RejectModal" tabIndex="-1" role="dialog"
                         aria-labelledby="RejectModal" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Reject Announcement</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <div
                                        className="d-flex flex-wrap flex-row justify-content-center align-items-center mt-3">
                                        {Images?.map ((image, index) => (
                                            <div className="d-flex flex-row justify-content-center align-items-center"
                                                 key={index}>
                                                <div className="thumbnail-container">
                                                    <img
                                                        src={image}
                                                        className="thumbnail-image"
                                                        data-bs-target="#carouselExampleCaptions"
                                                        onClick={()=>{setSelectedImageIndex(index)}}
                                                        style={{
                                                            opacity: selectedImageIndex === index ? 1 : 0.7,
                                                        }}
                                                        alt={'vehicleImage'}
                                                    />
                                                </div>
                                            </div>
                                        ))}


                                    </div>
                                    <p className={'m-2'}>{description}</p>

                                    <ul className="list-group mt-3">
                                        {createLabelValue ("Make", make?.makeName)}
                                        {createLabelValue ("Model", model?.modelName)}
                                        {createLabelValue ("Body Type", bodyType?.bodyType)}
                                        {createLabelValue ("Fuel Type", fuelType?.fuelType)}
                                        {createLabelValue ("Year", year?.year)}
                                        {createLabelValue ("Color", color?.color)}


                                        <div className="form-group mt-4">
                                            <label>Description (Rejection Reason)</label>
                                            <textarea  className="form-control" cols="40" rows="10"></textarea>
                                        </div>
                                    </ul>
                                    <h5 className='text-success text-lg-right mt-5'>{price} {currency.currencyName}</h5>

                                </div>
                                <button type="button" data-toggle="modal"
                                        data-target="#addModal" onClick={handleRejectAnnouncement} className="btn btn-danger m-3">Reject
                                </button>

                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default ReviewAnnouncement;