import { randomUUID } from 'node:crypto'

export enum ContentType {
  VIDEO = 'video',
  PFD = 'pdf',
  IMAGE = 'image',
}

type ContentProps = {
  name: string
  description: string
  type: ContentType
}

export class Content {
  private _id: string
  private props: ContentProps

  constructor(props: ContentProps, id?: string) {
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

  get description(): string {
    return this.props.description
  }

  set description(value: string) {
    this.props.description = value
  }

  get type(): ContentType {
    return this.props.type
  }

  set type(value: ContentType) {
    this.props.type = value
  }
}
