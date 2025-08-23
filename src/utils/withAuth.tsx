import type { TRole } from "@/interfaces/role.interface";
import { useProfileQuery } from "@/redux/app/features/authApi";
import type { ComponentType } from "react";
import { Navigate } from "react-router";

export const withAuth = (Component: ComponentType, requiredRole?: TRole) => {
  return function AuthWrapper() {
    const { data: userData, isLoading } = useProfileQuery(undefined);

    if (!isLoading && !userData?.data?.email) {
      return <Navigate to="/login" />;
    }

    if (requiredRole && !isLoading && userData?.data?.role !== requiredRole) {
      return <Navigate to="/unauthorize" />;
    }

    return <Component />;
  };
};
