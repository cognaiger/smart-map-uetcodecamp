import { Outlet } from "react-router-dom";
import HeaderFloorLayout from "../../components/HeaderFloorLayout/HeaderFloorLayout";

const G2 = () => {
    return (
        <div>
            <HeaderFloorLayout name={"Toa G2"} id={8} floor={3} />
            <Outlet />
        </div>
    )
}

export default G2;