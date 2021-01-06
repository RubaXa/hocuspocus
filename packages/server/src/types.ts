import { IncomingHttpHeaders, Server as HTTPServer } from 'http'
import { URLSearchParams } from 'url'
import Document from './Document'

export interface Configuration {
  debounce: number,
  debounceMaxWait: number,
  httpServer: HTTPServer,
  onChange: (data: onChangePayload) => void,
  onConnect: (data: onConnectPayload, resolve: Function, reject: Function) => void,
  onDisconnect: (data: onDisconnectPayload) => void,
  onJoinDocument: (data: onJoinDocumentPayload, resolve: Function, reject: Function) => void,
  persistence: any,
  port: number,
  timeout: number,
}

export interface onConnectPayload {
  requestHeaders: IncomingHttpHeaders,
  requestParameters: URLSearchParams,
}

export interface onChangePayload extends onConnectPayload {
  clientsCount: number,
  document: Document,
  documentName: string,
}

export interface onDisconnectPayload extends onChangePayload {
  context: any,
}

export interface onJoinDocumentPayload extends onDisconnectPayload {}