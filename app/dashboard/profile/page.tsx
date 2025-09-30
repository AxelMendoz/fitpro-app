"use client"

import type React from "react"

import { useState } from "react"
import "./profile.css"

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [activeTab, setActiveTab] = useState<"personal" | "fitness" | "preferences">("personal")

  const [personalData, setPersonalData] = useState({
    nombre: "Juan Pérez",
    email: "juan.perez@email.com",
    edad: 28,
    genero: "masculino",
    telefono: "+34 612 345 678",
    ubicacion: "Madrid, España",
  })

  const [fitnessData, setFitnessData] = useState({
    peso: 75,
    altura: 178,
    objetivo: "Ganar músculo",
    nivel: "Intermedio",
    diasSemana: 4,
    duracionSesion: 60,
  })

  const [preferences, setPreferences] = useState({
    notificaciones: true,
    recordatorios: true,
    newsletter: false,
    privacidad: "publico",
  })

  const handlePersonalChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setPersonalData((prev) => ({
      ...prev,
      [name]: name === "edad" ? Number.parseInt(value) : value,
    }))
  }

  const handleFitnessChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFitnessData((prev) => ({
      ...prev,
      [name]: ["peso", "altura", "diasSemana", "duracionSesion"].includes(name) ? Number.parseInt(value) : value,
    }))
  }

  const handlePreferencesChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setPreferences((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const handleSave = () => {
    console.log("Guardando perfil:", { personalData, fitnessData, preferences })
    setIsEditing(false)
  }

  const achievements = [
    { icon: "🏆", title: "Primera Rutina", description: "Completaste tu primera rutina" },
    { icon: "🔥", title: "Racha de 7 días", description: "7 días consecutivos entrenando" },
    { icon: "💪", title: "100 Ejercicios", description: "Completaste 100 ejercicios" },
    { icon: "⭐", title: "Nivel Intermedio", description: "Alcanzaste nivel intermedio" },
  ]

  const stats = [
    { label: "Rutinas Completadas", value: "24" },
    { label: "Tiempo Total", value: "18.5h" },
    { label: "Ejercicios Realizados", value: "156" },
    { label: "Días Activos", value: "45" },
  ]

  return (
    <div className="profile-page">
      <div className="profile-header">
        <div className="profile-hero">
          <div className="profile-avatar">
            <div className="avatar-circle">
              <span className="avatar-initials">JP</span>
            </div>
            <button className="avatar-edit-btn">📷</button>
          </div>
          <div className="profile-info">
            <h1 className="profile-name">{personalData.nombre}</h1>
            <p className="profile-email">{personalData.email}</p>
            <div className="profile-badges">
              <span className="badge badge-primary">{fitnessData.nivel}</span>
              <span className="badge badge-secondary">{fitnessData.objetivo}</span>
            </div>
          </div>
        </div>
        <div className="profile-actions">
          {!isEditing ? (
            <button className="btn-primary" onClick={() => setIsEditing(true)}>
              Editar Perfil
            </button>
          ) : (
            <>
              <button className="btn-outline" onClick={() => setIsEditing(false)}>
                Cancelar
              </button>
              <button className="btn-primary" onClick={handleSave}>
                Guardar Cambios
              </button>
            </>
          )}
        </div>
      </div>

      <div className="profile-stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="profile-stat-card">
            <div className="stat-value">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="profile-content">
        <div className="tabs-container">
          <div className="tabs">
            <button
              className={`tab ${activeTab === "personal" ? "active" : ""}`}
              onClick={() => setActiveTab("personal")}
            >
              Información Personal
            </button>
            <button
              className={`tab ${activeTab === "fitness" ? "active" : ""}`}
              onClick={() => setActiveTab("fitness")}
            >
              Datos Fitness
            </button>
            <button
              className={`tab ${activeTab === "preferences" ? "active" : ""}`}
              onClick={() => setActiveTab("preferences")}
            >
              Preferencias
            </button>
          </div>

          <div className="tab-content">
            {activeTab === "personal" && (
              <div className="form-section">
                <h2 className="section-title">Información Personal</h2>
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="nombre">Nombre Completo</label>
                    <input
                      id="nombre"
                      name="nombre"
                      type="text"
                      value={personalData.nombre}
                      onChange={handlePersonalChange}
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={personalData.email}
                      onChange={handlePersonalChange}
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="edad">Edad</label>
                    <input
                      id="edad"
                      name="edad"
                      type="number"
                      value={personalData.edad}
                      onChange={handlePersonalChange}
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="genero">Género</label>
                    <select
                      id="genero"
                      name="genero"
                      value={personalData.genero}
                      onChange={handlePersonalChange}
                      disabled={!isEditing}
                    >
                      <option value="masculino">Masculino</option>
                      <option value="femenino">Femenino</option>
                      <option value="otro">Otro</option>
                      <option value="prefiero_no_decir">Prefiero no decir</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="telefono">Teléfono</label>
                    <input
                      id="telefono"
                      name="telefono"
                      type="tel"
                      value={personalData.telefono}
                      onChange={handlePersonalChange}
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="ubicacion">Ubicación</label>
                    <input
                      id="ubicacion"
                      name="ubicacion"
                      type="text"
                      value={personalData.ubicacion}
                      onChange={handlePersonalChange}
                      disabled={!isEditing}
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === "fitness" && (
              <div className="form-section">
                <h2 className="section-title">Datos Fitness</h2>
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="peso">Peso (kg)</label>
                    <input
                      id="peso"
                      name="peso"
                      type="number"
                      value={fitnessData.peso}
                      onChange={handleFitnessChange}
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="altura">Altura (cm)</label>
                    <input
                      id="altura"
                      name="altura"
                      type="number"
                      value={fitnessData.altura}
                      onChange={handleFitnessChange}
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="objetivo">Objetivo Principal</label>
                    <select
                      id="objetivo"
                      name="objetivo"
                      value={fitnessData.objetivo}
                      onChange={handleFitnessChange}
                      disabled={!isEditing}
                    >
                      <option value="Perder peso">Perder peso</option>
                      <option value="Ganar músculo">Ganar músculo</option>
                      <option value="Mantener forma">Mantener forma</option>
                      <option value="Mejorar resistencia">Mejorar resistencia</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="nivel">Nivel de Experiencia</label>
                    <select
                      id="nivel"
                      name="nivel"
                      value={fitnessData.nivel}
                      onChange={handleFitnessChange}
                      disabled={!isEditing}
                    >
                      <option value="Principiante">Principiante</option>
                      <option value="Intermedio">Intermedio</option>
                      <option value="Avanzado">Avanzado</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="diasSemana">Días por Semana</label>
                    <input
                      id="diasSemana"
                      name="diasSemana"
                      type="number"
                      min="1"
                      max="7"
                      value={fitnessData.diasSemana}
                      onChange={handleFitnessChange}
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="duracionSesion">Duración Sesión (min)</label>
                    <input
                      id="duracionSesion"
                      name="duracionSesion"
                      type="number"
                      value={fitnessData.duracionSesion}
                      onChange={handleFitnessChange}
                      disabled={!isEditing}
                    />
                  </div>
                </div>
                <div className="imc-card">
                  <div className="imc-info">
                    <span className="imc-label">Tu IMC:</span>
                    <span className="imc-value">
                      {(fitnessData.peso / Math.pow(fitnessData.altura / 100, 2)).toFixed(1)}
                    </span>
                  </div>
                  <p className="imc-description">Índice de Masa Corporal - Rango saludable: 18.5 - 24.9</p>
                </div>
              </div>
            )}

            {activeTab === "preferences" && (
              <div className="form-section">
                <h2 className="section-title">Preferencias</h2>
                <div className="preferences-list">
                  <div className="preference-item">
                    <div className="preference-info">
                      <div className="preference-label">Notificaciones Push</div>
                      <div className="preference-description">Recibe notificaciones sobre tus entrenamientos</div>
                    </div>
                    <label className="toggle">
                      <input
                        type="checkbox"
                        name="notificaciones"
                        checked={preferences.notificaciones}
                        onChange={handlePreferencesChange}
                        disabled={!isEditing}
                      />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>
                  <div className="preference-item">
                    <div className="preference-info">
                      <div className="preference-label">Recordatorios</div>
                      <div className="preference-description">Recordatorios diarios para entrenar</div>
                    </div>
                    <label className="toggle">
                      <input
                        type="checkbox"
                        name="recordatorios"
                        checked={preferences.recordatorios}
                        onChange={handlePreferencesChange}
                        disabled={!isEditing}
                      />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>
                  <div className="preference-item">
                    <div className="preference-info">
                      <div className="preference-label">Newsletter</div>
                      <div className="preference-description">Recibe consejos y novedades por email</div>
                    </div>
                    <label className="toggle">
                      <input
                        type="checkbox"
                        name="newsletter"
                        checked={preferences.newsletter}
                        onChange={handlePreferencesChange}
                        disabled={!isEditing}
                      />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>
                  <div className="preference-item">
                    <div className="preference-info">
                      <div className="preference-label">Privacidad del Perfil</div>
                      <div className="preference-description">Controla quién puede ver tu perfil</div>
                    </div>
                    <select
                      name="privacidad"
                      value={preferences.privacidad}
                      onChange={handlePreferencesChange}
                      disabled={!isEditing}
                      className="privacy-select"
                    >
                      <option value="publico">Público</option>
                      <option value="amigos">Solo amigos</option>
                      <option value="privado">Privado</option>
                    </select>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="achievements-section">
          <h2 className="section-title">Logros Desbloqueados</h2>
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <div key={index} className="achievement-card">
                <div className="achievement-icon">{achievement.icon}</div>
                <div className="achievement-info">
                  <div className="achievement-title">{achievement.title}</div>
                  <div className="achievement-description">{achievement.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
