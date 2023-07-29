import { Outlet } from "react-router-dom";
import HeaderFloorLayout from "../../components/HeaderFloorLayout/HeaderFloorLayout";
import HeaderBar from "../../components/HeaderBar/HeaderBar";

const E3 = () => {
    return (
        <div>
            
            <HeaderFloorLayout name={"Toa E3"} id = {9} floor={7} />
            <Outlet />
        </div>
    )
}

export default E3;