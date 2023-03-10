import { DetailsView } from '@/@core/infra/database/entities/details-view.entity'
import { DetailsViewService } from '@/details-view/details-view.service'
import { CreateDetailsViewInput } from '@/details-view/dto/create-details-view.input'
import { UpdateDetailsViewInput } from '@/details-view/dto/update-details-view.input'
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'

@Resolver(() => DetailsView)
export class DetailsViewResolver {
  constructor(private readonly detailsViewService: DetailsViewService) {}

  @Mutation(() => DetailsView)
  createDetailsView(
    @Args('createDetailsViewInput')
    createDetailsViewInput: CreateDetailsViewInput,
  ) {
    return this.detailsViewService.create(createDetailsViewInput)
  }

  @Query(() => [DetailsView], { name: 'detailsViews' })
  findAll() {
    return this.detailsViewService.findAll()
  }

  @Query(() => DetailsView, { name: 'detailsView' })
  findOne(@Args('id') id: string) {
    return this.detailsViewService.findOne(id)
  }

  @Mutation(() => DetailsView)
  updateDetailsView(
    @Args('updateDetailsViewInput')
    updateDetailsViewInput: UpdateDetailsViewInput,
  ) {
    return this.detailsViewService.update(
      updateDetailsViewInput.id,
      updateDetailsViewInput,
    )
  }

  @Mutation(() => DetailsView)
  removeDetailsView(@Args('id') id: string) {
    return this.detailsViewService.remove(id)
  }
}
