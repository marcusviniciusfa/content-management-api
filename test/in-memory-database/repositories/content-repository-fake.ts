import { Content } from '@/@core/domain/entities'
import { IContentRepository } from '@/@core/domain/repositories'

export class ContentRepositoryFake implements IContentRepository {
  private contents: Content[]

  constructor() {
    this.contents = []
  }

  async create(content: Content): Promise<void> {
    this.contents.push(content)
  }

  async update(content: Content): Promise<void> {
    const contentIndex = this.contents.findIndex(
      (currentContent) => currentContent.id === content.id,
    )
    this.contents[contentIndex] = content
  }

  async findOne(contentId: string): Promise<Content> {
    return this.contents.find((content) => content.id === contentId)
  }

  async findAll(): Promise<Content[]> {
    return this.contents
  }

  async delete(content: Content): Promise<void> {
    const contentIndex = this.contents.findIndex(
      (currentContent) => currentContent.id === content.id,
    )
    this.contents.splice(contentIndex, 1)
  }
}
