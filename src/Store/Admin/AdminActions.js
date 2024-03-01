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
    rejectConfirmSuccess,
    rejectConfirmFail,
    getAllUsersStart,
    getAllUsersSucess,
    getAllUsersFail,
    banUserStart,
    banUserSucess,
    banUserFail,
    unbanUserStart,
    unbanUserSucess,
    unbanUserFail,
    sendMailToUserStart,
    sendMailToUserSuccess, sendMailToUserFail
} from './AdminSlice';


import adminService from '../../Api-services/AdminService';
import {useSelector} from "react-redux";
import {
    getAnnouncementsFailure,
    getAnnouncementsStart,
    getAnnouncementsSuccess
} from "../Announcement/AnnouncementSlice";


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
            dispatch(addNewFail('An error occurred while adding new color'));
        }
    } catch (error) {
        dispatch(addNewFail('An error occurred while adding new color'));
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
            dispatch(addNewFail('An error occurred while adding new brand'));
        }
    } catch (error) {
        dispatch(addNewFail('An error occurred while adding new brand'));
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
            dispatch(addNewFail('An error occurred while adding new model'));
        }
    } catch (error) {
        dispatch(addNewFail('An error occurred while adding new model'));
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
            dispatch(addNewFail('An error occurred while adding new option'));
        }
    } catch (error) {
        dispatch(addNewFail('An error occurred while adding new option'));
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
            dispatch(addNewFail('An error occurred while adding new body type'));
        }
    } catch (error) {
        dispatch(addNewFail('An error occurred while adding new body type'));
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
            dispatch(addNewFail('An error occurred while adding new fuel type'));
        }
    } catch (error) {
        dispatch(addNewFail('An error occurred while adding new fuel type'));
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
            dispatch(addNewFail('An error occurred while adding new drivetrain type'));
        }
    } catch (error) {
        dispatch(addNewFail('An error occurred while adding new drivetrain type'));
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
            dispatch(addNewFail('An error occurred while adding new gearbox'));
        }
    } catch (error) {
        dispatch(addNewFail('An error occurred while adding new gearbox'));
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
            dispatch(addNewFail('An error occurred while adding new market version'));
        }
    } catch (error) {
        dispatch(addNewFail('An error occurred while adding new market version'));
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
            dispatch(addNewFail('An error occurred while adding new vehicle condition'));
        }
    } catch (error) {
        dispatch(addNewFail('An error occurred while adding new vehicle condition'));
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
            dispatch(addNewFail('An error occurred while adding new country'));
        }
    } catch (error) {
        dispatch(addNewFail('An error occurred while adding new country'));
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
            dispatch(addNewFail('An error occurred while adding new city'));
        }
    } catch (error) {
        dispatch(addNewFail('An error occurred while adding new city'));
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
            dispatch(removeFail('An error occurred while removing brand'));
        }
    } catch (error) {
        dispatch(removeFail('An error occurred while removing brand'));
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
            dispatch(removeFail('An error occurred while removing city'));
        }
    } catch (error) {
        dispatch(removeFail('An error occurred while removing city'));
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
            dispatch(addNewFail('An error occurred while removing country'));
        }
    } catch (error) {
        dispatch(addNewFail('An error occurred while removing country'));
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
            dispatch(addNewFail('An error occurred while removing model'));
        }
    } catch (error) {
        dispatch(addNewFail('An error occurred while removing model'));
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
            dispatch(removeFail('An error occurred while removing color'));
        }
    } catch (error) {
        dispatch(removeFail('An error occurred while removing color'));
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
            dispatch(removeFail('An error occurred while removing vehicle condition'));
        }
    } catch (error) {
        dispatch(removeFail('An error occurred while removing vehicle condition'));
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
            dispatch(removeFail('An error occurred while removing vehicle option'));
        }
    } catch (error) {
        dispatch(removeFail('An error occurred while removing vehicle option'));
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
            dispatch(removeFail('An error occurred while removing market version'));
        }
    } catch (error) {
        dispatch(removeFail('n error occurred while removing market version'));
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
            dispatch(removeFail('An error occurred while removing fuel type'));
        }
    } catch (error) {
        dispatch(removeFail('An error occurred while removing fuel type'));
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
            dispatch(addNewFail('An error occurred while removing body type'));
        }
    } catch (error) {
        dispatch(addNewFail('An error occurred while removing body type'));
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
            dispatch(addNewFail('An error occurred while removing gearbox type'));
        }
    } catch (error) {
        dispatch(addNewFail('An error occurred while removing gearbox type'));
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
            dispatch(updateFail('An error occurred while updating body type'));
        }
    } catch (error) {
        dispatch(updateFail('An error occurred while updating body type'));
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
            dispatch(updateFail('An error occurred while updating gearbox type'));
        }
    } catch (error) {
        dispatch(updateFail('An error occurred while updating gearbox type'));
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
            dispatch(updateFail('An error occurred while updating brand'));
        }
    } catch (error) {
        dispatch(updateFail('An error occurred while updating brand'));
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
            dispatch(updateFail('An error occurred while updating vehicle condition'));
        }
    } catch (error) {
        dispatch(updateFail('An error occurred while updating vehicle condition'));
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
            dispatch(updateFail('An error occurred while updating model'));
        }
    } catch (error) {
        dispatch(updateFail('An error occurred while updating model'));
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
            dispatch(updateFail('An error occurred while updating city'));
        }
    } catch (error) {
        dispatch(updateFail('An error occurred while updating city'));
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
            dispatch(updateFail('An error occurred while updating color'));
        }
    } catch (error) {
        dispatch(updateFail('An error occurred while updating color'));
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
            dispatch(updateFail('An error occurred while updating announcement pricing'));
        }
    } catch (error) {
        dispatch(updateFail('An error occurred while updating announcement pricing'));
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
            dispatch(updateFail('An error occurred while updating country'));
        }
    } catch (error) {
        dispatch(updateFail('An error occurred while updating country'));
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
            dispatch(updateFail('An error occurred while updating vehicle option'));
        }
    } catch (error) {
        dispatch(updateFail('An error occurred while updating vehicle option'));
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
            dispatch(updateFail('An error occurred while updating market version'));
        }
    } catch (error) {
        dispatch(updateFail('An error occurred while updating market version'));
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
            dispatch(updateFail('An error occurred while updating fuel type'));
        }
    } catch (error) {
        dispatch(updateFail('An error occurred while updating fuel type'));
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
            dispatch(updateFail('An error occurred while updating drivetrain type'));
        }
    } catch (error) {
        dispatch(updateFail('An error occurred while updating drivetrain type'));
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
            dispatch(removeFail('An error occurred while removing drivetrain type'));
        }
    } catch (error) {
        dispatch(removeFail('An error occurred while removing drivetrain type'));
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
        console.log(response);
        if (response.status===200) {
            dispatch(addNewSuccess(response.data));
            console.log("SUCCESFULL ADD NEW Moderator");
            return response;
        } else {
            console.log("else");
            dispatch(addNewFail('An error occurred while adding new moderator'));
        }
    } catch (error) {
        console.log("catch");
        dispatch(addNewFail('An error occurred while adding new moderator'));
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
            dispatch(removeFail('An error occurred while removing moderator'));
        }
    } catch (error) {
        dispatch(removeFail('An error occurred while removing moderator'));
    }
};

export const GetAllUsers = (accessToken) => async (dispatch) => {
    dispatch(getAllUsersStart());
    try {

        let token = accessToken || sessionStorage.getItem("AdminAuthToken");

        if (!token) {
            return null;
        }

        const response = await AdminService.GetAllUsers(token);
        if (response.status===200) {
            console.log("SUCCESFULL FETCH GET USERS");
            const data=await response.json();
            dispatch(getAllUsersSucess(data.reverse()));
        } else {
            dispatch(getAllUsersFail('An error occurred while get all users'));
        }
    } catch (error) {
        console.log(error);
        dispatch(getAllUsersFail('An error occurred while get all users'));
    }
};

export const BanUser = (userId,accessToken) => async (dispatch) => {
    dispatch(banUserStart());
    try {

        let token = accessToken || sessionStorage.getItem("AdminAuthToken");

        if (!token) {
            return null;
        }

        const response = await AdminService.BanUser(userId,token);
        if (response.status===200) {
            dispatch(banUserSucess());
        } else {
            dispatch(banUserFail('An error occurred while banning user'));
        }
    } catch (error) {
        console.log(error);
        dispatch(banUserFail('An error occurred while  banning user'));
    }
};

export const UnBanUser = (userId,accessToken) => async (dispatch) => {
    dispatch(unbanUserStart());
    try {
        let token = accessToken || sessionStorage.getItem("AdminAuthToken");

        if (!token) {
            return null;
        }

        const response = await AdminService.UnBanUser(userId,token);
        console.log(response);
        if (response.status===200) {
            dispatch(unbanUserSucess());
        } else {
            dispatch(unbanUserFail('An error occurred while banning user'));
        }
    } catch (error) {
        console.log(error);
        dispatch(unbanUserFail('An error occurred while  banning user'));
    }
};

export const SendMailToUser = (data,accessToken) => async (dispatch) => {
    dispatch(sendMailToUserStart());
    try {
        let token = accessToken || sessionStorage.getItem("AdminAuthToken");

        if (!token) {
            return null;
        }

        const response = await AdminService.SendMailToUser(data,token);
        if (response.status===200) {
            console.log("SUCCESFULL SEND MAIL");
            // const data=await response.json();

            dispatch(sendMailToUserSuccess());

        } else {
            dispatch(sendMailToUserFail('An error occurred while sending mail'));
        }
    } catch (error) {
        dispatch(sendMailToUserFail('An error occurred while sending mail'));
    }
};


