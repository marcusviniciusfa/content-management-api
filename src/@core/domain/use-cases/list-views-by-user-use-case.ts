import { DetailsView } from '@/@core/domain/entities'
import {
  IDetailsViewRepository,
  IUserRepository,
} from '@/@core/domain/repositories'

export class ListViewsByUser {
  constructor(
    private readonly userRepository: IUserRepository,
    private readonly detailsViewRepository: IDetailsViewRepository,
  ) {}

  async execute(userId: string): Promise<DetailsView[]> {
    const user = await this.userRepository.findOne(userId)
    if (!user) {
      throw new Error('user not found')
    }
    return this.detailsViewRepository.findAllByUser(user.id)
  }
}
