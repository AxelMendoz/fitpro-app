"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import "./dashboard.css"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const pathname = usePathname()

  const navItems = [
    { href: "/dashboard", label: "Dashboard", icon: "📊" },
    { href: "/dashboard/routines", label: "Rutinas", icon: "🏋️" },
    { href: "/dashboard/exercises", label: "Ejercicios", icon: "💪" },
    { href: "/dashboard/progress", label: "Progreso", icon: "📈" },
    { href: "/dashboard/profile", label: "Perfil", icon: "👤" },
  ]

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
            <Link href="/" className="btn-secondary">
              Salir
            </Link>
          </div>
        </header>
        <div className="dashboard-content">{children}</div>
      </main>
    </div>
  )
}
