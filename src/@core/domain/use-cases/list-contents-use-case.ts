import { Content } from '@/@core/domain/entities'
import { IContentRepository } from '@/@core/domain/repositories/content-repository'

export class ListContentsUseCase {
  constructor(private readonly contentRepository: IContentRepository) {}

  async execute(): Promise<Content[]> {
    return this.contentRepository.findAll()
  }
}
