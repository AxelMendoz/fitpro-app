// src/app/dashboard/plans/page.tsx
"use client"
import { useState } from "react";
// Verifica que la ruta de imports coincida con tu estructura (singular/plural)
import { PlanFactory, MarathonFactory, HypertrophyFactory } from "../../../lib/factory/PlanFactories";
import { IWorkoutPlan } from "../../../lib/factory/PlanProducts";

// ✅ 1. IMPORTAR EL CSS
import "./plans.css";

export default function PlansPage() {
  const [generatedPlan, setGeneratedPlan] = useState<IWorkoutPlan | null>(null);
  const [log, setLog] = useState<string>("");

  const handleGenerate = (type: "cardio" | "muscle") => {
    let factory: PlanFactory;

    if (type === "cardio") {
      factory = new MarathonFactory();
    } else {
      factory = new HypertrophyFactory();
    }

    const plan = factory.createPlan();
    setGeneratedPlan(plan);
    setLog(factory.generateRoutineSummary());
  };

  return (
    // ✅ 2. CLASE "plans-page"
    <div className="plans-page">
      <h1 className="text-3xl font-bold mb-4">Generador de Planes (Factory Method)</h1>
      <p className="text-gray-500 mb-8">
        La lógica de creación está encapsulada. Selecciona un objetivo y la fábrica correspondiente construirá el objeto complejo por ti.
      </p>

      {/* ✅ CLASE "plans-layout" */}
      <div className="plans-layout">
        
        {/* LADO IZQUIERDO: SELECTOR */}
        <div className="factory-selector">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">¿Cuál es tu objetivo?</h2>
          
          {/* ✅ CLASE "factory-btn cardio" */}
          <button 
            onClick={() => handleGenerate("cardio")}
            className="factory-btn cardio"
          >
            <span className="text-3xl">🏃</span>
            <div className="text-left">
              <div className="font-bold text-gray-800">Correr un Maratón</div>
              <div className="text-sm text-gray-500">Usa MarathonFactory</div>
            </div>
          </button>

          {/* ✅ CLASE "factory-btn muscle" */}
          <button 
            onClick={() => handleGenerate("muscle")}
            className="factory-btn muscle"
          >
            <span className="text-3xl">💪</span>
            <div className="text-left">
              <div className="font-bold text-gray-800">Ganar Músculo</div>
              <div className="text-sm text-gray-500">Usa HypertrophyFactory</div>
            </div>
          </button>
        </div>

        {/* LADO DERECHO: RESULTADO */}
        {/* ✅ CLASE "plan-result" */}
        <div className="plan-result">
          {generatedPlan ? (
            <div className="animate-fade-in">
              {/* ✅ CLASE "success-badge" */}
              <div className="success-badge">
                PLAN GENERADO EXITOSAMENTE
              </div>
              
              <h2 className="plan-title">{generatedPlan.name}</h2>
              <p className="plan-desc">{generatedPlan.getDescription()}</p>
              
              <div className="schedule-box">
                <h3 className="font-bold mb-2 text-sm uppercase text-gray-400">Cronograma (Preview)</h3>
                
                {/* ✅ CLASE "schedule-list" */}
                <ul className="schedule-list">
                  {generatedPlan.getSchedule().map((item, i) => (
                    <li key={i} className="schedule-item">
                      <span className="dot"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 text-xs font-mono text-gray-400 border-t pt-2">
                Log: {log}
              </div>
            </div>
          ) : (
            <div className="empty-state">
              <span className="text-4xl mb-2">⚙️</span>
              <p>Esperando a la fábrica...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}