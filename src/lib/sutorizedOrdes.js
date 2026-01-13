const hasValidService = (services = []) => {
  return services.length > 0
}

const calculateSubtotal = (services = []) => {
  return services.reduce((total, service) => {
    const labor = Number(service.laborEstimated || 0)

    const componentsTotal = (service.components || []).reduce(
      (sum, comp) => sum + (Number(comp.price) || 0), 0
    )

    return total + labor + componentsTotal
  }, 0)
}

const calculateAuthorizedAmount = (subtotal) => {
  return Number((subtotal * 1.16).toFixed(2))
}

export const autorizedOrderWhitServices = (orderId) => {
   const orders = JSON.parse(localStorage.getItem("orders")) || [];
   
   const updateOrders = orders.map(order => {
    if (order.id !== orderId) return order

    if (!order.services || order.services.length === 0)
      throw new Error("NO_SERVICES")

    const subtotalEstimated = calculateSubtotal(order.services);
    const authorizedAmount = calculateAuthorizedAmount(subtotalEstimated);

    return {
      ...order,
      status: "AUTHORIZED",
      subtotalEstimated,
      authorizedAmount
    }
   })

   localStorage.setItem("orders", JSON.stringify(updateOrders))
}
