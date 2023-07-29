import { useState } from "react";
import { ReactComponent as Door } from "../../img/door.svg";
import { ReactComponent as Stair } from "../../img/stairs.svg";
import RoomModal from "../../components/RoomModal/RoomModal";

const G2F1 = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [roomTitle, setRoomTitle] = useState("");
    const [descrip, setDescrip] = useState("");

    const roomInfo = {
        "103": {
            "title": "103 - Phong nhiem vu chien luoc so 2",
            "description": "this is description"
        },
        
        "PCNTMN": {
            "title": "Phòng công nghệ tạo mẫu nhanh",
            "description": "this is description"
        },

        "101": {
            "title": "101",
            "description": "this is description"
        },

        "PTN": {
            "title": "Phòng thí nghiệm",
            "description": "this is description"
        },

        "TTMT": {
            "title": "Trung tâm máy tính",
            "description": "this is description"
        },

        "106": {
            "title": "106- Phòng chờ giảng",
            "description": "this is description"
        },

        "107": {
            "title": "107",
            "description": "this is description"
        },


    }

    const handleClick = (room) => {
        setIsModalOpen(true);
        setRoomTitle(roomInfo[room].title);
        setDescrip(roomInfo[room].description);
    }

    return (
        <div>
            <svg width={1920} height={950}>
                <rect y={60} width={380} height={210} style={{ fill: "lightgray", stroke: "black", strokeWidth: 3}} onClick={() => handleClick("103")} />
                <text x={180} y={165} color="black">103</text>

                <rect y={270} width={380} height={200} style={{ fill: "lightgray", stroke: "black", strokeWidth: 3}}   onClick={() => handleClick("PCNTMN")}/>
                <text x={40} y={370} color="black">Phong cong nghe tao mau nhanh</text>

                <rect y={470} width={380} height={150} style={{ fill: "lightpink", stroke: "black", strokeWidth: 3}} />
                <text x={180} y={540} color="black">WC</text>

                <rect y={620} width={420} height={200} style={{ fill: "lightgray", stroke: "black", strokeWidth: 3}}  onClick={() => handleClick("101")} />
                <text x={180} y={720} color="black">101</text>

                <rect x={1520} y={60} width={400} height={210} style={{ fill: "lightgray", stroke: "black", strokeWidth: 3}}  onClick={() => handleClick("PTN")}/>
                <text x={1720} y={160} color="black">PTN</text>

                <rect x={1420} y={60} width={100} height={210} style={{ fill: "lightgray", stroke: "black", strokeWidth: 3}} />
                <text x={1450} y={160} color="black">Kho</text>

                <rect x={620} y={60} width={800} height={210} style={{ fill: "lightgray", stroke: "black", strokeWidth: 3}} onClick={() => handleClick("TTMT")} />
                <text x={920} y={160} color="black">Trung tam may tinh</text>

                <rect x={1570} y={270} width={350} height={180} style={{ fill: "lightgray", stroke: "black", strokeWidth: 3}}  onClick={() => handleClick("106")} />
                <text x={1650} y={360} color="black">106-Phong cho giang</text>

                <rect x={1570} y={450} width={350} height={150} style={{ fill: "lightpink", stroke: "black", strokeWidth: 3}}  />
                <text x={1750} y={520} color="black">WC</text>

                <rect x={1520} y={600} width={400} height={210} style={{ fill: "lightgray", stroke: "black", strokeWidth: 3}}  onClick={() => handleClick("107")}/>
                <text x={1720} y={700} color="black">107</text>

                <Door x={890} y={760} width={150} />
                <Stair x={890} y={270} width={150} height={150} />
            </svg>
            {isModalOpen && <RoomModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} title={roomTitle} descrip={descrip} />}
        </div>
    )
}

export default G2F1;