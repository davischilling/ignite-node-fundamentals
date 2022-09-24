export class NotFoundError extends Error {
  constructor(entity: string) {
    super(`${entity.toUpperCase()} not found`)
    this.name = 'NotFoundError'
  }
}
