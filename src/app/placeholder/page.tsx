import React from "react";

async function Placeholder() {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await data.json();

  //Declaramos interfaz de usuarios
  interface User {
    id: number;
    name: string;
    username: string;
  }

  return (
    <>
      <div>
        {users.map((usuarios: User) => (
          <div key={usuarios.id} className="mt-8">
            <h1 className="bg-yellow-300">{usuarios.name}</h1>
            <p>{usuarios.username}</p>
          </div>
        ))}
      </div>
      <div>
        <h4>TAREA</h4>
        <p>
          Darle una UI correcta a los usuarios e implemtar las demás propiedades
          del objeto (ej. email, address, phone, website, etc)
        </p>
      </div>
    </>
  );
}

export default Placeholder;
