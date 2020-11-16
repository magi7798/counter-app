import './header.css';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <span className="material-icons">menu</span>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          COUNTERAPP
        </li>
        </ul>     
      </div> 
    </nav>
  )
};

export default Header;