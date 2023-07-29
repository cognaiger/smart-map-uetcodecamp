import { ReactComponent as Stair } from "../../img/stairs.svg";
import { useState } from "react";
import RoomModal from "../../components/RoomModal/RoomModal";


const E3F2 = () => {


      
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [roomTitle, setRoomTitle] = useState("");
    const [descrip, setDescrip] = useState("");

    const roomInfo = {
        "212": {
            "title": "Phòng Hội Thảo",
            "description": "this is description"
        },
        "201": {
            "title": "Phòng Khoa Học Công Nghệ và Hợp Tác Phát Triển",
            "description": "this is description"
        },

        "202": {
            "title": "Phòng Hành Chính Quản Trị",
            "description": "this is description"
        },

        "203": {
            "title": "Phòng Phó Hiệu Trưởng",
            "description": "this is description"
        },
        
        "204": {
            "title": "Phòng Phó Hiệu Trưởng",
            "description": "this is description"
        },

        "205": {
            "title": "Phòng Hiệu Trưởng",
            "description": "this is description"
        },

        "206": {
            "title": "Phòng 206",
            "description": "this is description"
        },

        "211": {
            "title": "Phòng Lễ Tân",
            "description": "this is description"
        },

        "210": {
            "title": "Văn Phòng Dự Án ĐHQGHN",
            "description": "this is description"
        },

        "209": {
            "title": "Phòng Kế Toán Trưởng",
            "description": "this is description"
        },

        "209A": {
            "title": "Phòng Phó Hiệu Trưởng",
            "description": "this is description"
        },

        "208B": {
            "title": "Hành Chính - Quản Trị - Trưởng Phòng ",
            "description": "this is description"
        },

        "208A": {
            "title": "Giám Đốc Trung Tâm Đảm Bảo Chất Lượng",
            "description": "this is description"
        },

        "208": {
            "title": "Trưởng Phòng Kế Toán Tài Chính",
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
            <svg width={1500} height={1000}>
                
                <rect x = {30} y = {100} width={140} height={900} style={{ fill: "lightgray", stroke: "black", strokeWidth: 3}} />
                

                <rect x = {180} y = {100} width={170} height={250} style={{ fill: "lightgray", stroke: "black", strokeWidth: 3}}
                onClick={() => handleClick("212")} />
                <text x={200} y={200} color="black">212: P Hội Thảo</text>

                <rect x = {350} y = {100} width={80} height={250} style={{ fill: "lightpink", stroke: "black", strokeWidth: 3}} />
                <text x={350} y={250} color="black" width = {50} height = {50}>Thang Máy</text>

                <Stair x={440} y = {-130} width = {50}/>

                <rect x = {500} y = {100} width={165} height={250} style={{ fill: "lightgray", stroke: "black", strokeWidth: 3}}
                onClick={() => handleClick("201")} />
                <text x={510} y={200} color="black">201: P KHCN</text>

                <rect x = {665} y = {100} width={165} height={250} style={{ fill: "lightgray", stroke: "black", strokeWidth: 3}}
                 onClick={() => handleClick("202")}/>
                <text x={670} y={200} color="black">202: P HCQT</text>

                <rect x = {830} y = {100} width={165} height={250} style={{ fill: "lightgray", stroke: "black", strokeWidth: 3}}
                onClick={() => handleClick("203")} />
                <text x={840} y={200} color="black">203: P Phó Hiệu Trưởng</text>

                <rect x = {995} y = {100} width={165} height={250} style={{ fill: "lightgray", stroke: "black", strokeWidth: 3}}
                onClick={() => handleClick("204")} />
                <text x={1005} y={200} color="black">204: P Phó Hiệu Trưởng</text>

                <rect x = {1160} y = {100} width={165} height={250} style={{ fill: "lightgray", stroke: "black", strokeWidth: 3}}
                onClick={() => handleClick("205")} />
                <text x={1170} y={200} color="black">205: P Hiệu Trưởng</text>

                <rect x = {1325} y = {100} width={165} height={250} style={{ fill: "lightgray", stroke: "black", strokeWidth: 3}}
                onClick={() => handleClick("206")} />
                <text x={1335} y={200} color="black">206</text>

                
                <rect x = {180} y = {750} width={170} height={250} style={{ fill: "lightgray", stroke: "black", strokeWidth: 3}}
                onClick={() => handleClick("212")} />
                <text x={200} y={850} color="black">212: P Hội Thảo</text>

                <rect x = {180} y = {750} width={170} height={250} style={{ fill: "lightgray", stroke: "black", strokeWidth: 3}}
                onClick={() => handleClick("211")} />
                <text x={200} y={850} color="black">211: P Lễ Tân</text>
                
                <rect x = {350} y = {750} width={130} height={250} style={{ fill: "lightgray", stroke: "black", strokeWidth: 3}}
                onClick={() => handleClick("210")} />
                <text x={360} y={850} color="black">210: Vp Dự Án</text>
                
                <rect x = {480} y = {750} width={150} height={250} style={{ fill: "lightpink", stroke: "black", strokeWidth: 3}} />
                <text x={550} y={850} color="black">WC</text>

                <rect x = {630} y = {750} width={145} height={250} style={{ fill: "lightgray", stroke: "black", strokeWidth: 3}}
                onClick={() => handleClick("209")} />
                <text x={630} y={850} color="black">209: P Kế toán trưởng</text>

                <rect x = {775} y = {750} width={145} height={250} style={{ fill: "lightgray", stroke: "black", strokeWidth: 3}}
                onClick={() => handleClick("209A")} />
                <text x={775} y={850} color="black">209A</text>

                <rect x = {920} y = {750} width={145} height={250} style={{ fill: "lightgray", stroke: "black", strokeWidth: 3}}
                onClick={() => handleClick("208B")} />
                <text x={920} y={850} color="black">208B: HCQT Trưởng P</text>

                <rect x = {1065} y = {750} width={145} height={250} style={{ fill: "lightgray", stroke: "black", strokeWidth: 3}}
                onClick={() => handleClick("208A")} />
                <text x={1065} y={850} color="black">208A: GĐTT</text>

                <rect x = {1210} y = {750} width={145} height={250} style={{ fill: "lightgray", stroke: "black", strokeWidth: 3}}
                onClick={() => handleClick("208")} />
                <text x={1210} y={850} color="black">208: Trưởng phòng KHTC</text>

                <rect x = {1355} y = {750} width={145} height={250} style={{ fill: "lightgray", stroke: "black", strokeWidth: 3}} />
                <text x={1355} y={850} color="black">Trưởng Phòng</text>


            </svg>
            {isModalOpen && <RoomModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} title={roomTitle} descrip={descrip} />}
        </div>
    )
}

export default E3F2;