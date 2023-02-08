import Link from "next/link"

const fetchComments = async (id) => {
    new Promise(resolve => setTimeout(resolve, 5000))

  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    next: {
      revalidate: 60
    }
  }).then(res => res.json())
}


const Comments = async ({params}) => {
  const { id } = params
  const comments = await fetchComments(id)

  return (
    <ul>
        {comments.map(content => (
            <li key={content.id}>
                <h2>{content.name}</h2>
                <p>{content.body}</p>
            </li>
        ))}
    </ul>
  )
}
 
export default Comments
