const EDITABLE_STATUSES = ["CREATED", "DIAGNOSED"];

export const updateOrderStatus = (orderId, serviceId, newStatus) => {
  const orders = JSON.parse(localStorage.getItem("orders")) || [];

  const updateStatus = orders.map(order => {
    if (order.id !== orderId) return order

    return {
      ...order,
      status: newStatus,
      services: order.services.map(service =>
        service.id === serviceId ? { ...service, status: newStatus } : service
      )
    }
  })

  localStorage.setItem("orders", JSON.stringify(updateStatus))
}

export const editOrderDetail = (orderId, serviceId, newDetail) => {
  const orders = JSON.parse(localStorage.getItem("orders")) || [];

  const updateDetail = orders.map(order => {
    if (order.id !== orderId) return order

    return {
      ...order,
      services: order.services.map(service =>
        service.id === serviceId ? { ...service, description: newDetail } : service
      )
    }
  })

  localStorage.setItem("orders", JSON.stringify(updateDetail))
}

export const canEditOrder = (status) => {
  return EDITABLE_STATUSES.includes(status)
}