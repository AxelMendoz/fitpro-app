// src/app/dashboard/wearables/page.tsx
"use client"
import { useState } from "react";
// Asegúrate de que los nombres de archivo coincidan (singular o plural según como los guardaste)
import { GarminAdapter, AppleWatchAdapter } from "../../../lib/adapter/WearableAdapter";
import { IWearableConnector } from "../../../lib/adapter/WearableSystem";

// ✅ 1. IMPORTAR EL CSS
import "./wearables.css";

export default function WearablesPage() {
  const [device, setDevice] = useState<IWearableConnector | null>(null);
  const [status, setStatus] = useState("Desconectado");
  const [heartRate, setHeartRate] = useState<number | null>(null);

  const connectDevice = (adapter: IWearableConnector) => {
    setDevice(adapter);
    setStatus(adapter.connect());
    setHeartRate(null);
  };

  const readData = () => {
    if (!device) return;
    const bpm = device.getData();
    setHeartRate(bpm);
  };

  return (
    // ✅ 2. Usar clase "wearables-page"
    <div className="wearables-page">
      <h1 className="text-3xl font-bold mb-4">Conexión de Dispositivos (Patrón Adapter)</h1>
      <p className="text-gray-500 mb-8">
        Integra APIs incompatibles (Garmin/Apple) bajo una interfaz unificada.
      </p>

      {/* ✅ Usar clase "device-selector" (Grid principal) */}
      <div className="device-selector">
        
        {/* COLUMNA 1: BOTONES */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold mb-4">Seleccionar Wearable</h2>
          
          {/* ✅ Usar clase "device-btn" */}
          <button 
            onClick={() => connectDevice(new GarminAdapter())}
            className="device-btn"
          >
            <span className="text-2xl">⌚</span>
            <div className="text-left">
              <div className="font-bold">Garmin SDK</div>
              <div className="text-xs text-gray-500">Usa getGarminHeartRate()</div>
            </div>
          </button>

          <button 
            onClick={() => connectDevice(new AppleWatchAdapter())}
            className="device-btn"
          >
            <span className="text-2xl">🍎</span>
            <div className="text-left">
              <div className="font-bold">Apple HealthKit</div>
              <div className="text-xs text-gray-500">Usa fetchBPM()</div>
            </div>
          </button>
        </div>

        {/* COLUMNA 2: ESTADO */}
        {/* ✅ Usar clase "device-status-panel" y lógica "connected" */}
        <div className={`device-status-panel ${device ? 'connected' : ''}`}>
          <h2 className="text-xl font-semibold mb-4">Estado del Dispositivo</h2>
          
          <div className="mb-4">
            <span className="font-bold">Estatus: </span>
            <span className={device ? "text-green-600 font-bold" : "text-gray-400"}>{status}</span>
          </div>

          {device && (
            <div className="text-center mt-8">
              {/* ✅ Usar clase "sync-btn" */}
              <button 
                onClick={readData}
                className="sync-btn"
              >
                Sincronizar Ritmo Cardíaco
              </button>

              {heartRate && (
                // ✅ Usar clase "bpm-display" para la animación
                <div className="bpm-display">
                  <div className="text-5xl font-bold text-red-500">❤️ {heartRate}</div>
                  <div className="text-sm text-gray-500">BPM (Leído vía Adapter)</div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}