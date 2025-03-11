import { Module } from '@nestjs/common';
import { CitizensModule } from './citizens/citizens.module';
import { CitiesModule } from './cities/cities.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        dialect: configService.get('DB_DIALECT'),
        host: configService.get('DB_HOST'),
        port: configService.get('DB_PORT'),
        database: configService.get('DB_DATABASE'),
        username: configService.get('DB_USER'),
        password: configService.get('DB_PASSWORD'),
        models: [],
        synchronize: false,
      }),
    }),
    CitizensModule,
    CitiesModule,
  ],
})
export class AppModule {}
