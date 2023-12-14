import {
    addNewStart,
    addNewSuccess,
    addNewFail, updateStart, updateSuccess, updateFail, removeStart, removeSuccess, removeFail
} from './AdminSlice';


import adminService from '../../Api-services/AdminService';
import {useSelector} from "react-redux";


const AdminService = new adminService();
export const AddNewColor = (data,token) => async (dispatch) => {
    dispatch(addNewStart());
    try {
        const response = await AdminService.AddNewColor(data,token);

        if (response.status===200) {
            console.log("SUCCESFULL ADD NEW Color");
            dispatch(addNewSuccess(response.data));
            return response;
        } else {
            dispatch(addNewFail('An error occurred while processing your request'));
        }
    } catch (error) {
        dispatch(addNewFail('An error occurred while processing your request'));
    }
};

export const AddNewBrand = (data,token) => async (dispatch) => {
    dispatch(addNewStart());
    try {
        const response = await AdminService.AddNewBrand(data,token);

        if (response.status===200) {
            console.log("SUCCESFULL ADD NEW Brand");
            dispatch(addNewSuccess(response.data));
            return response;
        } else {
            dispatch(addNewFail('An error occurred while processing your request'));
        }
    } catch (error) {
        dispatch(addNewFail('An error occurred while processing your request'));
    }
};

export const AddNewModel = (data,token) => async (dispatch) => {
    dispatch(addNewStart());
    try {
        const response = await AdminService.AddNewVehicleModel(data,token);

        if (response.status===200) {
            console.log("SUCCESFULL ADD NEW Brand");
            dispatch(addNewSuccess(response.data));
            return response;
        } else {
            dispatch(addNewFail('An error occurred while processing your request'));
        }
    } catch (error) {
        dispatch(addNewFail('An error occurred while processing your request'));
    }
};

export const AddNewOption = (data,token) => async (dispatch) => {
    dispatch(addNewStart());
    try {
        const response = await AdminService.AddNewVehicleOption(data,token);

        if (response.status===200) {
            console.log("SUCCESFULL ADD NEW Option");
            dispatch(addNewSuccess(response.data));
            return response;
        } else {
            dispatch(addNewFail('An error occurred while processing your request'));
        }
    } catch (error) {
        dispatch(addNewFail('An error occurred while processing your request'));
    }
};

export const AddNewBodyType = (data,token) => async (dispatch) => {
    dispatch(addNewStart());
    try {
        const response = await AdminService.AddNewBodyType(data,token);

        if (response.status===200) {
            console.log("SUCCESFULL ADD NEW BodY Type");
            dispatch(addNewSuccess(response.data));
            return response;
        } else {
            dispatch(addNewFail('An error occurred while processing your request'));
        }
    } catch (error) {
        dispatch(addNewFail('An error occurred while processing your request'));
    }
};

export const AddNewFuelType = (data,token) => async (dispatch) => {
    dispatch(addNewStart());
    try {
        const response = await AdminService.AddNewFuelType(data,token);

        if (response.status===200) {
            console.log("SUCCESFULL ADD NEW Fuel Type");
            dispatch(addNewSuccess(response.data));
            return response;
        } else {
            dispatch(addNewFail('An error occurred while processing your request'));
        }
    } catch (error) {
        dispatch(addNewFail('An error occurred while processing your request'));
    }
};

export const AddNewDrivetrainType = (data,token) => async (dispatch) => {
    dispatch(addNewStart());
    try {
        const response = await AdminService.AddNewDrivetrainType(data,token);

        if (response.status===200) {
            console.log("SUCCESFULL ADD NEW Drivetrain Type");
            dispatch(addNewSuccess(response.data));
            return response;
        } else {
            dispatch(addNewFail('An error occurred while processing your request'));
        }
    } catch (error) {
        dispatch(addNewFail('An error occurred while processing your request'));
    }
};

export const AddNewGearboxType = (data,token) => async (dispatch) => {
    dispatch(addNewStart());
    try {
        const response = await AdminService.AddNewGearboxType(data,token);

        if (response.status===200) {
            console.log("SUCCESFULL ADD NEW Drivetrain Type");
            dispatch(addNewSuccess(response.data));
            return response;
        } else {
            dispatch(addNewFail('An error occurred while processing your request'));
        }
    } catch (error) {
        dispatch(addNewFail('An error occurred while processing your request'));
    }
};

export const AddNewMarketVersion = (data,token) => async (dispatch) => {
    dispatch(addNewStart());
    try {
        const response = await AdminService.AddNewMarketVersion(data,token);

        if (response.status===200) {
            console.log("SUCCESFULL ADD NEW Market Version");
            dispatch(addNewSuccess(response.data));
            return response;
        } else {
            dispatch(addNewFail('An error occurred while processing your request'));
        }
    } catch (error) {
        dispatch(addNewFail('An error occurred while processing your request'));
    }
};

export const AddVehicleOption = (data,token) => async (dispatch) => {
    dispatch(addNewStart());
    try {
        const response = await AdminService.AddNewVehicleOption(data,token);

        if (response.status===200) {
            console.log("SUCCESFULL ADD NEW Market Version");
            dispatch(addNewSuccess(response.data));
            return response;
        } else {
            dispatch(addNewFail('An error occurred while processing your request'));
        }
    } catch (error) {
        dispatch(addNewFail('An error occurred while processing your request'));
    }
};

export const AddVehicleCondition = (data,token) => async (dispatch) => {
    dispatch(addNewStart());
    try {
        const response = await AdminService.AddNewVehicleCondition(data,token);

        if (response.status===200) {
            console.log("SUCCESFULL ADD NEW Market Version");
            dispatch(addNewSuccess(response.data));
            return response;
        } else {
            dispatch(addNewFail('An error occurred while processing your request'));
        }
    } catch (error) {
        dispatch(addNewFail('An error occurred while processing your request'));
    }
};

export const AddVehicleModel = (data,token) => async (dispatch) => {
    dispatch(addNewStart());
    try {
        const response = await AdminService.AddNewVehicleModel(data,token);

        if (response.status===200) {
            console.log("SUCCESFULL ADD NEW Market Version");
            dispatch(addNewSuccess(response.data));
            return response;
        } else {
            dispatch(addNewFail('An error occurred while processing your request'));
        }
    } catch (error) {
        dispatch(addNewFail('An error occurred while processing your request'));
    }
};


export const AddVehicleManufactureYear = (data,token) => async (dispatch) => {
    dispatch(addNewStart());
    try {
        const response = await AdminService.AddNewVehicleManufactureYear(data,token);

        if (response.status===200) {
            console.log("SUCCESFULL ADD NEW Market Version");
            dispatch(addNewSuccess(response.data));
            return response;
        } else {
            dispatch(addNewFail('An error occurred while processing your request'));
        }
    } catch (error) {
        dispatch(addNewFail('An error occurred while processing your request'));
    }
};


export const AddCountry = (data,token) => async (dispatch) => {
    dispatch(addNewStart());
    try {
        const response = await AdminService.AddNewCountry(data,token);

        if (response.status===200) {
            console.log("SUCCESFULL ADD NEW Market Version");
            dispatch(addNewSuccess(response.data));
            return response;
        } else {
            dispatch(addNewFail('An error occurred while processing your request'));
        }
    } catch (error) {
        dispatch(addNewFail('An error occurred while processing your request'));
    }
};

export const AddCity = (data,token) => async (dispatch) => {
    dispatch(addNewStart());
    try {
        const response = await AdminService.AddNewCity(data,token);

        if (response.status===200) {
            console.log("SUCCESFULL ADD NEW Market Version");
            dispatch(addNewSuccess(response.data));
            return response;
        } else {
            dispatch(addNewFail('An error occurred while processing your request'));
        }
    } catch (error) {
        dispatch(addNewFail('An error occurred while processing your request'));
    }
};

export const RemoveBrand = (data,token) => async (dispatch) => {
    dispatch(addNewStart());
    try {
        const response = await AdminService.RemoveBrand(data,token);

        if (response.status===200) {
            console.log("SUCCESFULL ADD NEW Brand");
            dispatch(addNewSuccess(response.data));
            return response;
        } else {
            dispatch(addNewFail('An error occurred while processing your request'));
        }
    } catch (error) {
        dispatch(addNewFail('An error occurred while processing your request'));
    }
};

export const RemoveCountry = (data,token) => async (dispatch) => {
    dispatch(addNewStart());
    try {
        const response = await AdminService.RemoveCountry(data,token);

        if (response.status===200) {
            console.log("SUCCESFULL ADD NEW Brand");
            dispatch(addNewSuccess(response.data));
            return response;
        } else {
            dispatch(addNewFail('An error occurred while processing your request'));
        }
    } catch (error) {
        dispatch(addNewFail('An error occurred while processing your request'));
    }
};

export const RemoveModel = (data,token) => async (dispatch) => {
    dispatch(addNewStart());
    try {
        const response = await AdminService.RemoveModel(data,token);

        if (response.status===200) {
            console.log("SUCCESFULL ADD NEW Brand");
            dispatch(addNewSuccess(response.data));
            return response;
        } else {
            dispatch(addNewFail('An error occurred while processing your request'));
        }
    } catch (error) {
        dispatch(addNewFail('An error occurred while processing your request'));
    }
};

export const RemoveColor = (data,token) => async (dispatch) => {
    dispatch(removeStart());
    try {
        const response = await AdminService.RemoveColor(data,token);

        if (response.status===200) {
            console.log("SUCCESFULL ADD NEW Brand");
            dispatch(removeSuccess(response.data));
            return response;
        } else {
            dispatch(removeFail('An error occurred while processing your request'));
        }
    } catch (error) {
        dispatch(removeFail('An error occurred while processing your request'));
    }
};

export const RemoveVehicleCondition = (data,token) => async (dispatch) => {
    dispatch(removeStart());
    try {
        const response = await AdminService.RemoveVehicleCondition(data,token);

        if (response.status===200) {
            console.log("SUCCESFULL ADD NEW Brand");
            dispatch(removeSuccess(response.data));
            return response;
        } else {
            dispatch(removeFail('An error occurred while processing your request'));
        }
    } catch (error) {
        dispatch(removeFail('An error occurred while processing your request'));
    }
};

export const RemoveOption = (data,token) => async (dispatch) => {
    dispatch(removeStart());
    try {
        const response = await AdminService.RemoveOption(data,token);

        if (response.status===200) {
            console.log("SUCCESFULL ADD NEW Brand");
            dispatch(removeSuccess(response.data));
            return response;
        } else {
            dispatch(removeFail('An error occurred while processing your request'));
        }
    } catch (error) {
        dispatch(removeFail('An error occurred while processing your request'));
    }
};

export const RemoveMarketVersion = (data,token) => async (dispatch) => {
    dispatch(removeStart());
    try {
        const response = await AdminService.RemoveMarketVersion(data,token);

        if (response.status===200) {
            console.log("SUCCESFULL ADD NEW Brand");
            dispatch(removeSuccess(response.data));
            return response;
        } else {
            dispatch(removeFail('An error occurred while processing your request'));
        }
    } catch (error) {
        dispatch(removeFail('An error occurred while processing your request'));
    }
};

export const RemoveFuelType = (data,token) => async (dispatch) => {
    dispatch(removeStart());
    try {
        const response = await AdminService.RemoveFuelType(data,token);

        if (response.status===200) {
            console.log("SUCCESFULL ADD NEW Brand");
            dispatch(removeSuccess(response.data));
            return response;
        } else {
            dispatch(removeFail('An error occurred while processing your request'));
        }
    } catch (error) {
        dispatch(removeFail('An error occurred while processing your request'));
    }
};

export const RemoveBodyType = (data,token) => async (dispatch) => {
    dispatch(addNewStart());
    try {
        const response = await AdminService.RemoveBodyType(data,token);

        if (response.status===200) {
            console.log("SUCCESFULL ADD NEW Brand");
            dispatch(addNewSuccess(response.data));
            return response;
        } else {
            dispatch(addNewFail('An error occurred while processing your request'));
        }
    } catch (error) {
        dispatch(addNewFail('An error occurred while processing your request'));
    }
};

export const RemoveGearboxType = (data,token) => async (dispatch) => {
    dispatch(addNewStart());
    try {
        const response = await AdminService.RemoveGearboxType(data,token);

        if (response.status===200) {
            console.log("SUCCESFULL ADD NEW Brand");
            dispatch(addNewSuccess(response.data));
            return response;
        } else {
            dispatch(addNewFail('An error occurred while processing your request'));
        }
    } catch (error) {
        dispatch(addNewFail('An error occurred while processing your request'));
    }
};

export const UpdateBodyType = (data,token) => async (dispatch) => {
    dispatch(updateStart());
    try {
        const response = await AdminService.UpdateBodyType(data,token);

        if (response.status===200) {
            console.log("SUCCESFULL ADD NEW BodY Type");
            dispatch(updateSuccess(response.data));
            return response;
        } else {
            dispatch(updateFail('An error occurred while processing your request'));
        }
    } catch (error) {
        dispatch(updateFail('An error occurred while processing your request'));
    }
};

export const UpdateGearboxType = (data,token) => async (dispatch) => {
    dispatch(updateStart());
    try {
        const response = await AdminService.UpdateGearboxType(data,token);

        if (response.status===200) {
            console.log("SUCCESFULL ADD NEW BodY Type");
            dispatch(updateSuccess(response.data));
            return response;
        } else {
            dispatch(updateFail('An error occurred while processing your request'));
        }
    } catch (error) {
        dispatch(updateFail('An error occurred while processing your request'));
    }
};


export const UpdateBrand = (data,token) => async (dispatch) => {
    dispatch(updateStart());
    try {
        const response = await AdminService.UpdateBrand(data,token);

        if (response.status===200) {
            console.log("SUCCESFULL ADD NEW BodY Type");
            dispatch(updateSuccess(response.data));
            return response;
        } else {
            dispatch(updateFail('An error occurred while processing your request'));
        }
    } catch (error) {
        dispatch(updateFail('An error occurred while processing your request'));
    }
};

export const UpdateVehicleCondition = (data,token) => async (dispatch) => {
    dispatch(updateStart());
    try {
        const response = await AdminService.UpdateVehicleCondition(data,token);

        if (response.status===200) {
            console.log("SUCCESFULL ADD NEW BodY Type");
            dispatch(updateSuccess(response.data));
            return response;
        } else {
            dispatch(updateFail('An error occurred while processing your request'));
        }
    } catch (error) {
        dispatch(updateFail('An error occurred while processing your request'));
    }
};

export const UpdateModel = (data,token) => async (dispatch) => {
    dispatch(updateStart());
    try {
        const response = await AdminService.UpdateModel(data,token);

        if (response.status===200) {
            console.log("SUCCESFULL ADD NEW BodY Type");
            dispatch(updateSuccess(response.data));
            return response;
        } else {
            dispatch(updateFail('An error occurred while processing your request'));
        }
    } catch (error) {
        dispatch(updateFail('An error occurred while processing your request'));
    }
};

export const UpdateColor = (data,token) => async (dispatch) => {
    dispatch(updateStart());
    try {
        const response = await AdminService.UpdateColor(data,token);

        if (response.status===200) {
            console.log("SUCCESFULL ADD NEW BodY Type");
            dispatch(updateSuccess(response.data));
            return response;
        } else {
            dispatch(updateFail('An error occurred while processing your request'));
        }
    } catch (error) {
        dispatch(updateFail('An error occurred while processing your request'));
    }
};

export const UpdateCountry = (data,token) => async (dispatch) => {
    dispatch(updateStart());
    try {
        const response = await AdminService.UpdateCountry(data,token);

        if (response.status===200) {
            console.log("SUCCESFULL ADD NEW BodY Type");
            dispatch(updateSuccess(response.data));
            return response;
        } else {
            dispatch(updateFail('An error occurred while processing your request'));
        }
    } catch (error) {
        dispatch(updateFail('An error occurred while processing your request'));
    }
};

export const UpdateOption = (data,token) => async (dispatch) => {
    dispatch(updateStart());
    try {
        const response = await AdminService.UpdateOption(data,token);

        if (response.status===200) {
            console.log("SUCCESFULL ADD NEW BodY Type");
            dispatch(updateSuccess(response.data));
            return response;
        } else {
            dispatch(updateFail('An error occurred while processing your request'));
        }
    } catch (error) {
        dispatch(updateFail('An error occurred while processing your request'));
    }
};

export const UpdateMarketVersion = (data,token) => async (dispatch) => {
    dispatch(updateStart());
    try {
        const response = await AdminService.UpdateMarketVersion(data,token);

        if (response.status===200) {
            console.log("SUCCESFULL ADD NEW BodY Type");
            dispatch(updateSuccess(response.data));
            return response;
        } else {
            dispatch(updateFail('An error occurred while processing your request'));
        }
    } catch (error) {
        dispatch(updateFail('An error occurred while processing your request'));
    }
};

export const UpdateFuelType = (data,token) => async (dispatch) => {
    dispatch(updateStart());
    try {
        const response = await AdminService.UpdateFuelType(data,token);

        if (response.status===200) {
            console.log("SUCCESFULL ADD NEW BodY Type");
            dispatch(updateSuccess(response.data));
            return response;
        } else {
            dispatch(updateFail('An error occurred while processing your request'));
        }
    } catch (error) {
        dispatch(updateFail('An error occurred while processing your request'));
    }
};


export const UpdateDrivetrainType = (data,token) => async (dispatch) => {
    dispatch(updateStart());
    try {
        const response = await AdminService.UpdateDrivetrainType(data,token);

        if (response.status===200) {
            console.log("SUCCESFULL ADD NEW BodY Type");
            dispatch(updateSuccess(response.data));
            return response;
        } else {
            dispatch(updateFail('An error occurred while processing your request'));
        }
    } catch (error) {
        dispatch(updateFail('An error occurred while processing your request'));
    }
};

export const RemoveDrivetrainType = (data,token) => async (dispatch) => {
    dispatch(removeStart());
    try {
        const response = await AdminService.RemoveDrivetrainType(data,token);

        if (response.status===200) {
            console.log("SUCCESFULL ADD NEW Brand");
            dispatch(removeSuccess(response.data));
            return response;
        } else {
            dispatch(removeFail('An error occurred while processing your request'));
        }
    } catch (error) {
        dispatch(removeFail('An error occurred while processing your request'));
    }
};