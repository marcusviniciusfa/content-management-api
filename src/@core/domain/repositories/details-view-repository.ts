import { DetailsView } from '@/@core/domain/entities'

type DetailsViewInput = {
  userId: string
  contentId: string
}

export interface IDetailsViewRepository {
  create(detailsView: DetailsView): Promise<void>
  findAllByRelation(input: DetailsViewInput): Promise<DetailsView[]>
  findAllByUser(userId: string): Promise<DetailsView[]>
  delete(input: DetailsViewInput): Promise<void>
}
