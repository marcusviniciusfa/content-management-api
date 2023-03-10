import { Test, TestingModule } from '@nestjs/testing'
import { DetailsViewController } from './details-view.controller'

describe('DetailsViewController', () => {
  let controller: DetailsViewController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DetailsViewController],
    }).compile()

    controller = module.get<DetailsViewController>(DetailsViewController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
