"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import Login from "./Login"
import Register from "./Register"
import "./Login.css"
import "./Register.css"

export default function AuthContainer() {
  const [isLogin, setIsLogin] = useState(true)
  const router = useRouter()

  const handleLogin = (email: string, password: string) => {
    console.log("Login:", { email, password })
    router.push("/dashboard")
  }

  const handleRegister = (data: any) => {
    console.log("Register:", data)
    router.push("/dashboard")
  }

  return (
    <>
      {isLogin ? (
        <Login onLogin={handleLogin} onSwitchToRegister={() => setIsLogin(false)} />
      ) : (
        <Register onRegister={handleRegister} onSwitchToLogin={() => setIsLogin(true)} />
      )}
    </>
  )
}
