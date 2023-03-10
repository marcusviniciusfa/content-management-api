import { Field, InputType, PartialType } from '@nestjs/graphql'
import { CreateDetailsViewInput } from './create-details-view.input'

@InputType()
export class UpdateDetailsViewInput extends PartialType(
  CreateDetailsViewInput,
) {
  @Field()
  id: string
}
