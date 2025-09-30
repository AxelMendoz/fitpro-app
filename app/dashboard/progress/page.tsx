"use client"

import { useState } from "react"
import "./progress.css"

export default function ProgressPage() {
  const [selectedPeriod, setSelectedPeriod] = useState<"week" | "month" | "year">("week")

  const weeklyData = [
    { day: "Lun", workouts: 2, duration: 90 },
    { day: "Mar", workouts: 1, duration: 45 },
    { day: "Mié", workouts: 0, duration: 0 },
    { day: "Jue", workouts: 2, duration: 80 },
    { day: "Vie", workouts: 1, duration: 60 },
    { day: "Sáb", workouts: 1, duration: 50 },
    { day: "Dom", workouts: 0, duration: 0 },
  ]

  const monthlyStats = [
    { label: "Entrenamientos Completados", value: 24, change: "+12%", icon: "✅" },
    { label: "Tiempo Total", value: "18.5h", change: "+8%", icon: "⏱️" },
    { label: "Calorías Quemadas", value: "3,240", change: "+15%", icon: "🔥" },
    { label: "Racha Actual", value: "5 días", change: "+2", icon: "⚡" },
  ]

  const recentWorkouts = [
    {
      date: "2024-01-15",
      routine: "Pecho y Tríceps",
      duration: 45,
      exercises: 6,
      calories: 320,
    },
    {
      date: "2024-01-14",
      routine: "Piernas",
      duration: 60,
      exercises: 8,
      calories: 450,
    },
    {
      date: "2024-01-13",
      routine: "Espalda y Bíceps",
      duration: 50,
      exercises: 7,
      calories: 380,
    },
    {
      date: "2024-01-12",
      routine: "Cardio HIIT",
      duration: 30,
      exercises: 5,
      calories: 280,
    },
  ]

  const bodyMetrics = [
    { label: "Peso", current: "75 kg", previous: "77 kg", change: "-2 kg" },
    { label: "IMC", current: "23.5", previous: "24.1", change: "-0.6" },
    { label: "Grasa Corporal", current: "18%", previous: "20%", change: "-2%" },
    { label: "Masa Muscular", current: "62 kg", previous: "60 kg", change: "+2 kg" },
  ]

  const maxDuration = Math.max(...weeklyData.map((d) => d.duration))

  return (
    <div className="progress-page">
      <div className="page-header">
        <div>
          <h1 className="page-title">Mi Progreso</h1>
          <p className="page-description">Visualiza tu evolución y mantente motivado</p>
        </div>
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
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Actividad Semanal</h2>
            <span className="card-subtitle">Entrenamientos por día</span>
          </div>
          <div className="weekly-chart">
            {weeklyData.map((day, index) => (
              <div key={index} className="chart-column">
                <div className="chart-bar-container">
                  <div
                    className="chart-bar"
                    style={{
                      height: day.duration > 0 ? `${(day.duration / maxDuration) * 100}%` : "4px",
                    }}
                  >
                    {day.duration > 0 && <span className="bar-tooltip">{day.duration} min</span>}
                  </div>
                </div>
                <div className="chart-label">{day.day}</div>
                <div className="chart-count">{day.workouts > 0 ? day.workouts : "-"}</div>
              </div>
            ))}
          </div>
        </div>

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
