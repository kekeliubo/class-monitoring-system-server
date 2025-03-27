import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('classroom') // 表名
export class ClassRoom {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'float' })
  temperature: number; // 温度

  @Column({ type: 'float' })
  humidity: number; // 湿度

  @Column({ type: 'float' })
  noiseLevel: number; // 噪声

  @Column({ type: 'tinyint', default: 1 })
  equipmentStatus: number; // 教室设备运行状态 (0: 异常, 1: 正常)

  @Column({ type: 'tinyint', default: 0 })
  airQuality: number; // 教室空气质量 (0: 优, 1: 良, 2: 差)

  @Column({ type: 'tinyint', default: 0 })
  status: number; // 教室状态 (0: 空闲, 1: 上课)
}