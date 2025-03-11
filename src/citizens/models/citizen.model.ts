import {
  AllowNull,
  BelongsTo,
  BelongsToMany,
  Column,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';

import { CitizenGroup } from './citizen-groups.model';
import { City } from 'src/cities/models/city.model';
import { Group } from './group.model';

@Table({
  tableName: 'citizens',
  underscored: true,
  timestamps: true,
})
export class Citizen extends Model {
  @AllowNull(false)
  @Column
  name: string;

  @AllowNull(false)
  @ForeignKey(() => City)
  @Column
  cityId: string;

  @BelongsTo(() => City)
  city: City;

  @BelongsToMany(() => Group, () => CitizenGroup)
  groups: Group[];
}
