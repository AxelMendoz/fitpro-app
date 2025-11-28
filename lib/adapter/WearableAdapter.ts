// src/lib/adapter/WearableAdapters.ts
import { IWearableConnector, GarminSDK, AppleHealthKit } from "./WearableSystem";

// ADAPTADOR 1: Garmin
// "Envuelve" al SDK de Garmin para que parezca un IWearableConnector
export class GarminAdapter implements IWearableConnector {
  private garmin: GarminSDK;

  constructor() {
    this.garmin = new GarminSDK();
  }

  connect(): string {
    return "Conectado a Garmin Forerunner 945";
  }

  getData(): number {
    // TRADUCCIÓN: Convertimos la llamada de FitPro a la llamada de Garmin
    return this.garmin.getGarminHeartRate();
  }
}

// ADAPTADOR 2: Apple Watch
export class AppleWatchAdapter implements IWearableConnector {
  private apple: AppleHealthKit;

  constructor() {
    this.apple = new AppleHealthKit();
  }

  connect(): string {
    return "Conectado a Apple Watch Series 8";
  }

  getData(): number {
    // TRADUCCIÓN: Convertimos la llamada de FitPro a la llamada de Apple
    return this.apple.fetchBPM();
  }
}