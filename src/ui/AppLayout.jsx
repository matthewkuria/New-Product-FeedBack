import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import Suggestions from "./Suggestions";
import EmptyFeedback from "./EmptyFeedBack";
function AppLayout(){
    return(
        <div className="page-container">
           <SideBar />
           <Suggestions />
           <EmptyFeedback />
            <Outlet />
        </div>
    )
}
export default AppLayout