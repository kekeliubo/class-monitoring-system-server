import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('student_behavior') // 表名
export class Behavior {
  @PrimaryGeneratedColumn()
  id: number; // 主键，自增

  @Column({ type: 'varchar', length: 50, default: '' })
  classroomId: string; // 教室编号

  @Column({ type: 'int', default: 0 })
  writing: number; // 书写人数

  @Column({ type: 'int', default: 0 })
  reading: number; // 阅读人数

  @Column({ type: 'int', default: 0 })
  listening: number; // 倾听人数

  @Column({ type: 'int', default: 0 })
  turning: number; // 转身人数

  @Column({ type: 'int', default: 0 })
  raisingHand: number; // 举手人数

  @Column({ type: 'int', default: 0 })
  standing: number; // 站立人数

  @Column({ type: 'int', default: 0 })
  discussing: number; // 讨论人数

  @Column({ type: 'int', default: 0 })
  guiding: number; // 引导人数

  @Column({ type: 'int', default: 0 })
  total: number; // 总人数

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date; // 记录创建时间
}
