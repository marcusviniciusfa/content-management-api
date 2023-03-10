import { Admin, Student, User } from '@/@core/domain/entities'
import { IUserRepository } from '@/@core/domain/repositories'

export class CreateUserUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  async execute(name: string, isAdmin: boolean): Promise<User> {
    let user: User
    if (isAdmin) {
      user = new Admin({ name })
    }
    user = new Student({ name })
    this.userRepository.create(user)
    return user
  }
}
