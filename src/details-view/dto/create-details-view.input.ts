import { Field, InputType } from '@nestjs/graphql'
import { IsNotEmpty, IsUUID } from 'class-validator'

@InputType()
export class CreateDetailsViewInput {
  @Field(() => String, { description: 'Example field (placeholder)' })
  @IsUUID('4')
  @IsNotEmpty()
  userId: string

  @Field(() => String, { description: 'Example field (placeholder)' })
  @IsUUID('4')
  @IsNotEmpty()
  contentId: string
}
