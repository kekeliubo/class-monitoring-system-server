import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  ParseIntPipe,
  Put,
  Delete,
  UseGuards,
  SetMetadata,
} from '@nestjs/common';
import { BehaviorService } from './behavior.service';
import { CreateBehaviorDto } from './dto/create-behavior.dto';
import { UpdateBehaviorDto } from './dto/update-behavior.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { ApiKeyGuard } from '../auth/guards/api-key.guard';

@Controller('behavior')
export class BehaviorController {
  constructor(private readonly behaviorService: BehaviorService) {}

  // 创建学生行为数据 - 使用 API Key 认证
  @Post()
  @UseGuards(ApiKeyGuard)
  async create(@Body() createBehaviorDto: CreateBehaviorDto) {
    return this.behaviorService.create(createBehaviorDto);
  }

  // 根据教室编号查询最新数据
  @Get('classroom/:classroomId')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @SetMetadata('roles', [1, 2]) // 允许所有用户查看
  async findLatestByClassroomId(@Param('classroomId') classroomId: string) {
    return this.behaviorService.findLatestByClassroomId(classroomId);
  }

  // 更新学生行为数据
  @Put(':id')
  @SetMetadata('roles', [2]) // 只允许管理员更新
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateBehaviorDto: UpdateBehaviorDto,
  ) {
    return this.behaviorService.update(id, updateBehaviorDto);
  }

  // 删除学生行为数据
  @Delete(':id')
  @SetMetadata('roles', [2]) // 只允许管理员删除
  async delete(@Param('id', ParseIntPipe) id: number) {
    return this.behaviorService.delete(id);
  }
}
