import { Content } from '@/@core/domain/entities'
import { CreateContentUseCase } from '@/@core/domain/use-cases/create-content-use-case'
import { Injectable } from '@nestjs/common'
import { ContentRepositoryFake } from 'test/in-memory-database/repositories/content-repository-fake'
import { UserRepositoryFake } from 'test/in-memory-database/repositories/user-repository-fake'
import { CreateContentInput } from './dto/create-content.input'
import { UpdateContentInput } from './dto/update-content.input'

@Injectable()
export class ContentService {
  create(createContentInput: CreateContentInput): Promise<Content> {
    const contentRepository = new ContentRepositoryFake()
    const userRepository = new UserRepositoryFake()
    const createContentUseCase = new CreateContentUseCase(
      contentRepository,
      userRepository,
    )
    const { userId, name, description, type } = createContentInput
    const content = createContentUseCase.execute(
      userId,
      name,
      description,
      type,
    )
    return content
  }

  findAll() {
    return `This action returns all content`
  }

  findOne(id: string) {
    return `This action returns a #${id} content`
  }

  update(id: string, updateContentInput: UpdateContentInput) {
    return `This action updates a #${id} content`
  }

  remove(id: string) {
    return `This action removes a #${id} content`
  }
}
