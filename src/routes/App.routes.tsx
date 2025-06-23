import { BrowserRouter, Routes, Route } from "react-router";
import Dashboard from "../components/Dashboard";
import { UserForm } from "../components/user/UserForm";
import Products from "../components/Products";
import OrderTable from "../components/OrderTable";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="users" element={<UserForm />} />
          <Route path="products" element={<Products />} />
          <Route path="orders" element={<OrderTable />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
