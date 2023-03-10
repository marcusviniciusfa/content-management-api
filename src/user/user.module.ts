import { User } from '@/@core/infra/database/entities'
import { UserResolver } from '@/graphql/resolvers/user.resolver'
import { UserService } from '@/user/user.service'
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserController } from './user.controller'

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserResolver, UserService],
  controllers: [UserController],
})
export class UserModule {}
