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

// --- PEGAR ESTO AL FINAL DE TU ARCHIVO mock-data.ts ---

export const MOCK_WEEKLY_DATA = [
  { day: "Lun", workouts: 2, duration: 90 },
  { day: "Mar", workouts: 1, duration: 45 },
  { day: "Mié", workouts: 0, duration: 0 },
  { day: "Jue", workouts: 2, duration: 80 },
  { day: "Vie", workouts: 1, duration: 60 },
  { day: "Sáb", workouts: 1, duration: 50 },
  { day: "Dom", workouts: 0, duration: 0 },
];

export const MOCK_MONTHLY_STATS = [
  { label: "Entrenamientos Completados", value: 24, change: "+12%", icon: "✅" },
  { label: "Tiempo Total", value: "18.5h", change: "+8%", icon: "⏱️" },
  { label: "Calorías Quemadas", value: "3,240", change: "+15%", icon: "🔥" },
  { label: "Racha Actual", value: "5 días", change: "+2", icon: "⚡" },
];

export const MOCK_RECENT_WORKOUTS = [
  {
    date: "2024-01-15",
    routine: "Pecho y Tríceps",
    duration: 45,
    exercises: 6,
    calories: 320,
  },
  {
    date: "2024-01-14",
    routine: "Piernas",
    duration: 60,
    exercises: 8,
    calories: 450,
  },
  {
    date: "2024-01-13",
    routine: "Espalda y Bíceps",
    duration: 50,
    exercises: 7,
    calories: 380,
  },
  {
    date: "2024-01-12",
    routine: "Cardio HIIT",
    duration: 30,
    exercises: 5,
    calories: 280,
  },
];

export const MOCK_BODY_METRICS = [
  { label: "Peso", current: "75 kg", previous: "77 kg", change: "-2 kg" },
  { label: "IMC", current: "23.5", previous: "24.1", change: "-0.6" },
  { label: "Grasa Corporal", current: "18%", previous: "20%", change: "-2%" },
  { label: "Masa Muscular", current: "62 kg", previous: "60 kg", change: "+2 kg" },
];