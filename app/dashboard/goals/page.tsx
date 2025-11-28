// src/app/dashboard/goals/page.tsx
"use client"
import { useState } from "react";
// Verifica que tus rutas sean correctas (lib/observer/...)
import { GoalSubject } from "../../../lib/observer/GoalSubjet";
import { ToastNotificationService, AnalyticsService } from "../../../lib/observer/NotificacionService";

// ✅ 1. IMPORTAR EL CSS
import "./goals.css";

export default function GoalsPage() {
  const [lastLog, setLastLog] = useState<string[]>([]);
  
  // Usamos useState con función inicializadora para mantener la instancia del Subject
  const [goalManager] = useState(() => {
    const subject = new GoalSubject();
    subject.attach(new ToastNotificationService());
    subject.attach(new AnalyticsService());
    return subject;
  });

  const handleCompleteGoal = (goal: string) => {
    // Simulamos la lógica del patrón Observer
    goalManager.completeGoal(goal);
    // Actualizamos el log visual
    setLastLog(prev => [`Meta completada: ${goal} (Notificaciones enviadas)`, ...prev]);
  };

  return (
    // ✅ 2. CLASE "goals-page"
    <div className="goals-page">
      <h1 className="text-3xl font-bold mb-4">Sistema de Alertas (Patrón Observer)</h1>
      <p className="text-gray-500 mb-8">
        Haz clic en una meta. El sistema notificará automáticamente a los servicios suscritos (Alerta visual y Analytics) sin acoplar el código.
      </p>

      {/* ✅ CLASE "observer-layout" */}
      <div className="observer-layout">
        
        {/* PANEL IZQUIERDO: METAS */}
        <div className="goals-panel">
          <h2 className="panel-title">Mis Metas Pendientes</h2>
          
          <div className="goals-list">
            {/* Meta 1 */}
            <button 
              onClick={() => handleCompleteGoal("Bajar 2kg")}
              className="goal-btn group"
            >
              <span className="goal-text">🏃‍♂️ Bajar 2kg de peso</span>
              <span className="action-badge">Completar</span>
            </button>
            
            {/* Meta 2 */}
            <button 
              onClick={() => handleCompleteGoal("Correr 5km")}
              className="goal-btn group"
            >
              <span className="goal-text">🏅 Correr 5km seguidos</span>
              <span className="action-badge">Completar</span>
            </button>

            {/* Meta 3 */}
            <button 
              onClick={() => handleCompleteGoal("Beber 2L de agua")}
              className="goal-btn group"
            >
              <span className="goal-text">💧 Beber 2L de agua</span>
              <span className="action-badge">Completar</span>
            </button>
          </div>
        </div>

        {/* PANEL DERECHO: LOG DEL SISTEMA */}
        <div className="console-panel">
          <div className="console-header">Log del Sistema (Eventos)</div>
          
          <div className="console-content">
            {lastLog.map((log, i) => (
              <div key={i} className="log-entry">
                {">"} {log}
              </div>
            ))}
            <div className="log-waiting">{">"} Sistema esperando eventos...</div>
          </div>
        </div>

      </div>
    </div>
  );
}