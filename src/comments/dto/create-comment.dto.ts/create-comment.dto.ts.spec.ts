import { CreateCommentDto } from './create-comment.dto';

describe('CreateCommentDtoTs', () => {
  it('should be defined', () => {
    expect(new CreateCommentDto()).toBeDefined();
  });
});
