export default async function Page() {
  const data = await fetch("https://api.vercel.app/blog");
  const posts = await data.json();
  console.log(posts);

  //Declaramos una interfaz de los resultados que trae nuesta api
  interface Post {
    id: string;
    title: string;
    content: string;
  }

  return (
    <div>
      {posts.map((post: Post) => (
        <div key={post.id} className="mt-8">
          <h1 className="bg-yellow-300">{post.title}</h1>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}
