"use client"

import { useState } from "react"
import { mockExercises } from "@/lib/mock-data"
import type { Exercise } from "@/lib/mock-data"
import "./exercises.css"

export default function ExercisesPage() {
  const [filterCategory, setFilterCategory] = useState<string>("all")
  const [filterDifficulty, setFilterDifficulty] = useState<string>("all")
  const [filterMuscle, setFilterMuscle] = useState<string>("all")
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null)

  const filteredExercises = mockExercises.filter((exercise) => {
    const categoryMatch = filterCategory === "all" || exercise.categoria === filterCategory
    const difficultyMatch = filterDifficulty === "all" || exercise.dificultad === filterDifficulty
    const muscleMatch = filterMuscle === "all" || exercise.musculo_objetivo === filterMuscle
    return categoryMatch && difficultyMatch && muscleMatch
  })

  const uniqueMuscles = Array.from(new Set(mockExercises.map((e) => e.musculo_objetivo)))

  return (
    <div className="exercises-page">
      <div className="page-header">
        <div>
          <h1 className="page-title">Biblioteca de Ejercicios</h1>
          <p className="page-description">
            Explora nuestra colección completa de ejercicios con instrucciones detalladas
          </p>
        </div>
      </div>

      <div className="filters-bar">
        <div className="filter-group">
          <label htmlFor="category-filter">Categoría:</label>
          <select id="category-filter" value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)}>
            <option value="all">Todas</option>
            <option value="Fuerza">Fuerza</option>
            <option value="Cardio">Cardio</option>
            <option value="Core">Core</option>
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="difficulty-filter">Dificultad:</label>
          <select id="difficulty-filter" value={filterDifficulty} onChange={(e) => setFilterDifficulty(e.target.value)}>
            <option value="all">Todas</option>
            <option value="Principiante">Principiante</option>
            <option value="Intermedio">Intermedio</option>
            <option value="Avanzado">Avanzado</option>
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="muscle-filter">Músculo:</label>
          <select id="muscle-filter" value={filterMuscle} onChange={(e) => setFilterMuscle(e.target.value)}>
            <option value="all">Todos</option>
            {uniqueMuscles.map((muscle) => (
              <option key={muscle} value={muscle}>
                {muscle}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="exercises-grid">
        {filteredExercises.map((exercise) => (
          <div key={exercise.id} className="exercise-card" onClick={() => setSelectedExercise(exercise)}>
            <div className="exercise-card-image">
              <img src={exercise.imagen_url || "/placeholder.svg"} alt={exercise.nombre} />
              <div className="exercise-card-badge">{exercise.dificultad}</div>
            </div>
            <div className="exercise-card-content">
              <h3 className="exercise-card-title">{exercise.nombre}</h3>
              <p className="exercise-card-description">{exercise.descripcion}</p>
              <div className="exercise-card-tags">
                <span className="tag">{exercise.musculo_objetivo}</span>
                <span className="tag">{exercise.equipo}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredExercises.length === 0 && (
        <div className="empty-state">
          <div className="empty-icon">💪</div>
          <h3>No se encontraron ejercicios</h3>
          <p>Intenta ajustar los filtros para ver más resultados</p>
        </div>
      )}

      {selectedExercise && (
        <div className="modal-overlay" onClick={() => setSelectedExercise(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedExercise(null)}>
              ✕
            </button>
            <div className="modal-grid">
              <div className="modal-image">
                <img src={selectedExercise.imagen_url || "/placeholder.svg"} alt={selectedExercise.nombre} />
              </div>
              <div className="modal-info">
                <div className="modal-badges">
                  <span className="badge badge-primary">{selectedExercise.dificultad}</span>
                  <span className="badge badge-secondary">{selectedExercise.categoria}</span>
                </div>
                <h2 className="modal-title">{selectedExercise.nombre}</h2>
                <p className="modal-description">{selectedExercise.descripcion}</p>
                <div className="modal-details">
                  <div className="detail-item">
                    <span className="detail-label">Músculo Objetivo:</span>
                    <span className="detail-value">{selectedExercise.musculo_objetivo}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Equipo Necesario:</span>
                    <span className="detail-value">{selectedExercise.equipo}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Categoría:</span>
                    <span className="detail-value">{selectedExercise.categoria}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Nivel:</span>
                    <span className="detail-value">{selectedExercise.dificultad}</span>
                  </div>
                </div>
                <div className="modal-actions">
                  <button className="btn-primary btn-large">Agregar a Rutina</button>
                  <button className="btn-outline btn-large">Marcar como Favorito</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
