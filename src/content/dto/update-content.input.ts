import { CreateContentInput } from './create-content.input'
import { InputType, Field, PartialType } from '@nestjs/graphql'

@InputType()
export class UpdateContentInput extends PartialType(CreateContentInput) {
  @Field()
  id: string
}
