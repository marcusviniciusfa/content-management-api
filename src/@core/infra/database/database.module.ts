import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { dataSource } from './typeorm/dataSource'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...dataSource.options,
      synchronize: false,
    }),
  ],
})
export class DatabaseModule {}
