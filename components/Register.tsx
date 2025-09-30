"use client"

import { useState } from "react"
import { supabase } from "@/lib/supabaseClient"
import { FaDumbbell } from "react-icons/fa"

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

  // ✅ ESTA ES LA FUNCIÓN CORREGIDA
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    const { nombre, email, password, edad, genero } = formData

    try {
      // 1️⃣ Se registra el usuario y se pasan los datos del perfil en 'options.data'
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          // El trigger en la base de datos leerá esta información
          data: {
            nombre,
            edad: Number(edad), // Aseguramos que la edad sea un número
            genero,
          },
        },
      })

      if (error) {
        throw error // Si hay un error, lo enviamos al bloque catch
      }

      // 2️⃣ ¡Listo! Ya no se necesita el ".insert()" manual.
      // El trigger se encarga de todo en el backend. 🚀
      alert("Registro exitoso ✅ Revisa tu correo para confirmar tu cuenta.")

      if (onRegister && data.user) {
        onRegister({
          nombre,
          email,
          password,
          edad: Number(edad),
          genero,
          fecha_creacion: data.user.created_at,
        })
      }
    } catch (error: any) {
      // Un único lugar para manejar todos los errores
      alert("Error en el registro: " + error.message)
    } finally {
      // Esto se ejecuta siempre, haya error o no
      setIsLoading(false)
    }
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <div className="logo">
            <FaDumbbell size={32} color="rgb(var(--accent))" />         
              <span className="logo-text">FitPro</span>
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