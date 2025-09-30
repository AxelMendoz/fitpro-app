"use client"

import { useState } from "react"
import LandingPage from "@/components/LandingPage"
import AuthContainer from "@/components/AuthContainer"

export default function Home() {
  const [showAuth, setShowAuth] = useState(false)

  if (showAuth) {
    return (
      <div className="auth-container">
        <button className="back-to-landing" onClick={() => setShowAuth(false)}>
          ← Volver al inicio
        </button>
        <AuthContainer />
      </div>
    )
  }

  return <LandingPage onGetStarted={() => setShowAuth(true)} />
}
