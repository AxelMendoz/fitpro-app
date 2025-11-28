// src/lib/observer/ObserverInterfaces.ts

// 1. El Observador (El que escucha)
// Todos los servicios de notificación deben tener este método.
export interface IObserver {
  update(message: string): void;
}

// 2. El Sujeto (El que grita)
// Define cómo agregar (attach), quitar (detach) y avisar (notify) a los observadores.
export interface ISubject {
  attach(observer: IObserver): void;
  detach(observer: IObserver): void;
  notify(message: string): void;
}