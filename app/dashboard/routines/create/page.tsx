"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { mockExercises } from "@/lib/mock-data"
import "../routines.css"

export default function CreateRoutinePage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    nombre: "",
    descripcion: "",
    nivel: "Principiante",
    categoria: "Fuerza",
    duracion_estimada: 30,
  })
  const [selectedExercises, setSelectedExercises] = useState<number[]>([])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: name === "duracion_estimada" ? Number.parseInt(value) : value,
    }))
  }

  const toggleExercise = (exerciseId: number) => {
    setSelectedExercises((prev) =>
      prev.includes(exerciseId) ? prev.filter((id) => id !== exerciseId) : [...prev, exerciseId],
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Nueva rutina:", { ...formData, ejercicios: selectedExercises })
    // Aquí implementarías la lógica para guardar la rutina
    router.push("/dashboard/routines")
  }

  return (
    <div className="create-routine-page">
      <div className="detail-header">
        <Link href="/dashboard/routines" className="back-link">
          ← Volver a Rutinas
        </Link>
      </div>

      <div className="form-container">
        <h1 className="form-title">Crear Nueva Rutina</h1>
        <p className="form-subtitle">Completa los detalles y selecciona los ejercicios para tu rutina</p>

        <form onSubmit={handleSubmit} className="routine-form">
          <div className="form-section">
            <h2 className="section-title">Información Básica</h2>

            <div className="form-group">
              <label htmlFor="nombre">Nombre de la Rutina *</label>
              <input
                id="nombre"
                name="nombre"
                type="text"
                value={formData.nombre}
                onChange={handleInputChange}
                placeholder="Ej: Rutina de Pecho y Tríceps"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="descripcion">Descripción</label>
              <textarea
                id="descripcion"
                name="descripcion"
                value={formData.descripcion}
                onChange={handleInputChange}
                placeholder="Describe el objetivo de esta rutina..."
                rows={3}
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="nivel">Nivel</label>
                <select id="nivel" name="nivel" value={formData.nivel} onChange={handleInputChange}>
                  <option value="Principiante">Principiante</option>
                  <option value="Intermedio">Intermedio</option>
                  <option value="Avanzado">Avanzado</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="categoria">Categoría</label>
                <select id="categoria" name="categoria" value={formData.categoria} onChange={handleInputChange}>
                  <option value="Fuerza">Fuerza</option>
                  <option value="Cardio">Cardio</option>
                  <option value="Core">Core</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="duracion_estimada">Duración (min)</label>
                <input
                  id="duracion_estimada"
                  name="duracion_estimada"
                  type="number"
                  value={formData.duracion_estimada}
                  onChange={handleInputChange}
                  min="10"
                  max="180"
                />
              </div>
            </div>
          </div>

          <div className="form-section">
            <h2 className="section-title">Seleccionar Ejercicios ({selectedExercises.length} seleccionados)</h2>

            <div className="exercises-selection-grid">
              {mockExercises.map((exercise) => (
                <div
                  key={exercise.id}
                  className={`exercise-selection-card ${selectedExercises.includes(exercise.id) ? "selected" : ""}`}
                  onClick={() => toggleExercise(exercise.id)}
                >
                  <div className="selection-checkbox">{selectedExercises.includes(exercise.id) && <span>✓</span>}</div>
                  <div className="exercise-image-small">
                    <img src={exercise.imagen_url || "/placeholder.svg"} alt={exercise.nombre} />
                  </div>
                  <div className="exercise-info-compact">
                    <h4>{exercise.nombre}</h4>
                    <p>{exercise.musculo_objetivo}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="form-actions">
            <Link href="/dashboard/routines" className="btn-outline btn-large">
              Cancelar
            </Link>
            <button type="submit" className="btn-primary btn-large" disabled={selectedExercises.length === 0}>
              Crear Rutina
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
