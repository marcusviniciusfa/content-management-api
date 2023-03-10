import { Field, InputType, Int } from '@nestjs/graphql'
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator'

@InputType()
export class CreateUserInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  @IsString()
  @IsNotEmpty()
  name: string

  @Field(() => Boolean, { description: 'Example field (placeholder)' })
  @IsBoolean()
  @IsNotEmpty()
  isAdmin: boolean
}
