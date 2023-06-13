import { User } from './user.entity';

export interface IUserListRes {
  data: User[];
  current: number;
  totalPage: number;
}
