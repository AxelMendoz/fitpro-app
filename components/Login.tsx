"use client"

import type React from "react"

import { useState } from "react"

interface LoginProps {
  onLogin?: (email: string, password: string) => void
  onSwitchToRegister?: () => void
}

export default function Login({ onLogin, onSwitchToRegister }: LoginProps) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    if (onLogin) {
      onLogin(email, password)
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
          <p className="login-subtitle">Transforma tu cuerpo, transforma tu vida</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>

          <div className="form-options">
            <label className="checkbox-label">
              <input type="checkbox" />
              <span>Recordarme</span>
            </label>
            <a href="#" className="forgot-password">
              ¿Olvidaste tu contraseña?
            </a>
          </div>

          <button type="submit" className="login-button" disabled={isLoading}>
            {isLoading ? "Iniciando sesión..." : "Iniciar Sesión"}
          </button>
        </form>

        <div className="login-footer">
          <p>
            ¿No tienes cuenta?{" "}
            <button
              type="button"
              className="signup-link"
              onClick={onSwitchToRegister}
              style={{
                background: "none",
                border: "none",
                padding: 0,
                color: "var(--primary)",
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              Regístrate gratis
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}
