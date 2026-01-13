import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./../views/Login";
import Customer from "../views/Customer/Customer";
import RepairShop from "../views/RepairShop/RepairShop";
import MainLayout from "../layouts/MainLayout";
import { PublicRouter } from "./PublicRouter";
import { ProtectedRoute } from "./ProtectedRoute";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* RUTAS PÚBLICAS */}
        <Route path="/" element={
          <PublicRouter>
            <Login />
          </PublicRouter>
        }/>

        {/* RUTAS PROTEGIDAS */}
        <Route element={<MainLayout />}>
          <Route path="/customer" element={
            <ProtectedRoute allowedRoles={['customer']}>
               <Customer />
            </ProtectedRoute>
          }/>
          <Route path="/repairshop" element={
            <ProtectedRoute allowedRoles={['repairshop']}>
              <RepairShop />
            </ProtectedRoute>
          }/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
