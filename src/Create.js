import { useState } from "react";
import {useHistory } from 'react-router-dom';

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('Maryna');
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    
    setIsPending(true);

    fetch('https://nice-hill-08b684b03.2.azurestaticapps.net/blogs/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      console.log('new blog added');
      setIsPending(false);
      //history.go(-1);
      history.push('/')
    })

    
  }

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="Maryna">Maryna</option>
          <option value="Nikita">Nikita</option>
          <option value="Guest">Guest</option>
          <option value="Alien">Alien</option>
        </select>
        {!isPending && <button>Add Blog</button>}
        {isPending && <button disabled>Adding blog...</button>}

      </form>
    </div>
  );
}

export default Create;