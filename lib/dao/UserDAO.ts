// src/lib/dao/UserDAO.ts

// 1. Simulamos una Base de Datos (en memoria)
let MOCK_DB = {
  id: "user_123",
  name: "Juan Pérez",
  email: "juan@fitlife.com",
  level: "Intermedio",
  lastLogin: "2024-03-20"
};

// 2. La Interfaz del DAO (El contrato)
export interface IUserDAO {
  getUserData(): any;
  updateUserField(field: string, value: any): void;
}

// 3. Implementación del DAO
// ESTE es el único lugar de toda la app que sabe cómo "tocar" la base de datos.
export class UserDAO implements IUserDAO {
  
  // Método optimizado para lectura (simulado)
  getUserData() {
    console.log("🗄️ DAO: Leyendo datos crudos de la DB...");
    // Aquí harías: return db.select('*').from('users')...
    return { ...MOCK_DB }; // Retornamos una copia
  }

  // Método para escritura
  updateUserField(field: string, value: any): void {
    console.log(`💾 DAO: Escribiendo en DB [${field} = ${value}]...`);
    // Aquí harías: db.update('users').set(field, value)...
    MOCK_DB = { ...MOCK_DB, [field]: value };
  }
}