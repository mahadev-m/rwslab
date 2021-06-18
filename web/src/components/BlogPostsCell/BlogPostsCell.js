export const QUERY = gql`
  query BlogPostsQuery {
    posts {
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

// export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ posts }) => {
  return (
    <div className="text-center mx-auto">
      <ul className="w-2/3 mx-auto pt-20">
        {posts.map((item) => {
          return (
            <li key={item.id} className="bg-gray-500 border-black border-2 ">
              <h1>My Blog</h1>
              <h2>{item.title}</h2>
              <p>{item.body}</p>
              <p>Created at {item.createdAt}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
