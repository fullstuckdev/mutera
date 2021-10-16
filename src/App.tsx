import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet'
import './App.css';
import mutera from "./data/mutera.json"

function App() {

  return (
   
    <MapContainer center={[-6.9032739,107.5731165]} zoom={5} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    {mutera.map(mut => (
    <Marker
     key = {mut.id}
     position = {[mut.gps.latitude, mut.gps.longitude]}>
       <Popup position={[mut.gps.latitude, mut.gps.longitude]}>
   <div>
         <h2>{"Nama: " + mut.Lokasi}</h2>
         <p>{"Jalan " + mut.Alamat.Jalan}</p>
</div>
</Popup>
    </Marker>

))}    
      
    </MapContainer>
  );
}

export default App;
