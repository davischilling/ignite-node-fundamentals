export interface IAuthentication {
  auth: (id: string) => string
  verifyHeader: (token: string) => {
    sub: string
  }
}
