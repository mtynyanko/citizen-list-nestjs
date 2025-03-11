import { AllowNull, Column, Model, Table } from 'sequelize-typescript';

@Table({
  tableName: 'cities',
  underscored: true,
  timestamps: true,
})
export class City extends Model {
  @AllowNull(false)
  @Column
  name: string;

  @AllowNull(false)
  @Column
  data: string;
}
