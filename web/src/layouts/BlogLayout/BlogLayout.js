import { Link, routes } from '@redwoodjs/router'

const BlogLayout = ({ children }) => {
  return (
    <>
      <header>
        <nav>
          <Link to={routes.home()}>Home</Link>
          <Link to={routes.about()}>About</Link>
          <Link to={routes.login()}>Login</Link>


        </nav>
        <main>{children}</main>
      </header>
    </>
  )
}

export default BlogLayout
