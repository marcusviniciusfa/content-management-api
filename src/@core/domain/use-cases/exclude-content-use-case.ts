import {
  IContentRepository,
  IUserRepository,
} from '@/@core/domain/repositories'

export class ExcludeContentUseCase {
  constructor(
    private readonly contentRepository: IContentRepository,
    private readonly userRepository: IUserRepository,
  ) {}

  async execute(contentId: string, userId: string): Promise<void> {
    const [content, user] = await Promise.all([
      this.contentRepository.findOne(contentId),
      this.userRepository.findOne(userId),
    ])
    if (!content) {
      throw new Error('content not found')
    }
    if (!user) {
      throw new Error('user not found')
    }
    if (!user.isAdmin) {
      throw new Error('unauthorized user')
    }
    this.contentRepository.delete(content)
  }
}
