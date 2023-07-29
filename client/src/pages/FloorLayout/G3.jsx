import { Outlet } from "react-router-dom";
import HeaderFloorLayout from "../../components/HeaderFloorLayout/HeaderFloorLayout";

const G3 = () => {
    return (
        <div>
            <HeaderFloorLayout name={"Toa G3"} id = {10} floor={1} />
            <Outlet />
        </div>
    )
}

export default G3;