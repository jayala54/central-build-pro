import React from 'react';
import { MapContainer, TileLayer, Circle, Marker, Popup } from 'react-leaflet';

const ORLANDO_CENTER = [28.5383, -81.3792];
const SERVICE_RADIUS = 80467; // ~50 miles in meters

export default function ServiceAreaMap() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-orange-600 font-medium text-sm tracking-wider uppercase">Service Area</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-4">
            Serving All of Central Florida
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            We build across Orange, Seminole, Osceola, and Lake counties — from Orlando and Winter Park to Kissimmee, Clermont, and beyond.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm" style={{ height: '450px' }}>
          <MapContainer
            center={ORLANDO_CENTER}
            zoom={9}
            scrollWheelZoom={false}
            style={{ height: '100%', width: '100%' }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Circle
              center={ORLANDO_CENTER}
              radius={SERVICE_RADIUS}
              pathOptions={{
                color: '#f97316',
                fillColor: '#f97316',
                fillOpacity: 0.12,
                weight: 2,
              }}
            />
            <Marker position={ORLANDO_CENTER}>
              <Popup>
                <strong>J&N StructureWorks</strong><br />
                Orlando, FL<br />
                <a href="tel:+13216954964">(321) 695-4964</a>
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </section>
  );
}
