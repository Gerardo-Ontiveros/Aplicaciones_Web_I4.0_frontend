import { Client } from "../config/axios";
import type { User } from "../types/UserTypes";

export const RegisterUserService = async (dataUser: User) => {
  try {
    const response = await Client.post<User>("users/add", dataUser, {
      timeout: 5000,
    });

    return response;
  } catch (error) {
    console.error("Error al registrar al usuario:", error);
  }
};
