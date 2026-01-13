import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/useAuth";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (role) => {
    login(role);
    navigate(role === "customer" ? "/customer" : "/repairshop");
  };

  return (
    <section class="hero">
      <div class="hero-body">
        <div class="card">
          <div class="card-content">
            <div class="content is-mobile">
              <div class="columns">
                <div class="column">
                  <button class="button" onClick={() => handleLogin("customer")}>
                    Login Customer
                  </button>
                </div>

                <div class="column">
                  <button class="button" onClick={() => handleLogin("repairshop")}>
                    Login Repair Shop
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
