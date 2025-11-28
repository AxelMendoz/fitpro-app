// src/app/dashboard/progress/page.tsx
"use client"
import "./progress.css" // Mantenemos tus estilos

// 1. Importamos el "Cerebro" (Hook) y el Componente (Vista)
import { useProgressData } from "../../../hooks/use.progressdata"
import { WeeklyActivityChart } from "../../../components/progress/WeeklyActivityChart"

export default function ProgressPage() {
  // 2. Usamos el Hook para obtener datos y lógica
  // Ya no hay arrays fijos ni cálculos matemáticos aquí. ¡Todo viene limpio!
  const { 
    selectedPeriod, 
    setSelectedPeriod, 
    weeklyData, 
    maxDuration,
    monthlyStats,
    bodyMetrics,
    recentWorkouts 
  } = useProgressData();

  return (
    <div className="progress-page">
      <div className="page-header">
        <div>
          <h1 className="page-title">Mi Progreso</h1>
          <p className="page-description">Visualiza tu evolución y mantente motivado</p>
        </div>
        
        {/* Selector de periodo */}
        <div className="period-selector">
          <button
            className={`period-btn ${selectedPeriod === "week" ? "active" : ""}`}
            onClick={() => setSelectedPeriod("week")}
          >
            Semana
          </button>
          <button
            className={`period-btn ${selectedPeriod === "month" ? "active" : ""}`}
            onClick={() => setSelectedPeriod("month")}
          >
            Mes
          </button>
          <button
            className={`period-btn ${selectedPeriod === "year" ? "active" : ""}`}
            onClick={() => setSelectedPeriod("year")}
          >
            Año
          </button>
        </div>
      </div>

      {/* Grid de Estadísticas (Ahora usa los datos del hook) */}
      <div className="stats-grid">
        {monthlyStats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-content">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-change positive">{stat.change}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="progress-grid">
        {/* 3. Aquí usamos el Componente Extraído (Alta Cohesión) */}
        <WeeklyActivityChart data={weeklyData} maxDuration={maxDuration} />

        {/* Métricas Corporales */}
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Métricas Corporales</h2>
            <span className="card-subtitle">Cambios del último mes</span>
          </div>
          <div className="metrics-list">
            {bodyMetrics.map((metric, index) => (
              <div key={index} className="metric-item">
                <div className="metric-info">
                  <div className="metric-label">{metric.label}</div>
                  <div className="metric-values">
                    <span className="metric-current">{metric.current}</span>
                    <span className="metric-previous">antes: {metric.previous}</span>
                  </div>
                </div>
                <div className={`metric-change ${metric.change.startsWith("+") ? "positive" : "negative"}`}>
                  {metric.change}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Historial (Tabla) */}
      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Historial de Entrenamientos</h2>
          <span className="card-subtitle">Últimas sesiones completadas</span>
        </div>
        <div className="workouts-table">
          <div className="table-header">
            <div className="table-cell">Fecha</div>
            <div className="table-cell">Rutina</div>
            <div className="table-cell">Duración</div>
            <div className="table-cell">Ejercicios</div>
            <div className="table-cell">Calorías</div>
          </div>
          {recentWorkouts.map((workout, index) => (
            <div key={index} className="table-row">
              <div className="table-cell">
                <span className="workout-date">{new Date(workout.date).toLocaleDateString("es-ES")}</span>
              </div>
              <div className="table-cell">
                <span className="workout-routine">{workout.routine}</span>
              </div>
              <div className="table-cell">
                <span className="workout-duration">{workout.duration} min</span>
              </div>
              <div className="table-cell">
                <span className="workout-exercises">{workout.exercises}</span>
              </div>
              <div className="table-cell">
                <span className="workout-calories">{workout.calories} kcal</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}