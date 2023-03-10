import * as dotenv from 'dotenv'
import { DataSource, DataSourceOptions } from 'typeorm'
import { Content, DetailsView, User } from '../entities'
import { CreateAllTables1678395239542 } from './migrations/1678395239542-CreateAllTables'

dotenv.config()

export const options: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [Content, User, DetailsView],
  migrations: [CreateAllTables1678395239542],
}

const dataSource = new DataSource(options)
export { dataSource }
