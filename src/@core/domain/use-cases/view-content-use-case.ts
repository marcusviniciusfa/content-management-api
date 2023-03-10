import { DetailsView } from '@/@core/domain/entities'
import {
  IContentRepository,
  IDetailsViewRepository,
  IUserRepository,
} from '@/@core/domain/repositories'

export class ViewContentUseCase {
  constructor(
    private readonly contentRepository: IContentRepository,
    private readonly userRepository: IUserRepository,
    private readonly detailsViewRepository: IDetailsViewRepository,
  ) {}

  async execute(contentId: string, userId: string) {
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
    const detailsView = new DetailsView({ content, user })
    this.detailsViewRepository.create(detailsView)
  }
}
