import { randomUUID } from 'node:crypto'
import { Content } from './content'
import { User } from './user'

type DetailsViewProps = {
  user: User
  content: Content
  createdAt?: Date
}

export class DetailsView {
  private _id: string
  private props: DetailsViewProps

  constructor(props: DetailsViewProps, id?: string) {
    Object.assign(this, {
      props,
      createdAt: props.createdAt || new Date(),
      _id: id || randomUUID(),
    })
  }

  get id(): string {
    return this._id
  }

  get user(): User {
    return this.props.user
  }

  get content(): Content {
    return this.props.content
  }

  get createdAt(): Date {
    return this.props.createdAt
  }
}
