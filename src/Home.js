import { useState } from "react";
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'Maryna', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'Kate', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Nikita', id: 3 }
  ])

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" />
      <BlogList blogs={blogs.filter((blog)=> blog.author==='Maryna')} title="Marina's blogs" />
    </div>
  );
}

export default Home;