import { Content, ContentType } from './content'

describe('content unit tests', () => {
  it('should create a content', () => {
    const content = new Content({
      name: 'Classes JavaScript',
      description: 'Lorem ipsum dolor sit amet consectetur',
      type: ContentType.VIDEO,
    })
    expect(content.name).toEqual('Classes JavaScript')
    expect(content.description).toEqual(
      'Lorem ipsum dolor sit amet consectetur',
    )
    expect(content.type).toEqual(ContentType.VIDEO)
  })
})
