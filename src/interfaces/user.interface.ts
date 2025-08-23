/* eslint-disable @typescript-eslint/no-explicit-any */

export interface I_USER {
  name: string;
  email: string;
  password: string;
  role: string;
}
export type IsActive = "ACTIVE" | "INACTIVE" | "BLOCKED";

export interface IUser {
  _id: string;
  name: string;
  email: string;
  role?: "ADMIN" | "SENDER" | "RECEIVER";
  isActive?: IsActive;
  isDeleted: boolean;
  isVerified: boolean;
  createdAt?: string;
  updatedAt?: string;
  auths?: {
    provider: string;
    providerId: string;
  };
  sentParcels?: any[];
  receivedParcels?: any[];
}

export interface IAllUsersResponse {
  data: IUser[];
}
