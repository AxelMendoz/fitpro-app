// src/app/dashboard/nutrition/page.tsx
"use client"

// Asegúrate que esta ruta coincida con el nombre real de tu archivo (Hooks vs hooks)
import { useNutrition } from "../../../hooks/use-Nutrition"

// ✅ AQUÍ IMPORTAMOS EL CSS
import "./nutrition.css"; 

export default function NutritionPage() {
  const { strategy, changePlan, calories, recommendations, weight, setWeight } = useNutrition();

  return (
    // Usamos la clase "nutrition-page" del CSS
    <div className="nutrition-page">
      <h1 className="text-2xl font-bold mb-4">Plan Nutricional (Patrón Strategy)</h1>
      
      {/* Usamos "nutrition-controls" */}
      <div className="nutrition-controls">
        <label className="block mb-2 font-bold">Tu Peso (kg):</label>
        <input 
          type="number" 
          value={weight} 
          onChange={(e) => setWeight(Number(e.target.value))}
          className="border p-2 rounded mr-4 w-24"
        />
        
        {/* Usamos "strategy-buttons" y "strategy-btn" */}
        <div className="strategy-buttons">
          <button 
            onClick={() => changePlan("balanced")} 
            className={`strategy-btn ${strategy.name.includes("Balanceada") ? "active" : ""}`}
          >
            Balanceada
          </button>
          <button 
            onClick={() => changePlan("keto")} 
            className={`strategy-btn ${strategy.name.includes("Keto") ? "active" : ""}`}
          >
            Keto
          </button>
          <button 
            onClick={() => changePlan("vegan")} 
            className={`strategy-btn ${strategy.name.includes("Vegana") ? "active" : ""}`}
          >
            Vegana
          </button>
        </div>
      </div>

      {/* Usamos "results-grid" y "result-card" */}
      <div className="results-grid">
        <div className="result-card">
          <h2 className="font-bold text-gray-700">Calorías Diarias</h2>
          {/* Usamos "calories-display" */}
          <div className="calories-display">{calories} kcal</div>
          <small className="text-gray-500">Estrategia: <strong>{strategy.name}</strong></small>
        </div>
        
        <div className="result-card">
          <h2 className="font-bold text-gray-700 mb-2">Recomendaciones</h2>
          <ul className="list-disc pl-5 space-y-1 text-gray-600">
            {recommendations.map((rec, i) => <li key={i}>{rec}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
}