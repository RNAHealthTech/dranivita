// components/ClientSideMap.tsx
import React from 'react';
import dynamic from 'next/dynamic';
import { Status } from "@googlemaps/react-wrapper";

const MapComponent = dynamic(() => import('./MapComponent'), { ssr: false });

const ClientSideMap: React.FC = () => {
    const [isMounted, setIsMounted] = React.useState(false);

    React.useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    const apiKey = process.env.GOOGLE_MAPS_API_KEY || 'AIzaSyAVnYV6Yc5DN-17dinZ_hdtKJEdwpMfl9c';
    if (!apiKey) {
        console.error("Google Maps API key is not set");
        return <div>Error: Google Maps API key is not set</div>;
    }

    const render = (status: Status) => {
        if (status === Status.FAILURE) return <div>Error loading map</div>;
        return <div>Loading map...</div>;
    }

    const Wrapper = dynamic(
        () => import('@googlemaps/react-wrapper').then((mod) => mod.Wrapper),
        { ssr: false }
    );

    return (
        <Wrapper apiKey={apiKey} render={render} libraries={['marker']}>
            <MapComponent />
        </Wrapper>
    );
};

export default ClientSideMap;