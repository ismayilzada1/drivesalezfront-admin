import {Outlet} from "react-router-dom"
import Sidebar from "../../Components/ui/Sidebar";
import Topbar from "../../Components/ui/Topbar";
import {useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import SidebarDataAdmin from "../../Components/ui/Sidebar/Data/SidebarDataAdmin";
import SidebarDataModerator from "../../Components/ui/Sidebar/Data/SidebarDataModerator";
export default function AdminLayout() {

    const {admin}=useSelector(state=>state.auth);
    const navigate = useNavigate();

    let SidebarData=null;

    if(admin.Role==="Admin"){
        SidebarData=SidebarDataAdmin;
    }
    else if(admin.Role==="Moderator"){
        SidebarData=SidebarDataModerator;
    }


    return(
        <>
            <Sidebar SidebarData={SidebarData}/>
            <Topbar/>
            <Outlet/>
        </>
    )
}