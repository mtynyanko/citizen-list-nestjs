import {
  AllowNull,
  BelongsTo,
  Column,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';

import { CitizenGroup } from './citizen-groups.model';
import { City } from 'src/cities/models/city.model';

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

  @HasMany(() => CitizenGroup)
  groups: CitizenGroup[];
}
