import { Content } from '@/@core/infra/database/entities/content.entity'
import { ContentService } from '@/content/content.service'
import { CreateContentInput } from '@/content/dto/create-content.input'
import { UpdateContentInput } from '@/content/dto/update-content.input'
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'

@Resolver(() => Content)
export class ContentResolver {
  constructor(private readonly contentService: ContentService) {}

  @Mutation(() => Content)
  createContent(
    @Args('createContentInput') createContentInput: CreateContentInput,
  ) {
    return this.contentService.create(createContentInput)
  }

  @Query(() => [Content], { name: 'contents' })
  findAll() {
    return this.contentService.findAll()
  }

  @Query(() => Content, { name: 'content' })
  findOne(@Args('id') id: string) {
    return this.contentService.findOne(id)
  }

  @Mutation(() => Content)
  updateContent(
    @Args('updateContentInput') updateContentInput: UpdateContentInput,
  ) {
    return this.contentService.update(updateContentInput.id, updateContentInput)
  }

  @Mutation(() => Content)
  removeContent(@Args('id') id: string) {
    return this.contentService.remove(id)
  }
}
