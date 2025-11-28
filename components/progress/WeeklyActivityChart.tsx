// src/components/progress/WeeklyActivityChart.tsx
import React from 'react';

// Definimos qué datos espera recibir este componente
interface ChartProps {
  data: { day: string; workouts: number; duration: number }[];
  maxDuration: number;
}

export function WeeklyActivityChart({ data, maxDuration }: ChartProps) {
  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title">Actividad Semanal</h2>
        <span className="card-subtitle">Entrenamientos por día</span>
      </div>
      <div className="weekly-chart">
        {data.map((day, index) => (
          <div key={index} className="chart-column">
            <div className="chart-bar-container">
              <div
                className="chart-bar"
                style={{
                  // Aquí está la lógica visual encapsulada
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
  );
}