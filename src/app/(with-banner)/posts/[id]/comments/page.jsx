import Image from "next/image"

const fetchComments = async id => {
  new Promise(resolve => setTimeout(resolve, 5000))

  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    next: {
      revalidate: 60
    }
  }).then(res => res.json())
}

const Comments = async ({ params }) => {
  const { id } = params
  const comments = await fetchComments(id)

  return (
    <ul>
      {comments.map(content => (
        <li key={content.id}>
          <Image
          width={50}
          height={50}
            alt={content.name}
            src={`https://api.dicebear.com/5.x/icons/svg?seed=${content.email}`}
            priority
            unoptimized
          />
          <h2>{content.name}</h2>
          <p>{content.body}</p>
        </li>
      ))}
    </ul>
  )
}

export default Comments
