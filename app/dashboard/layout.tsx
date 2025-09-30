"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { supabase } from "@/lib/supabaseClient" // Asegúrate que esta ruta es correcta
import "./dashboard.css"

// Un componente simple para el mensaje de espera
function PleaseConfirmEmail() {
  return (
    <div style={{ padding: "40px", textAlign: "center", height: "100vh", display: "grid", placeContent: "center" }}>
      <h2>¡Casi listo!</h2>
      <p>Te hemos enviado un correo de confirmación.</p>
      <p>Por favor, revisa tu bandeja de entrada para activar tu cuenta y poder acceder.</p>
    </div>
  )
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const pathname = usePathname()
  const router = useRouter()
  const [sessionStatus, setSessionStatus] = useState<"loading" | "unauthenticated" | "authenticated">("loading")

  const navItems = [
    { href: "/dashboard", label: "Dashboard", icon: "📊" },
    { href: "/dashboard/routines", label: "Rutinas", icon: "🏋️" },
    { href: "/dashboard/exercises", label: "Ejercicios", icon: "💪" },
    { href: "/dashboard/progress", label: "Progreso", icon: "📈" },
    { href: "/dashboard/profile", label: "Perfil", icon: "👤" },
  ]

  // --- LÓGICA DE SEGURIDAD AÑADIDA ---
  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (_event, session) => {
      if (!session) {
        router.push('/') // Si cierra sesión, lo mandamos al inicio
        return
      }

      // Re-verificamos la sesión para obtener los datos más frescos del usuario
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) {
        router.push('/')
      } else if (!user.email_confirmed_at) {
        setSessionStatus("unauthenticated")
      } else {
        setSessionStatus("authenticated")
      }
    })

    return () => {
      subscription?.unsubscribe()
    }
  }, [router])
  // --- FIN DE LA LÓGICA DE SEGURIDAD ---

  // --- RENDERIZADO CONDICIONAL ---
  if (sessionStatus === "loading") {
    return <div>Cargando...</div> // Muestra esto mientras se verifica la sesión
  }

  if (sessionStatus === "unauthenticated") {
    return <PleaseConfirmEmail /> // Muestra el mensaje de "confirma tu correo"
  }
  // --- FIN DEL RENDERIZADO CONDICIONAL ---


  // Si todo está bien (sesión autenticada), muestra tu layout original
  return (
    <div className="dashboard-layout">
      <aside className={`sidebar ${isSidebarOpen ? "open" : "closed"}`}>
        <div className="sidebar-header">
          <div className="logo">
            <span className="logo-icon">💪</span>
            {isSidebarOpen && <span className="logo-text">FitPro</span>}
          </div>
        </div>

        <nav className="sidebar-nav">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={`nav-item ${pathname === item.href ? "active" : ""}`}>
              <span className="nav-icon">{item.icon}</span>
              {isSidebarOpen && <span className="nav-label">{item.label}</span>}
            </Link>
          ))}
        </nav>

        <button className="sidebar-toggle" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          {isSidebarOpen ? "←" : "→"}
        </button>
      </aside>

      <main className={`dashboard-main ${isSidebarOpen ? "sidebar-open" : "sidebar-closed"}`}>
        <header className="dashboard-header">
          <h1 className="dashboard-title">Bienvenido a FitPro</h1>
          <div className="header-actions">
            <button onClick={() => supabase.auth.signOut()} className="btn-secondary">
              Salir
            </button>
          </div>
        </header>
        <div className="dashboard-content">{children}</div>
      </main>
    </div>
  )
}