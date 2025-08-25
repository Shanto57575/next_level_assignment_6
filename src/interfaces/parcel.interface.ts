import type { IUser } from "./user.interface";

export interface IUserSummary {
  _id: string;
  name: string;
  email: string;
}

export interface IStatusLog {
  status: string;
  note?: string;
  updatedBy: Partial<IUser>;
  updatedAt: string;
}

export interface IParcel {
  _id: string;
  trackingId: string;
  parcelType: string;
  weight: number;
  fee: number;
  address: string;
  deliveryDate: string;
  createdAt: string;
  updatedAt: string;
  sender: IUserSummary;
  receiver: IUserSummary;
  statusLogs: IStatusLog[];
  __v?: number;
}
