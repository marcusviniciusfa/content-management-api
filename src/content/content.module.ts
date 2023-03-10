import { Content } from '@/@core/infra/database/entities'
import { ContentService } from '@/content/content.service'
import { ContentResolver } from '@/graphql/resolvers/content.resolver'
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ContentController } from './content.controller'

@Module({
  imports: [TypeOrmModule.forFeature([Content])],
  providers: [ContentResolver, ContentService],
  controllers: [ContentController],
})
export class ContentModule {}
