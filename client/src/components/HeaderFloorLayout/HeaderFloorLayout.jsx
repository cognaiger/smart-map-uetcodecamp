import "./headerFloorLayout.scss";
import { useNavigate } from "react-router-dom";
import { Select } from "@chakra-ui/react";
import { useState } from "react";
import { ReactComponent as Exit } from "../../img/exit.svg";

const HeaderFloorLayout = ({ name, id, floor }) => {

    const navigate = useNavigate();
    const [chosenFloor, setChosenFloor] = useState(1);

    const handleClick = () => {
        navigate("/");
    }

    const handleSelectChange = (e) => {
        setChosenFloor(e.target.value);
        navigate(`/${id}/${e.target.value}`);
    }

    return (
        <div className="container">
            <div className="left">
                <div className="icon">
                    <button onClick={handleClick}>
                        <Exit width={50} height={50} />
                    </button>
                </div>

                <div className="title">
                    <h3>{name}</h3>
                </div>
            </div>
            
            <div className="right">
                <div className="menu">
                    <Select placeholder="Select floor" variant={"filled"} value={chosenFloor} onChange={handleSelectChange}>
                        <option value={1}>Floor 1</option>
                        <option value={2}>Floor 2</option>
                        <option value={3}>Floor 3</option>
                        <option value={4}>Floor 4</option>
                        <option value={5}>Floor 5</option>
                        <option value={6}>Floor 6</option>
                        <option value={7}>Floor 7</option>

                    </Select>
                </div>
            </div>
            
        </div>
    )
}

export default HeaderFloorLayout;