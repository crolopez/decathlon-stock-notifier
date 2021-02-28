import axios from 'axios'
import { HttpClientRequestParameters } from './HttpClientRequestParameters'

export default class HttpClient {
  static buildHeaders (token: any): { headers: { RequestVerificationToken?: string } } {
    return {
      headers: {
        ...token ? { RequestVerificationToken: token } : undefined,
      },
    }
  }

  static async get<T>(parameters: HttpClientRequestParameters): Promise<T> {
    const { url, token } = parameters

    const { data } = await axios.get(url, { ...HttpClient.buildHeaders(token) })

    return data
  }

  static async put<T>(parameters: HttpClientRequestParameters): Promise<T> {
    const { url, payload, token } = parameters

    const { data } = await axios.put(url, payload, { ...HttpClient.buildHeaders(token) })

    return data
  }
}
