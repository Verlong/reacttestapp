import { useState, useEffect } from "react";
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'Maryna', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'Kate', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Nikita', id: 3 }
  ]);
  const [name, setName]= useState('Maryna');
  const handleDelete = (id) =>{
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  }

  useEffect(()=>{
    console.log('use effect ran');
    console.log(name);
  }, [name]);

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>
      <BlogList blogs={blogs.filter((blog)=> blog.author==='Maryna')} title="Marina's blogs" />
    <button onClick={()=>setName('Maryna Bonko')}>Change name</button>
    <p>{name}</p>
    </div>
  );
}

export default Home;