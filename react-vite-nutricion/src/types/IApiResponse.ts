export interface IApiResponse<T> {
  successs: boolean;
  data: T;
  message: string;
}