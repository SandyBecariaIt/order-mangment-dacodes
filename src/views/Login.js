import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/useAuth";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const hdlLogin = (role) => {
    login(role);
    navigate(role === "customer" ? "/customer" : "/repairshop");
  };

  return (
    <section class="hero">
      <div class="hero-body">
        <div class="columns is-centered">
          <div className="column is-4-desktop is-10-mobile">
            <div class="card">
              <header class="card-header">
                <p class="card-header-title">🔐 Inicio de Sesión</p>
              </header>
              <div class="card-content">
                <div class="content has-text-centered">
                  <p>Selecciona tu tipo de usuario</p>

                  <div className="buttons is-centered mt-4">
                    <button
                      class="button is-primary is-fullwidth mb-3"
                      onClick={() => hdlLogin("customer")}
                    >
                      👤 Cliente
                    </button>

                    <button
                      class="button is-link is-fullwidth"
                      onClick={() => hdlLogin("repairshop")}
                    >
                      🛠️ Mecánico
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
