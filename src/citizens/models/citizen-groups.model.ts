import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
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
  citizen_id: number;

  @ForeignKey(() => Group)
  @Column
  group_id: number;
}
