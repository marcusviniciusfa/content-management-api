import {
  IContentRepository,
  IUserRepository,
} from '@/@core/domain/repositories'
import { Admin } from '../entities'

export class EditContentUseCase {
  constructor(
    private readonly contentRepository: IContentRepository,
    private readonly userRepository: IUserRepository,
  ) {}

  async execute(
    userId: string,
    id: string,
    name: string,
    description: string,
  ): Promise<void> {
    const [content, user] = await Promise.all([
      this.contentRepository.findOne(id),
      this.userRepository.findOne(userId),
    ])
    if (!content) {
      throw new Error('content not found')
    }
    if (!user) {
      throw new Error('user not found')
    }
    if (user instanceof Admin) {
      throw new Error('unauthorized user')
    }
    content.name = name
    content.description = description
    this.contentRepository.update(content)
  }
}
