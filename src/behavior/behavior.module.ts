import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BehaviorService } from './behavior.service';
import { BehaviorController } from './behavior.controller';
import { Behavior } from './entities/behavior.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Behavior]), // 注册 Behavior 实体
  ],
  controllers: [BehaviorController],
  providers: [BehaviorService],
})
export class BehaviorModule {}
