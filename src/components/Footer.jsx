import { Link } from 'react-router-dom';
import logoImg from '../assets/mern2.jpg'

const Footer = () => {
  return (
    <footer className=" absolute bg-black text-white">
      <div className="container p-4 d-flex justify-content-between align-items-center">
         {/* Logo Section */}
         <div className="logo">
         <Link to='/'>
          <img
            src={logoImg} 
            alt="Logo"
            className="img-fluid"
            style={{ maxWidth: "50px" }}
          />
          </Link>
        </div>
        <div className="content">
          <ul className="list-unstyled d-flex">
            <li className="nav-item mx-3">
              <Link to="/" className="nav-link text-white fs-5">
                Home
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link to="/movies" className="nav-link text-white fs-5">
                Movies
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link to="/foodbar" className="nav-link text-white fs-5">
                Foods
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link to="/fashion" className="nav-link text-white fs-5">
                Fashion
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link to="/tech" className="nav-link text-white fs-5">
                Tech
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link to="/wallpaper" className="nav-link text-white fs-5">
                WallPaper
              </Link>
            </li>
          </ul>
        </div>
        <div className="text-light">
          <p>&copy; 2024 Your Company. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
