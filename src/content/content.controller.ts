import { Content } from '@/@core/domain/entities'
import { Body, Controller, Post } from '@nestjs/common'
import { ContentService } from './content.service'

@Controller('content')
export class ContentController {
  constructor(private readonly contentService: ContentService) {}

  @Post()
  async create(@Body() body): Promise<Content> {
    return await this.contentService.create(body)
  }
}
