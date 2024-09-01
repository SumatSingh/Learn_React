import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logoImg from "../assets/mern2.jpg";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Replace with actual auth logic

  const navigate = useNavigate();

  const handleLogin = () => {
    // Add your login logic here
    setIsLoggedIn(true);
    navigate('/');
  };

  const handleLogout = () => {
    // Add your logout logic here
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <header className="bg-black p-3 shadow-sm">
      <div className="container d-flex justify-content-between align-items-center">
        {/* Logo Section */}
        <div className="logo border border-1 p-1 rounded">
          <Link to="/">
            <img
              src={logoImg}
              alt="Logo"
              className="img-fluid"
              style={{ maxWidth: "50px" }}
            />
          </Link>
        </div>


        {/* Call to Action Button */}
        <div>
          {isLoggedIn ? (
            <>
            {/* Navigation Section */}
              <nav>
                <ul className="nav d-flex align-items-center gap-4 m-0">
                  <li className="nav-item">
                    <Link to="/" className="nav-link text-white fs-5">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/movies" className="nav-link text-white fs-5">
                      Movies
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/foodies" className="nav-link text-white fs-5">
                      Foods
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/fashion" className="nav-link text-white fs-5">
                      Fashion
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/tech" className="nav-link text-white fs-5">
                      Tech
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/wallpaper" className="nav-link text-white fs-5">
                      WallPaper
                    </Link>
                  </li>
                  <button onClick={handleLogout} className="btn btn-primary px-4 py-2">Logout
                  {/* <Link to='login' className="text-light text-decoration-none">Logout</Link> */}
                </button>
                </ul>
              </nav>
            </>
          ) : (
            <button onClick={handleLogin} className="btn btn-primary px-4 py-2">
              Explore Now
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
