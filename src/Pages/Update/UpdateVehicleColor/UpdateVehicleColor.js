import React from "react";
import "./UpdateVehicleColor.css";

const UpdateVehicleColor = () => {
    return (
        <>
                 <div id="content-page" className="content-page">

                     <div className='wrapper'>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Vehicle Color</label>
                            <input type="text" className="form-control mb-0" id="exampleInputEmail1" placeholder="Enter new color"/>
                         </div>
                     <button  type="submit" className="btn btn-primary float-left">Add Color</button>
                     </div>


                     <div className="iq-card-body mt-lg-5">
                         <table className="table table-dark">
                             <thead>
                             <tr>
                                 <th scope="col">ID</th>
                                 <th scope="col">Color</th>
                             </tr>
                             </thead>
                             <tbody>
                             <tr>
                                 <th scope="row">1</th>
                                 <td>Black</td>
                             </tr>
                             <tr>
                                 <th scope="row">2</th>
                                 <td>Red</td>
                             </tr>
                             <tr>
                                 <th scope="row">3</th>
                                 <td>Blue</td>
                             </tr>
                             <tr>
                                 <th scope="row">4</th>
                                 <td>White</td>
                             </tr>
                             <tr>
                                 <th scope="row">5</th>
                                 <td>Yellow</td>
                             </tr>
                             </tbody>
                         </table>
                     </div>

                 </div>
        </>
    );
};


export default UpdateVehicleColor;