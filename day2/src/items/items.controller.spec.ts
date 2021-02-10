import { Comment, CommentsService } from '../comments/comments.service';
import { ItemsController } from './items.controller';
import { ItemsService, PublicItem } from './items.service';

describe('ItemsController', () => {
  let itemsController: ItemsController;
  let itemsService: ItemsService;
  let commentsService: CommentsService;

  beforeEach(async () => {
    itemsService = new ItemsService();
    commentsService = new CommentsService();
    itemsController = new ItemsController(itemsService, commentsService);
  });

  it('should be defined', () => {
    expect(itemsController).toBeDefined();
  });

  describe('/items', () => {
    it('should return public items', () => {
      jest.spyOn(itemsService, 'getPublicItems').mockImplementation(() => {
        const item: PublicItem = {
          id: 1,
          title: 'Mock Title',
          body: 'Mock Body',
        };
        return [item];
      });

      expect(itemsController.getItems()).toHaveLength(1);
    });
  });

  describe('/items/1/comments', () => {
    it('should return public items and comments', () => {
      const item: PublicItem = {
        id: 1,
        title: 'Mock Title',
        body: 'Mock Body',
      };
      const comments: Comment[] = [
        {
          id: 1,
          itemId: 1,
          body: 'Mock Body',
        },
      ];

      jest.spyOn(itemsService, 'getItemById').mockImplementation(() => {
        return item;
      });

      jest
        .spyOn(commentsService, 'getCommentsByItemId')
        .mockImplementation(() => {
          return comments;
        });

      expect(itemsController.getItemWithComments({ id: '1' })).toEqual({
        item,
        comments,
      });
    });
  });
});
