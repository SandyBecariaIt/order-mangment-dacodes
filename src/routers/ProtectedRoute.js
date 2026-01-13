import { Navigate } from 'react-router-dom'
import { useAuth } from '../auth/useAuth'

export const ProtectedRoute = ({ children, allowedRoles }) => {
  const { isAuthenticated, role } = useAuth()

  if (!isAuthenticated) {
    return <Navigate to="/" replace />
  }

  if (allowedRoles && !allowedRoles.includes(role)) {
    return <Navigate to="/" replace />
  }

  return children
}
