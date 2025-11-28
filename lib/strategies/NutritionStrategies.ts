// src/lib/strategies/NutritionStrategies.ts
export interface INutritionStrategy {
  name: string;
  calculateCalories(weight: number): number;
  getRecommendations(): string[];
}

export class KetoStrategy implements INutritionStrategy {
  name = "Cetogénica (Keto)";
  calculateCalories(weight: number): number { return weight * 35; }
  getRecommendations(): string[] {
    return ["🥑 Aguacate y Huevos", "🥩 Carnes grasas", "🚫 Cero Azúcar"];
  }
}

export class VeganStrategy implements INutritionStrategy {
  name = "Vegana";
  calculateCalories(weight: number): number { return weight * 32; }
  getRecommendations(): string[] {
    return ["🥗 Tofu y Lentejas", "🥛 Leche vegetal", "💊 Suplemento B12"];
  }
}

export class BalancedStrategy implements INutritionStrategy {
  name = "Balanceada";
  calculateCalories(weight: number): number { return weight * 30; }
  getRecommendations(): string[] {
    return ["🍗 Pollo y Arroz", "🍎 Frutas", "⚖️ Todo con moderación"];
  }
}