import { Link, routes } from '@redwoodjs/router'
import BlogLayout from 'src/layouts/BlogLayout/'
import BlogPostCell from 'src/components/BlogPostsCell'
import Nav from 'src/components/Nav'


const HomePage = () => {
  return (
    <div>
    <Nav/>


      {/* <p>
        Find me in <code>./web/src/pages/HomePage/HomePage.js</code>
      </p> */}

      <BlogPostCell />
    </div>
  )
}

export default HomePage
