import { User } from './user.entity';

export interface IUserListRes {
  list: User[];
  current: number;
  totalPage: number;
}
