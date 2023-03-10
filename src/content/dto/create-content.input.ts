import { ContentType } from '@/@core/domain/entities'
import { Field, InputType } from '@nestjs/graphql'
import { IsNotEmpty, IsString } from 'class-validator'

@InputType()
export class CreateContentInput {
  @Field(() => String, { description: 'Example field (placeholder)' })
  @IsString()
  @IsNotEmpty()
  userId: string

  @Field(() => String, { description: 'Example field (placeholder)' })
  @IsString()
  @IsNotEmpty()
  name: string

  @Field(() => String, { description: 'Example field (placeholder)' })
  @IsString()
  @IsNotEmpty()
  description: string

  @Field(() => String, { description: 'Example field (placeholder)' })
  @IsString({ groups: Object.values(ContentType) })
  @IsNotEmpty()
  type: ContentType
}
