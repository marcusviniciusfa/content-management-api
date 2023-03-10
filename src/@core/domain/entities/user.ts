import { randomUUID } from 'node:crypto'

type UserProps = {
  name: string
  isAdmin: boolean
}

export class User {
  private _id: string
  private props: UserProps

  constructor(props: UserProps, id?: string) {
    Object.assign(this, {
      props,
      _id: id || randomUUID(),
    })
  }

  get id(): string {
    return this._id
  }

  get name(): string {
    return this.props.name
  }

  set name(value: string) {
    this.props.name = value
  }

  get isAdmin(): boolean {
    return this.props.isAdmin
  }
}
