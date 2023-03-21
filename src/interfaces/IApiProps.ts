export interface IApiProps {
  baseUrl: string;
  header?: HeadersInit;
  accessToken?: string | null | undefined;
  refreshToken?: string | null | undefined;
}
