"use client"

import { useState } from "react"
import Link from "next/link"
import { mockRoutines } from "@/lib/mock-data"
import "./routines.css"

export default function RoutinesPage() {
  const [filterLevel, setFilterLevel] = useState<string>("all")
  const [filterCategory, setFilterCategory] = useState<string>("all")

  const filteredRoutines = mockRoutines.filter((routine) => {
    const levelMatch = filterLevel === "all" || routine.nivel === filterLevel
    const categoryMatch = filterCategory === "all" || routine.categoria === filterCategory
    return levelMatch && categoryMatch
  })

  return (
    <div className="routines-page">
      <div className="page-header">
        <div>
          <h1 className="page-title">Mis Rutinas</h1>
          <p className="page-description">Gestiona y crea tus rutinas de entrenamiento personalizadas</p>
        </div>
        <Link href="/dashboard/routines/create" className="btn-primary">
          + Nueva Rutina
        </Link>
      </div>

      <div className="filters-bar">
        <div className="filter-group">
          <label htmlFor="level-filter">Nivel:</label>
          <select id="level-filter" value={filterLevel} onChange={(e) => setFilterLevel(e.target.value)}>
            <option value="all">Todos</option>
            <option value="Principiante">Principiante</option>
            <option value="Intermedio">Intermedio</option>
            <option value="Avanzado">Avanzado</option>
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="category-filter">Categoría:</label>
          <select id="category-filter" value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)}>
            <option value="all">Todas</option>
            <option value="Fuerza">Fuerza</option>
            <option value="Cardio">Cardio</option>
            <option value="Core">Core</option>
          </select>
        </div>
      </div>

      <div className="routines-grid">
        {filteredRoutines.map((routine) => (
          <div key={routine.id} className="routine-card">
            <div className="routine-image">
              <img src={routine.imagen_url || "/placeholder.svg"} alt={routine.nombre} />
              <div className="routine-badge">{routine.nivel}</div>
            </div>
            <div className="routine-content">
              <h3 className="routine-title">{routine.nombre}</h3>
              <p className="routine-description">{routine.descripcion}</p>
              <div className="routine-meta">
                <span className="meta-item">
                  <span className="meta-icon">⏱️</span>
                  {routine.duracion_estimada} min
                </span>
                <span className="meta-item">
                  <span className="meta-icon">💪</span>
                  {routine.ejercicios.length} ejercicios
                </span>
              </div>
              <div className="routine-actions">
                <Link href={`/dashboard/routines/${routine.id}`} className="btn-outline">
                  Ver Detalles
                </Link>
                <Link href={`/dashboard/routines/edit/${routine.id}`} className="btn-text">
                  Editar
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredRoutines.length === 0 && (
        <div className="empty-state">
          <div className="empty-icon">🏋️</div>
          <h3>No se encontraron rutinas</h3>
          <p>Intenta ajustar los filtros o crea una nueva rutina</p>
        </div>
      )}
    </div>
  )
}
