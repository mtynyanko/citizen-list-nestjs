import { Module } from '@nestjs/common';
import { CitiesService } from './cities.service';
import { CitiesController } from './cities.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { City } from './models/city.model';

@Module({
  imports: [SequelizeModule.forFeature([City])],
  controllers: [CitiesController],
  providers: [CitiesService],
  exports: [CitiesService],
})
export class CitiesModule {}
