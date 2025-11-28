// src/app/dashboard/architecture/page.tsx
"use client"
import { useState, useEffect } from "react";
// Asegúrate de que la ruta sea correcta (Handlers o Handler según tu archivo)
import { GetUserProfileQuery, UpdateUserNameCommand } from "../../../lib/cqrs/CqrsHandler";

// Importamos el CSS
import "./architecture.css"; 

export default function ArchitecturePage() {
  const [userProfile, setUserProfile] = useState<any>(null);
  const [newName, setNewName] = useState("");
  const [log, setLog] = useState<string[]>([]);

  const loadData = () => {
    const query = new GetUserProfileQuery();
    const data = query.execute();
    setUserProfile(data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleUpdateName = () => {
    try {
      const command = new UpdateUserNameCommand(newName);
      command.execute();
      setLog(prev => [`✅ Comando exitoso: Nombre cambiado a "${newName}"`, ...prev]);
      loadData();
      setNewName("");
    } catch (error: any) {
      setLog(prev => [`⛔ ${error.message}`, ...prev]);
    }
  };

  return (
    <div className="arch-page">
      <h1 className="text-3xl font-bold mb-4">Arquitectura Escalable (CQRS + DAO)</h1>
      <p className="text-gray-500 mb-8">
        Separación estricta entre Lectura (Query) y Escritura (Command), usando un DAO para proteger la base de datos.
      </p>

      <div className="cqrs-grid">
        
        {/* LADO DE LECTURA */}
        <div className="query-side">
          <h2 className="text-xl font-bold text-blue-800 mb-4">👓 Lado de Consulta (Read Model)</h2>
          
          <div className="data-card">
            {userProfile ? (
              <div className="space-y-2">
                <p><span className="font-bold">Usuario:</span> {userProfile.displayName}</p>
                <p><span className="font-bold">Contacto:</span> {userProfile.contact}</p>
                <p><span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">{userProfile.status}</span></p>
              </div>
            ) : "Cargando..."}
          </div>
          <p className="text-xs text-blue-600 mt-2">
            * Los datos vienen optimizados (DTO) desde `GetUserProfileQuery`.
          </p>
        </div>

        {/* LADO DE ESCRITURA */}
        <div className="command-side">
          <h2 className="text-xl font-bold text-orange-800 mb-4">✍️ Lado de Comando (Write Model)</h2>
          
          <div className="command-input-group">
            <input 
              type="text" 
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              placeholder="Nuevo nombre..."
              className="command-input"
            />
            {/* CORRECCIÓN AQUÍ: El botón no debe cerrarse con /> si tiene texto dentro */}
            <button 
              onClick={handleUpdateName}
              className="command-btn"
            >
              Actualizar
            </button>
          </div>
          <p className="text-xs text-orange-800">
            * Prueba fallida: Intenta poner un nombre de 2 letras o "admin".
          </p>
        </div>
      </div>

      {/* Log de Auditoría */}
      <div className="console-log">
        <div className="text-gray-500 border-b border-gray-700 mb-2 pb-1">Console Log (CQRS Flow)</div>
        {log.map((l, i) => <div key={i}>{">"} {l}</div>)}
      </div>
    </div>
  );
}