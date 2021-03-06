
export default function creatRestLayer(map,options){
    if(!options.hasOwnProperty("url")||!options.hasOwnProperty("id")){
        throw  new Error("rest服务传参不对必须要有服务url和图层id");
        return;
    }
    let layerObj = {
      id: options.id,
      type: options.type,
      source: {
        "type": options.type,
        "tiles": [options.url],
        "tileSize": options.tileSize||256,
        rasterSource: 'iserver'
      },

      "minzoom": options.minzoom,
      "maxzoom": options.maxzoom
    };
    if(options.beforeLayer){
      map.addLayer(layerObj,options.beforeLayer);
    }else {
      map.addLayer(layerObj);
    }

}
