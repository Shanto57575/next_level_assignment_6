import type { TRole } from "@/interfaces/role.interface";
import { useProfileQuery } from "@/redux/app/features/authApi";
import type { ComponentType } from "react";
import { Navigate, useLocation } from "react-router";

export const withAuth = (Component: ComponentType, requiredRole?: TRole) => {
  return function AuthWrapper() {
    const { data: userData, isLoading } = useProfileQuery(undefined);
    const location = useLocation();

    if (!isLoading && !userData?.data?.email) {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (requiredRole && !isLoading && userData?.data?.role !== requiredRole) {
      return <Navigate to="/unauthorize" />;
    }

    return <Component />;
  };
};
