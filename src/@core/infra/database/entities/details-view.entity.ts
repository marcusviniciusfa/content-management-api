import { Field, ObjectType } from '@nestjs/graphql'
import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity({ name: 'details-views' })
@ObjectType()
export class DetailsView {
  @PrimaryColumn()
  @Field(() => String, { description: 'Example field (placeholder)' })
  contentId: string

  @PrimaryColumn()
  @Field(() => String, { description: 'Example field (placeholder)' })
  userId: string

  @Column()
  @Field(() => Date, { description: 'Example field (placeholder)' })
  createdAt: Date
}
