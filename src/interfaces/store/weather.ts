import { Status } from './statuses';

export interface IStore {
  weatherAll: {
    data: any | null;
  } & Status;
}
