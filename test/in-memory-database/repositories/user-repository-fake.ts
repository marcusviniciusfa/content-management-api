import { User } from '@/@core/domain/entities'
import { IUserRepository } from '@/@core/domain/repositories'

export class UserRepositoryFake implements IUserRepository {
  private users: User[]

  constructor() {
    this.users = []
  }

  async create(user: User): Promise<void> {
    this.users.push(user)
  }

  async update(user: User): Promise<void> {
    const userIndex = this.users.findIndex(
      (currentUser) => currentUser.id === user.id,
    )
    this.users[userIndex] = user
  }

  async findOne(userId: string): Promise<User> {
    return this.users.find((content) => content.id === userId)
  }

  async findAll(): Promise<User[]> {
    return this.users
  }

  async delete(user: User): Promise<void> {
    const userIndex = this.users.findIndex(
      (currentUser) => currentUser.id === user.id,
    )
    this.users.splice(userIndex, 1)
  }
}
