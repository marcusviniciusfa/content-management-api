import { Content } from '@/@core/domain/entities'

export interface IContentRepository {
  create(content: Content): Promise<void>
  update(content: Content): Promise<void>
  findOne(contentId: string): Promise<Content>
  findAll(): Promise<Content[]>
  delete(content: Content): Promise<void>
}
