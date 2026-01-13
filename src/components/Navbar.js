import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/useAuth";
import "./style.css";

const Navbar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false)

  return (
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="#">
          DaCodes
        </a>

        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          onClick={() => setIsActive(!isActive)}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      {isActive && <div className={`navbar-menu ${isActive ? "is-active" : ""}`}>
        <div className="navbar-start"></div>

        <div className="navbar-end">
          <Link class="navbar-item" to="#">
            Ordenes
          </Link>
          <a class="navbar-item" onClick={() => {
            logout()
            setIsActive(false)
            navigate("/")
          }}>
            Cerrar Sesión
          </a>
        </div>
      </div>}

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start"></div>
        <div class="navbar-end">
          <Link class="navbar-item" to="#">
            Ordenes
          </Link>
          <a class="navbar-item" onClick={() => {
            logout()
            setIsActive(false)
            navigate("/")
          }}>
            Cerrar Sesión
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
