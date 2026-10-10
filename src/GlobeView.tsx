import { useState } from "react";
import { Color } from "cesium" ;
import { GeoJsonDataSource, Viewer } from "resium";

// レイヤー設定定義
type LayerDef = {
    id: string;
    url: string;
    stroke: Color;
    fill: Color;
    strokeWidth: number;
}

const DIR_COAST = import.meta.env.BASE_URL + "data/base/coastline/";
const HYA_0DATA = DIR_COAST + "Hya_0kai.geojson";

// レイヤー定義一覧
const LAYERS: LayerDef[] = [
    // 海岸線 0Hya
    {
        id: "coast-0hya",
        url: DIR_COAST + "Hya_0kai.geojson",
        stroke: Color.BLACK,
        strokeWidth: 2,
        fill: Color.GREEN,
    },
];

// 地図表示コンポーネント
export default function GlobeView(){
    // 表示・非表示の状態を、コンポーネント内の state として持つ
    const [visible, setVisible] = useState<Record<string, boolean>>({
        "coast-0hya": true,
    });

    return (
        <Viewer
            className="globe-view"
            animation={false}
            timeline={false}
            baseLayerPicker={false}
            geocoder={false}
            baseLayer={false}
        >
            {LAYERS.map(layer => (
                <GeoJsonDataSource
                    key={layer.id}
                    data={layer.url}
                    stroke={layer.stroke}
                    strokeWidth={layer.strokeWidth}
                    fill={layer.fill}
                    show={visible[layer.id]}
                />
            ))}
        </Viewer>
    );
}
