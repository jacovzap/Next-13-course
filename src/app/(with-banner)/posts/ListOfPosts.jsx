import LikeButton from './LikeButton'
import Link from 'next/link'

const fetchPosts = async () => {
  return fetch('https://jsonplaceholder.typicode.com/posts', {
    next: {
      revalidate: 60
    }
  }).then(res => res.json())
}

const ListOfPosts = async () => {
  const posts = await fetchPosts()

  return (
    <>
      {posts.slice(0, 5).map(post => (
        <article key={post.id}>
          <Link href={`/posts/${post.id}`}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <LikeButton id={post.id} />
          </Link>
        </article>
      ))}
    </>
  )
}

export default ListOfPosts
