import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClassroomModule } from './classroom/classroom.module';
import { ClassRoom } from './classroom/entities/classroom.entity';
import { Behavior } from './behavior/entities/behavior.entity';
import { BehaviorModule } from './behavior/behavior.module';
import { AuthModule } from './auth/auth.module';
import { User } from './auth/entities/user.entity';
import * as path from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: path.join(__dirname, '.env'),
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysql-container',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'student_behavior',
      entities: [ClassRoom, Behavior, User],
      synchronize: true,
      timezone: '+08:00',
    }),
    ClassroomModule,
    BehaviorModule,
    AuthModule,
  ],
  controllers: [AppController],
  // 注册为全局守卫
  providers: [AppService],
})
export class AppModule {}
