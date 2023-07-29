import { ReactComponent as Door } from "../../img/door.svg";
const G3F1 = () => {
    return (
        <div>
            <svg width={1300} height={1000}>
                <rect x = {380} y = {70} width={580} height={200} style={{ fill: "lightgray", stroke: "black", strokeWidth: 3}} />
                <text x={530} y={105} color="black">GIẢNG ĐƯỜNG 2</text>
                
                <rect x = {1020} y = {300} width={250} height={500} style={{ fill: "lightgray", stroke: "black", strokeWidth: 3}} />
                <text x={1080} y={330} color="black">GIẢNG ĐƯỜNG 1</text>

                <rect x = {30} y = {300} width={250} height={450} style={{ fill: "lightgray", stroke: "black", strokeWidth: 3}} />
                <text x={60} y={330} color="black">GIẢNG ĐƯỜNG 3</text>

                <rect x = {30} y = {750} width={200} height={50} style={{ fill: "lightgray", stroke: "black", strokeWidth: 3}} />
                <text x={60} y={780} color="black">Phòng chờ giảng</text>

                <rect x = {30} y = {130} width={200} height={100} style={{ fill: "lightpink", stroke: "black", strokeWidth: 3}} />
                <text x={110} y={160} color="black">WC</text>


                <Door x={600} y={800} width={150} />
            
            
            </svg>
        </div>
    )
}

export default G3F1;