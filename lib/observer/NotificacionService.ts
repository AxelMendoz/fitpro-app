// src/lib/observer/NotificationServices.ts
import { IObserver } from "./ObserverInterfaces";

// Observador 1: Servicio de Notificaciones Visuales (Simulado)
export class ToastNotificationService implements IObserver {
  update(message: string): void {
    console.log(`🔔 NOTIFICACIÓN PUSH ENVIADA: "${message}"`);
    // Aquí conectarías con Firebase o un sistema de Toasts real
    alert(`🔔 ¡Felicidades! ${message}`);
  }
}

// Observador 2: Servicio de Estadísticas (Analytics)
export class AnalyticsService implements IObserver {
  update(message: string): void {
    console.log(`📊 ANALYTICS: Registrando evento de victoria en la base de datos: "${message}"`);
    // Aquí mandarías datos a Google Analytics o tu DB
  }
}