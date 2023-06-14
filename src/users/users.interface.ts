import { User } from './entities/user.entity';

export interface IUserListRes {
  list: User[];
  current: number;
  totalPage: number;
}
