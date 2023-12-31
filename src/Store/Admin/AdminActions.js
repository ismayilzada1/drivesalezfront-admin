import {
    addNewStart,
    addNewSuccess,
    addNewFail,
    updateStart,
    updateSuccess,
    updateFail,
    removeStart,
    removeSuccess,
    removeFail,
    rejectConfirmStart,
    rejectConfirmSuccess, rejectConfirmFail
} from './AdminSlice';


import adminService from '../../Api-services/AdminService';
import {useSelector} from "react-redux";


const AdminService = new adminService();
export const AddNewColor = (data,accessToken) => async (dispatch) => {
    dispatch(addNewStart());
    try {

        let token = accessToken || sessionStorage.getItem("AdminAuthToken");

        if (!token) {
            return null;
        }


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

export const AddNewBrand = (data,accessToken) => async (dispatch) => {
    dispatch(addNewStart());
    try {

        let token = accessToken || sessionStorage.getItem("AdminAuthToken");

        if (!token) {
            return null;
        }

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

export const AddNewModel = (data,accessToken) => async (dispatch) => {
    dispatch(addNewStart());
    try {

        let token = accessToken || sessionStorage.getItem("AdminAuthToken");

        if (!token) {
            return null;
        }

        const response = await AdminService.AddNewVehicleModel(data,token);

        if (response.status===200) {
            console.log("SUCCESFULL ADD NEW Brand");
            dispatch(addNewSuccess(response.data));
            return response;
        } else {
            dispatch(addNewFail('An error occurred while processing your model request'));
        }
    } catch (error) {
        dispatch(addNewFail('An error occurred while processing your request'));
    }
};

export const AddNewOption = (data,accessToken) => async (dispatch) => {
    dispatch(addNewStart());
    try {

        let token = accessToken || sessionStorage.getItem("AdminAuthToken");

        if (!token) {
            return null;
        }


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

export const AddNewBodyType = (data,accessToken) => async (dispatch) => {
    dispatch(addNewStart());
    try {

        let token = accessToken || sessionStorage.getItem("AdminAuthToken");

        if (!token) {
            return null;
        }

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

export const AddNewFuelType = (data,accessToken) => async (dispatch) => {
    dispatch(addNewStart());
    try {

        let token = accessToken || sessionStorage.getItem("AdminAuthToken");

        if (!token) {
            return null;
        }

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

export const AddNewDrivetrainType = (data,accessToken) => async (dispatch) => {
    dispatch(addNewStart());
    try {


        let token = accessToken || sessionStorage.getItem("AdminAuthToken");

        if (!token) {
            return null;
        }

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

export const AddNewGearboxType = (data,accessToken) => async (dispatch) => {
    dispatch(addNewStart());
    try {

        let token = accessToken || sessionStorage.getItem("AdminAuthToken");

        if (!token) {
            return null;
        }

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

export const AddNewMarketVersion = (data,accessToken) => async (dispatch) => {
    dispatch(addNewStart());
    try {

        let token = accessToken || sessionStorage.getItem("AdminAuthToken");

        if (!token) {
            return null;
        }

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

export const AddVehicleOption = (data,accessToken) => async (dispatch) => {
    dispatch(addNewStart());
    try {

        let token = accessToken || sessionStorage.getItem("AdminAuthToken");

        if (!token) {
            return null;
        }


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

export const AddVehicleCondition = (data,accessToken) => async (dispatch) => {
    dispatch(addNewStart());
    try {

        let token = accessToken || sessionStorage.getItem("AdminAuthToken");

        if (!token) {
            return null;
        }

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


export const AddVehicleManufactureYear = (data,accessToken) => async (dispatch) => {
    dispatch(addNewStart());
    try {

        let token = accessToken || sessionStorage.getItem("AdminAuthToken");

        if (!token) {
            return null;
        }

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


export const AddCountry = (data,accessToken) => async (dispatch) => {
    dispatch(addNewStart());
    try {

        let token = accessToken || sessionStorage.getItem("AdminAuthToken");

        if (!token) {
            return null;
        }

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

export const AddCity = (data,accessToken) => async (dispatch) => {
    dispatch(addNewStart());
    try {

        let token = accessToken || sessionStorage.getItem("AdminAuthToken");

        if (!token) {
            return null;
        }

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

export const RemoveBrand = (data,accessToken) => async (dispatch) => {
    dispatch(removeStart());
    try {

        let token = accessToken || sessionStorage.getItem("AdminAuthToken");

        if (!token) {
            return null;
        }

        const response = await AdminService.RemoveBrand(data,token);

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

export const RemoveCity = (data,accessToken) => async (dispatch) => {
    dispatch(removeStart());
    try {

        let token = accessToken || sessionStorage.getItem("AdminAuthToken");

        if (!token) {
            return null;
        }


        const response = await AdminService.RemoveCity(data,token);

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

export const RemoveCountry = (data,accessToken) => async (dispatch) => {
    dispatch(addNewStart());
    try {

        let token = accessToken || sessionStorage.getItem("AdminAuthToken");

        if (!token) {
            return null;
        }


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

export const RemoveModel = (data,accessToken) => async (dispatch) => {
    dispatch(addNewStart());
    try {

        let token = accessToken || sessionStorage.getItem("AdminAuthToken");

        if (!token) {
            return null;
        }

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

export const RemoveColor = (data,accessToken) => async (dispatch) => {
    dispatch(removeStart());
    try {

        let token = accessToken || sessionStorage.getItem("AdminAuthToken");

        if (!token) {
            return null;
        }

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

export const RemoveVehicleCondition = (data,accessToken) => async (dispatch) => {
    dispatch(removeStart());
    try {

        let token = accessToken || sessionStorage.getItem("AdminAuthToken");

        if (!token) {
            return null;
        }

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

export const RemoveOption = (data,accessToken) => async (dispatch) => {
    dispatch(removeStart());
    try {

        let token = accessToken || sessionStorage.getItem("AdminAuthToken");

        if (!token) {
            return null;
        }

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

export const RemoveMarketVersion = (data,accessToken) => async (dispatch) => {
    dispatch(removeStart());
    try {

        let token = accessToken || sessionStorage.getItem("AdminAuthToken");

        if (!token) {
            return null;
        }

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

export const RemoveFuelType = (data,accessToken) => async (dispatch) => {
    dispatch(removeStart());
    try {

        let token = accessToken || sessionStorage.getItem("AdminAuthToken");

        if (!token) {
            return null;
        }

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

export const RemoveBodyType = (data,accessToken) => async (dispatch) => {
    dispatch(addNewStart());
    try {

        let token = accessToken || sessionStorage.getItem("AdminAuthToken");

        if (!token) {
            return null;
        }

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

export const RemoveGearboxType = (data,accessToken) => async (dispatch) => {
    dispatch(addNewStart());
    try {

        let token = accessToken || sessionStorage.getItem("AdminAuthToken");

        if (!token) {
            return null;
        }

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

export const UpdateBodyType = (data,accessToken) => async (dispatch) => {
    dispatch(updateStart());
    try {

        let token = accessToken || sessionStorage.getItem("AdminAuthToken");

        if (!token) {
            return null;
        }

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

export const UpdateGearboxType = (data,accessToken) => async (dispatch) => {
    dispatch(updateStart());
    try {

        let token = accessToken || sessionStorage.getItem("AdminAuthToken");

        if (!token) {
            return null;
        }

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


export const UpdateBrand = (data,accessToken) => async (dispatch) => {
    dispatch(updateStart());
    try {

        let token = accessToken || sessionStorage.getItem("AdminAuthToken");

        if (!token) {
            return null;
        }

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

export const UpdateVehicleCondition = (data,accessToken) => async (dispatch) => {
    dispatch(updateStart());
    try {

        let token = accessToken || sessionStorage.getItem("AdminAuthToken");

        if (!token) {
            return null;
        }

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

export const UpdateModel = (data,accessToken) => async (dispatch) => {
    dispatch(updateStart());
    try {

        let token = accessToken || sessionStorage.getItem("AdminAuthToken");

        if (!token) {
            return null;
        }

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

export const UpdateCity = (data,accessToken) => async (dispatch) => {
    dispatch(updateStart());
    try {

        let token = accessToken || sessionStorage.getItem("AdminAuthToken");

        if (!token) {
            return null;
        }

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

export const UpdateColor = (data,accessToken) => async (dispatch) => {
    dispatch(updateStart());
    try {

        let token = accessToken || sessionStorage.getItem("AdminAuthToken");

        if (!token) {
            return null;
        }

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

export const UpdateAnnouncementPricing = (data,accessToken) => async (dispatch) => {
    dispatch(updateStart());
    try {

        let token = accessToken || sessionStorage.getItem("AdminAuthToken");

        if (!token) {
            return null;
        }

        const response = await AdminService.UpdateAnnouncementPricing(data,token);

        if (response.status===200) {
            dispatch(updateSuccess(response.data));
            return response;
        } else {
            dispatch(updateFail('An error occurred while processing your request'));
        }
    } catch (error) {
        dispatch(updateFail('An error occurred while processing your request'));
    }
};


export const UpdateCountry = (data,accessToken) => async (dispatch) => {
    dispatch(updateStart());
    try {

        let token = accessToken || sessionStorage.getItem("AdminAuthToken");

        if (!token) {
            return null;
        }

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

export const UpdateOption = (data,accessToken) => async (dispatch) => {
    dispatch(updateStart());
    try {

        let token = accessToken || sessionStorage.getItem("AdminAuthToken");

        if (!token) {
            return null;
        }

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

export const UpdateMarketVersion = (data,accessToken) => async (dispatch) => {
    dispatch(updateStart());
    try {

        let token = accessToken || sessionStorage.getItem("AdminAuthToken");

        if (!token) {
            return null;
        }

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

export const UpdateFuelType = (data,accessToken) => async (dispatch) => {
    dispatch(updateStart());
    try {

        let token = accessToken || sessionStorage.getItem("AdminAuthToken");

        if (!token) {
            return null;
        }

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


export const UpdateDrivetrainType = (data,accessToken) => async (dispatch) => {
    dispatch(updateStart());
    try {

        let token = accessToken || sessionStorage.getItem("AdminAuthToken");

        if (!token) {
            return null;
        }

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

export const RemoveDrivetrainType = (data,accessToken) => async (dispatch) => {
    dispatch(removeStart());
    try {

        let token = accessToken || sessionStorage.getItem("AdminAuthToken");

        if (!token) {
            return null;
        }

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


export const AddNewModerator = (data,accessToken) => async (dispatch) => {
    dispatch(addNewStart());
    try {

        let token = accessToken || sessionStorage.getItem("AdminAuthToken");


        if (!token) {
            return null;
        }

        const response = await AdminService.AddNewModerator(data,token);

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

export const RemoveModerator = (data,accessToken) => async (dispatch) => {
    dispatch(removeStart());
    try {

        let token = accessToken || sessionStorage.getItem("AdminAuthToken");

        if (!token) {
            return null;
        }

        const response = await AdminService.RemoveModerator(data,token);

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



