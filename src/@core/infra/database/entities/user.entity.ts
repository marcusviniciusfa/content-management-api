import { Field, ID, ObjectType } from '@nestjs/graphql'
import { Column, Entity, JoinTable, ManyToMany, PrimaryColumn } from 'typeorm'
import { Content } from './content.entity'

@Entity({ name: 'users' })
@ObjectType()
export class User {
  @PrimaryColumn({ type: 'uuid' })
  @Field(() => ID, { description: 'Example field (placeholder)' })
  id: string

  @Column()
  @Field(() => String, { description: 'Example field (placeholder)' })
  name: string

  @Column()
  @Field(() => Boolean, { description: 'Example field (placeholder)' })
  isAdmin?: boolean

  @ManyToMany(() => Content)
  @JoinTable({
    name: 'details-views',
    joinColumn: { name: 'userId', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'contentId', referencedColumnName: 'id' },
  })
  contents: Content[]
}
