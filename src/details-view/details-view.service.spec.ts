import { Test, TestingModule } from '@nestjs/testing'
import { DetailsViewService } from './details-view.service'

describe('DetailsViewService', () => {
  let service: DetailsViewService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DetailsViewService],
    }).compile()

    service = module.get<DetailsViewService>(DetailsViewService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
