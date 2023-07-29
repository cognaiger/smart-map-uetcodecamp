import { ReactComponent as Stair } from "../../img/stairs.svg";
const E3F7 = () => {
    return (
        <div>
            <svg width={1500} height={1000}>
                <rect x = {20} y = {100} width={110} height={350} style={{ fill: "lightgrey", stroke: "black", strokeWidth: 3}} />
                <text x={20} y={250} color="black" width = {50} height = {50}>UST</text>

                <rect x = {130} y = {100} width={110} height={350} style={{ fill: "lightgrey", stroke: "black", strokeWidth: 3}} />
                <text x={130} y={250} color="black" width = {50} height = {50}>715: TC Cán Bộ</text>

                <rect x = {240} y = {100} width={110} height={250} style={{ fill: "lightgrey", stroke: "black", strokeWidth: 3}} />
                <text x={250} y={250} color="black" width = {50} height = {50}>716: TT & PC</text>
               
                <rect x = {350} y = {100} width={80} height={250} style={{ fill: "lightpink", stroke: "black", strokeWidth: 3}} />
                <text x={350} y={250} color="black" width = {50} height = {50}>Thang Máy</text>

                <Stair x={440} y = {-130} width = {50}/>

                <rect x = {500} y = {100} width={160} height={250} style={{ fill: "lightgrey", stroke: "black", strokeWidth: 3}} />
                <text x={510} y={250} color="black" width = {50} height = {50}> 701: PTN GNMT</text>

                <rect x = {660} y = {100} width={160} height={250} style={{ fill: "lightgrey", stroke: "black", strokeWidth: 3}} />
                <text x={670} y={250} color="black" width = {50} height = {50}>702: PTN ĐKTĐ & R</text>

                <rect x = {820} y = {100} width={160} height={250} style={{ fill: "lightgrey", stroke: "black", strokeWidth: 3}} />
                <text x={890} y={250} color="black" width = {50} height = {50}> 703</text>

                <rect x = {980} y = {100} width={160} height={250} style={{ fill: "lightgrey", stroke: "black", strokeWidth: 3}} />
                <text x={1000} y={250} color="black" width = {50} height = {50}> 704: KT Robot</text>

                <rect x = {1140} y = {100} width={160} height={250} style={{ fill: "lightgrey", stroke: "black", strokeWidth: 3}} />
                <text x={1200} y={250} color="black" width = {50} height = {50}> 705</text>

                <rect x = {1300} y = {100} width={200} height={900} style={{ fill: "lightgrey", stroke: "black", strokeWidth: 3}} />
                <text x={1330} y={550} color="black" width = {50} height = {50}>706: VCĐT & VHT</text>


                <rect x = {20} y = {750} width={110} height={300} style={{ fill: "lightgrey", stroke: "black", strokeWidth: 3}} />
                <text x={20} y={850} color="black" width = {50} height = {50}>713</text>

                <rect x = {130} y = {750} width={110} height={300} style={{ fill: "lightgrey", stroke: "black", strokeWidth: 3}} />
                <text x={140} y={850} color="black" width = {50} height = {50}>712: TP TCCB</text>

                <rect x = {240} y = {750} width={110} height={250} style={{ fill: "lightgrey", stroke: "black", strokeWidth: 3}} />
                <text x={240} y={850} color="black" width = {50} height = {50}>711: TP Đào Tạo</text>

                <rect x = {350} y = {750} width={130} height={250} style={{ fill: "lightgrey", stroke: "black", strokeWidth: 3}} />
                <text x={360} y={850} color="black" width = {50} height = {50}>Phòng Khách</text>
                <rect x = {480} y = {750} width={120} height={250} style={{ fill: "lightpink", stroke: "black", strokeWidth: 3}} />
                <text x={530} y={850} color="black">WC</text>

                <rect x = {600} y = {750} width={175} height={250} style={{ fill: "lightgray", stroke: "black", strokeWidth: 3}} />
                <text x={610} y={850} color="black">710: PTN VL & KCTT</text>

                <rect x = {775} y = {750} width={175} height={250} style={{ fill: "lightgray", stroke: "black", strokeWidth: 3}} />
                <text x={800} y={850} color="black">709: P. GS.TS</text>

                <rect x = {950} y = {750} width={175} height={250} style={{ fill: "lightgray", stroke: "black", strokeWidth: 3}} />
                <text x={960} y={850} color="black">708: P. Chuyên Gia</text>

                <rect x = {1125} y = {750} width={175} height={250} style={{ fill: "lightgray", stroke: "black", strokeWidth: 3}} />
                <text x={1150} y={850} color="black">707: Văn Phòng</text>

            </svg>
        </div>
    )
}

export default E3F7;