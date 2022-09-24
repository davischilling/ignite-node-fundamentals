export interface IMiddleware {
  execute: (req: any) => Promise<void | Error>
}
