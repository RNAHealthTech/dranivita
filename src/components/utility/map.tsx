import { motion } from 'framer-motion'
import { MapContainer, TileLayer, Marker, Popup, } from 'react-leaflet';
// import L from 'leaflet';
import 'leaflet/dist/leaflet.css'
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import "leaflet-defaulticon-compatibility";

export default function Map() {
    const position: [number, number] = [28.6381866, 77.1886972];
    return (<section className="map-section py-20">
        <motion.div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Location</h2>
            <motion.div className="h-96 rounded-lg overflow-hidden shadow-lg">
                <MapContainer center={position} zoom={15} style={{ height: '400px', width: '100%' }}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker position={position}>
                        <Popup>
                            Dr. Setu Gupta <i>leaflet-defaulticon-compatibility</i>
                        </Popup>
                    </Marker>
                </MapContainer>
            </motion.div>
        </motion.div>
    </section>)
}