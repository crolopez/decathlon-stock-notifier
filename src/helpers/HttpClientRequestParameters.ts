export interface HttpClientRequestParameters {
  url: string
  token?: string
  payload?: any
  headers: { [key: string]: string }
}
