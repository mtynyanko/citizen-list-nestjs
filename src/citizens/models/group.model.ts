import { AllowNull, Column, HasMany, Model, Table } from 'sequelize-typescript';
import { CitizenGroup } from './citizen-groups.model';

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

  @HasMany(() => CitizenGroup)
  citizenGrops: CitizenGroup[];
}
