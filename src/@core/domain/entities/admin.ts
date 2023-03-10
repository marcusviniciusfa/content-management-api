import { User } from './user'

type UserAdminProps = {
  name: string
}

export class Admin extends User {
  constructor(props: UserAdminProps, id?: string) {
    super({ ...props, isAdmin: true }, id)
  }
}
