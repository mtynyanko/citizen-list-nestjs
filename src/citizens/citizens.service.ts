import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Citizen } from './models/citizen.model';
import { Group } from './models/group.model';
import { CreateCitizenDto } from './dto/create-citizen.dto';
import { CitizenGroup } from './models/citizen-groups.model';

@Injectable()
export class CitizensService {
  constructor(
    @InjectModel(Citizen) private citizenModel: typeof Citizen,
    @InjectModel(Group) private groupModel: typeof Group,
    @InjectModel(CitizenGroup) private citizenGroupModel: typeof CitizenGroup,
  ) {}
  async createCitizen(createCitizenDto: CreateCitizenDto) {
    const citizen = await this.citizenModel.create({
      name: createCitizenDto.name,
      cityId: createCitizenDto.city_id,
    });

    for (const groupDto of createCitizenDto.groups) {
      let group = await this.groupModel.findOne({
        where: { name: groupDto.name, type: groupDto.type },
      });

      if (!group) {
        group = await this.groupModel.create({
          type: groupDto.type,
          name: groupDto.name,
        });
      }
      await this.citizenGroupModel.create({
        citizenId: citizen.id,
        groupId: group.id,
      });
    }
    return citizen;
  }

  findAll() {
    return `This action returns all citizens`;
  }
}
