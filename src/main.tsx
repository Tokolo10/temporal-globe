import './style.css';
import 'cesium/Build/Cesium/Widgets/widgets.css';
import ReactDOM from "react-dom/client";
import GlobeView from "./GlobeView";
import Sidebar from './Sidebar';

// root要素を取得し、そこにGlobeを描画する
const container = document.getElementById("root");
if (container === null) {
    throw new Error("Cannot find #root element");
}
ReactDOM.createRoot(container).render(
    <div className="app">
        <Sidebar />
        <GlobeView />
    </div>
);

/*
import './style.css';
import { Color, Viewer, GeoJsonDataSource } from 'cesium';
import 'cesium/Build/Cesium/Widgets/widgets.css';

const viewer = new Viewer('cesiumContainer');
const coastData = await GeoJsonDataSource.load(
    import.meta.env.BASE_URL + "data/base/coastline/Hya_0kai.geojson",
    {
        stroke: Color.BLACK, 
        fill: Color.GREEN.withAlpha(0.4), 
        strokeWidth: 2
});
viewer.dataSources.add(coastData)
*/