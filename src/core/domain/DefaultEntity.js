import { IDefaultEntityDTO } from './dtos/IDefaultEntityDTO';

export class DefaultEntity implements IDefaultEntityDTO {
  createdAt?: Date;

  updatedAt?: Date;

  deletedAt?: Date;
}
