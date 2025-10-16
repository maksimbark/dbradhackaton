import {useState} from 'react'
// import './App.css'
import './map.css'
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import '../../../node_modules/leaflet/dist/leaflet.css'

// import '../../../node_modules/leaflet/dist/leaflet.js'

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="map-page">
            <header className="map-header">
                <h1>Map super page!</h1>
            </header>

            <main className="map-main">
                <MapContainer center={[51.505, 0]} zoom={13} scrollWheelZoom={false} style={{height: '100%', width: '100%'}}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[51.505, count]}>
                        <Popup>
                            A pretty CSS3 popup. <br/> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer>
            </main>

            <footer className="map-footer">
                <div className="card">
                    <button onClick={() => setCount((count) => count + 1)}>
                        meow is {count} maps
                    </button>
                </div>
            </footer>
        </div>
    )
}

export default App
