import React,{useState,useEffect} from "react";
import "./AddNewVehicleColor.css";
import { useDispatch, useSelector } from 'react-redux';
import { AddNewColor } from '../../../Store/Admin/AdminActions';
import commonDataService from "../../../Api-services/CommonDataService"

const AddNewVehicleColor = () => {
    const dispatch = useDispatch();
    const CommonDataService= new commonDataService();

    const { loading, error } = useSelector((state) => state.admin);



    const [newColor, setNewColor] = useState('');


    const [vehicleColors, setVehicleColors] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const carColorsData = await CommonDataService.getAllCarColors();
                setVehicleColors(carColorsData);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleAddColor = () => {
        if(newColor) {
            dispatch (AddNewColor (newColor)).then (() => {
                setNewColor ('');
                const carColorsData = CommonDataService.getAllCarColors().then((response)=>{
                    setVehicleColors(response);
                });
            });
        }
    };



    return (
        <>
                 <div id="content-page" className="content-page">

                     <div className='wrapper'>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Vehicle Color</label>
                            <input value={newColor} onChange={(e) => setNewColor(e.target.value)} type="text" className="form-control mb-0" id="exampleInputEmail1" placeholder="Enter new color"/>
                         </div>
                     <button  onClick={handleAddColor}
                              type="submit"
                              className={`btn btn-primary float-left ${loading ? 'disabled' : ''}`}
                              disabled={loading || !newColor}>
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
                                 <th scope="col">Color</th>
                             </tr>
                             </thead>
                             <tbody>
                             {vehicleColors.map((color, index) => (
                                 <tr key={index}>
                                     <th scope="row">{color.id}</th>
                                     <td>{color.color}</td>
                                 </tr>
                             ))}
                             </tbody>
                         </table>
                     </div>

                 </div>
        </>
    );
};


export default AddNewVehicleColor;