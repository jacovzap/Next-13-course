import Link from "next/link"
const fetchSinglePost = async (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      revalidate: 60
    }
  }).then(res => res.json())
}


const Post = async ({children, params}) => {
  const { id } = params
  const post = await fetchSinglePost(id)
  return <article>
    <h1>{post.title}</h1>
    <p>{post.body}</p>
    <Link href={`/posts/${id}/comments`}>Ver comentarios</Link>
    {children}
  </article>
}
 
export default Post
