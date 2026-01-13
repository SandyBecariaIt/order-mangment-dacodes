import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/useAuth";
import "./style.css";

const Navbar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

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
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start"></div>
        <div class="navbar-end">
          <Link class="navbar-item" to="#">
            Ordenes
          </Link>
          <Link class="navbar-item" to="#">
            Nuevas ordenes
          </Link>
          <a class="navbar-item" onClick={() => {
            logout()
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
