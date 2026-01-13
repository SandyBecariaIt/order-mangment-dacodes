import { useState } from "react";
import Title from "../../components/Title/Title";
import "./style.css";
import ModalNewOrder from "../../components/ModarNewOrder/NewOrder";
import ModalDetail from "../../components/ModalDetail/Detail";

export default function Customer() {
  const [showModal, setShowModal] = useState(false);
  const [showDetail, setShowDetail] = useState(false)
  const [detail, setDetail] = useState({})
  const orders = JSON.parse(localStorage.getItem("orders")) || [];

  const services = orders.flatMap((order) =>
    order.services.map((service) => ({
      ...service,
      date: order.createdAt,
      orderId: order.id,
      status: order.status,
    }))
  );

  return (
    <div>
      {showModal && (
        <ModalNewOrder
          showModal={showModal}
          closeModal={() => setShowModal(false)}
          saveChanges={() => setShowModal(false)}
        />
      )}
      {detail && showDetail && (
        <ModalDetail
          showModal={showDetail}
          closeModal={() => setShowDetail(false)}
          saveChanges={() => setShowDetail(false)}
          details={detail}
        />
      )}
      <Title title="Ordenes" />
      <div class="content-elemtns">
        <div class="button-content">
          <button
            class="button is-primary"
            onClick={() => setShowModal(!showModal)}
          >
            Nueva Orden
          </button>
        </div>

        <div class="">
          <div class="card">
            <table class="table is-striped is-fullwidth">
              <thead>
                <tr>
                  <th>No. Orden</th>
                  <th>Servicio / Reparación</th>
                  <th>Refacciones</th>
                  <th>Autorización</th>
                  <th>Creada por</th>
                  <th>Detalle</th>
                </tr>
              </thead>

              <tfoot>
                {services.map((service) => (
                  <tr key={service.id}>
                    <td>{service.orderId.slice(0, 4)}</td>
                    <td>{service.name}</td>
                    <td>{service.components.join(", ") || "N/A"}</td>
                    <td>{service.status}</td>
                    <td>
                      {service.role === "customer" ? "Cliente" : "Mecánico"}
                    </td>
                    <td>
                      <button
                        className="button is-small is-info"
                        onClick={() => {
                          setDetail(service)
                          setShowDetail(true)
                        }}
                      >
                        Ver
                      </button>
                    </td>
                  </tr>
                ))}
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
