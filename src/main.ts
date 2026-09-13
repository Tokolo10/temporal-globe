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