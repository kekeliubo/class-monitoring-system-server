import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
  SetMetadata,
} from '@nestjs/common';
import { ClassroomService } from './classroom.service';
import { CreateClassroomDto } from './dto/create-classroom.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';

@Controller('classroom')
@UseGuards(JwtAuthGuard, RolesGuard)
export class ClassroomController {
  constructor(private readonly classroomService: ClassroomService) {}

  @Post()
  @SetMetadata('roles', [2])
  create(@Body() createClassroomDto: CreateClassroomDto) {
    return this.classroomService.create(createClassroomDto);
  }

  @Get()
  @SetMetadata('roles', [1, 2])
  findAll() {
    return this.classroomService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.classroomService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.classroomService.remove(+id);
  }
}
