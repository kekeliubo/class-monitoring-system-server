import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Behavior } from './entities/behavior.entity';
import { CreateBehaviorDto } from './dto/create-behavior.dto';
import { UpdateBehaviorDto } from './dto/update-behavior.dto';

@Injectable()
export class BehaviorService {
  constructor(
    @InjectRepository(Behavior)
    private readonly behaviorRepository: Repository<Behavior>,
  ) {}

  // 创建学生行为数据
  async create(createBehaviorDto: CreateBehaviorDto): Promise<Behavior> {
    const behavior = this.behaviorRepository.create(createBehaviorDto);
    return this.behaviorRepository.save(behavior);
  }

  // 根据教室编号查询最新数据
  async findLatestByClassroomId(classroomId: string): Promise<Behavior> {
    const behavior = await this.behaviorRepository.findOne({
      where: { classroomId },
      order: { createdAt: 'DESC' }, // 按创建时间降序排列
    });
    if (!behavior) {
      throw new NotFoundException(
        `No data found for classroom ID ${classroomId}`,
      );
    }
    return behavior;
  }

  // 更新学生行为数据
  async update(
    id: number,
    updateBehaviorDto: UpdateBehaviorDto,
  ): Promise<Behavior> {
    const behavior = await this.behaviorRepository.preload({
      id,
      ...updateBehaviorDto,
    });
    if (!behavior) {
      throw new NotFoundException(` behavior with ID ${id} not found`);
    }
    return this.behaviorRepository.save(behavior);
  }

  // 删除学生行为数据
  async delete(id: number): Promise<void> {
    await this.behaviorRepository.delete(id);
  }
}
