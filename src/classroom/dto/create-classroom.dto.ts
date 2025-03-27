import { IsNumber, IsNotEmpty, IsIn } from 'class-validator';

export class CreateClassroomDto {
  @IsNumber()
  @IsNotEmpty()
  temperature: number; // 温度

  @IsNumber()
  @IsNotEmpty()
  humidity: number; // 湿度

  @IsNumber()
  @IsNotEmpty()
  noiseLevel: number; // 噪声

  @IsNumber()
  @IsIn([0, 1])
  equipmentStatus: number; // 教室设备运行状态 (0: 异常, 1: 正常)

  @IsNumber()
  @IsIn([0, 1, 2])
  airQuality: number; // 教室空气质量 (0: 优, 1: 良, 2: 差)

  @IsNumber()
  @IsIn([0, 1])
  status: number; // 教室状态 (0: 空闲, 1: 上课)
}
