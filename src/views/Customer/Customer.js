import Title from "../../components/Title/Title";

export default function Customer() {
  return (
    <div>
      <Title title="Ordenes" />

      <div class="card">
        <table class="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>No. Orden</th>
              <th>Vehículo</th>
              <th>Servicio / Reparación</th>
              <th>Refacciones</th>
              <th>Autorización</th>
            </tr>
          </thead>

          <tfoot>
            <tr>
              <td>
                Item 
              </td>
              <td>
                Item 
              </td>
              <td>
                Item 
              </td>
              <td>
                Item 
              </td>
              <td>
                Item 
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
