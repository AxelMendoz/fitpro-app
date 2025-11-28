// src/hooks/useNutrition.ts
"use client"
import { useState } from "react"
import { INutritionStrategy, BalancedStrategy, KetoStrategy, VeganStrategy } from "../lib/strategies/NutritionStrategies"

export function useNutrition() {
  const [strategy, setStrategy] = useState<INutritionStrategy>(new BalancedStrategy());
  const [weight, setWeight] = useState<number>(70);

  const changePlan = (planType: string) => {
    // Aquí ocurre la magia del patrón: cambiamos la clase que usa el sistema
    switch (planType) {
      case "keto": setStrategy(new KetoStrategy()); break;
      case "vegan": setStrategy(new VeganStrategy()); break;
      default: setStrategy(new BalancedStrategy());
    }
  };

  return {
    strategy,
    weight,
    setWeight,
    changePlan,
    calories: strategy.calculateCalories(weight),
    recommendations: strategy.getRecommendations()
  };
}