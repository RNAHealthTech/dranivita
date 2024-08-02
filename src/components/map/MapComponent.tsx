// components/MapComponent.tsx
import React, { useEffect, useRef } from 'react';

declare global {
  //eslint-disable-next-line
  interface window {
    google: typeof google;
  }
}

const google = window.google;

const mapContainerStyle: React.CSSProperties = {
  width: '100%',
  height: '300px'
};

const center = { lat: 28.6385285, lng: 77.18956850 };

const MapComponent: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const initMap = async () => {
      //eslint-disable-next-line
      const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
      //eslint-disable-next-line
      const { AdvancedMarkerElement } = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary;

      const map = new Map(mapRef.current!, {
        center,
        zoom: 15,
        mapId: 'd95230b11102f13'
      });
      
      // Use void operator to indicate intentional non-use
      void new AdvancedMarkerElement({
        map,
        position: center,
        title: 'Location Marker',
      });
    };

    initMap();
  }, []);

  return <div ref={mapRef} style={mapContainerStyle} />;
};

export default MapComponent;