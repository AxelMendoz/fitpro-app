"use client"

import type React from "react"
import "./LandingPage.css"

interface LandingPageProps {
  onGetStarted: () => void
}

const LandingPage: React.FC<LandingPageProps> = ({ onGetStarted }) => {
  return (
    <div className="landing-page">
      <header className="landing-header">
        <div className="container">
          <nav className="nav">
            <div className="logo">
              <span className="logo-icon">💪</span>
              <span className="logo-text">FitPro</span>
            </div>
            <div className="nav-links">
              <a href="#features">Características</a>
              <a href="#pricing">Precios</a>
              <a href="#about">Nosotros</a>
              <button className="nav-cta" onClick={onGetStarted}>
                Comenzar
              </button>
            </div>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title text-balance">
                Transforma tu cuerpo
                <span className="hero-highlight"> con entrenamientos</span>
                <br />
                personalizados
              </h1>
              <p className="hero-description text-pretty">
                Alcanza tus objetivos fitness con planes de entrenamiento diseñados específicamente para ti. Únete a
                miles de personas que ya han transformado su vida.
              </p>
              <div className="hero-actions">
                <button className="cta-primary" onClick={onGetStarted}>
                  Comenzar gratis
                </button>
                <button className="cta-secondary">Ver demo</button>
              </div>
            </div>

            <div className="hero-visual">
              <div className="stats-card">
                <div className="stats-header">
                  <h3>Progreso promedio</h3>
                  <span className="stats-badge">+85%</span>
                </div>
                <div className="stats-chart">
                  <div className="chart-bar" style={{ height: "20%" }}></div>
                  <div className="chart-bar" style={{ height: "45%" }}></div>
                  <div className="chart-bar" style={{ height: "70%" }}></div>
                  <div className="chart-bar" style={{ height: "85%" }}></div>
                  <div className="chart-bar" style={{ height: "100%" }}></div>
                </div>
                <div className="stats-labels">
                  <span>Sem 1</span>
                  <span>Sem 2</span>
                  <span>Sem 3</span>
                  <span>Sem 4</span>
                  <span>Sem 5</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features" id="features">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Entrenamientos Personalizados</h3>
              <p>Planes adaptados a tu nivel, objetivos y disponibilidad de tiempo.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Seguimiento de Progreso</h3>
              <p>Visualiza tu evolución con métricas detalladas y gráficos intuitivos.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">👥</div>
              <h3>Comunidad Activa</h3>
              <p>Conecta con otros usuarios, comparte logros y mantente motivado.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LandingPage
