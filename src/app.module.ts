import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule } from './clients/clients.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { Client } from './clients/entities/client.entity';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [ClientsModule, 
    UsersModule,
    ConfigModule.forRoot({
      envFilePath: 'env/.env', // Ruta a la carpeta env
      isGlobal: true,}),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '10018913355',
      database: 'Culbd2',
      entities: [
        User,
        Client
      ],
      synchronize: true,
    }),
    AuthModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
