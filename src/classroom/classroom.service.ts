import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ClassRoom } from './entities/classroom.entity';
import { CreateClassroomDto } from './dto/create-classroom.dto';

@Injectable()
export class ClassroomService {
  constructor(
    @InjectRepository(ClassRoom)
    private readonly classRoomRepository: Repository<ClassRoom>,
  ) {}

  create(createClassroomDto: CreateClassroomDto) {
    const classroom = this.classRoomRepository.create(createClassroomDto);
    return this.classRoomRepository.save(classroom);
  }

  findAll() {
    return this.classRoomRepository.find();
  }

  findOne(id: number) {
    return this.classRoomRepository.findOne({ where: { id } });
  }

  remove(id: number) {
    return this.classRoomRepository.delete(id);
  }
}
