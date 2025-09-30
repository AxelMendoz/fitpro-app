"use client"

import "./dashboard.css"

export default function DashboardPage() {
  const stats = [
    { label: "Rutinas Completadas", value: "24", icon: "✅", color: "accent" },
    { label: "Días Activos", value: "45", icon: "🔥", color: "primary" },
    { label: "Ejercicios Realizados", value: "156", icon: "💪", color: "accent" },
    { label: "Tiempo Total", value: "32h", icon: "⏱️", color: "primary" },
  ]

  const recentWorkouts = [
    { name: "Entrenamiento de Pecho", date: "Hoy", duration: "45 min" },
    { name: "Cardio Intenso", date: "Ayer", duration: "30 min" },
    { name: "Piernas y Glúteos", date: "Hace 2 días", duration: "50 min" },
  ]

  return (
    <div className="dashboard-page">
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className={`stat-card stat-${stat.color}`}>
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-content">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="dashboard-grid">
        <div className="card">
          <h2 className="card-title">Entrenamientos Recientes</h2>
          <div className="workout-list">
            {recentWorkouts.map((workout, index) => (
              <div key={index} className="workout-item">
                <div className="workout-info">
                  <div className="workout-name">{workout.name}</div>
                  <div className="workout-meta">
                    {workout.date} • {workout.duration}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <h2 className="card-title">Progreso Semanal</h2>
          <div className="progress-chart">
            <div className="chart-bars">
              <div className="chart-bar" style={{ height: "60%" }}>
                <span className="bar-label">L</span>
              </div>
              <div className="chart-bar" style={{ height: "80%" }}>
                <span className="bar-label">M</span>
              </div>
              <div className="chart-bar" style={{ height: "45%" }}>
                <span className="bar-label">X</span>
              </div>
              <div className="chart-bar" style={{ height: "90%" }}>
                <span className="bar-label">J</span>
              </div>
              <div className="chart-bar" style={{ height: "70%" }}>
                <span className="bar-label">V</span>
              </div>
              <div className="chart-bar" style={{ height: "50%" }}>
                <span className="bar-label">S</span>
              </div>
              <div className="chart-bar" style={{ height: "0%" }}>
                <span className="bar-label">D</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
