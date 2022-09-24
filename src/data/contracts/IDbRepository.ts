export interface IDbRepository {
  create: (params: any) => void
  findAll: () => any[]
  findOne: (params: any) => any
}
