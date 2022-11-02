const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>The Travel Blog</h1>
      <div className="links">
        <a href="/">Main Page</a>
        <a href="/create" style={{ 
          color: 'white', 
          backgroundColor: '#35f1e8',
          borderRadius: '8px' 
        }}>New Blog</a>
      </div>
    </nav>
  );
}

export default Navbar;