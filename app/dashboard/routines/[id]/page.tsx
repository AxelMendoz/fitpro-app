"use client"

import { use } from "react"
import Link from "next/link"
import { mockRoutines, mockExercises } from "@/lib/mock-data"
import "../routines.css"

export default function RoutineDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const routine = mockRoutines.find((r) => r.id === Number.parseInt(id))

  if (!routine) {
    return (
      <div className="empty-state">
        <div className="empty-icon">❌</div>
        <h3>Rutina no encontrada</h3>
        <Link href="/dashboard/routines" className="btn-primary">
          Volver a Rutinas
        </Link>
      </div>
    )
  }

  const exercises = routine.ejercicios
    .map((exerciseId) => mockExercises.find((e) => e.id === exerciseId))
    .filter(Boolean)

  return (
    <div className="routine-detail-page">
      <div className="detail-header">
        <Link href="/dashboard/routines" className="back-link">
          ← Volver a Rutinas
        </Link>
      </div>

      <div className="detail-hero">
        <div className="hero-image">
          <img src={routine.imagen_url || "/placeholder.svg"} alt={routine.nombre} />
        </div>
        <div className="hero-content">
          <div className="hero-badges">
            <span className="badge badge-primary">{routine.nivel}</span>
            <span className="badge badge-secondary">{routine.categoria}</span>
          </div>
          <h1 className="hero-title">{routine.nombre}</h1>
          <p className="hero-description">{routine.descripcion}</p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-icon">⏱️</span>
              <div>
                <div className="stat-value">{routine.duracion_estimada} min</div>
                <div className="stat-label">Duración</div>
              </div>
            </div>
            <div className="stat">
              <span className="stat-icon">💪</span>
              <div>
                <div className="stat-value">{exercises.length}</div>
                <div className="stat-label">Ejercicios</div>
              </div>
            </div>
          </div>
          <div className="hero-actions">
            <button className="btn-primary btn-large">Comenzar Entrenamiento</button>
            <Link href={`/dashboard/routines/edit/${routine.id}`} className="btn-outline btn-large">
              Editar Rutina
            </Link>
          </div>
        </div>
      </div>

      <div className="exercises-section">
        <h2 className="section-title">Ejercicios de la Rutina</h2>
        <div className="exercises-list">
          {exercises.map((exercise, index) => (
            <div key={exercise?.id} className="exercise-item">
              <div className="exercise-number">{index + 1}</div>
              <div className="exercise-image-small">
                <img src={exercise?.imagen_url || "/placeholder.svg"} alt={exercise?.nombre} />
              </div>
              <div className="exercise-info">
                <h3 className="exercise-name">{exercise?.nombre}</h3>
                <p className="exercise-description">{exercise?.descripcion}</p>
                <div className="exercise-tags">
                  <span className="tag">{exercise?.musculo_objetivo}</span>
                  <span className="tag">{exercise?.dificultad}</span>
                  <span className="tag">{exercise?.equipo}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
