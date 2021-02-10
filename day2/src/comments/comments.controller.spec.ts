import { CommentsController } from './comments.controller';
import { Comment, CommentsService } from './comments.service';

describe('CommentsController', () => {
  let commentsController: CommentsController;
  let commentsService: CommentsService;

  beforeEach(async () => {
    commentsService = new CommentsService();
    commentsController = new CommentsController(commentsService);
  });

  it('should be defined', () => {
    expect(commentsController).toBeDefined();
  });

  describe('/comments', () => {
    it('should return comments', () => {
      const comments: Comment[] = [
        {
          id: 1,
          itemId: 1,
          body: 'Mock Comment',
        },
      ];

      jest
        .spyOn(commentsService, 'getCommentsByItemId')
        .mockImplementation(() => {
          return comments;
        });

      expect(
        commentsController.getCommentsByItemId({ itemId: '1' }),
      ).toHaveLength(1);
    });
  });
});
