import { Module } from '@nestjs/common';
import { CitizensService } from './citizens.service';
import { CitizensController } from './citizens.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Citizen } from './models/citizen.model';
import { Group } from './models/group.model';
import { CitizenGroup } from './models/citizen-groups.model';
import { City } from 'src/cities/models/city.model';

@Module({
  imports: [SequelizeModule.forFeature([Citizen, Group, CitizenGroup, City])],
  controllers: [CitizensController],
  providers: [CitizensService],
  exports: [CitizensService, SequelizeModule],
})
export class CitizensModule {}
