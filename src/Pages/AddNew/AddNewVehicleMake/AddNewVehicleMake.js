import React from "react";
import "./AddNewVehicleMake.css";

const AddNewVehicleMake = () => {
    return (
        <>
            <div id="content-page" className="content-page">

                <div className='wrapper'>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Vehicle Make</label>
                        <input type="text" className="form-control mb-0" id="exampleInputEmail1" placeholder="Enter new color"/>
                    </div>
                    <button  type="submit" className="btn btn-primary float-left">Add Make</button>
                </div>


                <div className="iq-card-body mt-lg-5">
                    <table className="table table-dark">
                        <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">MakeName</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>BMW</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Mercedes</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Audi</td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>Renault</td>
                        </tr>
                        <tr>
                            <th scope="row">5</th>
                            <td>Lamborghini</td>
                        </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </>
    );
};


export default AddNewVehicleMake;