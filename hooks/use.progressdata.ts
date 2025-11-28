// src/Hooks/useProgressData.ts
"use client"
import { useState } from "react"

// Importamos los datos desde tu archivo de librería (Indirección)
import { 
  MOCK_WEEKLY_DATA, 
  MOCK_MONTHLY_STATS, 
  MOCK_RECENT_WORKOUTS, 
  MOCK_BODY_METRICS 
} from "../lib/mock-data"

export function useProgressData() {
  const [selectedPeriod, setSelectedPeriod] = useState<"week" | "month" | "year">("week")

  // Aquí movemos la lógica matemática (Cálculo de la duración máxima)
  // Así quitamos lógica de la vista (Solución a Spaghetti Code)
  const maxDuration = Math.max(...MOCK_WEEKLY_DATA.map((d) => d.duration))

  // Retornamos todo lo que la página va a necesitar
  return {
    selectedPeriod,
    setSelectedPeriod,
    weeklyData: MOCK_WEEKLY_DATA,
    monthlyStats: MOCK_MONTHLY_STATS,
    recentWorkouts: MOCK_RECENT_WORKOUTS,
    bodyMetrics: MOCK_BODY_METRICS,
    maxDuration,
  }
}