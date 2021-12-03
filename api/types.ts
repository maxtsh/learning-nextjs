import { Method } from "axios";

export interface ApiProps {
  method: Method;
  url: string;
  body?: any;
}

export interface ApiRes {
  data: any;
  error: any;
  loading: boolean;
  status: number;
}
