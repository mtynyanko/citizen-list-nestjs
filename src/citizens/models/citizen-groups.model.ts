import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Citizen } from './citizen.model';
import { Group } from './group.model';

@Table({
  tableName: 'citizen-groups',
  underscored: true,
  timestamps: true,
})
export class CitizenGroup extends Model {
  @ForeignKey(() => Citizen)
  @Column
  citizenId: number;

  @BelongsTo(() => Citizen)
  citizen: Citizen;

  @ForeignKey(() => Group)
  groupId: number;

  @BelongsTo(() => Group)
  group: Group;
}
