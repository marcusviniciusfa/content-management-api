import { User } from '@/@core/domain/entities'

export interface IUserRepository {
  create(user: User): Promise<void>
  update(user: User): Promise<void>
  findOne(userId: string): Promise<User>
  findAll(): Promise<User[]>
  delete(user: User): Promise<void>
}
