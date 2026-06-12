import { createBrowserRouter, Navigate } from "react-router";
import { ShopLayout } from "./shop/layouts/ShopLayout";
import { HomePage } from "./shop/pages/home/HomePage";
import { ProductPage } from "./shop/pages/product/ProductPage";
import { GenderPage } from "./shop/pages/gender/GenderPage";
import { LoginPage } from "./auth/layouts/pages/login/LoginPage";
import { RegisterPage } from "./auth/layouts/pages/register/RegisterPage";
import { DashboardPage } from "./admin/pages/dashboard/DashboardPage";
import { AdminProductsPage } from "./admin/pages/products/AdminProductsPage";
import { AdminProductPage } from "./admin/pages/product/AdminProductPage";
import { lazy } from "react";
import {
  AdminRoute,
  NotAuthenticatedRoute,
} from "./shop/components/routes/ProtectedRoutes";

// import { AuthLayout } from "./auth/layouts/AuthLayout";
// import { AdminLayout } from "./admin/layouts/AdminLayout";
const AuthLayout = lazy(() => import("./auth/layouts/AuthLayout"));
const AdminLayout = lazy(() => import("./admin/layouts/AdminLayout"));

export const appRouter = createBrowserRouter([
  //? Main router
  {
    path: "/",
    element: <ShopLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "product/:slug",
        element: <ProductPage />,
      },
      {
        path: "gender/:gender",
        element: <GenderPage />,
      },
    ],
  },

  //? Auth routes
  {
    path: "/auth",
    element: (
      <NotAuthenticatedRoute>
        <AuthLayout />
      </NotAuthenticatedRoute>
    ),
    children: [
      {
        index: true,
        element: <Navigate to="/auth/login" />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
    ],
  },

  //? Admin routes.
  {
    path: "/admin",
    element: (
      <AdminRoute>
        <AdminLayout />
      </AdminRoute>
    ),
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: "products",
        element: <AdminProductsPage />,
      },
      {
        path: "products/:id",
        element: <AdminProductPage />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
]);
