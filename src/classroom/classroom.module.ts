import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClassroomService } from './classroom.service';
import { ClassroomController } from './classroom.controller';
import { ClassRoom } from './entities/classroom.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ClassRoom])],
  controllers: [ClassroomController],
  providers: [ClassroomService],
})
export class ClassroomModule {}
