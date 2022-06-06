import { CommentProxy } from './comment.proxy';

export interface NewsProxy {
  userName?: string;

  title: string;

  description?: string;

  imageSrc: string;

  color: string;

  realRating: number;

  fakeRating: number;

  comments?: CommentProxy[];
}
