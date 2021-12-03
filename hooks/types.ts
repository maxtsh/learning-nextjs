import { Method } from "axios";

export interface useDataTypes {
  method: Method;
  url: string;
  body?: any;
}

export interface useDataResult {
  data: any;
  error: any;
}
