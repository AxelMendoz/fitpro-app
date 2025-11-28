// src/lib/cqrs/CqrsHandlers.ts
import { UserDAO } from "../dao/UserDAO";

const dao = new UserDAO();

// --- LADO 1: QUERIES (Lectura) ---
// Objetivo: Ser rápido y devolver DTOs (Data Transfer Objects) simples para la vista.

export class GetUserProfileQuery {
  execute() {
    const data = dao.getUserData();
    // Transformamos los datos crudos en algo bonito para el usuario (DTO)
    return {
      displayName: data.name.toUpperCase(), // Lógica simple de presentación
      contact: data.email,
      status: `Nivel: ${data.level}`
    };
  }
}

// --- LADO 2: COMMANDS (Escritura) ---
// Objetivo: Validar reglas de negocio y asegurar la integridad de los datos.

export class UpdateUserNameCommand {
  constructor(private newName: string) {}

  execute() {
    // 1. Validación (Regla de Negocio)
    if (this.newName.length < 3) {
      throw new Error("❌ Error de Negocio: El nombre es muy corto.");
    }
    if (this.newName.includes("admin")) {
      throw new Error("❌ Seguridad: No puedes llamarte 'admin'.");
    }

    // 2. Ejecución (Usando el DAO)
    dao.updateUserField("name", this.newName);
    console.log("✅ Command: Nombre actualizado exitosamente.");
  }
}

export class UpdateUserEmailCommand {
  constructor(private newEmail: string) {}

  execute() {
    if (!this.newEmail.includes("@")) {
      throw new Error("❌ Error: Email inválido.");
    }
    dao.updateUserField("email", this.newEmail);
  }
}