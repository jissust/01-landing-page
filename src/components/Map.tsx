import React, { useRef, useEffect } from "react";
import * as maptilersdk from "@maptiler/sdk";
import "@maptiler/sdk/dist/maptiler-sdk.css";
//import "./map.css";

function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const tokyo = { lng: -58.6096, lat: -34.6539 };
  const zoom = 14;
  maptilersdk.config.apiKey = "eTIbY0ct3u9PdrMvcuyL";

  useEffect(() => {
    if (map.current) return; // stops map from intializing more than once

    map.current = new maptilersdk.Map({
      container: mapContainer.current,
      style: maptilersdk.MapStyle.STREETS,
      center: [tokyo.lng, tokyo.lat],
      zoom: zoom,
    });
  }, [tokyo.lng, tokyo.lat, zoom]);

  return (
    <div className="map-wrap">
      <div ref={mapContainer} className="map" />
    </div>
  );
}

export default Map;
