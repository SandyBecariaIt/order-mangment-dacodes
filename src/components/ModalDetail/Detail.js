import { autorizedOrderWhitServices } from "../../lib/sutorizedOrdes";
import { canEditOrder, editOrderDetail, updateOrderStatus } from "../../lib/updateOrderStatus";
import { STATUS_FLOW } from "../../Mocks/OrderStatus";

const ModalDetail = ({
  details,
  created,
  showModal,
  closeModal = () => {},
  saveChanges = () => {},
}) => {
  const role = localStorage.getItem("role");

  const authorizedOrder = () => {
    try {
      autorizedOrderWhitServices(details.orderId)
    } catch (error) {
      if (error.message === "NO_SERVICES")
        alert("No se puede authorizar la orden sin servicios")
    }
    closeModal();
  }
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
              closeModal();
            }}
          ></button>
        </header>
        <section class="modal-card-body">
          <div class="columns is-multiline">
            <div class="column is-half">
              Creado por: {details.role === "customer" ? "Cliente" : "Mecánico"}
            </div>
            <div class="column is-half">Creado: {details.createdAt}</div>
            <div class="column is-half">
              No. Orden: {details.orderId.slice(0, 4)}
            </div>
            <div class="column is-half">
              {canEditOrder(details.status) ? (
                <input
                  class="input"
                  type="text"
                  defaultValue={details.description}
                  onChange={(e) => editOrderDetail(details.orderId, details.id, e.target.value)}
                />
              ) : (
                <span>Descripción: {details.description}</span>
              )}
            </div>
            <div class="column is-half">
              Labor Estimado: {details.laborEstimated}
            </div>
            <div class="column is-half">Labor Real: {details.laborReal}</div>
            <div class="column is-half">Nombre: {details.name}</div>
            <div class="column is-half">Estatus: {details.status}</div>
            <div class="column is-half">Refacciones: {details.components.join(", ") || "N/A"}</div>
          </div>
        </section>
        <footer class="modal-card-foot">
          <div class="buttons">
            {/* CUSTOMER */}
            {role === "customer" && details.status === "DIAGNOSED" && (
              <button
                class="button is-success"
                onClick={() => {
                  authorizedOrder()
                }}
              >
                Autorizar
              </button>
            )}

            {/* REPAIR SHOP */}
            {role === "repairshop" &&
              STATUS_FLOW[details.status]?.map((status) => (
                <button
                  key={status}
                  className={`button ${
                    status === "CANCELLED" ? "is-danger" : "is-primary"
                  }`}
                  onClick={() => {
                    updateOrderStatus(details.orderId, details.id, status);
                    closeModal();
                  }}
                >
                  {status}
                </button>
              ))}
            <button
              class="button"
              onClick={() => {
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

export default ModalDetail;
