import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

import { User } from '../../users/entities/user.entity';

@Entity('sensor_group')
export class Sensor_Group {
  @PrimaryGeneratedColumn()
  idx: number;

  @Column()
  parent: number;

  @Column()
  group_name: string;

  @Column()
  desc: string | null;

  @Column({ type: 'int', name: 'ugid' })
  ugid: number;

  @Column()
  ugname: string;

  @Column()
  server_version: string | null;
}
