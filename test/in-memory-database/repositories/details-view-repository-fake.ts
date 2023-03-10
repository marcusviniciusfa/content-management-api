import { DetailsView } from '@/@core/domain/entities'
import { IDetailsViewRepository } from '@/@core/domain/repositories'

type DetailsViewInput = {
  userId: string
  contentId: string
}

export class DetailsViewRepositoryFake implements IDetailsViewRepository {
  private detailsViews: DetailsView[]

  constructor() {
    this.detailsViews = []
  }

  async create(detailsView: DetailsView): Promise<void> {
    this.detailsViews.push(detailsView)
  }

  async findAllByUser(userId: string): Promise<DetailsView[]> {
    const detailsViews = this.detailsViews.filter(
      (detailsView) => detailsView.user.id === userId,
    )
    return detailsViews
  }

  async findAllByRelation(input: DetailsViewInput): Promise<DetailsView[]> {
    const { contentId, userId } = input
    const detailsViews = this.detailsViews.filter(
      (detailsView) =>
        detailsView.content.id === contentId && detailsView.user.id === userId,
    )
    return detailsViews
  }

  async delete(input: DetailsViewInput): Promise<void> {
    const { contentId, userId } = input
    const datailsViewIndex = this.detailsViews.findIndex(
      (detailsView) =>
        detailsView.content.id === contentId && detailsView.user.id === userId,
    )
    this.detailsViews.splice(datailsViewIndex, 1)
  }
}
