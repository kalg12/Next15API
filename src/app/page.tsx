import { GetStaticProps } from "next";

/* Es importante declarar interfaces por seguridad en Typescript */
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

/* The `interface HomeProps` is defining the structure of the props that the `Home` component expects
to receive. In this case, it specifies that the `Home` component expects a prop named `users` which
should be an array of objects that adhere to the `User` interface. This helps ensure type safety and
provides clarity on the expected shape of the props that should be passed to the `Home` component. */
interface HomeProps {
  users: User[];
}

export const getStaticProps: GetStaticProps = async () => {
  const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
};

export default function Home({ users }: HomeProps) {
  return (
    <>
      <h1>Proyecto limpio</h1>
    </>
  );
}
