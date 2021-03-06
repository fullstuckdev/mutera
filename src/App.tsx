import { MapContainer, TileLayer, Popup, Marker,  Circle } from 'react-leaflet'
import './App.css';
import mutera from "./data/mutera.json"


function App() {
 
  return  (
   
    <MapContainer attributionControl = {false} center={[-6.9032739,107.5731165]} zoom={5} scrollWheelZoom={true}>
    <TileLayer
      attribution='&copy;'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
     
    {mutera.map(mut => (
    <Marker
     key = {mut.id}
     position = {[mut.gps.latitude, mut.gps.longitude]}>
       <Popup position={[mut.gps.latitude, mut.gps.longitude]}>
   <div>
   <h2>{"Nama: " + mut.Lokasi}</h2>
</div>
</Popup>
 <Circle center={[mut.gps.latitude, mut.gps.longitude]} pathOptions={{color: mut.gps.Warna}} radius={mut.gps.Radius}>
    <Popup>
      <div>
      <h2>{"Zona: " + mut.gps.zona}</h2>
      </div>
    </Popup>
  </Circle> 
    </Marker>
))}    



      
    </MapContainer>
  );
}

export default App;
