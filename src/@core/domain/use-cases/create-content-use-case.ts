import { Content, ContentType } from '@/@core/domain/entities'
import {
  IContentRepository,
  IUserRepository,
} from '@/@core/domain/repositories'

export class CreateContentUseCase {
  constructor(
    private readonly contentRepository: IContentRepository,
    private readonly userRepository: IUserRepository,
  ) {}

  async execute(
    userId: string,
    name: string,
    description: string,
    type: ContentType,
  ): Promise<Content> {
    // const user = await this.userRepository.findOne(userId)
    // if (!user) {
    //   throw new Error('user not found')
    // }
    // if (!user.isAdmin) {
    //   throw new Error('unauthorized user')
    // }
    const content = new Content({ name, description, type })
    this.contentRepository.create(content)
    return content
  }
}
