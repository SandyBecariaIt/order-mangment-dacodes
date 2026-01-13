import { Navigate } from "react-router"
import { useAuth } from "../auth/useAuth"

export const PublicRouter = ({ children }) => {
  const { isAuthenticated, role } = useAuth()

  if (isAuthenticated) 
    return <Navigate to={role === 'customer' ? '/customer' : '/repairshop'} />

  return children
}
