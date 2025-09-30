export interface Exercise {
  id: number
  nombre: string
  descripcion: string
  categoria: string
  dificultad: string
  musculo_objetivo: string
  equipo: string
  imagen_url: string
}

export interface Routine {
  id: number
  nombre: string
  descripcion: string
  nivel: string
  duracion_estimada: number
  categoria: string
  imagen_url: string
  ejercicios: number[]
}

export const mockExercises: Exercise[] = [
  {
    id: 1,
    nombre: "Press de Banca",
    descripcion: "Ejercicio fundamental para desarrollar el pecho, hombros y tríceps",
    categoria: "Fuerza",
    dificultad: "Intermedio",
    musculo_objetivo: "Pecho",
    equipo: "Barra",
    imagen_url: "/bench-press.png",
  },
  {
    id: 2,
    nombre: "Sentadillas",
    descripcion: "Ejercicio compuesto para piernas y glúteos",
    categoria: "Fuerza",
    dificultad: "Intermedio",
    musculo_objetivo: "Piernas",
    equipo: "Barra",
    imagen_url: "/person-doing-squats.png",
  },
  {
    id: 3,
    nombre: "Peso Muerto",
    descripcion: "Ejercicio completo para espalda baja, glúteos y piernas",
    categoria: "Fuerza",
    dificultad: "Avanzado",
    musculo_objetivo: "Espalda",
    equipo: "Barra",
    imagen_url: "/deadlift.png",
  },
  {
    id: 4,
    nombre: "Dominadas",
    descripcion: "Ejercicio de peso corporal para espalda y bíceps",
    categoria: "Fuerza",
    dificultad: "Intermedio",
    musculo_objetivo: "Espalda",
    equipo: "Barra de dominadas",
    imagen_url: "/pull-ups.jpg",
  },
  {
    id: 5,
    nombre: "Flexiones",
    descripcion: "Ejercicio clásico de peso corporal para pecho y tríceps",
    categoria: "Fuerza",
    dificultad: "Principiante",
    musculo_objetivo: "Pecho",
    equipo: "Ninguno",
    imagen_url: "/push-ups.jpg",
  },
  {
    id: 6,
    nombre: "Plancha",
    descripcion: "Ejercicio isométrico para fortalecer el core",
    categoria: "Core",
    dificultad: "Principiante",
    musculo_objetivo: "Abdomen",
    equipo: "Ninguno",
    imagen_url: "/wooden-plank.png",
  },
  {
    id: 7,
    nombre: "Burpees",
    descripcion: "Ejercicio de cuerpo completo para cardio y fuerza",
    categoria: "Cardio",
    dificultad: "Intermedio",
    musculo_objetivo: "Cuerpo completo",
    equipo: "Ninguno",
    imagen_url: "/burpees.jpg",
  },
  {
    id: 8,
    nombre: "Curl de Bíceps",
    descripcion: "Ejercicio de aislamiento para bíceps",
    categoria: "Fuerza",
    dificultad: "Principiante",
    musculo_objetivo: "Bíceps",
    equipo: "Mancuernas",
    imagen_url: "/bicep-curls.jpg",
  },
]

export const mockRoutines: Routine[] = [
  {
    id: 1,
    nombre: "Rutina de Pecho y Tríceps",
    descripcion: "Entrenamiento intensivo para desarrollar pecho y tríceps",
    nivel: "Intermedio",
    duracion_estimada: 45,
    categoria: "Fuerza",
    imagen_url: "/chest-workout.png",
    ejercicios: [1, 5],
  },
  {
    id: 2,
    nombre: "Día de Piernas",
    descripcion: "Rutina completa para piernas y glúteos",
    nivel: "Intermedio",
    duracion_estimada: 60,
    categoria: "Fuerza",
    imagen_url: "/leg-workout.png",
    ejercicios: [2, 3],
  },
  {
    id: 3,
    nombre: "Espalda y Bíceps",
    descripcion: "Entrenamiento para desarrollar espalda y bíceps",
    nivel: "Intermedio",
    duracion_estimada: 50,
    categoria: "Fuerza",
    imagen_url: "/back-workout.png",
    ejercicios: [3, 4, 8],
  },
  {
    id: 4,
    nombre: "Cardio HIIT",
    descripcion: "Entrenamiento de alta intensidad para quemar grasa",
    nivel: "Avanzado",
    duracion_estimada: 30,
    categoria: "Cardio",
    imagen_url: "/hiit-workout.png",
    ejercicios: [7],
  },
  {
    id: 5,
    nombre: "Core y Abdomen",
    descripcion: "Rutina enfocada en fortalecer el core",
    nivel: "Principiante",
    duracion_estimada: 20,
    categoria: "Core",
    imagen_url: "/core-workout.png",
    ejercicios: [6],
  },
  {
    id: 6,
    nombre: "Full Body",
    descripcion: "Entrenamiento de cuerpo completo para principiantes",
    nivel: "Principiante",
    duracion_estimada: 40,
    categoria: "Fuerza",
    imagen_url: "/full-body-workout.png",
    ejercicios: [2, 5, 6, 8],
  },
]
