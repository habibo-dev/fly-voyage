"use client";

import L from "leaflet";
import { MapContainer, Marker, TileLayer, Tooltip } from "react-leaflet";
import { AGENCY } from "@/data/config";
import { useT } from "@/lib/i18n";
import { useState } from "react";

const PIN_HTML = `
<svg width="34" height="44" viewBox="0 0 34 44" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17 1C8.7 1 2 7.7 2 16c0 10.5 12.2 25 15 28 2.8-3 15-17.5 15-28C32 7.7 25.3 1 17 1z" fill="#10202f"/>
  <circle cx="17" cy="15.5" r="7" fill="#c9a768"/>
</svg>`;

const pin = L.divIcon({
  className: "fv-pin",
  html: PIN_HTML,
  iconSize: [34, 44],
  iconAnchor: [17, 42],
  tooltipAnchor: [0, -36],
});

/**
 * City-level map of Béjaïa (OpenStreetMap tiles, loaded in the visitor's
 * browser). No exact agency pin is drawn — coordinates are not verified.
 * Falls back to an address notice if tiles cannot load.
 */
export default function LeafletMap() {
  const t = useT();
  const [tileError, setTileError] = useState(false);

  return (
    <div className="relative h-full w-full">
      <MapContainer
        center={AGENCY.map.center}
        zoom={AGENCY.map.zoom}
        scrollWheelZoom={false}
        className="h-full w-full"
      >
        <TileLayer
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer">OpenStreetMap</a> contributors'
          eventHandlers={{
            tileerror: () => setTileError(true),
          }}
        />
        <Marker position={AGENCY.map.center} icon={pin}>
          <Tooltip direction="top" offset={[0, -36]} opacity={1}>
            {AGENCY.map.markerLabel}
          </Tooltip>
        </Marker>
      </MapContainer>
      {tileError && (
        <div className="absolute inset-0 flex items-center justify-center bg-cream-100 p-6">
          <p className="max-w-sm text-center text-sm text-ink-600">{t("location.mapError")}</p>
        </div>
      )}
    </div>
  );
}
