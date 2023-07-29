import { ReactComponent as Stair } from "../../img/stairs.svg";

const G2F2 = () => {
    return (
        <div>
            <svg width={1920} height={940}>
                <rect y={60} width={450} height={220} style={{ fill: "lightgray", stroke: "black", strokeWidth: 3}} />
                <text x={200} y={170} color="black">204</text>

                <rect y={280} width={450} height={220} style={{ fill: "lightgray", stroke: "black", strokeWidth: 3}} />
                <text x={200} y={390} color="black">203</text>

                <rect y={500} width={450} height={220} style={{ fill: "lightgray", stroke: "black", strokeWidth: 3}} />
                <text x={200} y={610} color="black">202</text>

                <rect y={720} width={450} height={220} style={{ fill: "lightgray", stroke: "black", strokeWidth: 3}} />
                <text x={200} y={830} color="black">201</text>                

                <rect x={450} y={720} width={230} height={220} style={{ fill: "lightgray", stroke: "black", strokeWidth: 3}} />
                <text x={560} y={830} color="black">205</text>

                <rect x={680} y={720} width={230} height={220} style={{ fill: "lightgray", stroke: "black", strokeWidth: 3}} />
                <text x={790} y={830} color="black">206</text>

                <rect x={910} y={720} width={230} height={220} style={{ fill: "lightgray", stroke: "black", strokeWidth: 3}} />
                <text x={1000} y={830} color="black">206A</text>

                <rect x={1140} y={720} width={230} height={220} style={{ fill: "lightgray", stroke: "black", strokeWidth: 3}} />
                <text x={1230} y={830} color="black">207</text>

                <rect x={510} y={60} width={450} height={220} style={{ fill: "lightgray", stroke: "black", strokeWidth: 3}} />
                <text x={610} y={170} color="black">Thuc hanh may tinh</text>

                <rect x={960} y={60} width={450} height={220} style={{ fill: "lightgray", stroke: "black", strokeWidth: 3}} />
                <text x={1080} y={170} color="black">Thuc hanh may tinh</text>

                <rect x={1470} y={60} width={450} height={220} style={{ fill: "lightgray", stroke: "black", strokeWidth: 3}} />
                <text x={1670} y={170} color="black">210</text>

                <rect x={1470} y={280} width={450} height={220} style={{ fill: "lightgray", stroke: "black", strokeWidth: 3}} />
                <text x={1670} y={390} color="black">209</text>

                <rect x={1470} y={500} width={450} height={220} style={{ fill: "lightgray", stroke: "black", strokeWidth: 3}} />
                <text x={1670} y={610} color="black">208A</text>

                <rect x={1470} y={720} width={450} height={220} style={{ fill: "lightgray", stroke: "black", strokeWidth: 3}} />
                <text x={1670} y={830} color="black">208</text>

                <Stair x={510} y={300} width={150} height={150} />
                <Stair x={1250} y={300} width={150} height={150} />
            </svg>
        </div>
    )
}

export default G2F2;