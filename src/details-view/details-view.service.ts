import { Injectable } from '@nestjs/common'
import { CreateDetailsViewInput } from './dto/create-details-view.input'
import { UpdateDetailsViewInput } from './dto/update-details-view.input'

@Injectable()
export class DetailsViewService {
  create(createDetailsViewInput: CreateDetailsViewInput) {
    return 'This action adds a new detailsView'
  }

  findAll() {
    return `This action returns all detailsView`
  }

  findOne(id: string) {
    return `This action returns a #${id} detailsView`
  }

  update(id: string, updateDetailsViewInput: UpdateDetailsViewInput) {
    return `This action updates a #${id} detailsView`
  }

  remove(id: string) {
    return `This action removes a #${id} detailsView`
  }
}
