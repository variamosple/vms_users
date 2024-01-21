import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host:
          configService.get('DATABASE_HOST') ||
          'variamos-db-2024.postgres.database.azure.com',
        port: configService.get('DATABASE_PORT') || 5432,
        username: configService.get('DATABASE_USERNAME') || 'adminpg',
        password:
          configService.get('DATABASE_PASSWORD') || 'a=m=8hos.G!-s<*M1G',
        database: configService.get('DATABASE_NAME') || 'VariamosDB',
        schema: configService.get('DATABASE_SCHEMA') || 'variamos',
        ssl: true,
        synchronize: true,
        entities: [User],
      }),
      inject: [ConfigService],
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
