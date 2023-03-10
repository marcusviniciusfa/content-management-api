import { Module } from '@nestjs/common'
import { DatabaseModule } from './@core/infra/database/database.module'
import { ContentModule } from './content/content.module'
import { DetailsViewModule } from './details-view/details-view.module'
import { GraphqlModule } from './graphql/graphql.module'
import { UserModule } from './user/user.module'

@Module({
  imports: [
    DatabaseModule,
    GraphqlModule,
    ContentModule,
    UserModule,
    DetailsViewModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
