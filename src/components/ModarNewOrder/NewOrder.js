import { useState } from "react";

const ModalNewOrder = ({
  showModal,
  closeModal = () => {},
  saveChanges = () => {},
}) => {
  const [service, setService] = useState({
    name: "",
    description: "",
    laborEstimated: "",
    laborReal: "",
    components: "",
  });
  const role = localStorage.getItem("role");

  const handleChange = (field, value) => {
    setService({ ...service, [field]: value });
  };

  const newOrder = () => {
    const orders = JSON.parse(localStorage.getItem("orders")) || [];

    const orderID = crypto.randomUUID();

    const newOrder = {
      id: orderID,
      status: "CREATED",
      services: [
        {
          id: crypto.randomUUID(),
          orderID,
          role: role,
          name: service.name,
          description: service.description,
          laborEstimated: Number(service.laborEstimated),
          laborReal: Number(service.laborReal),
          components: service.components.split(",").map((c) => c.trim()),
        },
      ],
      createdAt: new Date().toISOString(),
    };

    localStorage.setItem("orders", JSON.stringify([...orders, newOrder]));

    closeModal();
  };

  return (
    <div class={`modal ${showModal ? "is-active" : ""}`}>
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Modal title</p>
          <button
            class="delete"
            aria-label="close"
            onClick={() => {
              setService({
                name: "",
                description: "",
                laborEstimated: "",
                laborReal: "",
                components: "",
              });
              closeModal();
            }}
          ></button>
        </header>
        <section class="modal-card-body">
          <div>
            <div class="columns is-multiline">
              <div class="column is-half">
                <input
                  class="input"
                  type="text"
                  placeholder="Nombre del servicio"
                  onChange={(e) => handleChange("name", e.target.value)}
                />
              </div>
              <div class="column is-half">
                <input
                  class="input"
                  type="text"
                  placeholder="Descripción"
                  onChange={(e) => handleChange("description", e.target.value)}
                />
              </div>
              <div class="column is-half">
                <input
                  class="input"
                  type="text"
                  placeholder="Mano de obra estimada"
                  onChange={(e) =>
                    handleChange("laborEstimated", e.target.value)
                  }
                />
              </div>
              <div class="column is-half">
                <input
                  class="input"
                  type="text"
                  placeholder="Mano de obra real"
                  onChange={(e) => handleChange("laborReal", e.target.value)}
                />
              </div>
              <div class="column is-half">
                <input
                  class="input"
                  type="text"
                  placeholder="Componentes (separados por coma)"
                  onChange={(e) => handleChange("components", e.target.value)}
                />
              </div>
            </div>
          </div>
        </section>
        <footer class="modal-card-foot">
          <div class="buttons">
            <button class="button is-success" onClick={newOrder}>
              Save changes
            </button>
            <button
              class="button"
              onClick={() => {
                setService({
                  name: "",
                  description: "",
                  laborEstimated: "",
                  laborReal: "",
                  components: "",
                });
                closeModal();
              }}
            >
              Cancel
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ModalNewOrder;
