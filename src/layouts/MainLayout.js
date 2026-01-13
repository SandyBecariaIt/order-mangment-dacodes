import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'


const MainLayout = () => {
  return (
    <>
      <Navbar />
      <section class="hero">
        <div class="hero-body">
          <Outlet />
        </div>
      </section>
    </>
  )
}

export default MainLayout
