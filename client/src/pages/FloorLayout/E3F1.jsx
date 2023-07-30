import { ReactComponent as Door } from "../../img/door.svg";
import { ReactComponent as Stair } from "../../img/stairs.svg";
import { useState } from "react";
import RoomModal from "../../components/RoomModal/RoomModal";
const E3F1 = () => {


    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [roomTitle, setRoomTitle] = useState("");
    const [descrip, setDescrip] = useState("");

    const roomInfo = {
        "TQ": {
            "title": "Thủ Quỹ",
            "description": "Phòng Thủ Quỹ của trường."
        },

        "KHTC": {
            "title": "Kế Hoạch Tài Chính",
            "description": "Phòng Kế Hoạch Tài Chính"
        },

        "PH": {
            "title": "Phòng Họp",
            "description": "Phòng Họp"
        },

        "103": {
            "title": "103- Trung Tâm Bảo Đảm Chất Lượng",
            "description": "Trung Tâm Bảo Đảm Chất Lượng"
        },

        "104": {
            "title": "104- Phòng Công Tác Sinh Viên",
            "description": "Nơi hỗ trợ, giải đáp thắc mắc của sinh viên. Mở Từ 8h - 16h"
        },

        "105": {
            "title": "105- Phòng Đào Tạo",
            "description": "Phòng Phụ Trách Đào Tạo. Mở từ 8h-16h"
        },

        "106": {
            "title": "106- Phòng Đào Tạo",
            "description": "Phòng Phụ Trách Đào Tạo. Mở từ 8h-16h"
        },

        "107": {
            "title": "107- Phòng Đào Tạo",
            "description": "Phòng Phụ Trách Đào Tạo. Mở từ 8h-16h"
        },

        "108": {
            "title": "108- Phòng Hành Chính Quản Trị",
            "description": "Phòng hành chính quản trị"
        },

        "E38": {
            "title": "E38- Khoa Cơ Học Kĩ Thuật Và Tự Động Hoá",
            "description": "Khoa Cơ Học Kĩ Thuật Và Tự Động Hoá"
        },

        "109": {
            "title": "109 - Phòng Giáo Sư",
            "description": "phòng của Giáo sư"
        },

        "110": {
            "title": "110- Trưởng Phòng Hành Chính Quản Trị",
            "description": "Phòng của Trưởng Phòng Hành Chính Quản Trị"
        },

    }

    const handleClick = (room) => {
        setIsModalOpen(true);
        setRoomTitle(roomInfo[room].title);
        setDescrip(roomInfo[room].description); 
    }

    return (
        <div>
            <svg width={1500} height={1000}>
                <rect x = {250} y = {800} width={100} height={200} style={{ fill: "lightgray", stroke: "black", strokeWidth: 3}}
                onClick={() => handleClick("TQ")} />
                <text x={270} y={905} color="black">Thủ Quỹ</text>
                
                <rect x = {30} y = {550} width={220} height={450} style={{ fill: "lightgray", stroke: "black", strokeWidth: 3}} 
                onClick={() => handleClick("KHTC")}/>
                <text x={80} y={805} color="black">P. Kế Hoạch Tài Chính</text>

                <rect x = {30} y = {100} width={220} height={450} style={{ fill: "lightgray", stroke: "black", strokeWidth: 3}}
                onClick={() => handleClick("PH")} />
                <text x={120} y={305} color="black">Phòng Họp</text>
                <rect x = {250} y = {100} width={180} height={150} style={{ fill: "lightpink", stroke: "black", strokeWidth: 3}} />
                <text x={360} y={150} color="black">WC</text>

                <rect x = {350} y = {250} width={80} height={100} style={{ fill: "lightpink", stroke: "black", strokeWidth: 3}} />
                <text x={350} y={300} color="black" width = {50} height = {50}>Thang Máy</text>
                
                <Stair x={440} y = {-130} width = {50}/>

                <rect x = {500} y = {100} width={130} height={250} style={{ fill: "lightgray", stroke: "black", strokeWidth: 3}}
                onClick={() => handleClick("103")} />
                <text x={510} y={205} color="black">103: TTĐBCL</text>

                <rect x = {630} y = {100} width={130} height={250} style={{ fill: "lightgray", stroke: "black", strokeWidth: 3}}
                onClick={() => handleClick("104")} />
                <text x={640} y={205} color="black">104: CTSV</text>

                <rect x = {760} y = {100} width={130} height={250} style={{ fill: "lightgray", stroke: "black", strokeWidth: 3}}
                onClick={() => handleClick("105")} />
                <text x={770} y={205} color="black">105: P. Đào Tạo</text>

                <rect x = {890} y = {100} width={130} height={250} style={{ fill: "lightgray", stroke: "black", strokeWidth: 3}} 
                onClick={() => handleClick("106")}/>
                <text x={900} y={205} color="black">106: P. Đào Tạo</text>

                <rect x = {1020} y = {100} width={130} height={250} style={{ fill: "lightgray", stroke: "black", strokeWidth: 3}}
                onClick={() => handleClick("107")} />
                <text x={1030} y={205} color="black">107: P.Đào Tạo</text>

                <rect x = {1150} y = {100} width={130} height={250} style={{ fill: "lightgray", stroke: "black", strokeWidth: 3}}
                onClick={() => handleClick("108")} />
                <text x={1160} y={205} color="black">108: P. HCQT</text>

                <rect x = {1280} y = {100} width={200} height={350} style={{ fill: "lightgray", stroke: "black", strokeWidth: 3}}
                onClick={() => handleClick("E38")} />
                <text x={1290} y={205} color="black">E38: Khoa Cơ học</text>

                <rect x = {1280} y = {450} width={200} height={250} style={{ fill: "lightgray", stroke: "black", strokeWidth: 3}}
                onClick={() => handleClick("109")} />
                <text x={1290} y={505} color="black">109: Phòng Giáo Sư</text>

                <rect x = {1280} y = {700} width={200} height={300} style={{ fill: "lightgray", stroke: "black", strokeWidth: 3}}
                onClick={() => handleClick("110")} />
                <text x={1290} y={755} color="black">110: Trưởng Phòng HCQT</text>

                <Door x={700} y={800} width={100} />
            
            
            </svg>
            {isModalOpen && <RoomModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} title={roomTitle} descrip={descrip} />}
        </div>
    )
}

export default E3F1;