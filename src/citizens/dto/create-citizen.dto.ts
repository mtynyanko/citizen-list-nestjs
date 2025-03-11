import { IsString, IsInt, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class GroupDto {
  @IsString()
  type: string;

  @IsString()
  name: string;
}

export class CreateCitizenDto {
  @IsString()
  name: string;

  @IsInt()
  city_id: number;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => GroupDto)
  groups: GroupDto[];
}
