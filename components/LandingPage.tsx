"use client"

import type React from "react"
import "./LandingPage.css"

// Importar íconos de react-icons
import { FaDumbbell, FaBullseye, FaChartLine, FaUsers, FaAppleAlt, FaBed, FaTint, FaFire, FaShieldAlt, FaAward, FaLightbulb } from "react-icons/fa"

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
              <FaDumbbell size={32} color="rgb(var(--accent))" />

              <span className="logo-text">FitPro</span>
            </div>
            <div className="nav-links">
              <a href="#features">Características</a>
              <a href="#pricing">Tips</a>
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
              <div className="feature-icon">
                <FaBullseye size={32} color="#ff4d4d" />
              </div>
              <h3>Entrenamientos Personalizados</h3>
              <p>Planes adaptados a tu nivel, objetivos y disponibilidad de tiempo.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <FaChartLine size={32} color="#4caf50" />
              </div>
              <h3>Seguimiento de Progreso</h3>
              <p>Visualiza tu evolución con métricas detalladas y gráficos intuitivos.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <FaUsers size={32} color="#2196f3" />
              </div>
              <h3>Creador de rutinas</h3>
              <p>Diseña y organiza tus propios entrenamientos paso a paso de manera sencilla.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="tips" id="pricing">
        <div className="container">
          <div className="tips-header">
            <h2 className="tips-title text-balance">Tips para maximizar tus resultados</h2>
            <p className="tips-subtitle text-pretty">
              Consejos probados por expertos para acelerar tu transformación física
            </p>
          </div>
          <div className="tips-list">
            <div className="tip-item">
              <div className="tip-icon-wrapper">
                <FaFire size={40} />
              </div>
              <div className="tip-content">
                <h3>Consistencia sobre intensidad</h3>
                <p>
                  Es mejor entrenar 30 minutos diarios que 3 horas una vez por semana. La constancia es la clave del
                  progreso sostenible.
                </p>
              </div>
            </div>
            <div className="tip-item">
              <div className="tip-icon-wrapper">
                <FaTint size={40} />
              </div>
              <div className="tip-content">
                <h3>Hidratación adecuada</h3>
                <p>
                  Bebe al menos 2-3 litros de agua al día. Una buena hidratación mejora tu rendimiento y acelera la
                  recuperación muscular.
                </p>
              </div>
            </div>
            <div className="tip-item">
              <div className="tip-icon-wrapper">
                <FaBed size={40} />
              </div>
              <div className="tip-content">
                <h3>Descanso y recuperación</h3>
                <p>
                  Duerme 7-8 horas diarias. El músculo crece durante el descanso, no durante el entrenamiento. Prioriza
                  tu sueño.
                </p>
              </div>
            </div>
            <div className="tip-item">
              <div className="tip-icon-wrapper">
                <FaAppleAlt size={40} />
              </div>
              <div className="tip-content">
                <h3>Nutrición balanceada</h3>
                <p>
                  Come proteína en cada comida y no elimines carbohidratos. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="nosotros" id="about">
        <div className="container">
          <div className="nosotros-header">
            <h2 className="nosotros-title text-balance">Quiénes somos?</h2>
            <p className="nosotros-subtitle text-pretty">
              Un equipo comprometido con tu transformación física y bienestar integral
            </p>
          </div>
          <div className="nosotros-grid">
            <div className="nosotros-card">
              <div className="nosotros-icon">
                <FaLightbulb size={36} />
              </div>
              <h3>Nuestra Misión</h3>
              <p>
                Hacer el fitness accesible para todos, proporcionando herramientas personalizadas que se adaptan a tu
                estilo de vida y objetivos únicos.
              </p>
            </div>
            <div className="nosotros-card">
              <div className="nosotros-icon">
                <FaAward size={36} />
              </div>
              <h3>Experiencia Comprobada</h3>
              <p>
                Más de 10 años ayudando a miles de personas a alcanzar sus metas fitness con metodologías respaldadas
                por la ciencia del deporte.
              </p>
            </div>
            <div className="nosotros-card">
              <div className="nosotros-icon">
                <FaShieldAlt size={36} />
              </div>
              <h3>Compromiso Contigo</h3>
              <p>
                Tu éxito es nuestro éxito. Ofrecemos soporte continuo, actualizaciones constantes y una comunidad que te
                motiva cada día.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LandingPage
