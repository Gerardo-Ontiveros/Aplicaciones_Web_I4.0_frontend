import { useState, type ChangeEvent, type FormEvent } from "react";
import { Input } from "../ui/Input";
import { RegisterUserService } from "../../services/RegisterUserService";

export const UserForm = () => {
  const [registerUser, setRegisterUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    rol: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setRegisterUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await RegisterUserService(registerUser);

      if (res.status === 200) {
        console.log("Usuario registrado exitosamente");
        console.log(JSON.stringify(registerUser));
        setRegisterUser({
          name: "",
          username: "",
          email: "",
          phone: "",
          password: "",
          rol: "",
        });
      }
    } catch (error) {
      console.error("Error al registrar el usuario:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 bg-white dark:bg-neutral-700 rounded shadow-md"
    >
      <h2 className="text-2xl font-bold mb-4">Registration</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <Input
          label="Nombre"
          name="name"
          value={registerUser.name}
          onChange={handleChange}
          required
          placeholder="Juan Perez"
        />
        <Input
          label="Usuario"
          name="username"
          value={registerUser.username}
          onChange={handleChange}
          required
          placeholder="usuario123"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <Input
          label="Email"
          name="email"
          value={registerUser.email}
          onChange={handleChange}
          required
          placeholder="email@email.com"
        />
        <Input
          label="Contraseña"
          type="password"
          name="password"
          value={registerUser.password}
          onChange={handleChange}
          required
          placeholder="********"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 items-center">
        <Input
          label="Teléfono"
          name="phone"
          value={registerUser.phone}
          onChange={handleChange}
          required
          type="tel"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          placeholder="123-456-7890"
        />
        {/*
        <div>
          <label className="text-neutral-800 dark:text-neutral-200 block text-sm font-bold mb-1">
            Rol:
          </label>
          <select
            name="rol"
            value={registerUser.rol}
            onChange={handleChange}
            className="rounded w-full h-10 border border-neutral-500  dark:bg-neutral-700 dark:border-cyan-500 focus:ring-blue-500 text-blue-400 dark:text-cyan-200 focus:border-blue-500 p-2 text-sm shadow"
          >
            <option value="">Seleccione un rol</option>
            <option value="admin">Administrador</option>
          </select>
        </div>
           */}
      </div>
      {isLoading ? (
        <button
          disabled
          className="text-center text-blue-500 dark:text-cyan-500"
        >
          Registrando usuario...
        </button>
      ) : (
        <button
          type="submit"
          className="bg-blue-500 dark:bg-cyan-500 text-white py-2 px-4 rounded hover:bg-blue-600 dark:hover:bg-cyan-600 transition-colors duration-300 w-full md:w-auto"
        >
          Registrar
        </button>
      )}
    </form>
  );
};
