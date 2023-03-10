import { DetailsView } from '@/@core/infra/database/entities'
import { DetailsViewResolver } from '@/graphql/resolvers/details-view.resolver'
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DetailsViewController } from './details-view.controller'
import { DetailsViewService } from './details-view.service'

@Module({
  imports: [TypeOrmModule.forFeature([DetailsView])],
  providers: [DetailsViewResolver, DetailsViewService],
  controllers: [DetailsViewController],
})
export class DetailsViewModule {}
