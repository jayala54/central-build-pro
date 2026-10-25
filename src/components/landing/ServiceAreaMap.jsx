import React from 'react';
import 'leaflet/dist/leaflet.css';
import { CircleMarker, MapContainer, Popup, TileLayer, Tooltip } from 'react-leaflet';

const MAP_CENTER = [28.48, -81.48];

const serviceLocations = [
  { name: 'Orlando', position: [28.5383, -81.3792] },
  { name: 'Winter Park', position: [28.5999, -81.3392] },
  { name: 'Lake Mary', position: [28.7589, -81.3178] },
  { name: 'Sanford', position: [28.8029, -81.2695] },
  { name: 'Oviedo', position: [28.67, -81.2081] },
  { name: 'Kissimmee', position: [28.292, -81.4076] },
  { name: 'Saint Cloud', position: [28.2489, -81.2812] },
  { name: 'Clermont', position: [28.5494, -81.7729] },
  { name: 'Winter Garden', position: [28.5653, -81.5862] },
];

export default function ServiceAreaMap() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-orange-600 font-medium text-sm tracking-wider uppercase">Service Area</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-4">
            Serving Central Florida
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            We build across Orange, Seminole, Osceola, and Lake counties — from Orlando and Winter Park to Kissimmee, Clermont, and beyond.
          </p>
        </div>

        <div className="rounded-lg overflow-hidden border border-slate-200 shadow-sm h-[360px] md:h-[430px]">
          <MapContainer
            center={MAP_CENTER}
            zoom={9.5}
            zoomSnap={0.5}
            scrollWheelZoom={false}
            style={{ height: '100%', width: '100%' }}
            aria-label="Map of J&N StructureWorks service locations in Central Florida"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {serviceLocations.map((location) => (
              <CircleMarker
                key={location.name}
                center={location.position}
                radius={location.name === 'Orlando' ? 9 : 7}
                pathOptions={{
                  color: '#ffffff',
                  fillColor: '#f97316',
                  fillOpacity: 1,
                  weight: 3,
                }}
              >
                <Tooltip direction="top" offset={[0, -7]}>{location.name}</Tooltip>
                <Popup>
                  <strong>{location.name}, FL</strong><br />
                  J&N StructureWorks service area<br />
                  <a href="tel:+13216954964">(321) 695-4964</a>
                </Popup>
              </CircleMarker>
            ))}
          </MapContainer>
        </div>
        <p className="text-sm text-slate-500 text-center mt-4">
          Service availability depends on project scope, schedule, and property location.
        </p>
      </div>
    </section>
  );
}
