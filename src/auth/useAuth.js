

export const useAuth = () => {
  const isAuthenticated = localStorage.getItem('auth') === 'true'
  const role = localStorage.getItem('role')

  const login = (role) => {
    localStorage.setItem('auth', 'true')
    if (role) localStorage.setItem('role', role)
  }

  const logout = () => {
    localStorage.removeItem('auth')
    localStorage.removeItem('role')
  }

  return { isAuthenticated, role, login, logout }
}
