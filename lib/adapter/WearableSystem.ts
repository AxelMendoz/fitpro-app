// src/lib/adapter/WearableSystems.ts

// --- 1. APIs Externas (Simulación de librerías de terceros) ---
// Fíjate que tienen métodos con nombres DIFERENTES.

export class GarminSDK {
  public getGarminHeartRate(): number {
    console.log("⌚ Garmin: Conectando a satélites... HR obtenido.");
    return 85; // Simula 85 bpm
  }
}

export class AppleHealthKit {
  public fetchBPM(): number {
    console.log("🍎 AppleWatch: HealthKit autorizado. Leyendo sensor biométrico...");
    return 92; // Simula 92 bpm
  }
}

// --- 2. La Interfaz Target (El "Enchufe Universal" de FitPro) ---
// Tu aplicación SOLO sabrá usar esta interfaz.
export interface IWearableConnector {
  connect(): string;
  getData(): number; // Queremos que SIEMPRE se llame getData()
}