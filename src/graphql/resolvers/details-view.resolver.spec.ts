import { Test, TestingModule } from '@nestjs/testing'
import { DetailsViewResolver } from './details-view.resolver'
import { DetailsViewService } from '../../details-view/details-view.service'

describe('DetailsViewResolver', () => {
  let resolver: DetailsViewResolver

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DetailsViewResolver, DetailsViewService],
    }).compile()

    resolver = module.get<DetailsViewResolver>(DetailsViewResolver)
  })

  it('should be defined', () => {
    expect(resolver).toBeDefined()
  })
})
