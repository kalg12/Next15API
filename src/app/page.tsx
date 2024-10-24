export default async function Page() {
  const data = await fetch("https://api.vercel.app/blog");
  const posts = await data.json();

  //Declaramos una interfaz de los resultados que trae nuesta api
  interface Post {
    id: string;
    title: string;
  }

  return (
    <div>
      {posts.map((post: Post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
}
