// src/lib/factory/PlanFactories.ts
import { IWorkoutPlan, MarathonPlan, HypertrophyPlan } from "./PlanProducts";

// 1. La Fábrica Abstracta (Define el método de creación)
export abstract class PlanFactory {
  // Este es el "Factory Method"
  public abstract createPlan(): IWorkoutPlan;

  // Lógica compartida: Crea el plan y nos da un resumen
  public generateRoutineSummary(): string {
    const plan = this.createPlan();
    return `Plan Generado: ${plan.name} (${plan.duration} semanas) - ${plan.getDescription()}`;
  }
}

// 2. Fábrica Concreta A: Crea planes de Maratón
export class MarathonFactory extends PlanFactory {
  public createPlan(): IWorkoutPlan {
    console.log("🏭 Fábrica: Configurando plan de running...");
    return new MarathonPlan();
  }
}

// 3. Fábrica Concreta B: Crea planes de Hipertrofia
export class HypertrophyFactory extends PlanFactory {
  public createPlan(): IWorkoutPlan {
    console.log("🏭 Fábrica: Configurando plan de pesas...");
    return new HypertrophyPlan();
  }
}