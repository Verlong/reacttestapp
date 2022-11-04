import {Link} from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>The Travel Blog</h1>
      <div className="links">
        <Link to="/">Main Page</Link>
        <Link to="/create" style={{ 
          color: 'white', 
          backgroundColor: '#00c9bf',
          borderRadius: '8px' 
        }}>New Blog</Link>
      </div>
    </nav>
  );
}

export default Navbar;