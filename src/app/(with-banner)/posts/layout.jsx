import Counter from './Counter'

const PostLayout = ({ children }) => {
  return (
    <div>
      <small>Home &bull; Posts</small>
      <Counter />
      {children}
    </div>
  )
}

export default PostLayout
