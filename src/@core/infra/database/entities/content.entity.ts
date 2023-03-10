import { ContentType } from '@/@core/domain/entities'
import { Field, ID, ObjectType } from '@nestjs/graphql'
import { Column, Entity, ManyToMany, PrimaryColumn } from 'typeorm'
import { User } from './user.entity'

@Entity({ name: 'contents' })
@ObjectType()
export class Content {
  @PrimaryColumn({ type: 'uuid' })
  @Field(() => ID, { description: 'Example field (placeholder)' })
  id: string

  @Column()
  @Field(() => String, { description: 'Example field (placeholder)' })
  name: string

  @Column()
  @Field(() => String, { description: 'Example field (placeholder)' })
  description: string

  @Column({ type: 'enum', enum: ContentType })
  @Field(() => String, { description: 'Example field (placeholder)' })
  type: ContentType

  @ManyToMany(() => User)
  users: User[]
}
