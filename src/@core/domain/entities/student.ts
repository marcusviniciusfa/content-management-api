import { User } from './user'

type UserStudentProps = {
  name: string
}

export class Student extends User {
  constructor(props: UserStudentProps, id?: string) {
    super({ ...props, isAdmin: false }, id)
  }
}
