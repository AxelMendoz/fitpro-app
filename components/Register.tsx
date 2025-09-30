"use client"

import type React from "react"
import { useState } from "react"

interface RegisterData {
  nombre: string
  email: string
  password: string
  edad: number
  genero: string
  fecha_creacion: string
}

interface RegisterProps {
  onRegister?: (data: RegisterData) => void
  onSwitchToLogin?: () => void
}

export default function Register({ onRegister, onSwitchToLogin }: RegisterProps) {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    password: "",
    edad: "",
    genero: "",
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const registerData: RegisterData = {
      ...formData,
      edad: Number.parseInt(formData.edad),
      fecha_creacion: new Date().toISOString(),
    }

    if (onRegister) {
      onRegister(registerData)
    }

    setIsLoading(false)
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <div className="logo">
            <div className="logo-icon">💪</div>
            <h1>FitPro</h1>
          </div>
          <p className="login-subtitle">Únete a la comunidad fitness</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="nombre">Nombre completo</label>
            <input
              id="nombre"
              name="nombre"
              type="text"
              value={formData.nombre}
              onChange={handleInputChange}
              placeholder="Tu nombre completo"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="tu@email.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="••••••••"
              required
              minLength={6}
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="edad">Edad</label>
              <input
                id="edad"
                name="edad"
                type="number"
                value={formData.edad}
                onChange={handleInputChange}
                placeholder="25"
                required
                min="13"
                max="120"
              />
            </div>

            <div className="form-group">
              <label htmlFor="genero">Género</label>
              <select id="genero" name="genero" value={formData.genero} onChange={handleInputChange} required>
                <option value="">Seleccionar</option>
                <option value="masculino">Masculino</option>
                <option value="femenino">Femenino</option>
                <option value="otro">Otro</option>
                <option value="prefiero_no_decir">Prefiero no decir</option>
              </select>
            </div>
          </div>

          <button type="submit" className="login-button" disabled={isLoading}>
            {isLoading ? "Creando cuenta..." : "Crear Cuenta"}
          </button>
        </form>

        <div className="login-footer">
          <p>
            ¿Ya tienes cuenta?{" "}
            <button
              type="button"
              className="signup-link"
              onClick={onSwitchToLogin}
              style={{
                background: "none",
                border: "none",
                padding: 0,
                color: "var(--primary)",
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              Inicia sesión
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}
