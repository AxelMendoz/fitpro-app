// src/lib/factory/PlanProducts.ts

// 1. La Interfaz del Producto (Todos los planes deben tener esto)
export interface IWorkoutPlan {
  name: string;
  duration: number; // semanas
  getSchedule(): string[];
  getDescription(): string;
}

// 2. Producto Concreto A: Plan para Maratón
export class MarathonPlan implements IWorkoutPlan {
  name = "Maratón 42k Elite";
  duration = 16;

  getSchedule(): string[] {
    return [
      "Semana 1: Trote suave 5km",
      "Semana 8: Fondos de 20km",
      "Semana 16: Carrera completa"
    ];
  }

  getDescription(): string {
    return "Enfoque en resistencia cardiovascular y gestión de energía.";
  }
}

// 3. Producto Concreto B: Plan de Hipertrofia
export class HypertrophyPlan implements IWorkoutPlan {
  name = "Masa Muscular Arnold";
  duration = 12;

  getSchedule(): string[] {
    return [
      "Día 1: Pecho y Tríceps (Cargas altas)",
      "Día 2: Espalda y Bíceps",
      "Día 3: Pierna completa"
    ];
  }

  getDescription(): string {
    return "Enfoque en ruptura de fibras musculares y consumo proteico.";
  }
}