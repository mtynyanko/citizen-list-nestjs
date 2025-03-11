import {
  AllowNull,
  BelongsToMany,
  Column,
  Model,
  Table,
} from 'sequelize-typescript';
import { CitizenGroup } from './citizen-groups.model';
import { Citizen } from './citizen.model';

@Table({
  tableName: 'groups',
  underscored: true,
  timestamps: true,
})
export class Group extends Model {
  @AllowNull(false)
  @Column
  type: string;

  @AllowNull(false)
  @Column
  name: string;

  @BelongsToMany(() => Citizen, () => CitizenGroup)
  citizens: Citizen[];
}
