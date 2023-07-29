import { ReactComponent as Stair } from "../../img/stairs.svg";

const G2F3 = () => {
    return (
        <div>
            <svg width={1920} height={940}>
                <rect y={60} width={340} height={470} style={{ fill: "lightgray", stroke: "black", strokeWidth: 3}} />
                <text x={170} y={290} color="black">302</text>

                <rect y={530} width={340} height={470} style={{ fill: "lightgray", stroke: "black", strokeWidth: 3}} />
                <text x={170} y={760} color="black">302</text>               

                <rect x={420} y={60} width={200} height={200} style={{ fill: "lightpink", stroke: "black", strokeWidth: 3}} />
                <text x={520} y={160} color="black">WC</text>

                <rect x={620} y={60} width={340} height={240} style={{ fill: "lightgray", stroke: "black", strokeWidth: 3}} />
                <text x={750} y={180} color="black">306</text>

                <rect x={920} y={60} width={340} height={240} style={{ fill: "lightgray", stroke: "black", strokeWidth: 3}} />
                <text x={1070} y={180} color="black">308</text>

                <rect x={1260} y={60} width={200} height={200} style={{ fill: "lightpink", stroke: "black", strokeWidth: 3}} />
                <text x={1350} y={160} color="black">WC</text>

                <rect x={1580} y={60} width={340} height={160} style={{ fill: "lightgray", stroke: "black", strokeWidth: 3}} />
                <text x={1720} y={140} color="black">305</text>

                <rect x={1580} y={220} width={340} height={160} style={{ fill: "lightgray", stroke: "black", strokeWidth: 3}} />
                <text x={1720} y={300} color="black">307</text>

                <rect x={1580} y={380} width={340} height={160} style={{ fill: "lightgray", stroke: "black", strokeWidth: 3}} />
                <text x={1720} y={460} color="black">309B</text>

                <rect x={1580} y={540} width={340} height={160} style={{ fill: "lightgray", stroke: "black", strokeWidth: 3}} />
                <text x={1720} y={620} color="black">309A</text>

                <rect x={480} y={530} width={450} height={160} style={{ fill: "lightgray", stroke: "black", strokeWidth: 3}} />
                <text x={680} y={610} color="black">310</text>

                <rect x={930} y={530} width={450} height={160} style={{ fill: "lightgray", stroke: "black", strokeWidth: 3}} />
                <text x={1130} y={610} color="black">311</text>

                <rect x={620} y={760} width={400} height={160} style={{ fill: "lightgray", stroke: "black", strokeWidth: 3}} />
                <text x={780} y={840} color="black">PTN IDS</text>

                <rect x={1020} y={760} width={250} height={160} style={{ fill: "lightgray", stroke: "black", strokeWidth: 3}} />
                <text x={1140} y={840} color="black">314</text>

                <rect x={1270} y={760} width={250} height={160} style={{ fill: "lightgray", stroke: "black", strokeWidth: 3}} />
                <text x={1350} y={840} color="black">313</text>

                <rect x={1520} y={760} width={400} height={160} style={{ fill: "lightgray", stroke: "black", strokeWidth: 3}} />
                <text x={1700} y={840} color="black">312</text>
            

                <Stair x={510} y={380} width={150} height={150} />
                <Stair x={1230} y={380} width={150} height={150} />
            </svg>
        </div>
    )
}

export default G2F3;