import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from "@nestjs/typeorm"

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "host",
      port: 3306,
      username: "root",
      password: "admin",
      database: "users",
      entities: [__dirname + '/../**/*.entity.{.js,.ts}'],
      synchronize: true,
      autoLoadEntities: true
    }),
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
