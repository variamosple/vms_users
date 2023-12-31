import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'variamos-db-2024.postgres.database.azure.com',
      port: 5432,
      username: 'adminpg',
      password: 'a=m=8hos.G!-s<*M1G',
      database: 'VariamosDB',
      schema: 'variamos',
      ssl: true,
      synchronize: true,
      entities: [User],
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
