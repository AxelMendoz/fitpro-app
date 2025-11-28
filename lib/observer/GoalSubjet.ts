// src/lib/observer/GoalSubject.ts
import { ISubject, IObserver } from "./ObserverInterfaces";

export class GoalSubject implements ISubject {
  private observers: IObserver[] = []; // Lista de suscriptores

  // Agregar un observador a la lista
  attach(observer: IObserver): void {
    const isExist = this.observers.includes(observer);
    if (isExist) {
      return console.log('El observador ya está suscrito.');
    }
    console.log('✅ Nuevo observador suscrito.');
    this.observers.push(observer);
  }

  // Eliminar un observador
  detach(observer: IObserver): void {
    const observerIndex = this.observers.indexOf(observer);
    if (observerIndex === -1) {
      return console.log('El observador no existe.');
    }
    this.observers.splice(observerIndex, 1);
    console.log('❌ Observador eliminado.');
  }

  // ¡El Megáfono! Avisar a todos
  notify(message: string): void {
    console.log('📢 Notificando a todos los observadores...');
    for (const observer of this.observers) {
      observer.update(message);
    }
  }

  // Lógica de Negocio: Completar una meta
  completeGoal(goalName: string) {
    console.log(`\n🎯 OBJETIVO CUMPLIDO: ${goalName}`);
    // Cuando se cumple la meta, disparamos la notificación automáticamente
    this.notify(`El usuario ha completado la meta: ${goalName}`);
  }
}