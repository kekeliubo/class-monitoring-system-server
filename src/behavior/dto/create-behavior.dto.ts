import { IsInt, IsString, Min, IsNotEmpty } from 'class-validator';

export class CreateBehaviorDto {
  @IsString()
  @IsNotEmpty()
  classroomId: string; // 教室编号

  @IsInt()
  @Min(0)
  writing: number;

  @IsInt()
  @Min(0)
  reading: number;

  @IsInt()
  @Min(0)
  listening: number;

  @IsInt()
  @Min(0)
  turning: number;

  @IsInt()
  @Min(0)
  raisingHand: number;

  @IsInt()
  @Min(0)
  standing: number;

  @IsInt()
  @Min(0)
  discussing: number;

  @IsInt()
  @Min(0)
  guiding: number;

  @IsInt()
  @Min(0)
  total: number;
}