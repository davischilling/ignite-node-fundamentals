export interface IEncrypter {
  hashPassword: (password: string) => Promise<string>
  comparePasswords: (
    passwordToCompare: string,
    savedPassword: string
  ) => Promise<boolean>
}
